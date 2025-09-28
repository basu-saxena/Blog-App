import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import useCheckAuth from "./hooks/useCheckAuth";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import UpdateBlog from "./pages/UpdateBlog";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { auth } = useCheckAuth();
  // console.log(auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/update/:id" element={<UpdateBlog />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
