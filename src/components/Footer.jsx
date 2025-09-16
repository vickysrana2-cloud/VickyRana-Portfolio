import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-16 rounded-t-3xl w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400">
            /Reach me
          </p>
          <a href="mailto:vickysrana2@gmail.com">vickysrana2@gmail.com</a>
        </div>

        <div className="flex flex-wrap justify-evenly">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              /Navigate to
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  PROJECT-S
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  SPECIALTIES
                </a>
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
                <a href="#" className="hover:underline">
                  My resume
                </a>
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
