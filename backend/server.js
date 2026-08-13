import app from "./app.js";

// Local/traditional server entry point. Used by `npm run dev` and `npm start`
// when running on your machine. Not used when deployed on Vercel — there,
// api/index.js exports the same `app` directly as a serverless function.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
