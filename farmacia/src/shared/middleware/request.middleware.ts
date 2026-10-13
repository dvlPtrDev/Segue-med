import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { handleZodResult } from "../helper/helper.zod";
import { fileSchema, paramIdSchema } from "../schema/request.schema";
import { sendReply } from "../response/response.helper";

export async function requestPartsParser(
    req: FastifyRequest,
    rep: FastifyReply
): Promise<void> {

    req.fields = {};
    req.uploaded = undefined;

    for await (const part of req.parts()) {

        if (part.type === "field") {
            req.fields[part.fieldname] = String(part.value);
            continue;
        }

        req.uploaded = {
            filename: part.filename,
            mimetype: part.mimetype,
            buffer: await part.toBuffer()
        };
    }
}

export function validateIdParam(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
) {
    const result = handleZodResult(
        paramIdSchema.safeParse(req.params)
    );
    if (!result.success) {
        sendReply(rep)(result);
        return;        
    }
    req.params = {
        id: result.data.id
    };
    done();
}

export function validateFilePayload(
    req: FastifyRequest,
    rep: FastifyReply,
    done: HookHandlerDoneFunction
): void {

    const result = handleZodResult(
        fileSchema.safeParse(req.fields)
    );

    if (!result.success) {
        sendReply(rep)(result);
        return;
    }

    req.uploaded = result.data;

    done();
}
