const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const colors = require("colors");



// dotenv configuration
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });

// rest boject
const app = express();

// midlewares
app.use(cors());
app.use(express.json());





// routes

app.use("/api/portfolio1", require('./routes/portfolioRoute'));




// port
const PORT =process.env.PORT || 8080

// listen
app.listen(PORT,() =>{
console.log(`Server Running On PORT ${PORT}`.bgCyan
      .white);
})

