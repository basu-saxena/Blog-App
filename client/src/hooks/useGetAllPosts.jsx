import React, { useEffect, useState } from "react";
import { getAllPosts } from "../http";

const useGetAllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts(query, category);
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
  }, [query, category]);
  return { loading, data, setQuery, category, setCategory };
};

export default useGetAllPosts;
