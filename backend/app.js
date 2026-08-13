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

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

// Make sure we have a DB connection before handling any request. connectDB()
// is idempotent, so on warm serverless invocations this resolves instantly.
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ message: "Database connection failed" });
  }
});

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

export default app;
