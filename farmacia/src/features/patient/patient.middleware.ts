import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { createPatientSchema, loginPatientSchema } from "./patient.schema";
import { handleZodResult } from "../../shared/helper/helper.zod";
import { sendReply } from "../../shared/response/response.helper";


export function validatePatientRegisterPayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {

    const result = handleZodResult(
        createPatientSchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}


export function validatePatientLoginPayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const result = handleZodResult(
        loginPatientSchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}