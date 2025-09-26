import dotenv from "dotenv";
dotenv.config();
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const data = req.body;

  if (
    !data.name ||
    !data.email ||
    !data.password ||
    data.name === "" ||
    data.email === "" ||
    data.password === ""
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required " });
  }
  try {
    const userExists = await User.findOne({ email: data.email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    const newUser = await User.create({ ...data, password: hashedPass });
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res
      .status(201)
      .json({ success: true, message: "User registered successfully ", token });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "failed to reqister User" });
  }
};

export const loginUser = async (req, res) => {
  const data = req.body;

  try {
    if (
      !data.email ||
      !data.password ||
      data.email === "" ||
      data.password === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required " });
    }

    const userData = await User.findOne({ email: data.email });

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPassValid = await bcrypt.compare(data.password, userData.password);

    if (!isPassValid) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign(
      {
        id: userData._id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res
      .status(200)
      .json({ success: true, message: "User logged in successfully ", token });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "failed to reqister User" });
  }
};
