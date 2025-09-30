import React, { useEffect, useState } from "react";
import { fetchPostsByUserId } from "../http";

const useGetPostByUserId = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetchPostsByUserId();
        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data };
};

export default useGetPostByUserId;
