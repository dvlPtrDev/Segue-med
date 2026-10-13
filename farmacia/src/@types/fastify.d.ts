import "fastify";

declare module "fastify" {
    interface FastifyRequest {
        auth: {
            token: string,
            role: string
        }
        fields: Record<string, string>
        user_data: {
            id: number,
            user_role: string
        }
        uploaded?: {
            filename: string,
            mimetype: string,
            buffer: Buffer
        }
    }
}