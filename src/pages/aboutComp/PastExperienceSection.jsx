import React from 'react';
import { FaIndustry, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const PastExperienceSection = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-auto min-h-[420px] md:h-[420px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b1120] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0 text-white font-sans">
      {/* Decorative dots (top-right) */}
      <div className="absolute top-8 right-8 grid grid-cols-2 gap-3 opacity-40">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-amber-400/80 rounded-full shadow-lg shadow-amber-400/20" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-12 left-20 grid grid-cols-3 gap-3 opacity-40">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-amber-400/80 rounded-full shadow-lg shadow-amber-400/20" />
        ))}
      </div>

      {/* LEFT: Content */}
      <div className="relative z-10 w-full md:w-3/5 space-y-5 md:space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 drop-shadow-lg">
            PAST EXPERIENCE
          </h2>
          <div className="border-t border-amber-400/30 w-4/5 md:w-[60%]"></div>
        </div>

        {/* Role & Company Cards */}
        <div className="space-y-5">
          <div className="flex items-start gap-5 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-lg">
            <div className="p-3 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg">
              <FaIndustry className="text-amber-400 text-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">Quality Engineer</h3>
              <p className="text-amber-300/90 text-sm font-medium mb-2">Mechanical Domain</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300/90 mb-3">
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-amber-400/70 text-xs" />
                  <span>Accurate Engineering Company Pvt. Ltd</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-400/70 text-xs" />
                  <span>Dec 2023 – Jun 2024</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300/90">
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-amber-400/70 text-xs" />
                  <span>Deeksha Exports Pvt. Ltd</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-400/70 text-xs" />
                  <span>Jul 2024 – Feb 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-3 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
            {[
              'Ensured quality standards through validation and structured verification',
              'Maintained documentation to support process improvements',
              'Collaborated to resolve defects and improve production efficiency'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200/90">
                <FaCheckCircle className="text-amber-400 mt-1 shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT: Visual Element - Premium Stat/Icon Display */}
      <div className="relative w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
        {/* Decorative Frame */}
        <div className="absolute w-[220px] md:w-[260px] h-[220px] md:h-[260px] border-[25px] border-amber-400/20 backdrop-blur-sm rounded-sm shadow-2xl"></div>
        
        {/* Content Box */}
        <div className="relative z-10 w-[180px] md:w-[200px] h-[180px] md:h-[200px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-amber-400/30 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
            <FaIndustry className="text-slate-900 text-3xl" />
          </div>
          <h4 className="text-amber-300 font-bold text-lg uppercase tracking-wider">Mechanical</h4>
          <p className="text-slate-300/80 text-xs mt-1">Quality Engineering</p>
          <div className="mt-3 w-12 h-0.5 bg-amber-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-8 left-20 md:bottom-10 md:left-20 text-amber-300/30 text-2xl hidden md:block">~~~</div>
      <div className="absolute top-12 right-40 text-amber-300/30 text-2xl hidden md:block">~~~</div>
    </div>
  );
};

export default PastExperienceSection;