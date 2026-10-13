import { UserRole } from "../../../prisma/generated/enums";
import AuthClient from "../../integrations/authentication/client";
import { ErrorCode } from "../../shared/http/http.types";
import { failure, success } from "../../shared/response/response.helper";
import { APIResponse } from "../../shared/response/response.schema";
import { UserService } from "../user/user.service";
import { PharmacyRepository } from "./pharmacy.repository";
import { CreatePharmacyInput, CreatePharmacyResponse, LoginPharmacyInput } from "./pharmacy.schema";

export class PharmacyService {
    constructor(
        private auth: AuthClient,
        private userService: UserService,
        private repository: PharmacyRepository
    ) {
        this.auth = auth;
        this.userService = userService;
        this.repository = repository;
    }

    async register(dto: CreatePharmacyInput): Promise<APIResponse<CreatePharmacyResponse>> {
        console.log(dto);
        const authData = {
            email: dto.email,
            password: dto.password
        }
        const authResult = await this.auth.register(authData);  
        if (!authResult.success) return authResult;

        const userAuthId = authResult.data.user_id;
        const createUserResult = await this.userService.register({
            auth_ref: userAuthId,
            user_role: UserRole.PHARMACY,
            ...dto,
        })

        if (!createUserResult.success) {
            const rollbackResult = await this.auth.deleteById(userAuthId);
            if (!rollbackResult.success) return rollbackResult; 

            return createUserResult;
        } 

        const userId = createUserResult.data.id;
        const pharmacyResult = await this.repository.insertPharmacy(dto, userId);
        if (!pharmacyResult.success) {
            const authRollBackResult = await this.auth.deleteById(userAuthId);

            if (!authRollBackResult.success) return authRollBackResult;

            const userRollbackResult = await this.userService.delete(userId);

            if (!userRollbackResult.success) return userRollbackResult;
            
            return pharmacyResult
        }
        
        return pharmacyResult;
    }
    async login(dto: LoginPharmacyInput) {
        const authData = {
            email: dto.email,
            password: dto.password, 
            remember: dto.remember
        }
        return this.auth.login(authData);
        
    }
    async getSelf(token: string) {
        const userIdResult = await this.userService.getUserByToken(token);
        if (!userIdResult.success) return userIdResult;
        
        const pharmacyIdResult = await this.repository.getPharmacyIdByUserId(userIdResult.data.id)
        
        if (!pharmacyIdResult.success) return pharmacyIdResult;
        if (!pharmacyIdResult.data) return failure(
            ErrorCode.NOT_FOUND, 
            "Pharmacy not found"
        );

        const userDataResult = await this.repository.getPharmacyByUserId(pharmacyIdResult.data.id);
        if (!userDataResult.success) return userDataResult;
        
        return success(userDataResult.data);
    }
}