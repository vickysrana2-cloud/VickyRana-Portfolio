import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ResponsivePreview({ url, proDetail }) {
  if (proDetail == null) {
    return <p>Loading...</p>;
  }

  const [device, setDevice] = useState("desktop");

  const { title, description, tech, github } = proDetail;

  console.log(title, description, tech, github);
  // console.log(proDetail);

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
          src={url}
          className="w-full h-full border-none"
          title="Weather App Demo"
          loading="lazy"
        ></iframe>
      </div>

      <article
        className="
  relative group 
  w-full 
  max-w-6xl 
  mx-auto
  backdrop-blur-2xl 
  bg-white/10 dark:bg-gray-800 
  border border-gray-200 dark:border-gray-700 
  rounded-2xl 
  p-6 md:p-8 lg:p-10 
  my-8 
  shadow-lg hover:shadow-2xl 
  transition-all duration-300 
  hover:-translate-y-1 
  overflow-hidden
"
      >
        {/* Main gradient background that scales on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-amber-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10"></div>

        {/* Content container with gradient text on hover */}
        <div className="relative">
          {/* Header section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-gray-900 group-hover:to-cyan-600 dark:group-hover:from-white dark:group-hover:via-gray-100 dark:group-hover:to-white transition-all duration-500">
                {title}
              </h2>

              {/* GitHub link */}
              <a
                href={github}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r group-hover:from-black/70 group-hover:to-cyan-500 group-hover:text-gray-900 text-white font-medium rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-[1.03]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5 transition-colors duration-500" />
                <span>View Code</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>

            {/* Description */}
            <p className="text-teal-700 group-hover:text-black font-semibold text-base md:text-lg leading-relaxed transition-colors duration-500">
              {description}
            </p>
          </div>

          {/* Tech stack section */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-colors duration-500">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 uppercase tracking-wider mb-4 transition-colors duration-500">
              Technologies Used
            </h3>

            <ul className="flex flex-wrap gap-3">
              {tech.map((t, index) => (
                <li
                  key={index}
                  className="
  px-4 py-2 rounded-full text-sm
  bg-transparent
  border border-gray-300 dark:border-gray-600
  text-black font-semibold dark:text-gray-200
  hover:border-gray-500 dark:hover:border-gray-400
  hover:text-gray-900 dark:hover:text-white
  transition
"

                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
