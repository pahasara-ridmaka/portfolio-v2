"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { HyperText } from "@/components/ui/hyper-text";
import { NavigationMenuDemo } from "@/components/common/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import ShimmeringText from "@/components/ui/shimmering-text";
import { slideUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/projects";

// Card animation variants
const cardVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroSection() {
  const [showHighlight, setShowHighlight] = useState(false);

  return (
    <motion.section
      className="relative flex min-h-screen w-full flex-col max-w-4xl mx-auto px-4 py-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Header Row */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        <motion.div className="flex flex-col items-start" variants={slideUp}>
          <motion.img
            src="profile.jpg"
            alt="Pahasara Ridmaka"
            className="w-24 h-24 rounded-2xl object-cover border border-zinc-800 saturate-0 hover:saturate-100 transition-all duration-300 shadow-md"
          />
        </motion.div>
        <motion.div variants={slideUp}>
          <NavigationMenuDemo />
        </motion.div>
      </div>

      {/* Bio Section */}
      <div className="mt-6">
        <motion.p
          className="text-zinc-400 leading-relaxed text-justify"
          variants={slideUp}
          onAnimationComplete={() => setShowHighlight(true)}
        >
          I'm{" "}
          {showHighlight ? (
            <Highlighter action="underline" isView={true} animationDuration={0}>
              Pahasara Ridmaka
            </Highlighter>
          ) : (
            <span className="inline-block text-zinc-200">Pahasara Ridmaka</span>
          )}
          ,
          <br />
          <br />
          Linux enthusiast and software/data engineer building full-stack apps
           and scalable data pipelines across open-source
          environments.
          
        </motion.p>

        {/* Current Status */}
        <motion.div
          className="mt-6 flex flex-wrap gap-3 items-center text-sm"
          variants={slideUp}
        >
          <HyperText className="text-sm font-mono text-zinc-500">
            current status:
          </HyperText>
          <ShimmeringText
            className="text-sm font-medium"
            text="LOOKING FOR OPPORTUNITIES"
          />
        </motion.div>

        {/* Download CV Button */}
        <motion.div className="my-8" variants={slideUp}>
          <Button className="rounded-full px-6" variant="default">
            <a href="files/resume.pdf" download>
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.hr variants={slideUp} className="border-zinc-800/80 my-8" />

        {/* Projects Section */}
        <motion.div variants={slideUp}>
          <div className="flex items-center justify-between mb-6">
            <HyperText className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              Featured Projects
            </HyperText>
            <span className="text-xs font-mono text-zinc-500">
              {projects.length} Repositories
            </span>
          </div>

          <PhotoProvider
            maskOpacity={0.85}
            speed={() => 300}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug || index}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
                >
                  <div>
                    {/* Terminal-like Window Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-red-500/80 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-yellow-500/80 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-green-500/80 transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {project.date}
                      </span>
                    </div>

                    {/* Title & Link */}
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-base font-medium text-zinc-100 group-hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                      >
                        {project.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                          ↗
                        </span>
                      </Link>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Image Lightbox Preview */}
                  {project.images && project.images.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-zinc-800/40">
                      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {project.images.map((img, imgIndex) => (
                          <PhotoView key={imgIndex} src={img}>
                            <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 cursor-zoom-in">
                              <img
                                src={img}
                                alt={`${project.title} preview ${imgIndex + 1}`}
                                className="h-full w-full object-cover saturate-50 group-hover:saturate-100 hover:scale-105 transition-all duration-300"
                              />
                            </div>
                          </PhotoView>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </PhotoProvider>
        </motion.div>
      </div>

      <div className="mt-16" />
    </motion.section>
  );
}

export default HeroSection;
