"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
const config_1 = require("./config");
const middlewares_1 = require("./middlewares");
const utils_1 = require("./utils");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Review_1 = require("./api/Review");
const Organizations_1 = require("./api/Organizations");
class App {
    constructor() {
        this.express = express_1.default();
        this.basePath = config_1.BASE_PATH || '';
        this.boot();
    }
    boot() {
        this.initializeDb();
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();
    }
    mountRoutes() {
        this.express.use(`${this.basePath}/user`, api_1.userRouter);
        this.express.use(`${this.basePath}/reviews`, Review_1.reviewRouter);
        this.express.use(`${this.basePath}/organizations`, Organizations_1.orgRouter);
    }
    registerMiddlewares() {
        middlewares_1.global(this.express);
    }
    async initializeDb() {
        if (config_1.ENVIRONMENT !== 'test') {
            try {
                await typeorm_1.createConnection({
                    type: 'mysql',
                    host: config_1.DB_HOST,
                    port: 3306,
                    username: config_1.DB_USER,
                    password: config_1.DB_PASSWORD,
                    database: config_1.DB_NAME,
                    synchronize: false,
                    migrations: ['/src/db/migrations/*.ts'],
                    entities: [__dirname + '/api/**/*Model.js'],
                });
                utils_1.logger.info('Database connection has been established successfully.');
            }
            catch (err) {
                console.log(err);
                throw new Error(('Unable to connect to the database:' + err));
            }
        }
    }
    // Error handlers
    handleUncaughtErrorEvents() {
        process.on('unhandledRejection', (reason, promise) => {
            throw reason;
        });
        process.on('uncaughtException', (error) => {
            utils_1.logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
            process.exit(1);
        });
        process.on('SIGINT', () => {
            utils_1.logger.info(' Alright! Bye bye!');
            process.exit();
        });
        this.express.use(middlewares_1.errorHandler);
    }
}
const app = new App().express;
exports.default = app;
