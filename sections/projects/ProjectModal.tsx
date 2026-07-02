'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

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

  return createPortal(
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#1b1b1b]/90 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-3xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Main Content Modal Base Card */}
        <div className="relative text-black bg-[#f9f9f9] border-4 border-[#1b1b1b] w-full p-6 pt-16 md:p-12 shadow-2xl">
          
          {/* Adjusted Close Button sizing */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-[#1b1b1b] text-white px-2 py-1 font-['JetBrains_Mono',monospace] uppercase text-[10px] tracking-wider border-2 border-[#1b1b1b] hover:bg-[#bd00ff] hover:border-[#bd00ff] cursor-pointer transition-colors z-10"
          >
            [ x ]
          </button>

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
    </div>,
    document.body
  );
};