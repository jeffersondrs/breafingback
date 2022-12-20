const mongoose = require("mongoose");

const brefingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
  },
  answer: {
    type: String,
    required: [true, "A question is required"],
  }
});

const Breafing = mongoose.model("Breafing", brefingSchema);

module.exports = Breafing;