import { FastifyReply, FastifyRequest } from "fastify";
import { failure, sendReply } from "../../shared/response/response.helper";
import { jwt } from "../../factory"
import { ErrorCode } from "../http/http.types";


export async function validateJwtVality(
    req: FastifyRequest,
    rep: FastifyReply,
): Promise<void> {
    if (!req.auth.token) {
        const error = failure(
            ErrorCode.UNAUTHORIZED,
            "Invalid or expired token"
        )
        sendReply(rep)(error);
        return;
    }
    const verifyResult = await jwt.verifyToken(req.auth.token);
    if (!verifyResult.success) {
        sendReply(rep)(verifyResult);
        return;
    }
}

