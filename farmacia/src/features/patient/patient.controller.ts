import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePatientInput, LoginPatientInput } from "./patient.schema";
import { PatientService } from "./patient.service";
import { sendReply } from "../../shared/response/response.helper";
import { SuccessCode } from "../../shared/http/http.types";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";

export class PatientController {
    constructor(
        private service: PatientService
    ) {
    }
    async register(req: FastifyRequest<{ Body: CreatePatientInput }>, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.register(req.body)
        if (!result.success) {
            return sendReply(rep)(result)
        }   
        return sendReply(rep)(result, SuccessCode.CREATED)
    }

    async login(req: FastifyRequest<{ Body: LoginPatientInput }>, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.login(req.body)
        if (!result.success) {
            return sendReply(rep)(result)
        }
        return sendReply(rep)(result, SuccessCode.OK)
    }
    async getSelf(req: FastifyRequest, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.getSelf(req.auth.token);
        if (!result.success) {
            return sendReply(rep)(result)
        }
        return sendReply(rep)(result, SuccessCode.OK)
    }
    
}