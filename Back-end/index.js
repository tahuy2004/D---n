import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.ASLAS_URI).then(() => {
  console.log("cloud ok");
});
app.listen(process.env.PORT, () => {
  console.log("thNH CONG");
});
