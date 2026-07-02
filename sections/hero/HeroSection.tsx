import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-12 px-4 md:px-12 overflow-hidden relative">
      {/* Hero Section Content Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full">
        {/* Left Content Area */}
        <div className="md:col-span-7 flex flex-col gap-6 items-start w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#32ff00] border-2 border-[#1b1b1b] px-2 py-1 w-max hard-shadow-sm">
            <span className="material-symbols-outlined text-[18px]">
              terminal
            </span>
            <span className="font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-4 uppercase tracking-widest text-[#022100]">
              STATUS: AVAILABLE FOR INTERNSHIPS
            </span>
          </div>

          {/* Heading Stack with Background Architectural Overlap */}
          <div className="relative select-none">
            <h1 className="font-['Anton',sans-serif] text-[60px] md:text-8xl leading-[0.9] md:leading-20 md:tracking-[0.02em] uppercase relative z-20 mix-blend-difference">
              DATA.
              <br />
              <span className="text-[#bd00ff] italic">DESIGN</span>
              <br />
              CODE_
            </h1>

            {/* Back Layer Headline */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 font-['Anton',sans-serif] text-[60px] md:text-9xl leading-[0.9] md:leading-20 md:tracking-[0.02em] uppercase text-outline opacity-10 z-10"
            >
              DATA.
              <br />
              <span className="text-[#bd00ff] italic">DESIGN</span>
              <br />
              CODE_
            </div>
          </div>

          {/* Description Block */}
          <p className="font-['Archivo_Narrow',sans-serif] font-medium text-[20px] leading-7 max-w-xl border-l-4 border-[#1b1b1b] pl-4 py-2">
            <span className="bg-[#b7af00] px-1 text-black">
              Multi-disciplinary developer
            </span>{" "}
            at the intersection of data systems and visual impact. Crafting
            robust architectures with brutalist precision.
          </p>

          {/* Action Interactive Elements */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 items-stretch sm:items-center w-full sm:w-auto">
            <a href="mailto:pridmaka@gmail.com" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto group relative bg-[#bd00ff] text-white font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 px-10 py-6 border-4 border-[#1b1b1b] hard-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 uppercase">
                  LET'S_TALK
                  <span className="material-symbols-outlined">bolt</span>
                </span>
              </button>
            </a>
            <Link
              href="#projects"
              className="text-center bg-[#f9f9f9] text-[#1b1b1b] font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 px-10 py-6 border-4 border-[#1b1b1b] hard-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none uppercase"
            >
              VIEW_PROJECTS
            </Link>
          </div>
        </div>

        {/* Right Architectural Graphic Element */}
        <div className="md:col-span-5 relative flex justify-center items-center mt-12 md:mt-0 md:pl-8 w-full raw-container">
          {/* Decorative Dashed Circle Layout */}
          <div className="absolute w-[110%] h-[110%] border-dashed border-[#d4c0d7] rounded-full animate-[spin_40s_linear_infinite] opacity-40 pointer-events-none"></div>
          
          {/* Framed Graphic Frame */}
          <div className="relative z-20 w-full max-w-[280px] sm:max-w-[340px] md:max-w-full aspect-square rounded-full bg-white border-4 border-[#1b1b1b] hard-shadow p-2 animate-float overflow-hidden">
            <img
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="A black and white portrait of pahasara"
              src="/profile.png"
            />
          </div>
        </div>
      </div>

      {/* Technical Specs Strip */}
      <div className="mt-24 border-y-4 border-[#1b1b1b] overflow-hidden bg-[#1b1b1b] py-3 -mx-4 md:-mx-12 -rotate-1 relative z-10 select-none">
        <div className="flex whitespace-nowrap w-max animate-[marquee_25s_linear_infinite]">
          {/* Track 1 */}
          <div className="flex items-center gap-8 pr-8">
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Software Architecture
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Cloud Computing
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Full-Stack Development
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Data Engineering
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Data Structures & Algorithms
            </span>
            <span className="text-[#e2e2e2]">/</span>
          </div>

          {/* Track 2 (Exact Duplicate for a Seamless Loop) */}
          <div className="flex items-center gap-8 pr-8" aria-hidden="true">
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Software Architecture
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Cloud Computing
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Full-Stack Development
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Data Engineering
            </span>
            <span className="text-[#e2e2e2]">/</span>
            <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] text-[#f8d8ff] uppercase">
              Data Structures & Algorithms
            </span>
            <span className="text-[#e2e2e2]">/</span>
          </div>
        </div>
      </div>
    </section>
  );
};