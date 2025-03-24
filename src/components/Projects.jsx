import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-transparent text-white">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-semibold mb-12 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
          My Projects
        </h2>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#2a2a2a]/50 border border-[#3a3a3a]/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.text.map((item, i) => (
                    <li key={i} className="flex items-start text-neutral-300 text-sm">
                      <span className="text-cyan-400 mr-2 drop-shadow-[0_0_4px_rgba(34,211,238,0.3)]">
                        •
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-[#3a3a3a]/70 text-neutral-200 rounded-md border border-[#4a4a4a]/50 backdrop-blur-sm group-hover:bg-[#4a4a4a]/70 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors flex items-center gap-1 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors flex items-center gap-1 drop-shadow-[0_0_6px_rgba(147,51,234,0.4)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.862 8.162 6.839 9.491.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.697-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.102-.253-.446-1.268.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.393.1 2.646.64.696 1.024 1.588 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.18.516.687.475A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" />
                      </svg>
                      GitHub
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
};

export default Projects;