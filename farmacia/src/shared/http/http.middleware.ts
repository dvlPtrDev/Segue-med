import {
    FastifyReply,
    FastifyRequest,
    HookHandlerDoneFunction
} from "fastify";
import { sendReply } from "../response/response.helper";
import { handleZodResult } from "../helper/helper.zod";
import { rawAuthorizationHeaderSchema } from "../jwt/jwt.schema";
import { UserRole } from "../../../prisma/generated/enums";


export function validateAuthorizationHeader(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const result = handleZodResult(
        rawAuthorizationHeaderSchema.safeParse(req.headers)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.auth = {
        token: result.data.authorization.slice(7)
    };
    done();
}

export function requireRole(...roles: UserRole[]) {
    return (
        req: FastifyRequest,
        rep: FastifyReply,
        done: HookHandlerDoneFunction
    ): void => {
        if (!roles.includes(req.user_data.user_role)) {
            sendReply(rep)(
                failure(
                    ErrorCode.FORBIDDEN,
                    "Insufficient permissions"
                )
            );
            return;
        }

        done();
    };
}