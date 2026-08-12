import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import profileRoutes from "./routes/profile.js";
import skillRoutes from "./routes/skills.js";
import projectRoutes from "./routes/projects.js";
import experienceRoutes from "./routes/experience.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/profile", profileRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/contact", contactRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
