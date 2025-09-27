import React, { useEffect, useState } from "react";
import { getAllPosts } from "../http";
const useGetAllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts();
        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return { loading, data };
};

export default useGetAllPosts;
