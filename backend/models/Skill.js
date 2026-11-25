import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true }, // icon key used by frontend
    color: { type: String, default: "#22c55e" },
    category: { type: String, default: "Other" }, // e.g. "Frontend Development"
    order: { type: Number, default: 0 }, // order inside its category
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
