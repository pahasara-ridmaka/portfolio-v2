import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface Project {
  id: string | number;
  title: string;
  status: string;
  description: string;
  tech: string[];
  imagePreview: string;
  githubLink?: string;
  liveLink?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 md:px-12 bg-[#1b1b1b] text-[#f9f9f9] border-t-4 border-[#f9f9f9]"
    >
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-['JetBrains_Mono',monospace] text-[#32ff00] text-[12px] block mb-2">
            // SYSTEM_DEPLOYS
          </span>
          <h2 className="font-['Anton',sans-serif] text-[56px] md:text-[80px] uppercase leading-none tracking-tighter">
            SELECTED
            <br />
            <span className="text-[#514255] italic">PROJECTS</span>
          </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#f9f9f9] text-[#1b1b1b] border-4 border-[#1b1b1b] p-6 flex flex-col md:flex-row md:items-center gap-8 transition-all hover:bg-[#bd00ff] hover:text-white overflow-hidden"
            >
              {/* Expanded Image Preview*/}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img
                  src={project.imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#bd00ff]/80"></div>
              </div>

              <div className="relative z-10 font-['Anton',sans-serif] text-[48px] leading-none opacity-20">
                0{index + 1}
              </div>

              {/* Main Content - Relative to stack over background preview */}
              <div className="relative z-10 grow">
                {/* FIXED ALIGNMENT HERE: Added items-start (mobile) vs items-center (desktop) and flex-wrap */}
                <div className="flex flex-wrap items-center sm:items-center gap-3 mb-2">
                  <h3 className="font-['Anton',sans-serif] text-[24px] uppercase leading-tight">
                    {project.title}
                  </h3>
                  <span className="inline-block shrink-0 px-2 py-0.5 bg-[#1b1b1b] text-[#32ff00] font-['JetBrains_Mono',monospace] text-[10px] uppercase group-hover:bg-white group-hover:text-[#1b1b1b]">
                    {project.status}
                  </span>
                </div>
                
                <p className="font-['Archivo_Narrow',sans-serif] text-[16px] opacity-80 max-w-2xl mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-['JetBrains_Mono',monospace] text-[10px] border border-[#1b1b1b] px-2 py-0.5 group-hover:border-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="relative z-10 flex md:flex-col gap-2 shrink-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#1b1b1b] text-white px-6 py-3 font-['JetBrains_Mono',monospace] text-[12px] uppercase hover:bg-[#32ff00] hover:text-[#1b1b1b] transition-all"
                >
                  Inspect
                </button>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-[#1b1b1b] px-6 py-3 font-['JetBrains_Mono',monospace] text-[12px] uppercase hover:bg-[#32ff00] hover:text-[#1b1b1b] transition-all"
                  >
                    Visit Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}