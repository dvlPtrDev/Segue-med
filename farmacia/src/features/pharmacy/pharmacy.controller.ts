import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePharmacyInput, LoginPharmacyInput } from "./pharmacy.schema";
import { PharmacyService } from "./pharmacy.service";
import { sendReply } from "../../shared/response/response.helper";
import { SuccessCode } from "../../shared/http/http.types";

export class PharmacyController {
    constructor(
        private service: PharmacyService
    ) {
    }
    async register(req: FastifyRequest<{ Body: CreatePharmacyInput }>, rep: FastifyReply): Promise<FastifyReply> {
        const result = await this.service.register(req.body);
        if (!result.success) {
            return sendReply(rep)(result)
        }   
        return sendReply(rep)(result, SuccessCode.CREATED)
    }

    async login(req: FastifyRequest<{ Body: LoginPharmacyInput }>, rep: FastifyReply): Promise<FastifyReply> {
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