import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      image: project1,
      name: "The Creative India",
      brief:
        "Made a fully functional e-commerce site for a client using WordPress.",
      techs: ["WordPress", "Elementor"],
      demoUrl: "https://creativeindiastore.in/",
      githubUrl: "#",
    },
    {
      id: 2,
      image: project2,
      name: "Leaf Disease Detection System",
      brief:
        "Made a CNN model for detecting disease of leaves with the help of my college professor.",
      techs: ["Python", "TensorFlow"],
      demoUrl: "#",
      githubUrl: "https://github.com/SrayanBhattacharya/leaf-disease-detection",
    },
  ]);

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20 font-mono"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group mb-8 flex flex-col overflow-hidden rounded-xl border-2 border-white/10 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm">
                  {project.brief}
                </p>

                <div className="mt-auto flex items-center gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
