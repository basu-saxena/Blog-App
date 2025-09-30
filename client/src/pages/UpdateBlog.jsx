import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../http";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import useGetSinglePost from "../hooks/useGetSinglePost";
import { toast } from "react-hot-toast";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const UpdateBlog = () => {
  const { id } = useParams();
  const { loading, data } = useGetSinglePost(id);
  const navigate = useNavigate();

  const handleOnSubmit = async (e, values) => {
    e.preventDefault();

    try {
      const response = await updatePost(values, id);

      if (response.success) {
        toast.success("Blog updated successfully!!");
        setTimeout(() => {
          navigate(`/blog/${id}`);
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section className="p-5 md:p-10 h-full">
        <Form
          data={{
            title: data.title,
            content: data.content,
            category: data.category,
          }}
          handleOnSubmit={handleOnSubmit}
          type={"Update Blog"}
        />
      </section>
      <Footer />
    </>
  );
};

export default UpdateBlog;
