import React from 'react';
import { FaIndustry, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const PastExperienceSection = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-auto min-h-auto md:min-h-[420px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b1120] overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 lg:px-16 py-8 md:py-12 lg:py-0 text-white font-sans gap-8 md:gap-6 lg:gap-0">
      {/* Decorative dots (top-right) */}
      <div className="absolute top-6 right-6 hidden grid-cols-2 gap-2 opacity-40 sm:top-8 sm:right-8 md:grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-amber-400/80 rounded-full shadow-lg shadow-amber-400/20" />
        ))}
      </div>

      {/* Decorative dots (bottom-left) */}
      <div className="absolute bottom-8 left-6 hidden grid-cols-3 gap-2 opacity-40 sm:bottom-12 sm:left-8 md:grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-amber-400/80 rounded-full shadow-lg shadow-amber-400/20" />
        ))}
      </div>

      {/* LEFT: Content */}
      <div className="relative z-10 w-full md:w-3/5 space-y-3 sm:space-y-4 md:space-y-5">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 drop-shadow-lg">
            PAST EXPERIENCE
          </h2>
          <div className="border-t border-amber-400/30 w-[70%] md:w-[60%]"></div>
        </div>

        {/* Role & Company Cards */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10 shadow-lg">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg shrink-0">
              <FaIndustry className="text-amber-400 text-lg sm:text-2xl" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-lg sm:text-xl font-bold text-white">Quality Engineer</h3>
              <p className="text-amber-300/90 text-xs sm:text-sm font-medium mb-2">Mechanical Domain</p>
              
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300/90 mb-3">
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-amber-400/70 text-xs shrink-0" />
                  <span className="break-words">Accurate Engineering Company Pvt. Ltd</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-400/70 text-xs shrink-0" />
                  <span>Dec 2023 – Jun 2024</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300/90">
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-amber-400/70 text-xs shrink-0" />
                  <span className="break-words">Deeksha Exports Pvt. Ltd</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-400/70 text-xs shrink-0" />
                  <span>Jul 2024 – Feb 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 sm:space-y-3 bg-white/5 backdrop-blur-sm p-4 sm:p-5 rounded-lg sm:rounded-xl border border-white/10">
            {[
              'Ensured quality standards through validation and structured verification',
              'Maintained documentation to support process improvements',
              'Collaborated to resolve defects and improve production efficiency'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200/90">
                <FaCheckCircle className="text-amber-400 mt-0.5 sm:mt-1 shrink-0 text-xs sm:text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT: Visual Element - Premium Stat/Icon Display */}
      <div className="relative w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
        {/* Decorative Frame */}
        <div className="absolute w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-[160px] sm:h-[200px] md:h-[220px] lg:h-[260px] border-[16px] sm:border-[20px] md:border-[25px] border-amber-400/20 backdrop-blur-sm rounded-sm shadow-2xl"></div>
        
        {/* Content Box */}
        <div className="relative z-10 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-lg sm:rounded-xl border border-amber-400/30 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center">
          <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg shadow-amber-500/30 shrink-0">
            <FaIndustry className="text-slate-900 text-xl sm:text-2xl md:text-3xl" />
          </div>
          <h4 className="text-amber-300 font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider">Mechanical</h4>
          <p className="text-slate-300/80 text-xs mt-0.5 sm:mt-1">Quality Engineering</p>
          <div className="mt-2 sm:mt-3 w-8 sm:w-10 md:w-12 h-0.5 bg-amber-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-20 text-amber-300/30 text-lg sm:text-xl md:hidden lg:block">~~~</div>
      <div className="absolute top-8 right-8 md:top-10 md:right-12 lg:right-40 text-amber-300/30 text-lg sm:text-xl md:hidden lg:block">~~~</div>
    </div>
  );
};

export default PastExperienceSection;