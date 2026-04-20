import React from "react";
import ConnectSection from "../components/ConnectSection";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaVimeoV,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import contactme_banner from "../assets/contactme_banner.png";

const Contact = () => {
  return (
    <div className="my-2 bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl">
      {/* 🔹 HERO BANNER */}
      <div className="relative w-full h-[400px] lg:h-[500px]">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center rounded-t-3xl"
          style={{ backgroundImage: `url(${contactme_banner})` }}
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

        {/* 🔹 LEFT PANEL (STACKED ON BANNER) */}
        <div className="absolute bottom-[-100px] left-1/2 lg:left-[8%] transform -translate-x-1/2 lg:translate-x-0 w-[90%] lg:w-[35%]">
          <div className="bg-gradient-to-b from-purple-700 to-purple-900 text-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">CONTACT ME</h2>

            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope />
                vickysrana2@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> 7218869971
              </p>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                Nagpur, Maharashtra
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 font-semibold">Social</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-3">
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/vicky-rana-7457ab225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Vicky Rana
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 SPACE FOR OVERLAP */}
      <div className="h-[140px]"></div>

      {/* 🔹 CONNECT SECTION BELOW BANNER */}
      <div className="px-6 lg:px-16 pb-16 pt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-right">
            LET’S CONNECT
          </h2>

          <p className="text-gray-400 text-lg mb-6 text-right">
            Let’s talk
          </p>

          <ConnectSection a="Have a project, opportunity," b=" or idea ?" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
