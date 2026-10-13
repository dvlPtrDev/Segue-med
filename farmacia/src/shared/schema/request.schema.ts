import { z } from "zod";


const allowedMimetypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp"
] as const;

export const paramIdSchema = z.object({
    id: z.coerce.number().int().positive()
}) 

export const fileSchema = z.object({
    filename: z.string().min(1),
    mimetype: z.enum(allowedMimetypes),
    buffer: z.instanceof(Buffer)
}).optional();

export type IdParamInput = z.infer<
    typeof paramIdSchema
>;
export type FileInput = z.infer<typeof fileSchema>;
