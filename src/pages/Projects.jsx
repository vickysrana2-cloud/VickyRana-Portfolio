import React, { useState, useEffect } from "react";
import ResponsivePreview from "../components/ResponsivePreview";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeProject !== null ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [activeProject]);

  const projects = [
    {
      title: "Daily Planner App",
      description:
        "Manage tasks efficiently with real-time updates and seamless synchronization.",
      tech: ["React", "CSS", "API"],
      github: "https://github.com/vickysrana2-cloud/daily-Planner",
      url: "https://daily-planner-orpin.vercel.app/",
    },
    {
      title: "Parking Lot Manager",
      description:
        "Smart system to manage parking slots and vehicles with intuitive controls.",
      tech: ["JavaScript", "Tailwind", "Local Storage"],
      github: "https://github.com/vickysrana2-cloud/parking-lot-manager",
      url: "https://parking-lot-manager.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects and skills with modern design.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/vickysrana2-cloud",
    },
  ];

  return (
    <section className="  my-2 rounded-3xl   min-h-screen text-white px-6 py-16 bg-[radial-gradient(circle_at_center,_#5C4DB8_0%,_#0A1E46_60%,_#2E2A5D_10%)]">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slower"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header with accent line */}
      <div className="relative z-10 text-center mb-24">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
          <span className="text-sm font-mono uppercase tracking-wider text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm">
            Portfolio
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        <h1 className="text-6xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400 tracking-tighter drop-shadow-2xl">
          My Projects
        </h1>
        <div className="mt-3 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Explore the work I’ve built with modern technologies and attention to
          detail.
        </p>
      </div>

      {/* Premium Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => setActiveProject(i)}
            className="group relative cursor-pointer rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30"
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-blue-600/20 transition-all duration-700"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>

            <div className="relative p-6 md:p-8">
              {/* Tech badges with icons */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-purple-500/40 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                    {t}
                  </span>
                ))}
              </div>

              {/* Title with gradient and icon */}
              <div className="flex items-start justify-between">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:to-white transition-all duration-500">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-400 mt-4 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex items-center justify-between">
                {project.url && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(i);
                    }}
                    className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-white/10 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:gap-3"
                  >
                    <span>Live Preview</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <FaGithub className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Modal with Enter/Exit Animation */}
      {activeProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          {/* Backdrop with blur and fade */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fadeIn"></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-7xl max-h-full  bg-gradient-to-br from-[#0F172A]/95 to-[#111827]/95 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl shadow-black/50 overflow-hidden animate-slideUp">
            {/* Modal Header with decorative line */}
            <div className="flex items-center justify-between p-2 border-b border-white/10 bg-black/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {projects[activeProject].title}
                </h3>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full">
                  Live Preview
                </span>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Preview Content with Custom Scrollbar */}
            <div className="overflow-y-auto max-h-[calc(90vh-70px)] custom-scrollbar">
              <ResponsivePreview
                url={projects[activeProject].url}
                proDetail={projects[activeProject]}
              />
            </div>
          </div>
        </div>
      )}

      {/* Global Animations & Custom Scrollbar */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translate(20px, -40px);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }

        /* reuse same keyframe with different durations */
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        /* scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.9);
        }
      `}</style>
    </section>
  );
};

export default Projects;
