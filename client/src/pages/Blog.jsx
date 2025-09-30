import React from "react";
import Navbar from "../components/Navbar";
import useGetSinglePost from "../hooks/useGetSinglePost";
import { formatDate } from "../utils/formatDate";
import useAuthContext from "../hooks/useAuthContext";
import { deletePost } from "../http";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const Blog = () => {
  const { id } = useParams();
  const { loading, data } = useGetSinglePost(id);

  const { auth } = useAuthContext();
  // console.log(auth);

  const navigate = useNavigate();

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
      <section className="p-5 md:p-10 ">
        <div className=" bg-[#EDF8F3] p-5 space-y-5 ">
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            {auth.userId === data.userId._id && (
              <div className="space-x-5">
                <button
                  onClick={() => navigate(`/update/${id}`)}
                  className="px-4 py-2 rounded-md bg-lime-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="px-4 py-2 rounded-md bg-lime-500"
                >
                  Del
                </button>
              </div>
            )}
          </div>
          <p className="text-xl text-gray-600">{data.content}</p>
          <div>
            {" "}
            {data.userId.name} <span>{formatDate(data.createdAt)} </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
