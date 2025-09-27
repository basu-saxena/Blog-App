import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import useGetAllPosts from "../hooks/useGetAllPosts";

const Home = () => {
  // const { loading, data } = useGetAllPosts();
  const categories = ["general", "news", "blog", "tech", "study", "sports"];
  const data = [
    {
      _id: 1,
      title: "Blog Post",
      content: "This is a BLog post",
      userId: { _id: 20, name: "Basu" },
      createdAt: "10/10/10",
    },
    {
      _id: 2,
      title: "Blog Post",
      content: "This is a BLog post",
      userId: { _id: 30, name: "Sid" },
      createdAt: "10/10/10",
    },
    {
      _id: 3,
      title: "Blog Post",
      content: "This is a BLog post",
      userId: { _id: 20, name: "Basu" },
      createdAt: "10/10/10",
    },
  ];

  // if (loading) {
  //   return <div>loading</div>;
  // }
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl pt-5 px-3 md:px-10 mx-auto flex">
        <div className="w-full md:w-2/3  p-5 space-y-5">
          <h1 className="text-4xl font-semibold ">Posts</h1>
          {data.length > 0 ? (
            data.map((item) => <BlogCard key={item._id} blog={item} />)
          ) : (
            <div>No posts to show!</div>
          )}
        </div>
        <div className="w-1/3 hidden md:block p-5">
          <Search />
          {/* recent posts */}
          <h1 className="text-2xl font-semibold my-4">Recent Posts</h1>
          <div className="space-y-2">
            {data.length > 0 &&
              data.map((item) => <h3 key={item._id}> {item.title}</h3>)}
          </div>
          {/* categories */}
          <h1 className="text-2xl font-semibold my-4">Categories</h1>
          <div className="flex flex-col gap-2">
            {categories.map((item) => (
              <Link to={`/categories/${item}`} key={item}>
                {" "}
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
