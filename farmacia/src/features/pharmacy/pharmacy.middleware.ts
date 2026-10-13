import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { createPharmacySchema, loginPharmacySchema } from "./pharmacy.schema";
import { handleZodResult } from "../../shared/helper/helper.zod";
import { sendReply } from "../../shared/response/response.helper";


export function validatePharmacyRegisterPayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {

    const result = handleZodResult(
        createPharmacySchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}


export function validatePharmacyLoginPayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const result = handleZodResult(
        loginPharmacySchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}
export function validateInsertPharmacyAuth(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const result = handleZodResult(
        loginPharmacySchema.safeParse(req.body)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;

    done();
}