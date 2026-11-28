// Uploads the portfolio images from frontend/public to Cloudinary, then:
//  1. saves a local-path -> Cloudinary-URL map (used by seed.js and the frontend)
//  2. updates the existing MongoDB documents so the live site uses Cloudinary right away
// Run from the backend folder:  npm run upload:images
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import connectDB from "../config/db.js";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../../frontend/public");
const BACKEND_MAP = path.resolve(__dirname, "../seed/cloudinary-images.json");
const FRONTEND_MAP = path.resolve(__dirname, "../../frontend/src/cloudinaryImages.json");
const FOLDER = "portfolio";

// Local paths (as used on the site) of every image to move to Cloudinary.
// Favicons stay local on purpose: browsers expect them on your own domain.
const IMAGES = [
  "/dk.jpeg",
  "/logo.png",
  "/trophy.jpg",
  ...fs
    .readdirSync(fs.existsSync(path.join(PUBLIC_DIR, "projects")) ? path.join(PUBLIC_DIR, "projects") : PUBLIC_DIR)
    .filter(() => fs.existsSync(path.join(PUBLIC_DIR, "projects")))
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .map((f) => `/projects/${f}`),
];

const optimise = (url) => url.replace("/upload/", "/upload/f_auto,q_auto/");

const run = async () => {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    throw new Error("Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET to backend/.env");
  }

  // Start from the existing map so images already on Cloudinary (and deleted locally) keep their URLs.
  const map = fs.existsSync(BACKEND_MAP) ? JSON.parse(fs.readFileSync(BACKEND_MAP, "utf8")) : {};
  for (const localPath of IMAGES) {
    const file = path.join(PUBLIC_DIR, localPath);
    if (!fs.existsSync(file)) {
      console.warn(`Skipped (no local file, keeping existing Cloudinary URL): ${localPath}`);
      continue;
    }
    const publicId = localPath.replace(/^\//, "").replace(/\.[^.]+$/, ""); // e.g. projects/ai-chatbot
    const res = await cloudinary.uploader.upload(file, {
      folder: FOLDER,
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      resource_type: "image",
    });
    map[localPath] = optimise(res.secure_url);
    console.log(`Uploaded ${localPath} -> ${map[localPath]}`);
  }

  fs.writeFileSync(BACKEND_MAP, JSON.stringify(map, null, 2) + "\n");
  fs.writeFileSync(FRONTEND_MAP, JSON.stringify(map, null, 2) + "\n");
  console.log("Saved URL map to seed/cloudinary-images.json and frontend/src/cloudinaryImages.json");

  // Point existing database records at Cloudinary.
  await connectDB();
  let updated = 0;
  for (const [localPath, url] of Object.entries(map)) {
    updated += (await Profile.updateMany({ avatarUrl: localPath }, { avatarUrl: url })).modifiedCount;
    updated += (await Project.updateMany({ imageUrl: localPath }, { imageUrl: url })).modifiedCount;
  }
  console.log(`Updated ${updated} database record(s)`);
  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error("Image upload failed:", err.message || err);
  process.exit(1);
});
