import { UserModel } from "../../../prisma/generated/models"
import { env } from "../../config/env.config"
import { errorStatusMapper } from "../../shared/mappers/error.mapper"
import { failure } from "../../shared/response/response.helper"
import { APIResponse } from "../../shared/response/response.schema"

export default class AuthClient {
    private secret;
    constructor() {
        this.secret = env.loadVar("API_SECRET");
    }

    async register(payload: AuthPayload): Promise<APIResponse<{user_id: number, email: string}>> {
        const resp = await fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(payload)
        })
        return resp.json()
    }
    async login(payload: AuthPayload): Promise<APIResponse<LoginResponse>> {
        console.log(payload);
        const resp = await fetch("http://localhost:5001/sessions", {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(payload)
        })
        return resp.json()
    }
    async deleteById(userId: number): Promise<APIResponse<null>> {
        const resp = await fetch(`http://localhost:5001/users/${userId}`, {
            method: "DELETE",
            headers: {
                "x-internal-secret": this.secret
            }
        })

        if (!resp.ok) {
            return resp.json()
        }

        return {
            success: true,
            data: null
        }
    }
}