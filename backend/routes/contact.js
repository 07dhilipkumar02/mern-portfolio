import express from "express";
import Contact from "../models/Contact.js";
import { sendContactNotification } from "../utils/mailer.js";

const router = express.Router();

// Submit a contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }
    const contact = await Contact.create({ name, email, message });

    // Best-effort email notification — don't fail the request if this errors out.
    try {
      await sendContactNotification({ name, email, message });
    } catch (mailErr) {
      console.error("Failed to send contact notification email:", mailErr.message);
    }

    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// List all messages (for admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
