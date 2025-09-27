import { api } from "./client";

export const getAllPosts = async () => {
  const posts = await api.get("/posts");

  return posts.data;
};

export const checkAuth = async () => {
  const response = await api.post("/auth/check-auth");

  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

export const getSingleBlog = async (id) => {
  const response = await api.get(`/posts/${id}`);

  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);

  return response.data;
};

export const createPost = async (data) => {
  const response = await api.post("/posts", data);

  return response.data;
};
