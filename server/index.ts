import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application, json } from "express";
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

async function start(): Promise<void> {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

start();