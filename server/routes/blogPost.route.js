import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  getBlogsByUserId,
  getRecentBlogs,
  updateBlog,
} from "../controllers/blogPost.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(authMiddleware, createBlog).get(getAllBlogs);
router.route("/my-posts").get(authMiddleware, getBlogsByUserId);
router.route("/recent-posts").get(getRecentBlogs);
router
  .route("/:id")
  .get(getBlog)
  .patch(authMiddleware, updateBlog)
  .delete(authMiddleware, deleteBlog);

export default router;
