import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";


const Footer = () => {
  const moveTop=()=>{window.scrollTo({top:0,left:0,behavior: 'smooth'})}
  return (
    <footer className="bg-gray-900 text-white px-8 mt-2 py-16 rounded-t-3xl w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400">
            /Reach me
          </p>
          <a href="mailto:vickysrana2@gmail.com" className="hover:underline">vickysrana2@gmail.com</a>
        </div>

        <div className="flex flex-wrap justify-evenly">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              /Navigate to
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:underline" onClick={moveTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline" onClick={moveTop}>
                  PROJECT-S
                </Link>
              </li>
              <li>
                <Link to="/aboutMe" className="hover:underline" onClick={moveTop}>
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="/specialities" className="hover:underline" onClick={moveTop}>
                  SPECIALITIES
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              /Stalk me :)
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/vicky-rana-7457ab225" target="_blank" className="hover:underline flex items-center">
                  <FaLinkedin className="me-1" />LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/vickysrana2-cloud" target="_blank" className="hover:underline flex items-center">
                  <FaGithub className="me-1" />GitHub
                </a>
              </li>
              <li>
                <Link to="/resume" className="hover:underline" onClick={moveTop}>
                  My resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center my-20">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-300">
          Let’s bring ideas to life
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="md:me-5">© 2025 All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-sky-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Terms of Service
            </a>
          </div>
        </div>

        <p className="mt-4 md:mt-0">
          Designed & Built with <span className="text-yellow-400">♥</span> by Me
        </p>
      </div>
    </footer>
  );
};

export default Footer;
