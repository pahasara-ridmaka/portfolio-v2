import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-12 px-4 md:px-12 overflow-hidden relative">
          {/* Hero Section */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Content Area */}
            <div className="md:col-span-8 flex flex-col gap-8  items-center  md:items-start">
              <div className="inline-flex items-center gap-2 bg-[#32ff00] border-2 border-[#1b1b1b] px-2 py-1 w-max">
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>
                <span className="font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-4 uppercase tracking-widest text-[#022100]">
                  STATUS: AVAILABLE FOR INTERNSHIPS
                </span>
              </div>

              <div className="relative">
                <h1 className="font-['Anton',sans-serif] text-[60px] md:text-9xl leading-[0.9] md:leading-20 md:tracking-[0.02em] uppercase relative z-20 mix-blend-difference">
                  DATA.
                  <br />
                  <span className="text-[#bd00ff] italic">DESIGN</span>
                  <br />
                  CODE_
                </h1>
                {/* Back Layer Headline for Architectural overlapping */}
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 font-['Anton',sans-serif] text-[60px] md:text-[80px] leading-[0.9] md:leading-20 md:tracking-[0.02em] uppercase text-outline opacity-10 select-none z-10"
                >
                  DATA.
                  <br />
                  <span className="text-[#bd00ff] italic">DESIGN</span>
                  <br />
                  CODE_
                </div>
              </div>

              <p className="font-['Archivo_Narrow',sans-serif] font-medium text-[20px] leading-7 max-w-xl border-l-4 border-[#1b1b1b] pl-4 py-2">
                <span className="bg-[#b7af00] px-1">
                  Multi-disciplinary developer
                </span>{" "}
                at the intersection of data systems and visual impact. Crafting
                robust architectures with brutalist precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
                <a href="mailto:pridmaka@gmail.com">
                  <button className="group relative bg-[#bd00ff] text-white font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 px-10 py-6 border-4 border-[#1b1b1b] hard-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <span className="relative z-10 flex items-center gap-2 uppercase">
                      LET'S_TALK
                      <span className="material-symbols-outlined">bolt</span>
                    </span>
                  </button>
                </a>
                <Link
                  href="#projects"
                  className="bg-[#f9f9f9] text-[#1b1b1b] font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 px-10 py-6 border-4 border-[#1b1b1b] hard-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none uppercase"
                >
                  VIEW_PROJECTS
                </Link>
              </div>
            </div>

            {/* Right Architectural Element */}
            <div className="md:col-span-4 relative flex justify-center items-center mt-8 md:mt-0">
              {/* Decorative Circle Element */}
              <div className="absolute w-[120%] h-[120%] border-4 border-dashed border-[#d4c0d7] rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
              {/* Main Schematic Image */}
              <div className="relative z-20 w-full aspect-square border-4 border-[#1b1b1b]  hard-shadow p-2 animate-float">
                <img
                  className="w-full h-full  object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Digital badge featuring a black-and-white photo of a cool rabbit lounging on a couch with sunglasses, a remote, and pizza, labeled 'VIBE_CHECK_PASS' and 'CHILL 100/100'."
                  src="/heroImage.png"
                />
                {/* Floating Data Labels */}
                <div className="absolute -top-4 -right-4 bg-[#1b1b1b] text-[#ecb2ff] px-2 py-1 border-2 border-[#1b1b1b] font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-4">
                  VIBE_CHECK_PASS
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#656100] text-[#ffffff] px-2 py-1 border-2 border-[#1b1b1b] font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-4">
                  CHILL 100/100
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs Strip (Marquee effect) */}
          <div className="mt-24 border-y-4 border-[#1b1b1b] overflow-hidden bg-[#1b1b1b] py-2 -mx-4 md:-mx-12 -rotate-1 relative z-10">
            <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              <div className="flex items-center gap-8 px-8">
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Software Architecture
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Cloud Computing
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Full-Stack Development
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Data Engineering
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Data Structures & Algorithms
                </span>
                <span className="text-[#e2e2e2]">/</span>
              </div>
              {/* Repeat for smooth loop */}
              <div className="flex items-center gap-8 px-8">
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Software Architecture
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Cloud Computing
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Full-Stack Development
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Data Engineering
                </span>
                <span className="text-[#e2e2e2]">/</span>
                <span className="font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 text-[#f8d8ff] uppercase">
                  Data Structures & Algorithms
                </span>
                <span className="text-[#e2e2e2]">/</span>
              </div>
            </div>
          </div>
        </section>
  )};