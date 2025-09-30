import React, { useEffect, useState } from "react";

import { getSingleBlog } from "../http";

const useGetSinglePost = (id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
