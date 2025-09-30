import React, { useContext, useEffect, useState } from "react";
import { checkAuth } from "../http";
import { AuthContext } from "../contexts/auth";

const useCheckAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkingLogedIn = async () => {
      setLoading(true);
      try {
        const response = await checkAuth();
        if (response.success) {
          setAuth({ auth: response.auth, userId: response.userId });
        }
      } catch (error) {
        console.log(error.message);
        setAuth({ auth: false, userId: null });
      } finally {
        setLoading(false);
      }
    };
    checkingLogedIn();
  }, []);

  return { loading };
};

export default useCheckAuth;
