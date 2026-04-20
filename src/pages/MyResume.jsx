import React, { useState } from "react";
import FullStackResume from "./resumes/FullStackResume";
import { FaLaptopCode, FaServer, FaRocket, FaDownload } from "react-icons/fa";
import fullStackResume from "../assets/resumePdf/fullStack_resume.pdf";

const FrontendResume = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
      <FaLaptopCode /> Frontend Developer
    </h3>
  </div>
);

const BackendResume = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
      <FaServer /> Backend Developer
    </h3>
  </div>
);

const MyResume = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
    { id: "fullstack", label: "Full Stack", icon: <FaRocket /> },
  ];

  // ✅ Dynamic PDF mapping
  const pdfMap = {
    frontend: "/resumes/frontend-resume.pdf",
    backend: "/resumes/backend-resume.pdf",
    fullstack: fullStackResume,
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfMap[activeTab];
    link.download = `${activeTab}-resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full mt-2 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl text-white">

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 pt-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">My Resume</h1>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:scale-105 transition shadow-lg"
        >
          <FaDownload />
          Download {activeTab} Resume
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex bg-black/40 backdrop-blur-md rounded-full p-1.5 border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12">
        {activeTab === "frontend" && <FrontendResume />}
        {activeTab === "backend" && <BackendResume />}
        {activeTab === "fullstack" && <FullStackResume />}
      </div>
    </div>
  );
};

export default MyResume;