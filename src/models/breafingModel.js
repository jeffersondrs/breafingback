const mongoose = require("mongoose");

const brefingSchema = new mongoose.Schema({

  question: {
    type: String,
    required: [true, "A question is required"],
  }
});

const Breafing = mongoose.model("Breafing", brefingSchema);

module.exports = Breafing;