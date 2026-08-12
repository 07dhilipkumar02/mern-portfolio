import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    tagline: { type: String, required: true },
    about: { type: String, required: true },
    avatarUrl: { type: String },
    resumeUrl: { type: String },
    education: {
      degree: String,
      institution: String,
    },
    experienceStatus: { type: String, default: "Fresher" },
    experienceNote: { type: String, default: "Open to Opportunities" },
    focusArea: { type: String, default: "Web Development" },
    focusNote: { type: String, default: "Clean & Scalable Code" },
    stats: {
      projectsCompleted: { type: Number, default: 0 },
      githubStars: { type: Number, default: 0 },
      technologies: { type: Number, default: 0 },
      dedication: { type: String, default: "100%" },
    },
    contact: {
      email: String,
      phone: String,
      location: String,
      github: String,
      linkedin: String,
      twitter: String,
      portfolio: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
