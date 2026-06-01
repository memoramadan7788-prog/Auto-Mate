require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");



const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
async function dbConection() {
  try{
    await mongoose.connect(process.env.DB_URI);
    console.log("conected!")
  }catch(error){
  }
}

// console.log(error);
dbConection();

app.listen(port, () => {
  console.log(`running.. ${port}`);
});
