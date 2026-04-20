import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProjectsSection from "./ProjectsSection";
import InShortAbout from "./InShortAbout";
import Skills from "./Skills";
import ConnectSection from "./ConnectSection";
import heroImg from "../assets/img-hero_section.png";

const Home = () => {
  return (
    <>
      {/* HERO SECTION → using your CSS */}
      <div className="upperhero relative min-h-[480px] lg:min-h-screen mt-2 overflow-hidden rounded-t-3xl flex items-center">
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

        {/* Circles */}
        <div className="circle circle1 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"></div>
        <div className="circle circle2 drop-shadow-[0_0_15px_rgba(255,69,0,0.6)]"></div>
        <div className="circle circle3 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"></div>
        <div className="circle circle4 drop-shadow-[0_0_15px_rgba(66,133,244,0.6)]"></div>
        <div className="circle circle5 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>

        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT */}
          <div className="text-center lg:text-left max-w-xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-gray-300 tracking-wider">
                AVAILABLE FOR WORK
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Hi there,
            </h1>

            <h1 className="text-5xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              I’m Vicky Rana
            </h1>

            <p className="text-gray-300 text-lg lg:text-xl font-light mb-8 tracking-wide border-l-4 border-orange-500 pl-4">
              Web Developer | Building Modern, Responsive Web Apps
            </p>

            <Link
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              to="/projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-full bg-gradient-to-r from-orange-600 to-pink-600 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View My Projects</span>
              <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* RIGHT IMAGE (unchanged) */}
          <div className="hidden lg:flex relative w-full lg:w-1/2 justify-end mt-10 lg:mt-0 group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[460px] h-[460px] rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>

            <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

            <div className="absolute bottom-0 right-10 w-[70%] h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full "></div>

            <img
              src={heroImg}
              alt="Hero"
              className="relative z-10 w-[70%] sm:w-[60%] lg:w-[75%] object-contain drop-shadow-2xl transform transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs tracking-wider font-mono">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 scroll-down"></div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS → same background */}
      <section className="linierEffect relative rounded-b-3xl border-t border-white/10 shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          <InShortAbout />
          <ProjectsSection />
          <Skills />
          <ConnectSection a="Got a project in" b="mind?" />
        </div>
      </section>
    </>
  );
};

export default Home;