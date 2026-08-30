"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { HyperText } from "@/components/ui/hyper-text";
import { NavigationMenuDemo } from "@/components/common/NavigationMenu";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import ShimmeringText from "@/components/ui/shimmering-text";
import { slideUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/projects";

function HeroSection() {
  const [showHighlight, setShowHighlight] = useState(false);

  return (
    <motion.section
      className="relative flex min-h-screen w-full flex-col max-w-3xl mx-auto px-4 py-12 selection:bg-zinc-800"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <motion.div variants={slideUp}>
          <motion.img
            src="profile.jpg"
            alt="Pahasara Ridmaka"
            className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 ring-1 ring-zinc-800"
          />
        </motion.div>
        <motion.div variants={slideUp}>
          <NavigationMenuDemo />
        </motion.div>
      </div>

      {/* Bio */}
      <div className="mt-8 space-y-6">
        <motion.p
          className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify"
          variants={slideUp}
          onAnimationComplete={() => setShowHighlight(true)}
        >
          I'm{" "}
          {showHighlight ? (
            <Highlighter action="underline" isView={true} animationDuration={0}>
              Pahasara Ridmaka
            </Highlighter>
          ) : (
            <span className="text-zinc-200">Pahasara Ridmaka</span>
          )}
          ,
          <br />
          <br />
          Linux enthusiast and software/data engineer building full-stack apps
          and scalable data pipelines across open-source
          environments.
        </motion.p>

        {/* Status indicator */}
        <motion.div
          className="flex items-center gap-3 text-xs font-mono"
          variants={slideUp}
        >
          <span className="text-zinc-500">status:</span>
          <ShimmeringText
            className="text-xs tracking-wider"
            text="LOOKING FOR OPPORTUNITIES"
          />
        </motion.div>

        {/* Action Button */}
        <motion.div variants={slideUp} className="pt-2">
          <Button
            variant="outline"
            className="rounded-full text-xs h-8 px-4 border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white"
          >
            <a href="files/resume.pdf" download>
              Download CV ↓
            </a>
          </Button>
        </motion.div>

        <motion.hr variants={slideUp} className="border-zinc-800/60 my-10" />

        {/* Minimal Projects List */}
        <motion.div variants={slideUp} className="space-y-4">
          <div className="flex justify-between items-center pb-2">
            <HyperText className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
              Selected Work
            </HyperText>
            <span className="text-[11px] font-mono text-zinc-600">
              index / 0{projects.length}
            </span>
          </div>

          <PhotoProvider maskOpacity={0.9} speed={() => 200}>
            <div className="divide-y divide-zinc-850/60 border-t border-b border-zinc-850/60">
              {projects.map((project, index) => (
                <div
                  key={project.slug || index}
                  className="group py-5 flex flex-col md:flex-row md:items-start justify-between gap-4 transition-colors duration-200 hover:bg-zinc-900/30 -mx-3 px-3 rounded-lg"
                >
                  {/* Left: Info */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors underline-offset-4 hover:underline"
                      >
                        {project.title}
                      </Link>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-normal line-clamp-2 max-w-md">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Right: Compact Image Trigger Previews */}
                  {project.images && project.images.length > 0 && (
                    <div className="flex items-center gap-1.5 self-start shrink-0 pt-0.5">
                      {project.images.slice(0, 3).map((img, imgIndex) => (
                        <PhotoView key={imgIndex} src={img}>
                          <div
                            className="relative w-12 h-8 rounded border border-zinc-800 overflow-hidden bg-zinc-950 cursor-pointer transition-all duration-200 hover:border-zinc-500 hover:scale-110"
                            title="Click to view image"
                          >
                            <img
                              src={img}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                            />
                          </div>
                        </PhotoView>
                      ))}
                      {project.images.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-500 pl-1">
                          +{project.images.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </PhotoProvider>
        </motion.div>
      </div>

      <div className="h-16" />
    </motion.section>
  );
}

export default HeroSection;
