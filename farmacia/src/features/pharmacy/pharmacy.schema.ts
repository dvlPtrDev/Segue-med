import z from "zod";

const pharmacyFields = {
    name: z
        .string()
        .min(3)
        .max(100)
        .trim()
        .toLowerCase(),

    cnpj: z
        .string()
        .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "Invalid CNPJ"),

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
export const loginPharmacySchema = z.object({
    ...credentials,
    remember: z.boolean().default(false)
});

export const createPharmacySchema = z.object({
    ...pharmacyFields,
    ...credentials,
});

export type CreatePharmacyResponse = {
    id: number;
}

export type CreatePharmacyInput = z.infer<typeof createPharmacySchema>;
export type LoginPharmacyInput = z.infer<typeof loginPharmacySchema>;