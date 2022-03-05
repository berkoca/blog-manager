import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application, json } from "express";
import cors from "cors";
import router from "./routes";
import { Database } from "./library/Database";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());
app.use("/api", router);

async function start(): Promise<void> {
    await Database.connect();
    app.listen(port, () => console.log(`Server listening on port ${port}.`));
}

start();