import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { formatDate } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../http";
import useGetPostByUserId from "../hooks/useGetPostByUserId";

const Dashboard = () => {
  const navigate = useNavigate();

  // const { loading, data } = useGetPostByUserId();

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

  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id);

      if (response.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="space-y-5 p-5 ">
        <h1 className="text-4xl font-semibold ">My Posts</h1>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item._id} className=" bg-[#EDF8F3] p-5 space-y-5 ">
              <div className="flex justify-between items-center ">
                <h1 className="text-3xl font-semibold">{item.title}</h1>

                <div className="space-x-5">
                  <button
                    onClick={() => navigate(`/update/${item._id}`)}
                    className="px-4 py-2 rounded-md bg-lime-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 rounded-md bg-lime-500"
                  >
                    Del
                  </button>
                </div>
              </div>
              <p className="text-xl text-gray-600">{item.content}</p>
              <div>
                {" "}
                {item.userId.name} <span>{formatDate(item.createdAt)} </span>
              </div>
            </div>
          ))
        ) : (
          <div>No posts to show!</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
