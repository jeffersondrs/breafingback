import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./src/routes/breafingRouters.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.use("/api", router);

export default app;
