// Quick sanity check: verifies all models and routes load without errors.
// Run with: node import_test.mjs
import "./models/Profile.js";
import "./models/Skill.js";
import "./models/Project.js";
import "./models/Experience.js";
import "./models/Contact.js";
import "./routes/profile.js";
import "./routes/skills.js";
import "./routes/projects.js";
import "./routes/experience.js";
import "./routes/contact.js";

console.log("All modules imported successfully.");
