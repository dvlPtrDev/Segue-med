import { prisma } from "./config/db.config";
import { ExamController } from "./features/exams/exams.controller";
import { ExamRepository } from "./features/exams/exams.repository";
import { ExamService } from "./features/exams/exams.service";
import { PatientController } from "./features/patient/patient.controller";
import { PatientRepository } from "./features/patient/patient.repository";
import { PatientService } from "./features/patient/patient.service";
import { PharmacyController } from "./features/pharmacy/pharmacy.controller";
import { PharmacyRepository } from "./features/pharmacy/pharmacy.repository";
import { PharmacyService } from "./features/pharmacy/pharmacy.service";
import { UserController } from "./features/user/user.controller";
import { UserRepository } from "./features/user/user.repository";
import { UserService } from "./features/user/user.service";
import AuthClient from "./integrations/authentication/client";
import FileHelper from "./shared/helper/helper.file";
import JsonWebToken from "./shared/jwt/jwt.service";

export const jwt = new JsonWebToken();
export const fileHelper = new FileHelper();

const authClient = new AuthClient()

const userRepository = new UserRepository(prisma)
const patientRespository = new PatientRepository(prisma);
const examRepository = new ExamRepository(prisma); 
const pharmacyRepository = new PharmacyRepository(prisma); 

export const userService = new UserService(authClient, userRepository, jwt);

const patientService = new PatientService(authClient, userService, patientRespository)
const pharmacyService = new PharmacyService(authClient, userService, pharmacyRepository)
const examService = new ExamService(examRepository, userService, jwt);

export const userController = new UserController(userService);
export const patientController = new PatientController(patientService);
export const pharmacyController = new PharmacyController(pharmacyService);
export const examController = new ExamController(examService)



