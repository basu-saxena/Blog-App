import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { auth } = useAuthContext();

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
        <div className="space-x-4 hidden md:block">
          {menu.map((item) => (
            <Link to={`/${item.toLowerCase()}`} key={item}>
              <span className="hover:scale-110">{item}</span>
            </Link>
          ))}
          {auth.auth && (
            <button onClick={handleClick} className="cursor-pointer">
              LOGOUT
            </button>
          )}
        </div>
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
