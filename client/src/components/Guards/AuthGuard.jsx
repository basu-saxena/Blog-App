import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const { auth } = useAuthContext();
  // const auth = { auth: true };
  // console.log(auth);

  if (auth.auth) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default AuthGuard;
