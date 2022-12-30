import mongoose from 'mongoose';

const brefingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
  },
  answer: {
    type: String,
    required: [true, "A question is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Breafing = mongoose.model("Breafing", brefingSchema);

export default Breafing;
