import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1 });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    res.json({ message: "Experience deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
