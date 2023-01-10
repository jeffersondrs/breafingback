import express from "express";
import {
  getAllBreafings,
  createBreafing,
  deleteBreafing,
} from "../controllers/breafingController.js";

const router = express.Router();

router.route("/")
.get(getAllBreafings)
.post(createBreafing);

router.route("/:_id")
.get(getAllBreafings)
.delete(deleteBreafing);

export default router;
