import express from "express";
import {
  checkAuth,
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/check-auth", checkAuth);

export default router;
