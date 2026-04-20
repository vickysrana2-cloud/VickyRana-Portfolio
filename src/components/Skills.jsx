import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
  SiJson,
  SiMongodb,
  SiNextdotjs,
  SiMui,
} from "react-icons/si";

import { AiOutlineApi, AiOutlineDatabase } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <FaReact className="text-teal-400" />, name: "React" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" }, // ✅ Added
        { icon: <SiMui className="text-blue-400" />, name: "Material UI" }, // ✅ Added
        { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
        { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: <FaJava className="text-red-600" />, name: "Java" },
        { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
        { icon: <AiOutlineApi className="text-red-500" />, name: "REST API" },
        { icon: <AiOutlineDatabase className="text-purple-400" />, name: "Hibernate / JPA" },
        { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <SiJsonwebtokens className="text-yellow-500" />, name: "JWT" },
        { icon: <MdSecurity className="text-green-400" />, name: "Spring Security" },
        { icon: <MdSecurity className="text-indigo-400" />, name: "OAuth 2.0" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
        { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
        { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
        { icon: <SiJson className="text-gray-400" />, name: "JSON" },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 text-center my-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-200 mb-12 drop-shadow-[0_0_10px_#00f7ff]">
        Tech Stack at a Glance
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-8">
              {group.title}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-4xl sm:text-5xl hover:scale-110 transition duration-200"
                >
                  {skill.icon}
                  <span className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}