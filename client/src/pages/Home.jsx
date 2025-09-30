import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import useGetAllPosts from "../hooks/useGetAllPosts";
import useGetRecentPosts from "../hooks/useGetRecentPosts";
import Footer from "../components/Footer";

const Home = () => {
  const { data, setQuery, category, setCategory } = useGetAllPosts();
  const categories = ["general", "news", "tech", "sports"];

  const { loadingPosts, recentPosts } = useGetRecentPosts();

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl pt-5 px-3 md:px-10 mx-auto flex">
        <div className="w-full md:w-2/3  p-5 space-y-5">
          <h1 className="text-4xl font-semibold ">
            {category === "" ? "Posts" : `Posts from ${category}`}
          </h1>
          {data.length > 0 ? (
            data.map((item) => <BlogCard key={item._id} blog={item} />)
          ) : (
            <div>No posts to show!</div>
          )}
        </div>
        <div className="w-1/3 hidden md:block p-5">
          <Search handleOnChange={handleOnChange} />
          {/* recent posts */}
          <h1 className="text-2xl font-semibold my-4">Recent Posts</h1>
          <ul className="space-y-2">
            {recentPosts.length > 0 &&
              recentPosts.map((item) => (
                <li className="cursor-pointer" key={item._id}>
                  <Link to={`/blog/${item._id}`}> {item.title}</Link>
                </li>
              ))}
          </ul>
          {/* categories */}
          <h1 className="text-2xl font-semibold my-4">Categories</h1>
          <ul className="flex flex-col gap-2">
            {categories.map((item) => (
              <li
                className={`${
                  category === item
                    ? "bg-[#EDF8F3] py-1 px-2 rounded-md shadow"
                    : ""
                } w-fit cursor-pointer`}
                onClick={() => {
                  setCategory(item);
                  setQuery("");
                }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
