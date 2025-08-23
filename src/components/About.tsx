import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function About() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20 font-mono"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          About Me
        </h2>

        <div className="mb-8 rounded-xl border-2 border-white/10 p-8 transition-all hover:-translate-y-1">
          <p className="text-xl text-gray-300">
            Hi, I’m Srayan! I build clean, responsive web interfaces and am
            currently learning back-end development to become a full-stack
            developer. Always curious, always building.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-10">
          <h3 className="mb-8 text-center text-2xl font-bold">Frontend</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-gray-800 px-4 py-3 shadow-md transition-transform duration-300 hover:scale-110"
              >
                <div className="mb-2 text-4xl">{skill.icon}</div>
                <p className="text-sm text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-10">
          <h3 className="mb-8 text-center text-2xl font-bold">Backend</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-gray-800 px-4 py-3 shadow-md transition-transform duration-300 hover:scale-110"
              >
                <div className="mb-2 text-4xl">{skill.icon}</div>
                <p className="text-sm text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold">Tools</h3>
          <div className="grid grid-cols-2 justify-center gap-6 sm:grid-cols-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-gray-800 px-4 py-3 shadow-md transition-transform duration-300 hover:scale-110"
              >
                <div className="mb-2 text-4xl">{tool.icon}</div>
                <p className="text-sm text-white">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
