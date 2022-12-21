const router = require("./src/routes/breafingRouters");
const cors = require("cors");
const helmet = require("helmet");

const express = require('express')
const app = express()


app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/breafing", router);

module.exports = app;
