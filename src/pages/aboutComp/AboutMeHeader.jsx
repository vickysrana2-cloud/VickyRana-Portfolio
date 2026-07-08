import React from 'react';
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { LuMail } from "react-icons/lu";
import rightImg from "../../assets/img-hero_section.png";

const AboutMeHeader = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-8 text-white sm:gap-10 sm:px-6 sm:py-12 lg:min-h-[550px] lg:flex-row lg:px-16 lg:py-0 lg:items-center">
      {/* Decorative dots (top-right) */}
      <div className="absolute top-6 right-6 hidden grid-cols-2 gap-2 opacity-50 sm:top-8 sm:right-8 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* Decorative dots (bottom-right) */}
      <div className="absolute bottom-12 right-12 hidden grid-cols-3 gap-2 opacity-50 sm:bottom-16 sm:right-20 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* Left Content */}
      <div className="z-10 w-full space-y-3 text-center sm:space-y-4 lg:space-y-6 lg:w-1/2 lg:text-left">
        <h1 className="text-3xl font-black uppercase tracking-tight text-amber-400 sm:text-4xl lg:text-6xl">ABOUT ME</h1>
        <h2 className="text-lg font-light tracking-widest text-white sm:text-2xl lg:text-3xl">VICKY RANA</h2>

        <p className="mx-auto max-w-sm text-xs leading-relaxed text-slate-300 opacity-90 sm:text-sm lg:mx-0 lg:max-w-lg">
          Detail-oriented developer with hands-on experience building responsive and scalable web applications
          using modern technologies. Strong foundation in JavaScript, React, and backend systems with
          Java and Spring Boot, along with practical exposure to APIs, authentication, and database management.
          Brings an analytical mindset shaped by prior engineering experience, with a focus on writing clean,
          efficient, and maintainable code.
        </p>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[80%] lg:mx-0"></div>

        {/* Info Pills */}
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {['12 Feb 2001', 'Nagpur, Maharashtra', 'Languages: EN / HI / MR'].map((item) => (
            <span key={item} className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900 shadow-md sm:px-4 sm:py-2 sm:text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[80%] lg:mx-0"></div>

        {/* Contact */}
        <div className="flex flex-col items-center justify-center gap-2 text-amber-300 sm:flex-row sm:gap-3 lg:justify-start">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-base sm:text-lg" />
            <span className="text-sm sm:text-base lg:text-lg text-white">7218869971</span>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-wrap justify-center gap-4 pt-1 text-base text-amber-300 sm:gap-5 sm:text-lg lg:justify-start">
          <a href="https://www.linkedin.com/in/vicky-rana-7457ab225/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer hover:text-amber-400" />
          </a>
          <a href="https://github.com/vickysrana2-cloud" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:text-amber-400" />
          </a>
          <a href="mailto:vickysrana2@gmail.com" target="_blank" rel="noopener noreferrer">
            <LuMail className="cursor-pointer hover:text-amber-400" />
          </a>
        </div>
      </div>

      {/* RIGHT Placeholder → ICON */}
      <div className="relative mt-6 flex min-h-[220px] w-full items-center justify-center sm:min-h-[280px] lg:absolute lg:right-0 lg:mt-0 lg:h-full lg:w-1/2">
        <div className="absolute h-[180px] w-[160px] border-[12px] border-amber-400/50 sm:h-[240px] sm:w-[200px] sm:border-[20px] lg:h-[420px] lg:w-[420px] lg:border-[50px]"></div>

        <div className="flex h-[160px] w-[140px] items-center justify-center border-2 border-dashed border-amber-400/40 text-sm text-amber-300 sm:h-[220px] sm:w-[180px] lg:h-[400px] lg:w-[300px]">
          <img src={rightImg} alt="profile" className="z-10 h-full w-full object-cover shadow-lg" />
        </div>
      </div>

      <div className="absolute top-16 right-20 hidden text-lg text-amber-300 sm:top-20 sm:right-32 sm:text-xl md:block lg:text-2xl lg:right-64">~~~</div>
      <div className="absolute bottom-12 right-8 hidden text-lg text-amber-300 sm:bottom-16 sm:right-12 sm:text-xl md:block lg:text-2xl lg:right-16">~~~</div>
    </div>
  );
};

export default AboutMeHeader;
