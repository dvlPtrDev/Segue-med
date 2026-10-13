import { FastifyInstance } from "fastify";
import { userController } from "../../factory";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { validateAuthorizationHeader } from "../../shared/http/http.middleware";
import { LoginUserInput } from "./user.schema";
import { validatePatientLoginPayload } from "../patient/patient.middleware";

export function userRoutes(fst: FastifyInstance): void {
    fst.post<{ Body: LoginUserInput }>(
        "/sessions",
        { preHandler: validatePatientLoginPayload },
        userController.login.bind(userController)
    );

    // get self data
    fst.get<{ Headers: AccessTokenHeader }>("/users/me", 
            { preHandler: validateAuthorizationHeader },
            userController.getMe.bind(userController)
    )   
}