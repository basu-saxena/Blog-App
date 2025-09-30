import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectLogin = () => {
  const { auth } = useAuthContext();
  // const auth = { auth: true };
  if (!auth.auth) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectLogin;
