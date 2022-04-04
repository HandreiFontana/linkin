import "reflect-metadata";
import express from "express";
import swaggerUi from 'swagger-ui-express';

import "../shared/container";
import '../typeorm'

import { router } from "./routes";
import swaggerFile from '../swagger.json'

import createConnection from "../typeorm";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);

export { app };
