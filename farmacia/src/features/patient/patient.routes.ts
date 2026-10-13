import { FastifyInstance } from "fastify";
import { validatePatientRegisterPayload } from "./patient.middleware";
import { CreatePatientInput } from "./patient.schema";
import { patientController } from "../../factory";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { validateAuthorizationHeader } from "../../shared/http/http.middleware";

export function patientRoutes(fst: FastifyInstance): void {
    // create account
    fst.post< {Body: CreatePatientInput } >("/patient", 
            { preHandler: validatePatientRegisterPayload },
            patientController.register.bind(patientController)
    )
    fst.get<{ Headers: AccessTokenHeader }>("/patient/me", 
        { preHandler: validateAuthorizationHeader },
        patientController.getSelf.bind(patientController)
    )   
}