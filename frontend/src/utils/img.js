import cloudinaryImages from "../cloudinaryImages.json";

// Returns the Cloudinary URL for a local image path (e.g. "/logo.png"),
// or the local path if that image hasn't been uploaded yet.
export const img = (localPath) => cloudinaryImages[localPath] || localPath;
