import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { formatDate } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../http";
import useGetPostByUserId from "../hooks/useGetPostByUserId";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  const { loading, data } = useGetPostByUserId();

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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section className="space-y-5 p-5 ">
        <h1 className="text-2xl md:text-4xl font-semibold ">My Posts</h1>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item._id} className=" bg-[#EDF8F3] p-5 space-y-5 ">
              <div className="flex justify-between items-center ">
                <h1 className="text-xl md:text-3xl font-semibold">
                  {item.title}
                </h1>

                <div className="flex gap-2 flex-nowrap">
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
              <p className="text-base md:text-xl text-gray-600">
                {item.content}
              </p>
              <div>
                {" "}
                {item.userId.name} <span>{formatDate(item.createdAt)} </span>
              </div>
            </div>
          ))
        ) : (
          <div>No posts to show!</div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
