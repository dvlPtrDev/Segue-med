import z from "zod";
import { fileSchema } from "../../shared/schema/request.schema";

const examFields = {
    name: z
        .string()
        .trim()
        .toLowerCase(),
    exam_date: z.iso.date(),
    results: z.string().optional(),
    notes: z.string().optional(),
};

export const createExamSchema = z.object({
    ...examFields,
    file: fileSchema
});


export type CreateExamFieldsInput = z.infer<typeof createExamSchema>;
