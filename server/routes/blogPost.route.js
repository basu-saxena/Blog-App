import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogPost.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(authMiddleware, createBlog).get(getAllBlogs);
router
  .route("/:id")
  .get(getBlog)
  .patch(authMiddleware, updateBlog)
  .delete(authMiddleware, deleteBlog);

export default router;
