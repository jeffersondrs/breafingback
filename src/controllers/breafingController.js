import Breafing from "../models/breafingModel.js";
import APIFeatures from "../util/apiFeatures.js";

export const getAllBreafings = async (req, res) => {
  try {
    const breafings = await Breafing.find();

    res.status(200).json({
      status: "success",
      results: breafings.length,
      data: {
        breafings,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const createBreafing = async (req, res) => {
  try {
    const newBreafing = await Breafing.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Respondido com sucesso!",
      data: {
        breafing: newBreafing,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};
export const deleteBreafing = async (req, res, next) => {
  const breafing = await Breafing.findByIdAndDelete(req.params._id);
  if (!breafing) {
    return next(`No quest found with that ID: ${req.params._id}`, 404);
  }
  res.status(204).json({ status: "success", data: null });
};
