import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const Links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-700 border-2 border-green-500 bg-gray-100 px-2 py-2 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Books"}
          className={({ isActive }) =>
            isActive ? "text-green-700 border-2 border-green-500 bg-gray-100 px-2 py-2 font-bold" : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <Link
          to={"/Page-to-Read"}
          className={({ isActive }) =>
            isActive ? "border-2 border-green-800 px-2 py-2 font-bold" : ""
          }
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm mb-3">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* ✅ Mobile dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-2"
            >
              {Links}
            </ul>

          </div>
          <h2 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500">
            Bookify
          </h2>
        </div>

        {/* Desktop menu */}
        <ul className="navbar-center hidden lg:flex list-none gap-6">
          <button className="flex gap-4">{Links}</button>
        </ul>

        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <a className="px-3 py-2 text-sm font-bold text-white bg-gradient-to-l from-green-600 to-green-400 hover:text-white hover:scale-105 transition-transform transition-colors duration-200 cursor-pointer rounded-md">
              Sign In
            </a>
            <a className="px-3 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-900 rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;