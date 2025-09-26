import BlogPost from "../models/blogPost.model.js";

export const createBlog = async (req, res) => {
  const data = req.body;
  const userId = req.userId;

  try {
    if (
      !data.title ||
      !data.content ||
      !data.category ||
      data.title === "" ||
      data.content === "" ||
      data.category === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required " });
    }

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is missing" });
    }
    await BlogPost.create({
      ...data,
      userId,
    });

    res.status(201).json({ success: true, message: "Blog created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Failed to create blog" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const data = await BlogPost.find();

    res
      .status(200)
      .json({ success: true, message: "Posts fetched successfully", data });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch all posts" });
  }
};

export const getBlog = async (req, res) => {
  const Id = req.params.id;
  try {
    const data = await BlogPost.findById(Id);

    res
      .status(200)
      .json({ success: true, message: "Post fetched successfully", data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Failed to fetch post" });
  }
};

export const updateBlog = async (req, res) => {
  const data = req.body;
  const userId = req.userId;
  const id = req.params.id;

  try {
    if (
      !data.title ||
      !data.content ||
      !data.category ||
      data.title === "" ||
      data.content === "" ||
      data.category === ""
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required " });
    }

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is missing" });
    }
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Blog ID is missing" });
    }

    const blog = await BlogPost.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    if (blog.userId !== userId) {
      return res.status(400).json({ success: false, message: "Unauthorized" });
    }

    await BlogPost.findOneAndUpdate({ _id: id }, { ...data });

    res.status(200).json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Failed to update post" });
  }
};

export const deleteBlog = async (req, res) => {
  const userId = req.userId;
  const id = req.params.id;

  try {
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is missing" });
    }
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Blog ID is missing" });
    }

    const blog = await BlogPost.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    if (blog.userId !== userId) {
      return res.status(400).json({ success: false, message: "Unauthorized" });
    }

    await BlogPost.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Failed to delete post" });
  }
};
