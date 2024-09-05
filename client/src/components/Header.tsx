import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-slate-200">
      <div className=" p-2 flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link to="/">
        <div className="">
          <span className="text-2xl sm:text-3xl font-bold text-slate-500">
            Rent{" "}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-slate-700">
            Me
          </span>
        </div>
        </Link>
        {/* search */}
        
        <form className="flex items-center bg-slate-300 rounded-md px-2">
          <input
            type="text"
            placeholder="Search...."
            className="w-full p-2 rounded-md bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-500 text-xl sm:text-2xl hover:cursor-pointer" />
        </form>

        {/* menu */}
        <ul className="flex gap-4">
            <Link to= '/'>
          <li className="hidden sm:inline hover:underline hover:cursor-pointer">
            Home
          </li>
            </Link>
            <Link to= '/about'>
          <li className="hidden sm:inline hover:underline hover:cursor-pointer">
            About
          </li>
            </Link>
            <Link to= '/sign-up'>
          <li className=" hover:underline hover:text-slate-500 hover:cursor-pointer">
            Sign Up
          </li>
            </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
