import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const secret = process.env.TOKEN_SECRET;

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Login required" });
    }
    const decoded = jwt.decode(token, secret);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ success: false, message: "Login required" });
  }
};
