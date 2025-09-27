import React, { useState } from "react";
import { AuthContext } from "../contexts/auth";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ auth: false, userId: null });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
