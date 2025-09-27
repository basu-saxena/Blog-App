import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./configs/db.config.js";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import blogPostRoutes from "./routes/blogPost.route.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;
const whiteLists = ["http://localhost:5173"];
connectDB();
app.use(express.json());

app.use(cors({ origin: whiteLists }));

app.use("/api/auth", authRoutes);
app.use("/api/posts", blogPostRoutes);

app.listen(PORT || 5000, () => {
  console.log(`Server is running on ${PORT || 5000}`);
});

// mongoose.connection.once("open", () => {

// });
