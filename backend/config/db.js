const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoDB Database ${mongoose.connection.host}`.bgGreen.white
      
    );
  } catch (error) {
    console.log(`MongoDB Database  Error ${error}`.bgCyan.white);
    process.exit(1);
  }
};

module.exports = connectDB;