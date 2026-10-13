import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { handleZodResult } from "../../shared/helper/helper.zod";
import { sendReply } from "../../shared/response/response.helper";
import { createExamSchema } from "./exams.schema";


export function validateExamCreatePayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {
    const data = {
        ...req.fields,
        ...(req.uploaded ? { file: req.uploaded } : {})
    };

    const result = handleZodResult(
        createExamSchema.safeParse(data)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.body = result.data;
    done();
}
