import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../http";

const useGetSinglePost = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await getSingleBlog(id);

        if (response.success) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);
  return { loading, data };
};

export default useGetSinglePost;
