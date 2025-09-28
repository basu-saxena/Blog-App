import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../http";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const UpdateBlog = () => {
  const { id } = useParams();
  // const { loading, data } = useGetSinglePost(id);
  const navigate = useNavigate();

  const handleOnSubmit = async (e, values) => {
    e.preventDefault();

    try {
      const response = await updatePost(values, id);

      if (response.success) {
        navigate(`/blog/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const data = {
    _id: 3,
    title: "Blog Post",
    content: "This is a BLog post",
    category: "tech",
    userId: { _id: 20, name: "Basu" },
    createdAt: "10/10/10",
  };
  //  if (loading) {
  //   return <div>Loading</div>;
  // }
  return (
    <>
      <Navbar />
      <div className="p-5 md:p-10 h-full">
        <Form
          data={{
            title: data.title,
            content: data.content,
            category: data.category,
          }}
          handleOnSubmit={handleOnSubmit}
          type={"Update Blog"}
        />
      </div>
    </>
  );
};

export default UpdateBlog;
