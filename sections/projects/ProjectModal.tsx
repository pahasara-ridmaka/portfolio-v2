'use client';

import React from 'react';

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
  if (!project) return null;

  return (
    <div 
      onClick={(e) => {
        // Closes the modal only if the empty space (backdrop) itself is clicked
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-[#1b1b1b]/90 backdrop-blur-sm"
    >
      <div className="text-black bg-[#f9f9f9] border-4 border-[#1b1b1b] w-full max-w-3xl p-6 md:p-12 relative">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 font-['JetBrains_Mono',monospace] text-[12px] uppercase underline"
        >
          [ Close_X ]
        </button>
        
        <div className="grid md:grid-cols-2 gap-8">
          <img src={project.imagePreview} alt={project.title} className="w-full aspect-video object-cover border-4 border-[#1b1b1b]" />
          <div className="flex flex-col gap-4">
            <h2 className="font-['Anton',sans-serif] text-[32px] uppercase">{project.title}</h2>
            <p className="font-['Archivo_Narrow',sans-serif] text-[16px]">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="bg-[#1b1b1b] text-white px-2 py-0.5 font-['JetBrains_Mono',monospace] text-[10px] uppercase">
                  {t}
                </span>
              ))}
            </div>
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 bg-[#bd00ff] text-white py-3 text-center font-bold uppercase font-['JetBrains_Mono',monospace]"
              >
                View_on_GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};