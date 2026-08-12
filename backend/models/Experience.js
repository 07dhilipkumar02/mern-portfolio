import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    period: { type: String },
    description: { type: String },
    highlights: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
