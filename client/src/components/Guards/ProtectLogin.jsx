import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectLogin = () => {
  const { auth } = useAuthContext();

  if (!auth.auth) {
    <Outlet />;
  } else {
    <Navigate to={"/"} />;
  }
};

export default ProtectLogin;
