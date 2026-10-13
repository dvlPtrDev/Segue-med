import { FastifyReply } from "fastify";
import { ErrorCode, SuccessCode } from "../http/http.types";
import { APIResponse } from "./response.schema";
import { errorStatusMapper } from "../mappers/error.mapper";
import { successStatusMapper } from "../mappers/success.mapper";

export function success<T>(data: T): Extract<APIResponse<T>, { success: true }> {
    return {
        success: true,
        data
    }
}
export function failure(code: ErrorCode, message: string): Extract<APIResponse<never>, { success: false }> {
    return {
        success: false,
        error: {
            code,
            message
        }
    }
}

export function sendReply(reply: FastifyReply) {
    return <T>(data: APIResponse<T>, code?: SuccessCode) => {
        if (!data.success) {    
            return reply.code(errorStatusMapper(data.error.code)).send(data)
        }
        
        const status = successStatusMapper(code ?? SuccessCode.OK)
        if (status === 204) {
            return reply.code(status).send()
        }
        return reply.code(status).send(data)
    }
}
