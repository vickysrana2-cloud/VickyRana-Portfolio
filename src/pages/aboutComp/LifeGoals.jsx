import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const LifeGoals = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-8 text-white sm:gap-8 sm:px-6 sm:py-12 lg:min-h-[550px] lg:flex-row lg:px-16 lg:py-0">
      {/* Decorative dots (top-right) */}
      <div className="absolute top-6 right-6 hidden grid-cols-2 gap-2 opacity-50 sm:top-8 sm:right-8 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-12 left-8 hidden grid-cols-3 gap-2 opacity-50 sm:bottom-16 sm:left-12 md:grid lg:opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400 sm:h-2 sm:w-2" />
        ))}
      </div>

      {/* LEFT: Goals visual with frame */}
      <div className="relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[240px] lg:w-1/2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[180px] w-[160px] border-[16px] border-amber-400/40 sm:h-[240px] sm:w-[200px] sm:border-[20px] lg:h-[420px] lg:w-[360px] lg:border-[40px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 sm:mb-4 sm:h-28 sm:w-28">
            <FaBullseye className="text-4xl text-slate-900 sm:text-6xl" />
          </div>

          <h4 className="text-base font-bold uppercase tracking-wider text-amber-300 sm:text-lg">Life Goals</h4>

          <p className="mt-1 max-w-[180px] text-xs text-slate-300/80 sm:max-w-[200px]">Growth • Impact • Balance</p>

          <div className="mt-3 h-0.5 w-12 rounded-full bg-amber-400/40 sm:w-16"></div>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="z-10 w-full space-y-3 text-center sm:space-y-4 lg:space-y-6 lg:w-1/2 lg:text-left">
        <h2 className="text-2xl font-black uppercase tracking-tight text-amber-400 sm:text-4xl lg:text-5xl">
          LIFE GOALS
        </h2>

        <div className="mx-auto w-[90%] border-t border-amber-400/40 sm:w-[70%] lg:mx-0" />

        <div className="space-y-3 sm:space-y-4">
          {[
            'Continuously grow as a developer and problem solver.',
            'Build products that impact real users at scale.',
            'Maintain balance between creativity, discipline, and learning.'
          ].map((goal, i) => (
            <div key={i} className="flex items-start gap-2 text-left sm:gap-3">
              <FaBullseye className="mt-0.5 shrink-0 text-amber-400 text-sm sm:text-base" />
              <p className="max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-12 right-8 hidden text-base text-amber-300 sm:top-16 sm:right-20 sm:text-lg md:block lg:text-2xl lg:right-64">~~~</div>
      <div className="absolute bottom-12 left-6 hidden text-base text-amber-300 sm:bottom-16 sm:left-8 sm:text-lg md:block lg:text-2xl lg:left-16">~~~</div>
    </div>
  );
};

export default LifeGoals;
