import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { createPost } from "../http";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleOnSubmit = async (e, values) => {
    e.preventDefault();
    try {
      const response = await createPost(values);

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
      <div className="p-5 md:p-10 h-full">
        <Form
          data={{ title: "", content: "", category: "" }}
          handleOnSubmit={handleOnSubmit}
          type={"Create Blog"}
        />
      </div>
    </>
  );
};

export default CreateBlog;
