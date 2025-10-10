import { useState } from "react";
import { Link } from "react-router";

export default function InShortAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl content-start p-6 h-[480px]  lg:h-screen text-left max-w-5xl pt-20 lg:pt-48 mx-auto">
      <div className="  lg:px-24">
        <h2
          className="text-4xl md:text-5xl font-semibold mb-4 text-teal-200 
             drop-shadow-[0_0_10px_#00f7ff]"
        >
          At a Glance
        </h2>

        <p
          className="text-sm md:text-xl lg:text-2xl leading-normal font-semibold  font-sans italic text-justify 
              bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent 
              drop-shadow-lg"
        >
          {expanded
            ? "I am pursuing Java Full Stack Web Development training with hands-on experience in building web applications using HTML, CSS, JavaScript, React, and Java Spring Boot. A passionate learner, I am exploring full stack development with a strong focus on solving real-world problems through clean, modern, and efficient web solutions."
            : "I am pursuing Java Full Stack Web Development training with hands-on experience in building web applications using HTML, CSS, JavaScript, React, and Java Spring Boot."}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-indigo-600 font-medium  hover:text-indigo-300 "
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
      <Link
        onClick={()=>window.scrollTo({top:0, left:0, behavior:"smooth"})}
        to="/aboutMe"
        className="inline-block mt-5 lg:px-6 lg:py-2.5 px-3 py-1 lg:ml-24 rounded-full backdrop-blur-2xl bg-white/10
             text-white font-semibold hover:bg-white/20 hover:scale-105 transition-transform duration-200"
      >
        More About Me
      </Link>
    </div>
  );
}
