const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serverless = require("serverless-http");
const router = require("./src/routes/breafingRouters");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/breafing", router);

module.exports = app;
module.exports.handler = serverless(app);
