import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const BlogCard = ({ blog }) => {
  const { title, content, author, date } = blog;

  return (
    <div>
      <Link to={`/blog/${blog._id}`}>
        <div className="border-1 border-gray-300 bg-[#EDF8F3] shadow rounded-md p-5 space-y-5">
          <div className="text-2xl font-semibold">{title}</div>
          <div className=" text-gray-600">{`${content.slice(0, 150)}${
            content?.length > 150 ? "  . . . " : ""
          }`}</div>
          <div className="text-gray-600 capitalize">
            By : {blog.userId.name}{" "}
            <span className="ml-5">{formatDate(blog.userId.createdAt)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
