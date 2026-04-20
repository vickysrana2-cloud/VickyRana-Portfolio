import React from 'react';
import { FaBullseye } from 'react-icons/fa';


const LifeGoals = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[550px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden flex items-center px-16 text-white font-sans">

      {/* Decorative dots (top-right) */}
      <div className="absolute top-10 right-10 grid grid-cols-2 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-16 left-24 grid grid-cols-3 gap-3 opacity-70">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full" />
        ))}
      </div>

      {/* LEFT: Image with frame */}
      {/* <div className="relative w-1/2 flex justify-center items-center"> */}
        {/* Frame */}
        {/* <div className="absolute w-[360px] h-[420px] border-[40px] border-amber-400/40"></div> */}

        {/* Image */}
        {/* <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          alt="profile"
          className="w-[260px] h-[340px] object-cover z-10 shadow-lg"
        />
      </div> */}

      {/* LEFT: Goals visual with frame */}
<div className="relative w-1/2 flex justify-center items-center">

  {/* Frame */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="absolute w-[360px] h-[420px] border-[40px] border-amber-400/40"></div>
  </div>

  {/* Icon Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center">

    <div className="w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 mb-5">
      <FaBullseye className="text-slate-900 text-6xl" />
    </div>

    <h4 className="text-amber-300 font-bold text-lg uppercase tracking-wider">
      Life Goals
    </h4>

    <p className="text-slate-300/80 text-xs mt-1 max-w-[200px]">
      Growth • Impact • Balance
    </p>

    <div className="mt-3 w-16 h-0.5 bg-amber-400/40 rounded-full"></div>
  </div>

</div>

      {/* RIGHT: Content */}
      <div className="z-10 w-1/2 space-y-6">
        <h2 className="text-5xl font-black uppercase tracking-tight text-amber-400">
          LIFE GOALS
        </h2>

        <div className="border-t border-amber-400/40 w-[70%]" />

        {/* Goals list */}
        <div className="space-y-4">
          {[
            'Continuously grow as a developer and problem solver.',
            'Build products that impact real users at scale.',
            'Maintain balance between creativity, discipline, and learning.'
          ].map((goal, i) => (
            <div key={i} className="flex items-start gap-4">
              <FaBullseye className="text-amber-400 mt-1 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative waves */}
      <div className="absolute top-24 right-64 text-amber-300 text-2xl">~~~</div>
      <div className="absolute bottom-20 right-16 text-amber-300 text-2xl">~~~</div>

    </div>
  );
};

export default LifeGoals;