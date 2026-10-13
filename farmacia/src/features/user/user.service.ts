import AuthClient from "../../integrations/authentication/client";
import { UserRepository } from "./user.repository";
import { CreateUserInput, LoginUserInput } from "./user.schema";
import { APIResponse } from "../../shared/response/response.schema";
import { failure, success } from "../../shared/response/response.helper";
import { UserModel } from "../../../prisma/generated/models";
import { UserRole } from "../../../prisma/generated/enums";
import JsonWebToken from "../../shared/jwt/jwt.service";
import { ErrorCode } from "../../shared/http/http.types";
import { safeDatabaseOperation } from "../../shared/wrappers/wrapper.try-catch.db";

export class UserService {
    constructor(
        private auth: AuthClient,
        private repository: UserRepository,
        private jwt: JsonWebToken
    ) {
        this.auth = auth;
        this.repository = repository;
        this.jwt = jwt;
    }

    async register(dto: CreateUserInput): Promise<APIResponse<UserModel>> {
        return this.repository.insertUser(dto);
    }

    async delete(userId: number) {
        return this.repository.deleteById(userId);
    }
    async login(dto: LoginUserInput) {
        const authData = {
            email: dto.email,
            password: dto.password,
            remember: dto.remember
        };

        const result = await this.auth.login(authData);

        if (!result.success) return result;

        return success(result.data);
    }

    async getUserByToken(token: string) {
        const authIdResult = await this.jwt.getIdByToken(token);
        if (!authIdResult.success) return authIdResult;

        const userIdResult = await this.repository.getUserByAuthId(authIdResult.data);

        if (!userIdResult.success) return userIdResult;
        if (userIdResult.data === null) return failure(
            ErrorCode.NOT_FOUND,
            "Can't find user"
        );

        return success(userIdResult.data);
    }
    async getRoleById() {
        
    }
    async getMe(token: string) {
        const userIdResult = await this.jwt.getIdByToken(token);
        if (!userIdResult.success) return userIdResult;
        const userId = userIdResult.data;
        const userDataResult = await this.repository.getUserByAuthId(userId);
        if (!userDataResult.success) return userDataResult;
        
        return success(userDataResult.data);
    }
    async getRecordIdByAuthId(authId: number) {
        const userIdResult = await this.repository.getUserIdByAuthId(authId);
        if (!userIdResult.success) return userIdResult;
        if (userIdResult.data === null) return failure(
            ErrorCode.NOT_FOUND,
            "User id not found"
        )

        const recordIdResult = await this.repository.getRecordIdByUserId(userIdResult.data);
        if (!recordIdResult.success) return recordIdResult;
        if (recordIdResult.data === null) return failure(
            ErrorCode.NOT_FOUND,
            "Medical record not found"
        );
        
        return success(recordIdResult.data);
    }
    async getRecordIdByUserId(userId: number) {
        const result = await this.repository.getRecordIdByUserId(userId);
        if (!result.success) return result;
        if (!result.data) return failure(
            ErrorCode.NOT_FOUND,
            "Medical record not found"
        )
        return success(result.data);
    }
}