import React from 'react';
import { FaPhoneAlt, FaLinkedinIn, FaGithub, FaUserTie } from 'react-icons/fa';
import { LuMail } from "react-icons/lu";
import rightImg from "../../assets/img-hero_section.png";


const AboutMeHeader = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto  h-[550px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden flex items-center px-16 text-white font-sans">

      {/* Decorative dots (top-right) */}
      <div className="absolute top-10 right-10 grid grid-cols-2 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* Decorative dots (bottom-right) */}
      <div className="absolute bottom-20 right-40 grid grid-cols-3 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* Left Content */}
      <div className="z-10 w-1/2 space-y-6">
        <h1 className="text-6xl font-black uppercase tracking-tight text-amber-400">ABOUT ME</h1>
        <h2 className="text-3xl font-light tracking-widest text-white">VICKY RANA</h2>

        <p className="text-sm opacity-90 leading-relaxed max-w-md text-slate-300">
          Detail-oriented developer with hands-on experience building responsive and scalable web applications
          using modern technologies. Strong foundation in JavaScript, React, and backend systems with 
          Java and Spring Boot, along with practical exposure to APIs, authentication, and database management.
          Brings an analytical mindset shaped by prior engineering experience, with a focus on writing clean,
          efficient, and maintainable code.
        </p>

        <div className="border-t border-amber-400/40 w-[80%]"></div>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-3">
          {[
            '12 Feb 2001',
            'Nagpur, Maharashtra',
            'Languages: EN / HI / MR'
          ].map((item) => (
            <span key={item} className="bg-amber-100 text-amber-900 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              {item}
            </span>
          ))}
        </div>

        <div className="border-t border-amber-400/40 w-[80%]"></div>

        {/* Contact */}
        <div className="flex items-center gap-4 text-amber-300">
          <FaPhoneAlt className="text-xl" />
          <span className="text-lg text-white">7218869971</span>
        </div>

        {/* Social */}
        <div className="flex gap-6 pt-2 text-lg text-amber-300">
          <a href="https://www.linkedin.com/in/vicky-rana-7457ab225/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="https://github.com/vickysrana2-cloud" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-amber-400 cursor-pointer" />
          </a>
          <a href="mailto:vickysrana2@gmail.com" target="_blank" rel="noopener noreferrer">
            <LuMail className="hover:text-amber-400 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* RIGHT Placeholder → ICON */}
      <div className="absolute right-0 h-full w-1/2 flex justify-center items-center">
        <div className="absolute w-[420px] h-[420px] border-[50px] border-amber-400/50"></div>

        <div className="w-[300px] h-[400px] border-2 border-dashed border-amber-400/40 flex items-center justify-center text-amber-300 text-sm">
               <img
          src={rightImg}
          alt="profile"
          className=" object-cover z-10 shadow-lg"
        />
        </div>
      </div>

      <div className="absolute top-24 right-64 text-amber-300 text-2xl">~~~</div>
      <div className="absolute bottom-16 right-16 text-amber-300 text-2xl">~~~</div>
    </div>
  );
};

export default AboutMeHeader;