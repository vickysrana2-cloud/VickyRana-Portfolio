import React from 'react';
import { HiLightBulb } from "react-icons/hi";

const PurposeSection = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-8 text-white sm:gap-8 sm:px-6 sm:py-12 lg:min-h-[550px] lg:flex-row lg:px-16 lg:py-0">
      {/* Decorative dots (top-left) */}
      <div className="absolute top-6 left-6 hidden grid-cols-2 gap-2 opacity-50 sm:top-8 sm:left-8 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-12 left-8 hidden grid-cols-3 gap-2 opacity-50 sm:bottom-16 sm:left-16 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* LEFT: Why */}
      <div className="z-10 w-full space-y-3 text-center sm:space-y-4 lg:space-y-6 lg:w-1/3 lg:text-left">
        <h2 className="text-2xl font-black uppercase tracking-tight text-amber-400 sm:text-3xl lg:text-4xl">
          WHY I DO THIS
        </h2>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[80%] lg:mx-0" />

        <p className="mx-auto max-w-xs text-xs leading-relaxed text-slate-300 sm:text-sm lg:mx-0">
          Driven by solving meaningful problems and building solutions that create
          measurable impact through thoughtful design and engineering.
        </p>
      </div>

      {/* CENTER: icon with frame */}
      <div className="relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[240px] lg:w-1/3">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[180px] w-[160px] border-[16px] border-amber-400/40 sm:h-[240px] sm:w-[200px] sm:border-[20px] lg:h-[320px] lg:w-[260px] lg:border-[30px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center sm:p-6">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 sm:mb-4 sm:h-20 sm:w-20">
            <HiLightBulb className="text-4xl text-slate-900 sm:text-6xl" />
          </div>

          <h4 className="text-base font-bold uppercase tracking-wider text-amber-300 sm:text-lg">Purpose</h4>

          <p className="mt-1 text-xs text-slate-300/80">Driven by Intent & Vision</p>

          <div className="mt-3 h-0.5 w-10 rounded-full bg-amber-400/40 sm:w-12"></div>
        </div>
      </div>

      {/* RIGHT: What */}
      <div className="z-10 w-full space-y-3 text-center sm:space-y-4 lg:space-y-6 lg:w-1/3 lg:text-right">
        <h2 className="text-2xl font-black uppercase tracking-tight text-amber-400 sm:text-3xl lg:text-4xl">
          WHAT I MAKE
        </h2>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[80%] lg:ml-auto lg:mr-0" />

        <p className="mx-auto max-w-xs text-xs leading-relaxed text-slate-300 sm:text-sm lg:ml-auto lg:mr-0">
          I build modern React applications, scalable UI systems, and clean,
          maintainable frontend architectures focused on performance and usability.
        </p>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-12 right-8 hidden text-base text-amber-300 sm:top-16 sm:right-16 sm:text-lg md:block lg:text-2xl lg:right-40">~~~</div>
      <div className="absolute bottom-12 left-6 hidden text-base text-amber-300 sm:bottom-16 sm:left-8 sm:text-lg md:block lg:text-2xl lg:left-20">~~~</div>
    </div>
  );
};

export default PurposeSection;
