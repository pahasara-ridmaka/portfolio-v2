'use client';

import React, { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  imagePreview: string;
  tech: string[];
  githubLink?: string; 
}

interface ProjectModalProps {
  project: Project | null; 
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Listen for the Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      onClick={(e) => {
        // Closes the modal only if the empty space (backdrop) itself is clicked
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1b1b]/90 backdrop-blur-sm"
    >
      {/* Container wrapping both the close button and card.
        This enables absolute positioning relative to the card's top edge.
      */}
      <div className="relative w-full max-w-3xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* MATCHED CLOSE BUTTON STYLE */}
        <button 
          onClick={onClose} 
          className="absolute -top-8 right-0 font-['JetBrains_Mono',monospace] text-white uppercase text-[12px] hover:text-[#bd00ff] cursor-pointer"
        >
          [ Close_X ]
        </button>
        
        {/* Main Content Modal Base Card */}
        <div className="text-black bg-[#f9f9f9] border-4 border-[#1b1b1b] w-full p-6 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src={project.imagePreview} 
              alt={project.title} 
              className="w-full aspect-video object-cover border-4 border-[#1b1b1b]" 
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-['Anton',sans-serif] text-[32px] uppercase leading-none">
                {project.title}
              </h2>
              <p className="font-['Archivo_Narrow',sans-serif] text-[16px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="bg-[#1b1b1b] text-white px-2 py-0.5 font-['JetBrains_Mono',monospace] text-[10px] uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-[#bd00ff] text-white py-3 text-center font-bold uppercase font-['JetBrains_Mono',monospace] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
                >
                  View_on_GitHub
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};