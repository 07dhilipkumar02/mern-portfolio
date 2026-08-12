import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    tags: [{ type: String }],
    liveUrl: { type: String },
    githubUrl: { type: String },
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
