import { PrismaClient } from "../../../prisma/generated/client";
import { APIResponse } from "../../shared/response/response.schema";
import { safeDatabaseOperation } from "../../shared/wrappers/wrapper.try-catch.db";
import { CreateExamFieldsInput } from "./exams.schema";
import { ExamResponse } from "./exams.types";


export class ExamRepository {
    constructor(
        private orm: PrismaClient
    ) {
        this.orm = orm
    }
    async insertExam(dto: CreateExamFieldsInput, record_id: number): Promise<APIResponse<ExamResponse>> {
        return safeDatabaseOperation(() => this.orm.exam.create({
            data: {
                record_id: record_id,
                name: dto.name,
                exam_date: new Date(`${dto.exam_date}T00:00:00.000Z`),
                results: dto.results,
                result_image_url: dto.results,
                notes: dto.notes
            },
            omit: {
                record_id: true,
            },
        
        }))
    }
    async getExamsByRecordId(recordId: number): Promise<APIResponse<ExamResponse[]>> {
        return safeDatabaseOperation(() => this.orm.exam.findMany({
            where: {
                record_id: recordId
            },
            omit: {
                record_id: true
            },
            orderBy: {
                exam_date: "desc"
            }
        }))
    }
    async getCountByRecordId(recordId: number): Promise<APIResponse<number>> {
        return safeDatabaseOperation(() => this.orm.exam.count({
            where: {
                record_id: recordId
            },
        }))
    }
}