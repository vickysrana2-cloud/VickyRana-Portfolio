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
} from "react-icons/fa";

const FullStackResume = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 bg-white rounded-2xl shadow-2xl overflow-hidden font-sans border border-gray-100">
      {/* HEADER with improved gradient and layout */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-10 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">VICKY RANA</h1>
            <p className="text-blue-300 text-lg font-medium">Aspiring Full Stack Developer</p>
            <p className="max-w-2xl text-gray-300 text-sm leading-relaxed">
              Aspiring Full Stack Developer with hands-on experience building
              responsive web applications using React, JavaScript, and Tailwind CSS.
              Practical backend exposure with Java, Spring Boot, REST APIs, Hibernate/JPA,
              MySQL, and JWT authentication. Focused on clean, efficient code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2"><FaEnvelope className="text-blue-300" /> vickysrana2@gmail.com</div>
            <div className="flex items-center gap-2"><FaPhone className="text-blue-300" /> 7218869971</div>
            <div className="flex items-center gap-2"><FaLinkedin className="text-blue-300" /> vicky-rana-7457ab225</div>
            <div className="flex items-center gap-2"><FaGithub className="text-blue-300" /> vickysrana2-cloud</div>
            <div className="flex items-center gap-2 sm:col-span-2"><FaMapMarkerAlt className="text-blue-300" /> Nagpur, Maharashtra</div>
          </div>
        </div>
      </div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* SIDEBAR - refined with card-like sections */}
<aside className="bg-slate-50/50 p-6 md:p-8 border-r border-slate-200 space-y-6">
  
{/* Technical Skills */}
<div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 shadow-sm">
  <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
    <div className="rounded-lg bg-blue-50 p-1.5 text-blue-600">
      <FaCode className="h-4 w-4" />
    </div>
    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
      Technical Skills
    </h2>
  </div>

  <div className="space-y-5">

    {/* Frontend */}
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-amber-800 mb-2">
        Frontend
      </h3>
      <div className="flex flex-wrap gap-2">
        {["HTML5","CSS3","JavaScript (ES6+)","React.js","Bootstrap","Tailwind CSS","Responsive Design"].map(skill => (
          <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-amber-800 mb-2">
        Backend & Database
      </h3>
      <div className="flex flex-wrap gap-2">
        {["Java","Spring Boot","REST APIs","Hibernate/JPA","Spring Security","JWT","OAuth 2.0","MySQL","JSON","Postman"].map(skill => (
          <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-amber-800 mb-2">
        Tools
      </h3>
      <div className="flex flex-wrap gap-2">
        {["Git","GitHub","Branching & Merging","Version Control"].map(skill => (
          <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Soft Skills */}
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-wider text-amber-800 mb-2">
        Professional Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {["Collaboration","Teamwork","Adaptability","Problem-Solving"].map(skill => (
          <span key={skill} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full">
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
        { degree: "12th — Computer Science", school: "HSC Board", date: "2019" },
        { degree: "10th", school: "SSC Board", date: "2017" }
      ].map((item, idx) => (
        <div key={idx} className="flex items-baseline justify-between border-b border-slate-100 pb-2 last:border-0">
          <div>
            <p className="font-medium text-slate-800">{item.degree}</p>
            <p className="text-xs text-slate-500">{item.school}</p>
          </div>
          <span className="text-xs font-medium text-slate-400">{item.date}</span>
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
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="h-4 w-4 text-slate-400" />
        <span className="text-sm text-slate-700">12 Feb 2001</span>
      </div>
      <div className="flex items-center gap-3">
        <FaLanguage className="h-4 w-4 text-slate-400" />
        <span className="text-sm text-slate-700">English, Hindi, Marathi</span>
      </div>
    </div>
  </div>

</aside>

        {/* MAIN CONTENT - professional cards */}
        <main className="lg:col-span-2 p-6 md:p-8 space-y-8">
          
          {/* Projects Section */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3 mb-5">
              <FaBriefcase className="text-blue-500" /> Projects
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">StayEase – Hotel Booking Platform</h3>
                <p className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">React.js, Spring Boot, REST APIs, MySQL, JWT, Tailwind CSS</p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Built responsive app for browsing, ordering, and tracking deliveries</li>
                  <li>Integrated authentication + payment simulation</li>
                  <li>Improved UI responsiveness via optimized API usage</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">Pawsitive – Pet Care Management</h3>
                <p className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">React.js, Spring Boot, REST APIs, MySQL, JWT</p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Developed backend services for users and pets</li>
                  <li>Implemented JWT role-based authentication</li>
                  <li>Optimized database using Hibernate/JPA</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">QuickBite – Food Delivery App</h3>
                <p className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">React, JavaScript, Swiggy API, Tailwind CSS</p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Built responsive food ordering platform</li>
                  <li>Real-time order tracking system</li>
                  <li>Improved frontend rendering performance</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-800">WeatherWatch – Hackathon Project (Silver Medal)</h3>
                <p className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">React, Context API, Google Maps API, Weatherbit API</p>
                <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
                  <li>Led team as project leader</li>
                  <li>Built real-time weather tracking app</li>
                  <li>Multi-day forecast + dynamic UI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3 mb-5">
              <FaBriefcase className="text-blue-500" /> Work Experience
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-gray-800">Quality Engineer</h3>
                <p className="text-sm text-gray-500">Accurate Engineering Company Pvt. Ltd | Dec 2023 – Jun 2024</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                  <li>Ensured quality standards through validation</li>
                  <li>Maintained documentation for improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Quality Engineer</h3>
                <p className="text-sm text-gray-500">Deeksha Exports Pvt. Ltd | Jul 2024 – Feb 2025</p>
                <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                  <li>Performed structured verification processes</li>
                  <li>Collaborated to resolve defects and improve efficiency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3 mb-4">
              <FaCertificate className="text-blue-500" /> Certifications & Achievements
            </h2>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>Java Full Stack Web Development Essentials – IT Vedant</li>
              <li>Hackathon Winner – WeatherWatch (Silver Medal, Team Leader)</li>
              <li>JavaScript Basics – HackerRank</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FullStackResume;