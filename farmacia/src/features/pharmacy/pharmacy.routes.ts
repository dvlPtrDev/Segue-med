import { FastifyInstance } from "fastify";
import { CreatePharmacyInput } from "./pharmacy.schema";
import { pharmacyController } from "../../factory";
import { LoginUserInput } from "../user/user.schema";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { validateAuthorizationHeader } from "../../shared/http/http.middleware";
import { validatePharmacyLoginPayload, validatePharmacyRegisterPayload } from "./pharmacy.middleware";

export function pharmacyRoutes(fst: FastifyInstance): void {
    // create account
    fst.post< {Body: CreatePharmacyInput } >("/pharmacy", 
            { preHandler: validatePharmacyRegisterPayload },
            pharmacyController.register.bind(pharmacyController)
    )
    fst.get<{ Headers: AccessTokenHeader }>("/patients/me", 
        { preHandler: validateAuthorizationHeader },
        pharmacyController.getSelf.bind(pharmacyController)
    )   
}