"use client";

import { useState, useRef, useEffect } from "react";

interface Certification {
  id: string | number;
  title: string;
  date: string;
  image: string;
  issuer?: string;
  color?: string;
}

interface CertificationSectionProps {
  certifications_data: Certification[];
}

export default function CertificationSection({
  certifications_data,
}: CertificationSectionProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // On mobile, scroll by a smaller portion so it aligns nicely
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? current.clientWidth * 0.85 : current.clientWidth * 0.75; 
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewImage]);

  return (
    <section id="certifications" className="relative w-full py-15 md:py-20 px-4 md:px-12 bg-[#f9f9f9] text-[#1b1b1b] border-t-4 border-[#1b1b1b]">
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1b1b1b 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="relative z-5 max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <span className="font-['JetBrains_Mono',monospace] text-[#bd00ff] text-[11px] md:text-[12px] block mb-2">
              // VERIFIED_SKILLS
            </span>
            <h2 className="font-['Anton',sans-serif] text-[40px] sm:text-[56px] md:text-[80px] uppercase leading-[0.9] tracking-tighter">
              Credential <br /> <span className="text-[#837186] italic">Gallery</span>
            </h2>
          </div>
          
          {/* Desktop Only Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll('left')} aria-label="Scroll Left" className="border-2 border-[#1b1b1b] p-4 hover:bg-[#1b1b1b] hover:text-white transition-colors cursor-pointer">
              ←
            </button>
            <button onClick={() => scroll('right')} aria-label="Scroll Right" className="border-2 border-[#1b1b1b] p-4 hover:bg-[#1b1b1b] hover:text-white transition-colors cursor-pointer">
              →
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 md:gap-8 overflow-x-auto pb-4 md:pb-8 snap-x snap-mandatory pointer-events-auto touch-pan-x no-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="shrink-0 w-1 md:hidden" />

          {certifications_data.map((cert) => (
            <div
              key={cert.id}
              className="w-[82vw] sm:w-75 md:min-w-[320px] shrink-0 snap-start md:snap-center group bg-white border-2 border-[#1b1b1b] p-2 shadow-[6px_6px_0px_0px_#1b1b1b] md:shadow-[8px_8px_0px_0px_#1b1b1b]"
            >
              <div className="relative aspect-4/3 bg-[#e2e2e2] border-2 border-[#1b1b1b] overflow-hidden mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500" 
                  loading="lazy"
                />
              </div>
              
              <div className="px-1 pb-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-['JetBrains_Mono',monospace] font-bold text-[11px] md:text-[12px] text-[#9700cd]">{cert.id}</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] opacity-60">{cert.date}</span>
                </div>
                <h3 className="font-['Anton',sans-serif] text-[16px] md:text-[18px] uppercase leading-tight mb-3 line-clamp-2 min-h-[2.5em]">
                  {cert.title}
                </h3>
                <button 
                  onClick={() => setPreviewImage(cert.image)} 
                  className="w-full border-2 border-[#1b1b1b] py-2 font-['JetBrains_Mono',monospace] text-[12px] uppercase hover:bg-[#1b1b1b] hover:text-white transition-colors cursor-pointer"
                >
                  View_File
                </button>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-1 md:hidden" />
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button 
            onClick={() => scroll('left')} 
            aria-label="Scroll Left" 
            className="flex-1 max-w-25 text-center border-2 border-[#1b1b1b] py-3 active:bg-[#1b1b1b] active:text-white transition-colors cursor-pointer font-bold"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')} 
            aria-label="Scroll Right" 
            className="flex-1 max-w-25 text-center border-2 border-[#1b1b1b] py-3 active:bg-[#1b1b1b] active:text-white transition-colors cursor-pointer font-bold"
          >
            →
          </button>
        </div>

      </div>

      {/* Preview Overlay */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center p-4 bg-[#1b1b1b]/90 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-3xl bg-white p-1.5 md:p-2 border-4 border-[#1b1b1b] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <button 
              onClick={() => setPreviewImage(null)} 
              className="absolute -top-8 right-0 font-['JetBrains_Mono',monospace] text-white uppercase text-[12px] hover:text-[#bd00ff] cursor-pointer"
            >
              [ Close_Preview ]
            </button>
            <img 
              src={previewImage} 
              alt="Full Preview" 
              className="w-full h-auto max-h-[75vh] object-contain border-2 border-[#1b1b1b]" 
            />
          </div>
        </div>
      )}
    </section>
  );
}