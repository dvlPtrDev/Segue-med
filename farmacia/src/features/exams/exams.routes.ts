import { FastifyInstance } from "fastify";
import { AccessTokenHeader } from "../../shared/jwt/jwt.schema";
import { CreateExamFieldsInput } from "./exams.schema";
import { validateExamCreatePayload } from "./exams.middleware";
import { validateAuthorizationHeader } from "../../shared/http/http.middleware";
import { examController } from "../../factory";
import { requestPartsParser, validateFilePayload } from "../../shared/middleware/request.middleware";

export function examRoutes(fst: FastifyInstance): void {
    // add exam
    fst.post< { Headers: AccessTokenHeader, Body: CreateExamFieldsInput } >("/exams", { 
        preHandler: [ 
            requestPartsParser,
            validateAuthorizationHeader,
            validateExamCreatePayload
        ]
    },
        examController.create.bind(examController)
    )
    // get all exams
    fst.get<{ Headers: AccessTokenHeader }>("/exams", {
        preHandler: [
            validateAuthorizationHeader
        ]
    }, 
        examController.getAllByAuthId.bind(examController)
    )
    fst.get<{ Headers: AccessTokenHeader }>("/exams/count", {
        preHandler: [
            validateAuthorizationHeader
        ]
    }, 
        examController.getCountByUserId.bind(examController)
    )
}