import path from "node:path";
import JsonWebToken from "../../shared/jwt/jwt.service";
import { success } from "../../shared/response/response.helper";
import { APIResponse } from "../../shared/response/response.schema";
import { UserService } from "../user/user.service";
import { ExamRepository } from "./exams.repository";
import { CreateExamFieldsInput } from "./exams.schema";
import { ExamResponse } from "./exams.types";
import { mkdir, writeFile } from "node:fs";

export class ExamService {
    constructor(
        private repository: ExamRepository,
        private userService: UserService,
        private jwt: JsonWebToken
    ) {
    }

    async create(dto: CreateExamFieldsInput, token: string) {
        const authIdResult = await this.jwt.getIdByToken(token);
        if (!authIdResult.success) return authIdResult;
        const recordIdResult = await this.userService.getRecordIdByAuthId(authIdResult.data);
        if (!recordIdResult.success) return recordIdResult;
        const insertResult = await this.repository.insertExam(dto, recordIdResult.data)
        
        if (!insertResult.success) return insertResult;

        return success(insertResult.data);
    }
    async getAllByAuthId(token: string): Promise<APIResponse<ExamResponse[]>> {
        const userIdResult = await this.jwt.getIdByToken(token);
        if (!userIdResult.success) return userIdResult;

        const recordIdResult = await this.userService.getRecordIdByAuthId(userIdResult.data);
        if (!recordIdResult.success) return recordIdResult;
        
        const result = this.repository.getExamsByRecordId(recordIdResult.data);
        return result;
    }
    async getCountByAuthId(token: string): Promise<APIResponse<number>> {
        const userIdResult = await this.jwt.getIdByToken(token);
        if (!userIdResult.success) return userIdResult;

        const recordIdResult = await this.userService.getRecordIdByAuthId(userIdResult.data);
        if (!recordIdResult.success) return recordIdResult;
        
        return this.repository.getCountByRecordId(recordIdResult.data);
    }
}