import "../App.css";
import { Link } from "react-router";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaJs, FaGithub, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { AiOutlineApi, AiOutlineDatabase } from "react-icons/ai";
import ImageSlider from "./reusableComponents/ImageSlider";
import img1 from "../assets/slideImage/slide1.png";
import img2 from "../assets/slideImage/slide2.png";
import img3 from "../assets/slideImage/slide3.png";

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

      {/* ===================== PROJECT 1 ===================== */}
<div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative z-10 items-end lg:mb-72 mb-24">
  <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
    <p className="text-lg text-gray-200 font-bold">
      Introducing{" "}
      <span className="text-orange-400 text-2xl">StayEase</span> –{" "}
      <span className="text-orange-400 text-2xl">Hotel Booking Platform</span>{" "}
      that{" "}
      <span className="text-blue-400">simplifies hotel discovery & booking</span>
    </p>

    <div className="mt-4">
      <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">

        <p className="text-gray-400 text-lg mb-3">
          A full-stack platform enabling users to explore hotels, manage bookings, 
          and experience seamless reservation workflows with a clean and responsive interface.
        </p>

        <div className="flex gap-3 text-xl mb-3">
          <FaReact className="text-teal-500" />
          <FaJs className="text-yellow-500" />
          <SiTailwindcss classNameName="text-teal-400" />
          <AiOutlineApi className="text-red-500" />
          <AiOutlineDatabase className="text-purple-400" />
          <FaGithub />
        </div>

        <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
          <li>Secure authentication with protected routes</li>
          <li>Hotel browsing and booking management</li>
          <li>Optimized API handling for better performance</li>
          <li>Responsive and intuitive UI experience</li>
        </ul>

        <div className="flex gap-4">
          <a href="#" className="text-green-400 hover:underline">Live Demo</a>
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
        </div>

      </div>
    </div>
  </div>

    <ImageSlider
  images={[
    img1,
    img2,
    img3,
  ]}
/>
  {/* <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
    <img src="/bananas.jpg" alt="project" className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
  </div> */}
</div>


{/* ===================== PROJECT 2 ===================== */}
<div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative z-10 lg:items-end lg:mb-72 mb-24">
  <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
    <p className="text-lg text-gray-200 font-bold">
      Introducing{" "}
      <span className="text-orange-400 text-2xl">Pawsitive</span> –{" "}
      <span className="text-orange-400 text-2xl">Pet Care Platform</span>{" "}
      that{" "}
      <span className="text-blue-400">manages pets and user data efficiently</span>
    </p>

    <div className="mt-4">
      <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">

        <p className="text-gray-400 text-lg mb-3">
          Backend-focused platform designed to manage users, pets, and related data 
          with secure access control and structured data handling.
        </p>

        <div className="flex gap-3 text-xl mb-3">
          <FaReact className="text-teal-500" />
          <FaJs className="text-yellow-500" />
          <SiTailwindcss className="text-teal-400" />
          <AiOutlineApi className="text-red-500" />
          <AiOutlineDatabase className="text-purple-400" />
          <FaGithub />
        </div>

        <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
          <li>Role-based authentication and authorization</li>
          <li>Secure API access with token-based validation</li>
          <li>Optimized database relationships and persistence</li>
          <li>Scalable backend architecture</li>
        </ul>

        <div className="flex gap-4">
          <a href="#" className="text-green-400 hover:underline">Live Demo</a>
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
        </div>

      </div>
    </div>
  </div>

  <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
    <img src="/bananas.jpg" alt="project" className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
  </div>
</div>


{/* ===================== PROJECT 3 ===================== */}
<div className="flex flex-col md:flex-row gap-4 lg:gap-8 relative items-end z-10 mb-10 lg:mb-24">
  <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-lg p-6 lg:w-[600px] relative">
    <p className="text-lg text-gray-200 font-bold">
      Introducing{" "}
      <span className="text-orange-400 text-2xl">QuickBite</span> –{" "}
      <span className="text-orange-400 text-2xl">Food Delivery App</span>{" "}
      that{" "}
      <span className="text-blue-400">delivers meals seamlessly</span>
    </p>

    <div className="mt-4">
      <div className="p-6 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">

        <p className="text-gray-400 text-lg mb-3">
          A responsive food ordering platform allowing users to explore menus, 
          place orders, and track deliveries in real time with smooth UI interactions.
        </p>

        <div className="flex gap-3 text-xl mb-3">
          <FaReact className="text-teal-500" />
          <FaJs className="text-yellow-500" />
          <SiTailwindcss className="text-teal-400" />
          <AiOutlineApi className="text-red-500" />
          <FaGithub />
        </div>

        <ul className="text-gray-300 text-lg list-disc list-inside mb-4">
          <li>Real-time order tracking</li>
          <li>Secure authentication and checkout simulation</li>
          <li>Optimized API usage for performance</li>
          <li>Responsive UI for all devices</li>
        </ul>

        <div className="flex gap-4">
          <a href="https://quickbite-demo.com" className="text-green-400 hover:underline">Live Demo</a>
          <a href="https://github.com/vickysrana2-cloud/QuickBite" className="text-blue-400 hover:underline">GitHub</a>
        </div>

      </div>
    </div>
  </div>

  <div className="bg-[#0f0f0f] relative lg:top-10 lg:right-8 border-8 border-gray-800 rounded-2xl shadow-lg p-3 lg:w-[400px] w-64 flex items-center justify-center">
    <img src="/bananas.jpg" alt="project" className="rounded-xl border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
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
