import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ handleOnChange }) => {
  return (
    <div className="flex p-3 rounded-md bg-gray-100">
      <input
        onChange={handleOnChange}
        className="w-full outline-none placeholder:text-gray-600"
        type="text"
        placeholder="Search"
      />
      <IoSearchOutline size={20} />
    </div>
  );
};

export default Search;
