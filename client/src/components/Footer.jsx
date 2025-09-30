import React from "react";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-[#EDF8F3] shadow items-center justify-around w-full py-16 text-sm text-gray-800/70">
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Services
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Help
          </a>
        </div>
        <div className="flex items-center gap-4 mt-8 text-indigo-500">
          <Link
            to={"https://www.instagram.com/basu_saxena"}
            target="_blank"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/basu-saxena-148a01283/"}
            target="_blank"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to={"https://www.geeksforgeeks.org/user/basu_saxena/"}
            target="_blank"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path
                fill="#615FFF"
                d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
              />
            </svg>
          </Link>
          <Link
            to={"https://github.com/basu-saxena"}
            target="_blank"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18c-4.51 2-5-2-7-2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <p className="mt-8 text-center px-3">
          Copyright © 2025 MyBlog. All rights reservered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
