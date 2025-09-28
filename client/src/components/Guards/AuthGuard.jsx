import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { auth } = useAuthContext();

  if (auth.auth) {
    <Outlet />;
  } else {
    <Navigate to={"/login"} />;
  }
};

export default AuthGuard;
