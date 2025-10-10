import React from "react";
import "../App.css";
import { Link } from "react-router";
import ProjectsSection from "./ProjectsSection";
import InShortAbout from "./InShortAbout";
import Skills from "./Skills";
import ConnectSection from "./ConnectSection";

const Home = () => {
  return (
    <>
      <div className="upperhero rounded-t-3xl h-[50vh] lg:h-[70vh] lg:min-h-screen mt-2 mb-0 relative overflow-hidden items-center justify-center w-full flex ">
        <div className="circle circle1 drop-shadow-[0_0_10px_yellow]"></div>
        <div className="circle circle2 drop-shadow-[0_0_10px_red]"></div>
        <div className="circle circle3 drop-shadow-[0_0_10px_#00f7ff]"></div>
        <div className="circle circle4 drop-shadow-[0_0_10px_blue]"></div>
        <div className="circle circle5 drop-shadow-[0_0_10px_white]"></div>

        <div className="text-center  lg:text-left max-w-5xl -mt-16 font-['Times_New_Roman']">
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
            onClick={()=>window.scrollTo({top:0, left:0, behavior:"smooth"})}
            to={"/projects"}
            className="relative overflow-hidden px-6 py-3 font-bold text-white rounded-full backdrop-blur-lg bg-white/10 group"
          >
            <span className="relative z-10 rounded-full">View My Projects</span>
            <span className="absolute rounded-full inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>

      <section className=" linierEffect rounded-b-3xl">
        <InShortAbout />
        <ProjectsSection />
        <Skills />
        <ConnectSection />
      </section>

    </>
  );
};

export default Home;
