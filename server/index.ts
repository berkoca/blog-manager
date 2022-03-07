import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application, json, urlencoded } from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import router from "./routes";
import { Database } from "./library/Database";
import path from "path";
import fs from "fs-extra";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/public", express.static(path.join(__dirname, "files")));
app.use("/api", router);
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/build/index.html")));

async function start(): Promise<void> {
    await Database.connect();
    fs.mkdirpSync(path.join(__dirname, "files"))
    app.listen(port, () => console.log(`Server listening on port ${port}.`));
}

start();