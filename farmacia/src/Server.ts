import Fastify, { FastifyError, FastifyInstance } from "fastify";
import { failure, sendReply } from "./shared/response/response.helper";
import { fstErrorMapper } from "./shared/mappers/fst.mapper";
import { patientRoutes } from "./features/patient/patient.routes";
import { userRoutes } from "./features/user/user.routes";
import { examRoutes } from "./features/exams/exams.routes";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import { pharmacyRoutes } from "./features/pharmacy/pharmacy.routes";

type ServerOptions = {
    debug?: boolean;
    port?: number;
    host?: string;
}
export default class Server {
    private f: FastifyInstance; 
    private opt: Required<ServerOptions>;
    constructor(opt: ServerOptions = {}) {
        this.opt = {
            debug: false,
            port: 4444,
            host: "localhost",
            ...opt
        };
        this.f = Fastify({ logger: this.opt.debug });
        
    }
    private async loadFeatures() {
        await this.f.register(cors, {
            origin: "http://127.0.0.1:5500"
        })
        await this.f.register(multipart, {
            limits: {
                fileSize: 10 * 1024 ** 2
            }
        })
    }
    private loadRoutes() {
        this.f.register(patientRoutes);
        this.f.register(userRoutes);
        this.f.register(examRoutes);
        this.f.register(pharmacyRoutes);
    }
    private modifyErrors() {
        this.f.setErrorHandler((error: FastifyError, req, rep) => {
        const send = sendReply(rep);
        const errObj = failure(
            fstErrorMapper(error),
            error.message
        );

        return send(errObj);
    });
    }
    async startServer() {
        await this.loadFeatures();
        this.loadRoutes()   
        this.modifyErrors()
        await this.f.listen({
            host: this.opt.host,
            port: this.opt.port
        })
        console.clear()
        console.log(`\x1b[34mServer listening at: http://${this.opt.host}:${this.opt.port}\x1b[0m\n\x1b[32mDev mode: ${this.opt.debug}\x1b[0m`)
    }
}
