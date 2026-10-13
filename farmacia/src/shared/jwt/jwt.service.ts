import { JWTPayload, JWTVerifyResult, SignJWT, jwtVerify } from "jose";
import { env } from "../../config/env.config";
import { ErrorCode } from "../http/http.types";
import { APIResponse } from "../response/response.schema";
import { failure, success } from "../response/response.helper";

export default class JsonWebToken {
    private secret: Uint8Array;
    constructor() {
        this.secret = new TextEncoder().encode(env.loadVar("JWT_SECRET"))
    }
    
    async verifyToken(token: string): Promise<APIResponse<JWTVerifyResult<JWTPayload>>> {
        try {
            return success(await jwtVerify(token, this.secret))
        } catch (err) {
            console.log(err);
            return failure(
                ErrorCode.UNAUTHORIZED,
                "Invalid or expired token"
            )
        }
    }
    async getIdByToken(token: string): Promise<APIResponse<number>> {
        const result = await this.verifyToken(token)
        if (!result.success) {
            return result
        }

        const userId = Number(result.data.payload.sub)
        if (Number.isNaN(userId)) {
            return failure(
                ErrorCode.VALIDATION_ERROR,
                "Invalid Token Payload"
            )
        }
        return success(userId)
    }
}