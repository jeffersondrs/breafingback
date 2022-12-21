const express = require("express");
const breafingController = require("../../src/controllers/breafingController");

const router = express.Router();

router
  .route("/")
  .get(breafingController.getAllBreafings)
  .post(breafingController.createBreafing);

module.exports = router;
