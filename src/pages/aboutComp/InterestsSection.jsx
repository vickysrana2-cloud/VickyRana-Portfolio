import React from "react";
import { FaChessKnight, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const InterestsSection = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-8 text-white sm:gap-8 sm:px-6 sm:py-12 lg:min-h-[550px] lg:flex-row lg:px-16 lg:py-0">
      {/* Decorative dots (top-left) */}
      <div className="absolute top-6 left-6 hidden grid-cols-2 gap-2 opacity-50 sm:top-8 sm:left-8 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* Decorative dots (bottom-right) */}
      <div className="absolute bottom-12 right-8 hidden grid-cols-3 gap-2 opacity-50 sm:bottom-16 sm:right-16 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* LEFT: Content */}
      <div className="z-10 w-full space-y-3 text-center sm:space-y-4 lg:space-y-6 lg:w-1/2 lg:text-left">
        <h2 className="text-2xl font-black uppercase tracking-tight text-amber-400 sm:text-4xl lg:text-5xl">
          INTERESTS & HOBBIES
        </h2>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[70%] lg:mx-0" />

        <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm lg:mx-0">
          A mix of analytical thinking and creative exploration keeps me engaged
          outside of work. These interests influence how I approach
          problem-solving and design.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-1 lg:justify-start">
          {['Technology', 'Gaming', 'UI Design', 'Reading'].map((item) => (
            <span key={item} className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900 shadow-md sm:px-4 sm:py-2 sm:text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: Interests visual with frame */}
      <div className="relative flex min-h-[220px] w-full items-center justify-center sm:min-h-[260px] lg:w-1/2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[180px] w-[160px] border-[16px] border-amber-400/40 sm:h-[240px] sm:w-[200px] sm:border-[20px] lg:h-[420px] lg:w-[360px] lg:border-[40px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 sm:mb-4 sm:h-28 sm:w-28">
            <HiOutlineSparkles className="text-4xl text-slate-900 sm:text-6xl" />
          </div>

          <div className="flex gap-3 text-lg text-amber-300 opacity-90 sm:gap-5 sm:text-2xl">
            <FaLaptopCode />
            <FaChessKnight />
            <FaBookOpen />
          </div>

          <p className="mt-3 text-xs text-slate-300/80">Curiosity • Creativity • Strategy</p>

          <div className="mt-3 h-0.5 w-12 rounded-full bg-amber-400/40 sm:w-16"></div>
        </div>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-12 right-8 hidden text-base text-amber-300 sm:top-16 sm:right-20 sm:text-lg md:block lg:text-2xl lg:right-52">~~~</div>
      <div className="absolute bottom-12 left-6 hidden text-base text-amber-300 sm:bottom-16 sm:left-8 sm:text-lg md:block lg:text-2xl lg:left-20">~~~</div>
    </div>
  );
};

export default InterestsSection;
