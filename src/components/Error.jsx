import React from "react";
import errorImg from "../assets/errorImg.png";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";


const Error = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <img
        loading="lazy"
        className="w-72 sm:w-96 max-w-full mx-auto drop-shadow-lg"
        src={errorImg}
        alt="Error Illustration"
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-800">Oops! Something went wrong.</h1>
      <p className="mt-2 text-gray-500">
        We’re working on fixing the issue. Please try again later.
      </p>
      <button
        onClick={() => navigate("/")}
        className=" flex flex-wrap items-center gap-1 mt-6 px-6 py-3 rounded-xl border border-black text-black font-medium hover:bg-cyan-200 hover:text-indigo-600 transition"
      >
        <FaArrowLeft />Back to Home
      </button>
    </div>
  );
};

export default Error;
