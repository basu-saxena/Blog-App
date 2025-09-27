import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const CreateBlog = () => {
  return (
    <>
      <Navbar />
      <div className="p-5 md:p-10 h-full">
        <Form data={{ title: "", content: "", category: "" }} />
      </div>
    </>
  );
};

export default CreateBlog;
