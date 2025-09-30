import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URI;
// console.log(url);
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Datebase Connected")
    );
    await mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
