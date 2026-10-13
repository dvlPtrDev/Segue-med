import z from "zod";

export const rawAuthorizationHeaderSchema = z.object({
    authorization: z.string().regex(/^Bearer .+/)
})

export const jwtSchema = z.jwt()

export type AccessTokenHeader = z.infer<typeof rawAuthorizationHeaderSchema>