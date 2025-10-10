import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-teal-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
    { icon: <AiOutlineApi className="text-red-500" />, name: "API Integration" },
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  ];

  return (
    <section className="py-10 text-center my-24 h-[90vh] flex flex-col justify-center">
      <h2 className="text-5xl font-bold text-teal-200 mb-16 drop-shadow-[0_0_10px_#00f7ff]">Tech Stack at a Glance</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-20 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-7xl hover:scale-110 transition"
          >
            {skill.icon}
            <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
