import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogPost.controller.js";

const router = express.Router();

router.route("/").post(createBlog).get(getAllBlogs);
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);

export default router;
