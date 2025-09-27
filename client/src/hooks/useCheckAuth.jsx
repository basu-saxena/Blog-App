import React, { useContext, useEffect } from "react";
import { checkAuth } from "../http";
import { AuthContext } from "../contexts/auth";

const useCheckAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  // useEffect(() => {
  //   const checkingLogedIn = async () => {
  //     try {
  //       const response = await checkAuth();
  //       if (response.success) {
  //         setAuth({ auth: response.auth });
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       setAuth({ auth: false });
  //     }
  //   };
  //   checkingLogedIn();
  // }, [auth]);
  // const auth = { auth: true };
  setAuth({ auth: true, userId: 20 });
  return { auth };
};

export default useCheckAuth;
