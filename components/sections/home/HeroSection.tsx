"use client";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

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
    date: "March - April 2026",
    title: "Dengue ETL & Health Data Analytic Dashboard",
    description:
      "This is a data analytics project for analyzing Airbnb listings in London.",
    images: [
      "/images/projects/london-airbnb-listings-analytics.png",
      "/images/projects/personal-portfolio.png",
      "/images/projects/london-airbnb-listings-analytics.png",
    ],
  },
  {
    date: "March - April 2026",
    title: "London Airbnb Listings Analytics",
    description:
      "This is a data analytics project for analyzing Airbnb listings in London.",
    images: [
      "/images/projects/london-airbnb-listings-analytics.png",
      "/images/projects/visit-panama-srilanka.png",
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
          <h2 className="text-sm font-bold">
            <span>
              {/* Live green dot */}
              <span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500 animate-pulse"></span>
            </span>
            Pahasara Ridmaka
          </h2>
          <p className="text-zinc-600 text-xs">Python | Linux Enthusiast</p>
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
          Hi, I'm Pahasara Ridmaka, and I am an ICT graduate with a rigorous
          foundation in Mathematics and Physics.
          <br />
          <br />I am highly proficient in Python, SQL, OOP, and core Software
          Architecture principles, blending structured engineering with a strong
          understanding of the SDLC and Agile methodologies. Additionally, I
          leverage my creative graphic design skills to ensure that the highly
          optimized digital solutions I build are also clean, modern, and
          visually intuitive.
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
          <h3>Projects</h3>

          {projects.map((project, index) => (
    <motion.div
      key={index}
      className="mt-8 font-light flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start sm:justify-between text-zinc-400 text-sm"
      variants={slideUp}
    >
      <span className="text-xs whitespace-nowrap shrink-0">{project.date}</span>
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
