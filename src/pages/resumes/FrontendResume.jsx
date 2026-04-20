import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCode,
  FaBookOpen,
  FaBriefcase,
  FaCertificate,
  FaUser,
  FaCalendarAlt,
  FaLanguage,
  FaDesktop,
  FaLayerGroup,
} from "react-icons/fa";

const FrontendResume = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 bg-white rounded-2xl shadow-2xl overflow-hidden font-sans border border-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-10 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">VICKY RANA</h1>
            <p className="text-blue-300 text-lg font-medium">Aspiring Frontend Developer</p>
            <p className="max-w-2xl text-gray-300 text-sm leading-relaxed">
              Aspiring Frontend Developer with hands-on experience building responsive and user-friendly web 
              applications using React.js, JavaScript (ES6+), and Tailwind CSS. Strong foundation in 
              component-based architecture, API integration, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />
              <a href="mailto:vickysrana2@gmail.com" className="hover:underline">
                vickysrana2@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-300" />
              7218869971
            </div>

            <div className="flex items-center gap-2">
              <FaLinkedin className="text-blue-300" />
              <a
                href="https://www.linkedin.com/in/vicky-rana-7457ab225"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vicky-rana-7457ab225
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaGithub className="text-blue-300" />
              <a
                href="https://github.com/vickysrana2-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vickysrana2-cloud
              </a>
            </div>

            <div className="flex items-center gap-2 sm:col-span-2">
              <FaMapMarkerAlt className="text-blue-300" />
              Nagpur, Maharashtra
            </div>
          </div>
        </div>
      </div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* SIDEBAR */}
        <aside className="bg-slate-50/50 p-6 md:p-8 border-r border-slate-200 space-y-6">
          
          {/* Technical Skills */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
                <FaDesktop className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                Technical Skills
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-blue-800 mb-2">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-emerald-800 mb-2">
                  UI & Performance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Responsive Design", "Component Architecture", "API Integration", "Performance Optimization"].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-purple-800 mb-2">
                  Tools & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Material UI (MUI)", "Next.js (Basic)", "Git", "GitHub", "Chrome DevTools"].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600">
                <FaBookOpen className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { degree: "Full Stack Web Development", school: "IT Vedant", date: "Feb 2026" },
                { degree: "B.Tech Mechanical Engineering", school: "RTMNU University", date: "2024" },
                { degree: "Diploma (Polytechnic)", school: "MSBTE Board", date: "2021" },
                { degree: "12th Computer Science", school: "HSC Board", date: "2019" },
                { degree: "10th SSC Board", school: "SSC Board", date: "2017" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-baseline justify-between border-b border-slate-100 pb-2 last:border-0">
                  <div className="pr-2">
                    <p className="font-medium text-slate-800 text-[13px]">{item.degree}</p>
                    <p className="text-[10px] text-slate-500">{item.school}</p>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="rounded-lg bg-amber-50 p-1.5 text-amber-600">
                <FaUser className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                Personal
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <FaCalendarAlt className="h-4 w-4 text-slate-400" />
                <span>12 Feb 2001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <FaLanguage className="h-4 w-4 text-slate-400" />
                <span>English, Hindi, Marathi</span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-2 p-6 md:p-8 space-y-8">
          
          {/* Projects Section */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-5">
              <FaLayerGroup className="text-blue-600" /> Key Projects
            </h2>
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">StayEase Hotel Booking Platform</h3>
                <p className="text-xs font-mono text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1">
                  React.js, JavaScript, Tailwind CSS, REST APIs
                </p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Built interactive and responsive UI components for hotel booking, listing, and filtering.</li>
                  <li>Integrated secure user authentication and payment gateway simulations for seamless user journeys.</li>
                  <li>Developed REST APIs and integrated them with the React frontend for testing and visualization.</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">Pawsitive - Pet Care Management Platform</h3>
                <p className="text-xs font-mono text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1">
                  React.js, Tailwind CSS, REST APIs, JWT
                </p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Developed responsive UI components using React.js and Tailwind CSS for managing user and pet data.</li>
                  <li>Integrated REST APIs and handled client-side state for dynamic data rendering.</li>
                  <li>Implemented role-based UI access to ensure a consistent experience across all devices.</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">WeatherWatch - Weather Tracking App</h3>
                <p className="text-xs font-mono text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1">
                  React, Context API, Google Maps API, Weatherbit API
                </p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Led the project team, coordinating tasks and ensuring successful execution.</li>
                  <li>Implemented dynamic visualization for temperature, humidity, and multi-day forecasts.</li>
                  <li>Designed a clean, minimal, and responsive UI for enhanced readability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-slate-700 pl-3 mb-5">
              <FaBriefcase className="text-slate-700" /> Work Experience
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-800">Quality Engineer</h3>
                  <span className="text-xs font-semibold text-slate-500">Jul 2024 – Feb 2025</span>
                </div>
                <p className="text-sm text-blue-700 font-medium">Deeksha Exports Pvt. Ltd | Pune</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                  <li>Conducted structured verification to ensure adherence to quality benchmarks and standards.</li>
                  <li>Collaborated with cross-functional teams to resolve defects and improve process efficiency.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-800">Quality Engineer</h3>
                  <span className="text-xs font-semibold text-slate-500">Dec 2023 – Jun 2024</span>
                </div>
                <p className="text-sm text-blue-700 font-medium">Accurate Engineering Company Pvt. Ltd | Pune</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                  <li>Ensured adherence to quality standards through structured validation and monitoring.</li>
                  <li>Analyzed workflows and maintained documentation to support continuous improvement.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-amber-500 pl-3 mb-4">
              <FaCertificate className="text-amber-500" /> Certifications & Achievements
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                 Java Full Stack Web Development Essentials
              </li>
              <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                 Hackathon Winner - Silver Medal (Team Leader)
              </li>
              <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100">
                 JavaScript Basics - HackerRank
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrontendResume;