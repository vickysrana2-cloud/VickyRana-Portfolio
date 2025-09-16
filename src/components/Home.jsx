import React from "react";

const Home = () => {
  return (
    <>
      <section
        className="w-full min-h-screen bg-gradient-to-r rounded-3xl my-2 from-black/50  via-gray-700 to-teal-800
           flex items-center justify-center px-6 lg:px-32"
      >
        <div className="text-center lg:text-left max-w-3xl lg:-mt-28 -mt-64">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hi there,
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold text-red-500 mb-6">
            I'm Vicky!
          </h1>
          <p className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed">
            I’m currently pursuing a{" "}
            <span className="text-white font-medium">
              Java Full Stack Web Development
            </span>{" "}
            course and hold a B.Tech degree from RTMNU. I’m passionate about
            building engaging, efficient, and meaningful web applications.
            Scroll down to check out some of my work!
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a href="#projects" className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
        View Projects
      </a>
      <a href="#contact" className="px-6 py-3 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition">
        Contact Me
      </a>
    </div> */}
        </div>
      </section>

      <section className="w-full min-h-[60vh] bg-gray-100 flex items-center justify-center px-6 lg:px-32">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            🚧 Work in Progress
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
            Currently under development. Exciting additions will be available here soon.
          </p>
          <div className="flex items-center justify-center gap-3 text-teal-600 font-medium">
            <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
            <span>Currently in Development…</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
