import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiSolidHome, BiLogIn, BiUserPlus } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);

  return (
    <header className="fixed z-50 md:flex top-0 w-full bg-[#2E2E2E] text-white h-20">
      <div className="flex w-full md:w-[65%] px-[5%]">
        <div className="w-[15%] my-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-16 w-auto" />
          </Link>
        </div>
        <div className="flex items-center h-8 my-6 w-[70%] md:w-full px-6">
          <input
            type="text"
            className="w-[80%] md:w-full h-full rounded-s-md text-black border-r border-[#EEE]"
          />
          <button className="h-full bg-white px-3 text-black rounded-e-md">
            <BiSearch />
          </button>
        </div>
        <div className="my-6 md:hidden">
          <button onClick={() => setShowNav(!showNav)}>
            <FaBars size={25} />
          </button>
        </div>
      </div>
      <nav
        className={`bg-[#2E2E2E] absolute w-full flex justify-center flex-col md:flex-row
        md:w-[35%] md:top-0 md:relative items-center duration-500 ${
          showNav ? "top-20" : "-top-52"
        }`}
      >
        <div className="h-12 pt-4 w-full md:w-[40%] flex justify-center border-b border-white md:border-none">
          <Link to='/' className="relative w-28 hover:text-blue-500 duration-500">
            <BiSolidHome size={25} />{" "}
            <span className="absolute top-0 left-8">Home</span>
          </Link>
        </div>
        <ul className="w-full md:flex md:pr-[5%]">
          <li className="h-12 pt-4 w-full flex justify-center border-b border-white md:border-none">
            <Link to='/login' className="relative w-28 hover:text-blue-500 duration-500">
              <BiLogIn size={25} />{" "}
              <span className="absolute top-0 left-8">Login</span>
            </Link>
          </li>
          <li className=" h-12 pt-4 w-full flex justify-center border-b border-white md:border-none">
            <Link to='/register' className="relative w-28 hover:text-blue-500 duration-500">
              <BiUserPlus size={25} />{" "}
              <span className="absolute top-0 left-8">Register</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
