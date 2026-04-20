import React from 'react';
import { HiLightBulb } from "react-icons/hi";


const PurposeSection = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[550px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden flex items-center px-16 text-white font-sans">

      {/* Decorative dots (top-left) */}
      <div className="absolute top-10 left-10 grid grid-cols-2 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-16 left-32 grid grid-cols-3 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* LEFT: Why */}
      <div className="z-10 w-1/3 space-y-6">
        <h2 className="text-4xl font-black uppercase tracking-tight text-amber-400">
          WHY I DO THIS
        </h2>

        <div className="border-t border-amber-400/40 w-[80%]" />

        <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
          Driven by solving meaningful problems and building solutions that create
          measurable impact through thoughtful design and engineering.
        </p>
      </div>

{/* CENTER: icon with frame */}
<div className="relative w-1/3 flex justify-center items-center">

  {/* Frame */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className=" md:w-[260px] md:h-[320px] md:border-[30px] w-[360px] h-[420px] border-[40px] border-amber-400/40"></div>
  </div>

  {/* Card */}
  <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">

    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
      <HiLightBulb className="text-slate-900 text-6xl" />
    </div>

    <h4 className="text-amber-300 font-bold text-lg uppercase tracking-wider">
      Purpose
    </h4>

    <p className="text-slate-300/80 text-xs mt-1">
      Driven by Intent & Vision
    </p>

    <div className="mt-3 w-12 h-0.5 bg-amber-400/40 rounded-full"></div>
  </div>

</div>

      {/* RIGHT: What */}
      <div className="z-10 w-1/3 space-y-6 text-right">
        <h2 className="text-4xl font-black uppercase tracking-tight text-amber-400">
          WHAT I MAKE
        </h2>

        <div className="border-t border-amber-400/40 w-[80%] ml-auto" />

        <p className="text-sm text-slate-300 leading-relaxed max-w-xs ml-auto">
          I build modern React applications, scalable UI systems, and clean,
          maintainable frontend architectures focused on performance and usability.
        </p>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-24 right-40 text-amber-300 text-2xl">~~~</div>
      <div className="absolute bottom-20 right-10 text-amber-300 text-2xl">~~~</div>

    </div>
  );
};

export default PurposeSection;