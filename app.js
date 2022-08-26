"use strict";

import { mongdbConnection } from "./src/dbConnection/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import routes from "./src/routers/index.js";
const app = express();

const { json, urlencoded } = bodyParser;

mongdbConnection.db_connection();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/v1", routes);

export default app;
