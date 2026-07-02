export const WhoamiSection = () => {
  return (
    <section
      id="whoami"
      className="relative w-full py-20 px-4 md:px-12 bg-[#f9f9f9] text-[#1b1b1b] border-t-4 border-[#1b1b1b]"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1b1b1b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header*/}
        <div className="mb-12">
          <span className="font-['JetBrains_Mono',monospace] text-[#bd00ff] text-[12px] block mb-2">
            // SYSTEM_USER
          </span>
          <h2 className="font-['Anton',sans-serif] text-[56px] md:text-[80px] uppercase leading-none tracking-tighter">
            PERSONAL
            <br />
            <span className="text-[#837186] italic">PROFILE</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-8">
          {/* Top Deck*/}
          <div className="border-2 border-[#1b1b1b] p-8 bg-white shadow-[8px_8px_0px_0px_#1b1b1b]">
            <h3 className="font-['Anton',sans-serif] text-[24px] md:text-[32px] uppercase mb-4 text-[#bd00ff] tracking-wide">
              The Overview
            </h3>
            <p className="font-['Archivo_Narrow',sans-serif] text-[20px] md:text-[24px] leading-normal text-[#1b1b1b] font-bold">
              "
              <span className="bg-[#b7af00] px-1">
                Hi, I'm Pahasara Ridmaka,
              </span>{" "}
              and I am an ICT graduate with a rigorous foundation in Mathematics
              and Physics. I am highly proficient in Python, SQL, OOP, and core
              Software Architecture principles, blending structured engineering
              with a strong understanding of the SDLC and Agile methodologies.
              Additionally, I leverage my creative graphic design skills to
              ensure that the highly optimized digital solutions I build are
              also clean, modern, and visually intuitive."
            </p>
          </div>

          {/* Mid Deck*/}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Environmental Constants (Anchors/Location/Uni) */}
            <div className="md:col-span-4 flex flex-col justify-between border-2 border-[#1b1b1b] p-6 bg-white">
              <div className="flex flex-col gap-5">
                <span className="block font-['JetBrains_Mono',monospace] text-[12px] text-[#bd00ff] uppercase font-bold mb-1">
                  // ENV_CONSTANTS
                </span>
                {[
                  { label: "LOCATION", val: "Panama, Sri Lanka" },
                  {
                    label: "UNIVERSITY",
                    val: "University of Sri Jayewardenepura",
                  },
                  {
                    label: "DEGREE",
                    val: "BSc. in Physical Science ICT",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b-2 border-dashed border-[#1b1b1b]/20 pb-3 last:border-none last:pb-0"
                  >
                    <span className="block font-['JetBrains_Mono',monospace] text-[10px] text-[#837186] uppercase mb-0.5">
                      {stat.label}
                    </span>
                    <span className="font-['Anton',sans-serif] text-[16px] md:text-[18px] uppercase tracking-wide block leading-tight text-[#1b1b1b]">
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="md:col-span-8 border-2 border-[#1b1b1b] p-6 bg-white shadow-[8px_8px_0px_0px_#bd00ff]">
              <span className="block font-['JetBrains_Mono',monospace] text-[12px] text-[#bd00ff] uppercase mb-5 font-bold">
                // TECH_STACK_GRID
              </span>

              <div className="flex flex-col gap-4">
                {[
                  {
                    category: "Languages",
                    items: [
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "Java",
                      "C",
                      "HTML5",
                      "CSS3",
                    ],
                  },
                  {
                    category: "Frameworks & Libraries",
                    items: [
                      "Django",
                      "Flask",
                      "Next.js",
                      "React",
                      "Bootstrap",
                      "Tailwind CSS",
                      "FastAPI",
                    ],
                  },
                  {
                    category: "Databases,ORMs & Data Formats",
                    items: [
                      "PostgreSQL",
                      "MySQL",
                      "MongoDB",
                      "SQLAlchemy",
                      "XML",
                      "JSON",
                    ],
                  },
                  {
                    category: "Data Science & ML",
                    items: ["NumPy", "Pandas", "Power BI", "Matplotlib"],
                  },
                  {
                    category: "Cloud Technologies",
                    items: ["AWS"],
                  },
                  {
                    category: "UI/UX & Design",
                    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
                  },
                  {
                    category: "Tools & CMS",
                    items: [
                      "Git",
                      "Ollama",
                      "GitHub",
                      "Linux",
                      "VS Code",
                      "WordPress",
                      "MS Office",
                    ],
                  },
                ].map((group) => (
                  <div
                    key={group.category}
                    className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3 border-b border-dashed border-[#1b1b1b]/10 pb-3 last:border-none last:pb-0"
                  >
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#837186] uppercase min-w-35 pt-1.5">
                      [{group.category}]
                    </span>
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {group.items.map((tech) => (
                        <div
                          key={tech}
                          className="font-['JetBrains_Mono',monospace] text-[11px] border border-[#1b1b1b] bg-[#f9f9f9] text-[#1b1b1b] px-2 py-1 uppercase tracking-wider font-semibold hover:bg-[#1b1b1b] hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Deck: Actions & Comm Channels */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch w-full mt-4">
            <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="flex-1 bg-[#1b1b1b] text-white font-['JetBrains_Mono',monospace] font-bold text-[13px] px-8 py-5 uppercase hover:bg-[#bd00ff] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none border-2 border-[#1b1b1b]">
                Resume.pdf
              </button>
            </a>

            {/* Social Nodes */}
            <div className="grid grid-cols-3 gap-2 flex-[1.5]">
              {[
                {
                  name: "GITHUB",
                  url: "https://github.com/pahasara-ridmaka",
                },
                {
                  name: "LINKEDIN",
                  url: "https://linkedin.com/in/pahasara-ridmaka",
                },
                {
                  name: "HACKERRANK",
                  url: "https://www.hackerrank.com/profile/pahasararidmaka_",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-center border-2 border-[#1b1b1b] bg-white text-[#1b1b1b] font-['JetBrains_Mono',monospace] font-bold text-[12px] px-2 py-5 uppercase hover:bg-[#1b1b1b] hover:text-white transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_#1b1b1b] hover:shadow-[6px_6px_0px_0px_#bd00ff]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
