import app from "../app.js";

// Vercel treats this file as a serverless function. It receives every
// request (see vercel.json rewrites) and hands it to the same Express app
// used for local development.
export default app;
