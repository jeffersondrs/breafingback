const breafingController = require("../../src/controllers/breafingController");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(breafingController.getAllBreafings)
  .post(breafingController.createBreafing);

module.exports = router;
