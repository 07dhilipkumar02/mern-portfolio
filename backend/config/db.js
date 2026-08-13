import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  // Reuse the existing connection across warm serverless invocations instead
  // of reconnecting on every request.
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  const uri = process.env.MONGODB_URI;

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    // In a long-running local/server process it's fine to exit on failure.
    // In serverless (Vercel), process.exit would just crash the function
    // invocation, so only do it when NOT running on Vercel.
    if (!process.env.VERCEL) {
      process.exit(1);
    } else {
      throw err;
    }
  }
};

export default connectDB;
