import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// GET the single profile document
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE the profile (upsert)
router.put("/", async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
