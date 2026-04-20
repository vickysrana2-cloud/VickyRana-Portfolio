import React from "react";
import { FaChessKnight, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const InterestsSection = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[550px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden flex items-center px-16 text-white font-sans">
      {/* Decorative dots (top-left) */}
      <div className="absolute top-10 left-10 grid grid-cols-2 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* Decorative dots (bottom-right) */}
      <div className="absolute bottom-20 right-32 grid grid-cols-3 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* LEFT: Content */}
      <div className="z-10 w-1/2 space-y-6">
        <h2 className="text-5xl font-black uppercase tracking-tight text-amber-400">
          INTERESTS & HOBBIES
        </h2>

        <div className="border-t border-amber-400/40 w-[70%]" />

        <p className="text-sm text-slate-300 max-w-md leading-relaxed">
          A mix of analytical thinking and creative exploration keeps me engaged
          outside of work. These interests influence how I approach
          problem-solving and design.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 pt-2">
          {["Technology", "Gaming", "UI Design", "Reading"].map((item) => (
            <span
              key={item}
              className="bg-amber-100 text-amber-900 px-5 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: Interests visual with frame */}
      <div className="relative w-1/2 flex justify-center items-center">
        {/* Frame */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[360px] h-[420px] border-[40px] border-amber-400/40"></div>
        </div>

        {/* Icon Cluster */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Main Icon */}
          <div className="w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6">
            <HiOutlineSparkles className="text-slate-900 text-6xl" />
          </div>

          {/* Small icons row */}
          <div className="flex gap-5 text-amber-300 text-2xl opacity-90">
            <FaLaptopCode />
            <FaChessKnight />
            <FaBookOpen />
          </div>

          <p className="text-slate-300/80 text-xs mt-3">
            Curiosity • Creativity • Strategy
          </p>

          <div className="mt-3 w-16 h-0.5 bg-amber-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-24 right-52 text-amber-300 text-2xl">
        ~~~
      </div>
      <div className="absolute bottom-16 left-20 text-amber-300 text-2xl">
        ~~~
      </div>
    </div>
  );
};

export default InterestsSection;
