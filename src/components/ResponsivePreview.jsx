import React, { useState } from "react";
import { FaGithub, FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

export default function ResponsivePreview({ url, proDetail }) {
  if (!proDetail) return <div className="p-20 text-center text-gray-500">Loading details...</div>;

  const [device, setDevice] = useState("desktop");
  const { title, description, tech, github } = proDetail;

  const devices = [
    { id: "desktop", label: "Desktop", icon: <FaDesktop />, size: "max-w-6xl w-full h-[600px]" },
    { id: "tablet", label: "Tablet", icon: <FaTabletAlt />, size: "max-w-[768px] w-full h-[700px]" },
    { id: "mobile", label: "Mobile", icon: <FaMobileAlt />, size: "max-w-[375px] w-full h-[650px]" },
  ];

  const activeDevice = devices.find((d) => d.id === device);

  return (
    <div className="w-full flex flex-col items-center bg-transparent">
      {/* 1. Device Switcher (Toolbar) */}
      <div className="sticky top-0 z-20 w-full flex justify-center  bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="flex bg-black/20 p-1 rounded-xl border border-white/50">
          {devices.map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d.id)}
              className={`flex items-center gap-2 px-4 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                device === d.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {d.icon}
              <span className="hidden sm:inline">{d.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Live Preview Frame */}
      <div className="w-full flex justify-center pb-8 ">
        {url ? (
          <div
            className={`relative transition-all duration-500 ease-in-out border-[12px] border-gray-700 rounded-[2.5rem] shadow-2xl bg-gray-900 overflow-hidden ${activeDevice.size}`}
          >
            {/* Camera / Notch Detail for Mobile */}
            {device === "mobile" && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10" />
            )}
            
            <iframe
              src={url}
              className="w-full h-full bg-white"
              title="Project Preview"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl w-full max-w-4xl text-gray-500">
            Live preview unavailable for this project
          </div>
        )}
      </div>

      {/* 3. Project Information Card */}
      <article className="relative w-full max-w-6xl mx-auto px-4 pb-12">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30">
          
          {/* Decorative hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                  {title}
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
              </div>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 shadow-xl"
              >
                <FaGithub className="text-xl" />
                View Source Code
              </a>
            </header>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl font-light mb-10">
              {description}
            </p>

            <footer className="border-t border-white/10 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}