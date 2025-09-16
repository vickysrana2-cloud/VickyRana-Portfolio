import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black rounded-b-2xl text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo / Name */}

        <Link
          to={"/"}
          className="flex items-center lg:text-4xl text-2xl font-bold tracking-wide transition-all duration-200 ease-in-out
             [text-shadow:2px_2px_4px_rgba(220,38,38,0.5)] 
             hover:[text-shadow:0_0_15px_rgba(220,38,38,1),_0_0_20px_rgba(220,38,38,1)]"
        >
          {"<VickyRana/>"}
        </Link>

        {/* Desktop Menu (only on lg and above) */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to={"/projects"} className="hover:text-cyan-400 transition" >PROJECT-S</Link>
          <Link to={"/aboutMe"} className="hover:text-cyan-400 transition">
            ABOUT ME
          </Link>
          <Link to={"/specialties"} className="hover:text-cyan-400 transition">
            SPECIALTIES
          </Link>
        </div>

        {/* Right: Resume + Button (only on lg and above) */}
        <div className="hidden  lg:flex items-center space-x-6">
          <Link
            to={"/contact"}
            className="hover:text-cyan-400 text-sm flex items-center tracking-wide transition"
          >
            CONTACT <GoArrowUpRight className="ms-0.5" />
          </Link>
          <Link
            to={"/resume"}
            className="bg-gray-800 hover:bg-gray-700 flex items-center hover:text-cyan-400 text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wider transition"
          >
            MY RESUME <GoArrowUpRight className="ms-0.5" />
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile/Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4  flex flex-col space-y-4 bg-gray-900 p-4 rounded-2xl">
          <Link to={"/projects"} className="hover:text-cyan-400 transition">
            PROJECT-S
          </Link>
          <Link to={"/aboutMe"} className="hover:text-cyan-400 transition">
            ABOUT ME
          </Link>
          <Link to={"/specialties"} className="hover:text-cyan-400 transition">
            SPECIALTIES
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-cyan-400 text-sm flex items-center  tracking-wide transition"
          >
            CONTACT <GoArrowUpRight className="ms-0.5" />
          </Link>
          <Link
            to={"/resume"}
            className="bg-gray-800 hover:bg-gray-700 flex items-center justify-center hover:text-cyan-400 text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wider text-center transition"
          >
            MY RESUME <GoArrowUpRight className="ms-0.5" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
