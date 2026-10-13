import { FastifyReply, FastifyRequest } from "fastify";
import { ExamService } from "./exams.service";
import { sendReply } from "../../shared/response/response.helper";
import { SuccessCode } from "../../shared/http/http.types";
import { CreateExamFieldsInput } from "./exams.schema";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { IdParamInput } from "../../shared/schema/request.schema";

export class ExamController {
    constructor(
        private service: ExamService
    ) {
    }
    async create(req: FastifyRequest<{ Body: CreateExamFieldsInput }>, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.create(req.body, req.auth.token);
        if (!result.success) {
            return sendReply(rep)(result)
        }   
        return sendReply(rep)(result, SuccessCode.CREATED)
    }
    async getAllByAuthId(req: FastifyRequest<{ Headers: AccessTokenHeader }>, rep: FastifyReply) {
        const result = await this.service.getAllByAuthId(req.auth.token);
        if (!result.success) return sendReply(rep)(result);

        sendReply(rep)(result);
    }
    async getCountByUserId(req: FastifyRequest<{ Headers: AccessTokenHeader }>, rep: FastifyReply) {
        const result = await this.service.getCountByAuthId(req.auth.token);
        if (!result.success) return sendReply(rep)(result);

        sendReply(rep)(result);
    }
}