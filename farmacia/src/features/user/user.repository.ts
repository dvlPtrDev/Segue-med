import { PrismaClient, UserRole } from "../../../prisma/generated/client";
import { UserModel } from "../../../prisma/generated/models";
import { ErrorCode } from "../../shared/http/http.types";
import { failure, success } from "../../shared/response/response.helper";
import { APIResponse } from "../../shared/response/response.schema";
import { safeDatabaseOperation } from "../../shared/wrappers/wrapper.try-catch.db";
import { CreateUserInput } from "./user.schema";


export class UserRepository {
    constructor(
        private orm: PrismaClient
    ) {
        this.orm = orm
    }
    async insertUser(dto: CreateUserInput): Promise<APIResponse<UserModel>> {
        return safeDatabaseOperation(() => this.orm.user.create({
            data: {
                auth_ref: dto.auth_ref,
                user_role: dto.user_role
            }
        }))
    }
    async deleteById(userId: number) {
        return safeDatabaseOperation(() => this.orm.user.delete({
            where: {
                id: userId
            }
        }))
    }
    async getUserByAuthId(authId: number): Promise<
        APIResponse<{
            id: number;
            user_role: UserRole;
        } | null>
    > {
        return safeDatabaseOperation(() => this.orm.user.findUnique({
            where: {
                auth_ref: authId
            },
            omit: {
                auth_ref: true,
            }
        }))
    }
    async getRecordIdByUserId(userId: number): Promise<APIResponse<number | null> > {
        const result = await safeDatabaseOperation(() => this.orm.user.findUnique({
            where: {
                id: userId
            },
            select: {
                patient: {
                    select: {
                        record: {
                            select: {
                                id: true
                            }
                        }
                    }
                }
            }
        }))
        if (!result.success) return result;

        return success(result.data?.patient?.record?.id ?? null);
    }
    async getUserIdByAuthId(authId: number): Promise<APIResponse<number | null>> {  
        const result = await safeDatabaseOperation(() => this.orm.user.findUnique({
            where: {
                auth_ref: authId
            },
            select: {
                id: true
            }
        }))
        if (!result.success) return result;
        return success(result.data?.id ?? null);
    }
}
