
import {
    FastifyReply,
    FastifyRequest,
    HookHandlerDoneFunction
} from "fastify";

import { loginUserSchema } from "./user.schema";
import { handleZodResult } from "../../shared/helper/helper.zod";
import { sendReply } from "../../shared/response/response.helper";
import { jwt, userService } from "../../factory";

export function validateUserLoginPayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const result = handleZodResult(
        loginUserSchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}

export async function resolveAuthenticatedUser(
    req: FastifyRequest,
    rep: FastifyReply,
): Promise<void> {
    const userIdResult = await userService.getUserByToken(
        req.auth.token
    );

    if (!userIdResult.success) {
        sendReply(rep)(userIdResult);
        return;
    }

    
    req.user_data = userIdResult.data;
}