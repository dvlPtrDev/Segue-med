import z from "zod";
import { UserRole } from "../../../prisma/generated/client";


export const createUserSchema = z.object({
    auth_ref: z.number().int(),
    user_role: z.enum(UserRole),
});

export const loginUserSchema = z.object({
    email: z
        .email("Invalid email")
        .trim()
        .toLowerCase()
        .max(255),

    password: z
        .string()
        .min(8)
        .max(128),

    remember: z.boolean().default(false),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;