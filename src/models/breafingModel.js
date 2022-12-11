const mongoose = require("mongoose");

const brefingSchema = new mongoose.Schema({
  questionOne: {
    type: String,
    required: [true, "A question is required"],
  },
  questionTwo: {
    type: String,
    required: [true, "A question is required"],
  },
  questionThree: {
    type: String,
    required: [true, "A question is required"],
  },
  questionFour: {
    type: String,
    required: [true, "A question is required"],
  },
  questionFive: {
    type: String,
    required: [true, "A question is required"],
  },
  questionSix: {
    type: String,
    required: [true, "A question is required"],
  },
  questionSeven: {
    type: String,
    required: [true, "A question is required"],
  },
  questionEight: {
    type: String,
    required: [true, "A question is required"],
  },
  questionNine: {
    type: String,
    required: [true, "A question is required"],
  }
});

const Breafing = mongoose.model("Breafing", brefingSchema);

module.exports = Breafing;