import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const moveTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className=" bg-black/60 backdrop-blur-xs border-b-2 border-b-white/10 rounded-b-3xl text-white font-semibold px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo / Name */}

        <NavLink
          title="Click to Home"
          to="/"
          onClick={moveTop}
          className={({ isActive }) =>
            `flex items-center lg:text-4xl text-2xl font-bold tracking-wide transition-all duration-200 ease-in-out
     [text-shadow:2px_2px_4px_rgba(220,38,38,0.5)] 
     hover:[text-shadow:0_0_5px_rgba(220,38,38,1),_0_0_5px_rgba(220,38,38,1)]
     ${
       isActive &&
       "[text-shadow:0_0_15px_rgba(220,38,38,1),_0_0_15px_rgba(220,38,38,1)] drop-shadow-[0_0_10px_#00f7ff]"
     }`
          }
        >
          {"<VickyRana/>"}
        </NavLink>

        {/* Desktop Menu (only on lg and above) */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to={"/projects"}
            className={({isActive})=>` hover:text-cyan-400 ${isActive && "text-cyan-400 transition drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            PROJECT-S
          </NavLink>
          <NavLink
            to={"/aboutMe"}
            className={({isActive})=>` hover:text-cyan-400 ${isActive && "text-cyan-400 transition drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            ABOUT ME
          </NavLink>
          <NavLink
            to={"/specialities"}
            className={({isActive})=>` hover:text-cyan-400 ${isActive && "text-cyan-400 transition drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            SPECIALITIES
          </NavLink>
        </div>

        {/* Right: Resume + Button (only on lg and above) */}
        <div className="hidden  lg:flex items-center space-x-6">
          <NavLink
            onClick={moveTop}
            to={"/contact"}
            className={({isActive})=>`hover:text-cyan-400 text-sm flex items-center tracking-wide transition ${isActive && "text-cyan-400 drop-shadow-[0_0_5px_#00f7ff]"}`}
          >
            CONTACT <GoArrowUpRight className="ms-0.5" />
          </NavLink>
          <NavLink
            onClick={moveTop}
            to={"/resume"}
            className={({isActive})=>`bg-gray-800 hover:bg-gray-700 flex items-center hover:text-cyan-400 px-4 py-2 rounded-full font-semibold text-sm tracking-wider transition ${isActive && "text-cyan-400 drop-shadow-[0_0_3px_#00f7ff]"}`}
          >
            MY RESUME <GoArrowUpRight className="ms-0.5" />
          </NavLink>
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
        <div className="lg:hidden mt-4 flex flex-col space-y-4 bg-gray-900 p-4 rounded-2xl">
          <NavLink
            to={"/projects"}
            className={({isActive})=>`hover:text-cyan-400 transition ${isActive && "text-cyan-400 drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            PROJECT-S
          </NavLink>
          <NavLink
            to={"/aboutMe"}
            className={({isActive})=>`hover:text-cyan-400 transition ${isActive && "text-cyan-400 drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            ABOUT ME
          </NavLink>
          <NavLink
            to={"/specialities"}
            className={({isActive})=>`hover:text-cyan-400 transition ${isActive && "text-cyan-400 drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            SPECIALTIIES
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({isActive})=>`hover:text-cyan-400 text-sm flex items-center tracking-wide transition ${isActive && "text-cyan-400 drop-shadow-[0_0_5px_#00f7ff]"}`}
            onClick={moveTop}
          >
            CONTACT <GoArrowUpRight className="ms-0.5" />
          </NavLink>
          <NavLink
            to={"/resume"}
            className={({isActive})=>`bg-gray-800 hover:bg-gray-700 flex items-center justify-center hover:text-cyan-400 px-4 py-2 rounded-full font-semibold text-sm tracking-wider text-center transition ${isActive && "text-cyan-400 drop-shadow-[0_0_3px_#00f7ff]"}`}
            onClick={moveTop}
          >
            MY RESUME <GoArrowUpRight className="ms-0.5" />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
