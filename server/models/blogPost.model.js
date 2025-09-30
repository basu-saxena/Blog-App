import mongoose from "mongoose";

const blogPost = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogPost = mongoose.model("BlogPost", blogPost);

export default BlogPost;
