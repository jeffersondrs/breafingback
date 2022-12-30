import express from "express";
import { getAllBreafings, createBreafing } from "../controllers/breafingController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllBreafings)
  .post(createBreafing);

export default router;
