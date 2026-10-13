import { FastifyReply, FastifyRequest } from "fastify";
import { sendReply } from "../../shared/response/response.helper";
import { SuccessCode } from "../../shared/http/http.types";
import { UserService } from "./user.service";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { LoginUserInput } from "./user.schema";

export class UserController {
    constructor(
        private service: UserService
    ) {
        this.service = service;
    }
    async getMe(req: FastifyRequest<{ Headers: AccessTokenHeader }>, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.getMe(req.auth.token);
        if (!result.success) {
            return sendReply(rep)(result)
        }   
        return sendReply(rep)(result, SuccessCode.CREATED)
    }
    async login(
        req: FastifyRequest<{ Body: LoginUserInput }>,
        rep: FastifyReply
    ): Promise<FastifyReply> {
        const result = await this.service.login(req.body);

        if (!result.success) {
            return sendReply(rep)(result);
        }

        return sendReply(rep)(result, SuccessCode.OK);
    }
}