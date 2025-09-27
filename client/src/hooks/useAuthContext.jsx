import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
