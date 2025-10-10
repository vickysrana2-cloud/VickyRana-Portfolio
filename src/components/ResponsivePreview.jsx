import React, { useState } from "react";

export default function ResponsivePreview({ url }) {
  const [device, setDevice] = useState("desktop");

  const frameSizes = {
    desktop: "w-full max-w-6xl h-[700px]",
    tablet: "w-[768px] h-[650px]",
    tabletPortrait: "w-[600px] h-[650px]",
    mobile: "w-[375px] h-[600px]",
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Toolbar */}
      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {[
          { id: "desktop", label: "Desktop" },
          { id: "tablet", label: "Tablet" },
          { id: "tabletPortrait", label: "Tablet (Portrait)" },
          { id: "mobile", label: "Mobile" },
        ].map((d) => (
          <button
            key={d.id}
            onClick={() => setDevice(d.id)}
            className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
              device === d.id
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Preview Frame */}
      <div
        className={`border-[18px] border-gray-400 bg-white  rounded-4xl shadow-xl shadow-black/80 overflow-hidden transition-all duration-300 ${frameSizes[device]}`}
      >
        <iframe
          //   src="https://daily-planner-orpin.vercel.app/"
          src={url}
          className="w-full h-full border-none"
          title="Weather App Demo"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
