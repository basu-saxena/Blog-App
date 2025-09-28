import React, { useEffect, useState } from "react";
import { fetchRecentPosts } from "../http";

const useGetRecentPosts = () => {
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoadingPosts(true);

        const response = await fetchRecentPosts();

        if (response.success) {
          setRecentPosts(response.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoadingPosts(false);
      }
    })();
  }, []);

  return { loadingPosts, recentPosts };
};

export default useGetRecentPosts;
