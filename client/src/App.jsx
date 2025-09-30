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
import Loading from "./components/Loading";

const App = () => {
  const { loading } = useCheckAuth();
  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectLogin />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectLogin />}>
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/blog/:id" element={<Blog />} />
      <Route element={<AuthGuard />}>
        <Route path="/create" element={<CreateBlog />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route path="/update/:id" element={<UpdateBlog />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
