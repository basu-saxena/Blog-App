import React, { useState } from "react";
import { createPost } from "../http";
import { useNavigate } from "react-router-dom";

const Form = ({ data }) => {
  const [values, setValues] = useState(data);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = async (e) => {
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
    <div className="p-10 bg-[#EDF8F3] rounded w-full md:w-2/3 h-full shadow">
      <form onSubmit={handleOnSubmit} className="space-y-5">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleOnChange}
            className="w-full  rounded-md bg-white border border-gray-300 outline-none p-3"
            value={values.title}
            type="text"
            placeholder="Title"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="content">Content</label>
          <textarea
            onChange={handleOnChange}
            rows={6}
            className="w-full rounded-md bg-white border border-gray-300 outline-none p-3"
            value={values.content}
            placeholder="Content"
            name="content"
            id="content"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="category">Category</label>
          <input
            onChange={handleOnChange}
            className="w-full  rounded-md bg-white border border-gray-300 outline-none p-3"
            value={values.category}
            type="text"
            placeholder="Category"
            name="category"
            id="category"
          />
        </div>
        <button
          className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-500 font-semibold cursor-pointer"
          type="submit "
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default Form;
