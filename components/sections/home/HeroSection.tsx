"use client";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { HyperText } from "@/components/ui/hyper-text";

import { motion } from "framer-motion";
import { NavigationMenuDemo } from "@/components/common/NavigationMenu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { slideUp, staggerContainer } from "@/lib/animations";
import type { Variants } from "framer-motion";

// Hover variants for project cards
const cardHover: Variants = {
  rest: { scale: 1, boxShadow: "0 0 0 0 rgba(255,255,255,0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 30px 0 rgba(255,255,255,0.08)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    date: "April - May 2026",
    title: "visit PANAMA SRILANKA",
    description:
      "A full-stack tourism web app for Panama, Sri Lanka. Features interactive destination guides, secure user authentication, and tour booking workflows.",
    images: [
      "/images/projects/visit-panama-srilanka.png",
    ],
  },
  {
    date: "March - April 2026",
    title: "LONDON AIRBNB LISTINGS ANALYTICS",
    description:
      "A Python-based KDD pipeline analyzing 28,480 London Airbnb listings for ICT 333 1.5 (USJ). Features custom data extraction and cleansing scripts to ensure reproducibility and statistical integrity.",
    images: [
      "/images/projects/london-airbnb-listings-analytics.png",
    ],
  },
  {
    date: "March - April 2026",
    title: "File Organizer Utility",
    description:
      "An application that automatically sorts and organizes cluttered download folders into category-specific subfolders.",
    images: [
      "/images/projects/file-organizer.png",
    ],
  },
{
    date: "June - July 2026",
    title: "Personal Portfolio Website",
    description:
      "A minimal personal portfolio website built with Next.js, showcasing projects, certifications, and professional information.",
    images: [
      "/images/projects/personal-portfolio.png",
    ],
  },
];

function HeroSection() {
  return (
    <motion.section
      className="relative flex min-h-screen w-full flex-col"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Header row */}
      <div className="flex flex-wrap justify-between items-start gap-3">
        <motion.div className="flex flex-col items-end" variants={slideUp}>
          <div className="text-sm font-bold flex  jusitify-start items-end flex-col space-x-0.5">
            <span className="flex items-center gap-2">
              {/* Live green dot */}
              <span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500 animate-pulse"></span>
              <HyperText className="text-sm">Pahasara Ridmaka</HyperText>
            </span>
          <p className="text-zinc-600 text-[0.65rem] -mt-2">Python | Linux Enthusiast</p>

          </div>
        </motion.div>
        <motion.div variants={slideUp}>
          <NavigationMenuDemo />
        </motion.div>
      </div>

      {/* Bio section */}
      <div className="pt-12">
        <motion.p
          className="text-sm text-zinc-400 leading-relaxed text-justify"
          variants={slideUp}
        >
          I'm an ICT undergraduate working on full-stack development and data engineering. I build systems that are scalable, repeatable, and reliable.

I also do graphics design
          
        </motion.p>

        <motion.div
          className="mt-4 gap-4 flex flex-wrap flex-row items-center justify-start"
          variants={slideUp}
        >
          <Button
            className="rounded-full italic underline"
            variant="link"
            size="sm"
          >
            <Link href="/about">Read more</Link>
          </Button>
          <Button className="rounded-full" variant="default" size="sm">
            <a href="files/resume.pdf">Download CV</a>
          </Button>
        </motion.div>

        {/* Projects */}
        <motion.div className="mt-16" variants={slideUp}>
              <HyperText className="text-sm">Projects [DATA/WEB/SW]</HyperText>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="mt-8 font-light flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start sm:justify-between text-zinc-400 text-sm"
              variants={slideUp}
            >
              <span className="text-xs whitespace-nowrap shrink-0">
                {project.date}
              </span>
              <div className="flex-1 min-w-0 flex flex-col items-start gap-2">
                <p className="text-white underline">
                  <Link href={""}>{project.title}</Link>
                </p>
                <p>{project.description}</p>

                <div className="mt-4 flex w-full max-w-full gap-4 overflow-x-auto px-1 pb-2 snap-x">
                  {/* Wrap all images with PhotoProvider */}
                  <PhotoProvider>
                    {project.images.map((img, imgIndex) => (
                      <PhotoView key={imgIndex} src={img}>
                        <motion.div
                          className="w-64 h-40 sm:w-48 sm:h-32 shrink-0 snap-start rounded-lg overflow-hidden bg-zinc-800 cursor-pointer"
                          variants={cardHover}
                          initial="rest"
                          whileHover="hover"
                        >
                          <motion.img
                            src={img}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            variants={imageHover}
                          />
                        </motion.div>
                      </PhotoView>
                    ))}
                  </PhotoProvider>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16"></div>
    </motion.section>
  );
}

export default HeroSection;
