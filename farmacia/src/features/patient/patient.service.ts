import { UserRole } from "../../../prisma/generated/enums";
import AuthClient from "../../integrations/authentication/client";
import { ErrorCode } from "../../shared/http/http.types";
import { failure, success } from "../../shared/response/response.helper";
import { APIResponse } from "../../shared/response/response.schema";
import { UserService } from "../user/user.service";
import { PatientRepository } from "./patient.repository";
import { CreatePatientInput, CreatePatientResponse, LoginPatientInput } from "./patient.schema";

export class PatientService {
    constructor(
        private auth: AuthClient,
        private userService: UserService,
        private repository: PatientRepository
    ) {
        this.auth = auth;
        this.userService = userService;
        this.repository = repository;
    }

    async register(dto: CreatePatientInput): Promise<APIResponse<CreatePatientResponse>> {
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
            user_role: UserRole.PATIENT,
            ...dto,
        })

        if (!createUserResult.success) {
            const rollbackResult = await this.auth.deleteById(userAuthId);
            if (!rollbackResult.success) return rollbackResult; 

            return createUserResult;
        } 
        const userId = createUserResult.data.id;
        const patientResult = await this.repository.insertPatient(dto, userId);

        if (!patientResult.success) {
            const authRollBackResult = await this.auth.deleteById(userAuthId);
            if (!authRollBackResult.success) return authRollBackResult;

            const userRollbackResult = await this.userService.delete(userId);

            if (!userRollbackResult.success) return userRollbackResult;
            
            return patientResult
        }
        
        return patientResult;
    }
    async login(dto: LoginPatientInput) {
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
        
        const patientIdResult = await this.repository.getPatientIdByUserId(userIdResult.data.id)
        console.log(userIdResult.data);
        
        if (!patientIdResult.success) return patientIdResult;
        if (!patientIdResult.data) return failure(
            ErrorCode.NOT_FOUND, 
            "Patient not found"
        );

        const userDataResult = await this.repository.getPatientByUserId(patientIdResult.data.id);
        if (!userDataResult.success) return userDataResult;
        
        return success(userDataResult.data);
    }
}