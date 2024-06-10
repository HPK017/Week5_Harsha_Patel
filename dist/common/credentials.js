"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_KEY = void 0;
// import * as dotenv from 'dotenv'
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_KEY = process.env.JWT_KEY || "";
const credentials = {
    postgres: {
        USERNAME: process.env.USER || "",
        DATABASE: process.env.DATABASE || "",
        HOST: process.env.HOST_NAME || "",
        PASSWORD: process.env.PASSWORD || "",
        DBPORT: Number(process.env.PORTNAME) || 5432,
    }
};
exports.default = credentials;
//# sourceMappingURL=credentials.js.map