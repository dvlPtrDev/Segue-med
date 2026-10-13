type AuthPayload = {
    email: string,
    password: string,
    remember?: boolean
}
type LoginResponse = {
    access_token: {
        token: string,
        token_type: string,
        expires_in: string
    },
    refresh_token: string
}
