const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./src/routes/breafingRouters");

const app = require('express')();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/breafing", router);

module.exports = app
