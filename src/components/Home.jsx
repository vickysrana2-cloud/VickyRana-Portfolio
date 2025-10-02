import React from "react";
import "../app.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="upperhero rounded-t-3xl mt-2">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>

        <div className="text-center lg:text-left max-w-5xl lg:-mt-28 -mt-64 font-['Times_New_Roman']">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Hi there,
          </h1>
          <h1 className="text-3xl lg:text-8xl font-bold text-orange-600 text-shadow-2xs text-shadow-orange-300 mb-6">
            I’m Vicky Rana
          </h1>
          <p className="text-gray-300 font-semibold lg:text-lg mb-8">
            Web Developer | Building Modern, Responsive Web Apps
          </p>
          <Link
            to={"/projects"}
            className="relative overflow-hidden px-6 py-3 font-bold text-white rounded-full backdrop-blur-lg bg-white/10 group"
          >
            <span className="relative z-10 rounded-full">View My Projects</span>
            <span className="absolute rounded-full inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>

      <section
        className="w-full min-h-screen linierEffect 
           flex items-center justify-center px-6 lg:px-32"
      >
        <div className="text-center lg:text-left max-w-3xl lg:-mt-28 -mt-64">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hi there,
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold text-red-500 mb-6">
            I'm Vicky!
          </h1>
          <p className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed">
            I’m currently pursuing a{" "}
            <span className="text-white font-medium">
              Java Full Stack Web Development
            </span>{" "}
            course and hold a B.Tech degree from RTMNU. I’m passionate about
            building engaging, efficient, and meaningful web applications.
            Scroll down to check out some of my work!
          </p>
        </div>
      </section>

      <section className="w-full min-h-[60vh] bg-gray-100 flex items-center justify-center px-6 lg:px-32">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            🚧 Work in Progress
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
            Currently under development. Exciting additions will be available
            here soon.
          </p>
          <div className="flex items-center justify-center gap-3 text-teal-600 font-medium">
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
            <span>Currently in Development…</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
