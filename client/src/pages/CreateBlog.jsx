import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { createPost } from "../http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleOnSubmit = async (e, values) => {
    e.preventDefault();
    try {
      const response = await createPost(values);

      if (response.success) {
        toast.success("Blog created successfully!!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <section className="p-5 md:p-10 h-full">
        <Form
          data={{ title: "", content: "", category: "" }}
          handleOnSubmit={handleOnSubmit}
          type={"Create Blog"}
        />
      </section>
    </>
  );
};

export default CreateBlog;
