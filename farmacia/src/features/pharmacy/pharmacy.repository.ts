import { PrismaClient } from "../../../prisma/generated/client";
import { APIResponse } from "../../shared/response/response.schema";
import { safeDatabaseOperation } from "../../shared/wrappers/wrapper.try-catch.db";
import { CreatePharmacyInput, CreatePharmacyResponse } from "./pharmacy.schema";


export class PharmacyRepository {
    constructor(
        private orm: PrismaClient
    ) {
        this.orm = orm
    }
    async insertPharmacy(
        dto: CreatePharmacyInput,
        userId: number
    ): Promise<APIResponse<CreatePharmacyResponse>> {
        return safeDatabaseOperation(() =>
            this.orm.pharmacy.create({
                data: {
                    user_id: userId,
                    name: dto.name,
                    cnpj: dto.cnpj,
                    phone: dto.phone,
                }
            })
        );
    }
    
    async getPharmacyByUserId(userId: number) {
        return safeDatabaseOperation(() => this.orm.pharmacy.findUnique({
            where: {
                id: userId
            },
            select: {
                name: true,
                phone: true,
                id: true
            }
        }))
    }
    async getPharmacyIdByUserId(pharmacyId: number) {
        return safeDatabaseOperation(() => this.orm.pharmacy.findUnique({
            where: {
                id: pharmacyId
            },
            select: {
                id: true,
            }
        }))
    }
}