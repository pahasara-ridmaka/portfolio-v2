"use client";

import CertificationSection from "@/sections/certifications/CertificationSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/sections/projects/ProjectSection";
import { WhoamiSection } from "@/sections/whoami/WhoamiSection";
import { HeroSection } from "@/sections/hero/HeroSection";
import { Footer } from "@/components/Footer";

export default function DevArchitect() {
  const projects = [
    {
      id: "PRJ_01",
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, showcasing projects, certifications, and professional information.",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      imagePreview: "/images/projects/personal-portfolio.png",
      status: "LIVE",
      githubLink: "https://github.com/pahasara-ridmaka/portfolio-v2",
      liveLink: "https://www.pahasara.me/",
    },
    {
      id: "PRJ_02",
      title: "visit PANAMA SRILANKA",
      description:
        "A full-stack tourism web app for Panama, Sri Lanka. Features interactive destination guides, secure user authentication, and tour booking workflows.",
      tech: [
        "NEXT.JS",
        "PYTHON",
        "TAILWINDCSS",
        "POSTGRESQL",
        "FASTAPI",
        "SUPABASE",
        "TYPESCRIPT",
        "CLOUDINARY",
      ],
      imagePreview: "/images/projects/visit-panama-srilanka.png",
      status: "ON GITHUB",
      githubLink: "https://github.com/pahasara-ridmaka/visitPanamaSriLanaka",
    },
    {
      id: "PRJ_03",
      title: "LONDON AIRBNB LISTINGS ANALYTICS",
      description:
        "A Python-based KDD pipeline analyzing 28,480 London Airbnb listings for ICT 333 1.5 (USJ). Features custom data extraction and cleansing scripts to ensure reproducibility and statistical integrity.",
      tech: [
        "PYTHON",
        "STATISTICS",
        "MATPLOTLIB",
        "NUMPY",
        "PANDAS",
        "SCIKIT-LEARN",
        "JUPYTER NOTEBOOK",
      ],
      imagePreview: "/images/projects/london-airbnb-listings-analytics.png",
      status: "ON GITHUB",
      githubLink: "",
    },
    {
      id: "PRJ_04",
      title: "File Organizer Utility",
      description:
        "Cross-Platform File Organizer Utility: An application that automatically sorts and organizes cluttered download folders into category-specific subfolders.",
      tech: ["PYTHON"],
      imagePreview: "/images/projects/file-organizer.png",
      status: "ON GITHUB",
      githubLink: "https://github.com/pahasara-ridmaka/file_organizer_utility",
    },
  ];
  const certifications = [
    {
      id: "CRT-AWS-01",
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: "Jun 2026",
      image: "/images/certifications/aws-cloud-foundations.png",
    },
    {
      id: "CRT-DC-01",
      title: "Understanding Data Engineering",
      issuer: "DataCamp",
      date: "Jun 2026",
      image: "/images/certifications/dc-understanding-data-engineering.png",
    },
    {
      id: "CRT-AWS-02",
      title: "AWS Academy Graduate - Data Engineering - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: " Jun 2026",
      image: "/images/certifications/aws-data-engineering.png",
    },
    {
      id: "CRT-AWS-03",
      title:
        "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: "Jun 2026",
      image: "/images/certifications/aws-machine-learning.png",
    },
    {
      id: "CRT-PM-01",
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Sep 2024",
      image: "/images/certifications/postman-api-fundamentals.png",
    },
    {
      id: "CRT-FCC-01",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Dec 2023",
      image: "/images/certifications/js-algorithms.png",
    },
    {
      id: "CRT-RT-01",
      title: "Typing certificate",
      issuer: "Ratatype",
      date: "Oct 2023",
      image: "/images/certifications/typing-certificate.webp",
    },
    {
      id: "CRT-HR-01",
      title: "Python(Basic)",
      issuer: "HackerRank",
      date: "Jan 2023",
      image: "/images/certifications/python-hackerank.png",
    },
  ];

  return (
    
    <main className="min-h-screen min-w-screen">
      
      <div className="bg-[#f9f9f9] text-[#1b1b1b] blueprint-grid min-h-screen selection:bg-[#bd00ff] selection:text-white overflow-x-hidden">

        {/* TopNavBar */}
        <NavBar />

        {/* HERO SECTION */}
        <HeroSection />

        {/* WHOAMI SECTION  */}
        <WhoamiSection />

        {/* PROJECT SECTION */}

        <ProjectSection projects={projects} />

        {/* CERTIFICATION SECTION*/}
        <CertificationSection certifications_data={certifications} />

        {/* footer */}
        <Footer />

        {/* Background Decorative Elements */}
        <div
          aria-hidden="true"
          className="fixed top-0 right-0 p-10 opacity-10 pointer-events-none select-none z-0"
        >
          <pre className="font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-tight text-[#1b1b1b]">
            {`01001000 01001001
01010010 01000101
01001101 01000101`}
          </pre>
        </div>
      </div>
      
    </main>
  );
}
