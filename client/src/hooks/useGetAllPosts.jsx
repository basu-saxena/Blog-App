import React, { useEffect, useState } from "react";
import { getAllPosts } from "../http";
const useGetAllPosts = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts(query);
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
  }, [query]);
  return { loading, data, setQuery };
};

export default useGetAllPosts;
