import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import useAuthContext from "../hooks/useAuthContext";

const Sidebar = ({ open, onClose, menu, handleClick }) => {
  const { auth } = useAuthContext();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#EDF8F3] shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 text-black h-full font-semibold">
          <div className=" flex justify-end mb-5">
            <IoCloseOutline size={25} onClick={onClose} />
          </div>
          <ul className="h-full flex flex-col gap-7 ">
            {menu.map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
            {auth.auth && (
              <li>
                <button
                  onClick={handleClick}
                  className="cursor-pointer inline-flex"
                >
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
