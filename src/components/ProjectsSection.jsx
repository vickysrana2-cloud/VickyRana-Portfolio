import "../App.css";
import { Link } from "react-router";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaJs, FaGithub, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { AiOutlineApi, AiOutlineDatabase } from "react-icons/ai";

export default function ProjectsSection() {
  return (
    <section className="min-h-screen text-white flex flex-wrap flex-col items-center relative py-10">
      {/* Title */}
      <div className="text-center lg:text-start mb-20 relative z-10 lg:w-5xl">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Featured Projects
        </h1>
        <p className="text-gray-400 mt-2">
          A showcase of the applications I’ve designed and developed.
        </p>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative z-10 items-end lg:mb-72 mb-24">
        {/* Left Box */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
          <p className="text-lg text-gray-200 font-bold">
            Introducing{" "}
            <span className="text-orange-400 text-2xl">QuickBite</span> –{" "}
            <span className="text-orange-400 text-2xl">Food Delivery App</span>{" "}
            that{" "}
            <span className="text-blue-400">brings meals to your door</span>
          </p>

          <div className="mt-4 flex items-center justify-between">
            {/* Project detail */}
            <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl relative transition-shadow">
              {/* Description */}
              <p className="text-gray-400 text-lg mb-3 ">
                A full-stack web app where users can browse restaurants, order
                food, and track delivery in real-time. Solves the hassle of
                finding meals quickly with a simple, responsive interface.
              </p>

              {/* Tech Stack */}
              <div className="flex gap-3 text-xl mb-3">
                <FaReact title="React" className="text-teal-500" />
                <FaJs title="JavaScript" className="text-yellow-500" />
                <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
                <FaGithub title="GitHub" />
                <AiOutlineApi
                  title="API Integration"
                  className="text-red-500"
                />
              </div>

              {/* Features */}
              <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
                <li>User authentication & secure login</li>
                <li>Real-time order tracking</li>
                <li>Optimized API performance</li>
                <li>Responsive mobile-friendly UI</li>
              </ul>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href="https://quickbite-demo.com"
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/vickysrana2-cloud/QuickBite"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image or sliding video */}
        <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
          <img
            src="/bananas.jpg"
            alt="bananas"
            className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative z-10 lg:items-end lg:mb-72 mb-24">
        {/* Left Box */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
          <p className="text-lg text-gray-200 font-bold">
            Stay organized with{" "}
            <span className="text-orange-400 text-2xl">Daily Planner</span> –{" "}
            <span className="text-orange-400 text-2xl">To-Do List App</span>{" "}
            that{" "}
            <span className="text-blue-400">keeps your tasks on track</span>
          </p>

          <div className="mt-4 flex items-center justify-between">
            {/* Project detail */}
            <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl relative transition-shadow">
              {/* Description */}
              <p className="text-gray-400 text-lg mb-3">
                A responsive Daily Planner – To-Do List App enabling users to
                manage daily tasks with real-time updates. Optimized API calls
                and frontend performance, reducing load time by ~20% and
                enhancing overall UX.
              </p>

              {/* Tech Stack */}
              <div className="flex gap-3 text-xl mb-3">
                <FaReact title="React" className="text-teal-500" />
                <FaJs title="JavaScript" className="text-yellow-500" />
                <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
                <FaGithub title="GitHub" />
                <AiOutlineApi title="MOCK API" className="text-red-500" />
              </div>

              {/* Features */}
              <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
                <li>Create, update, and delete tasks</li>
                <li>Real-time updates with API integration</li>
                <li>Optimized load time (~20% faster)</li>
                <li>Responsive mobile-friendly UI</li>
              </ul>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href="https://daily-planner-orpin.vercel.app/"
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/vickysrana2-cloud/daily-Planner"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image or sliding video */}
        <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
          <img
            src="/bananas.jpg"
            alt="bananas"
            className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative items-end z-10 mb-10 lg:mb-24 ">
        {/* Left Box */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
          <p className="text-lg text-gray-200 font-bold">
            Introducing{" "}
            <span className="text-orange-400 text-2xl">
              Parking Lot Manager
            </span>{" "}
            –{" "}
            <span className="text-orange-400 text-2xl">
              Smart Parking Web App
            </span>{" "}
            that{" "}
            <span className="text-blue-400">simplifies parking management</span>
          </p>

<div className="mt-4 flex items-center justify-between">
  {/* Project detail */}
  <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl relative transition-shadow">

    {/* Description */}
    <p className="text-gray-400 text-lg mb-3">
      A smart parking web app to efficiently manage vehicle entries, exits, and 
      records in real-time. Features include automatic slot allocation, vehicle 
      validation, duration & fee calculation, and interactive parking slips. 
      Data is stored persistently using local storage.
    </p>

    {/* Tech Stack */}
    <div className="flex gap-3 text-xl mb-3">
      <FaHtml5 title="HTML" className="text-orange-500" />
      <FaCss3Alt title="CSS" className="text-blue-500" />
      <FaJs title="JavaScript" className="text-yellow-500" />
      <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
      <AiOutlineDatabase title="Local Storage" className="text-purple-400" />
    </div>

    {/* Features */}
    <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
      <li>Automatic parking slot allocation</li>
      <li>Vehicle validation system</li>
      <li>Duration & fee calculation</li>
      <li>Interactive parking slips</li>
      <li>Data persistence with local storage</li>
      <li>Responsive, user-friendly UI</li>
    </ul>

    {/* Links */}
    <div className="flex gap-4">
      <a
        href="https://your-live-demo-link.com"
        className="text-green-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
      <a
        href="https://github.com/yourusername/parking-lot-manager"
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

        </div>

        {/* Right Image or sliding video */}
        <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
          <img
            src="/bananas.jpg"
            alt="bananas"
            className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            quae expedita a, repellendus aperiam pariatur debitis.
          </p>
        </div>
      </div>

      <Link
        onClick={()=>window.scrollTo({top:0, left:0, behavior:"smooth"})}
        to={"/projects"}
        className=" underline text-lg hover:text-blue-400 text-blue-200 lg:mb-24"
      >
        {" "}
        _See All Projects_{" "}
      </Link>
    </section>
  );
}
