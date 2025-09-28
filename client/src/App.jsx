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
import AuthGuard from "./components/Guards/AuthGuard";
import ProtectLogin from "./components/Guards/ProtectLogin";

const App = () => {
  const { auth } = useCheckAuth();
  // console.log(auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<ProtectLogin />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="/register" element={<ProtectLogin />}>
        <Route path="" element={<Register />} />
      </Route>
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/create" element={<AuthGuard />}>
        <Route path="" element={<CreateBlog />} />
      </Route>
      <Route path="/update/:id" element={<AuthGuard />}>
        <Route path="" element={<UpdateBlog />} />
      </Route>
      <Route path="/dashboard" element={<AuthGuard />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
