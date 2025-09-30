import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { auth } = useAuthContext();
  // const auth = { auth: true };

  const menu = auth.auth
    ? ["CREATE", "DASHBOARD"]
    : ["REGISTER", "DASHBOARD", "LOGIN"];

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header>
      <nav className="px-10 py-5 bg-[#EDF8F3] flex justify-between items-center shadow">
        <div>
          <img className="h-8 md:h-12" src="/images/Logo.png" alt="myBlog" />
        </div>
        <ul className="hidden md:flex gap-4">
          {menu.map((item) => (
            <li
              className="hover:scale-110 transition-all duration-100 ease-in"
              key={item}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
          {auth.auth && (
            <li className="hover:scale-110 transition-all duration-100 ease-in">
              <button onClick={handleClick} className="cursor-pointer">
                LOGOUT
              </button>
            </li>
          )}
        </ul>
        <div
          className="md:hidden "
          onClick={() => {
            setOpen(true);
          }}
        >
          <IoMenu size={25} />
        </div>
      </nav>
      {/* sidebar */}
      {/* <div className=""> */}
      {open && (
        <Sidebar
          open={open}
          onClose={onClose}
          menu={menu}
          handleClick={handleClick}
        />
      )}
      {/* </div> */}
    </header>
  );
};

export default Navbar;
