import { PrismaClient } from "../../../prisma/generated/client";
import { APIResponse } from "../../shared/response/response.schema";
import { safeDatabaseOperation } from "../../shared/wrappers/wrapper.try-catch.db";
import { CreatePatientInput, CreatePatientResponse } from "./patient.schema";


export class PatientRepository {
    constructor(
        private orm: PrismaClient
    ) {
        this.orm = orm
    }
    async insertPatient(dto: CreatePatientInput, userId: number): Promise<APIResponse<CreatePatientResponse>> {
        return safeDatabaseOperation(() => this.orm.patient.create({
            data: {
                user_id: userId,
                name: dto.name,
                birth_date: new Date(dto.birth_date),
                cpf: dto.cpf,
                phone: dto.phone,
                record: {
                    create: {}
                }
            }
        }))
    }
    
    async getPatientByUserId(userId: number) {
        console.log(userId)
        return safeDatabaseOperation(() => this.orm.patient.findUnique({
            where: {
                user_id: userId
            },
            omit: {
                user_id: true,
                address_id: true
            }
        }))
    }
    async getPatientIdByUserId(patientid: number) {
        return safeDatabaseOperation(() => this.orm.patient.findUnique({
            where: {
                id: patientid
            },
            omit: {
                user_id: true,
            }
        }))
    }
}