import z from "zod";

const patientFields = {
    name: z
        .string()
        .min(3)
        .max(100)
        .trim()
        .toLowerCase(),

    cpf: z
        .string()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Invalid CPF"),

    birth_date: z.iso.date("Invalid birth date"),

    phone: z
        .string()
        .regex(/^\d{10,11}$/, "Invalid phone number")
        .optional(),
};

const credentials = {
    email: z
        .email("Invalid email")
        .trim()
        .toLowerCase()
        .max(255, "Email too long"),

    password: z
        .string()
        .min(8, "Password too short")
        .max(128, "Password too long")
        .regex(/^[\x20-\x7E]+$/, "Invalid characters"),
};
export const loginPatientSchema = z.object({
    ...credentials,
    remember: z.boolean().default(false)
});

export const createPatientSchema = z.object({
    ...patientFields,
    ...credentials,
});

export type CreatePatientResponse = {
    id: number;
    user_id: number;
}
export type CreatePatientInput = z.infer<typeof createPatientSchema>;
export type LoginPatientInput = z.infer<typeof loginPatientSchema>;