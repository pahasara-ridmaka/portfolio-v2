"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { HyperText } from "@/components/ui/hyper-text";
import { NavigationMenuDemo } from "@/components/common/NavigationMenu";
import { SkillsSection } from "@/components/common/SkillsSection";
import { EducationSection } from "@/components/common/EducationSection";
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
          I&apos;m{" "}
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
          and scalable data pipelines across open-source environments.
        </motion.p>

        {/* Status indicator */}
        <motion.div
          className="flex items-center gap-3 text-xs font-mono"
          variants={slideUp}
        >
          <span className="text-zinc-500">Currently :-</span>
          <ShimmeringText
            className="text-xs tracking-wider"
            text="Loooking for new opportunities"
          />
        </motion.div>

        <motion.hr variants={slideUp} className="border-zinc-800/60 my-10" />

        <EducationSection />

        <motion.hr variants={slideUp} className="border-zinc-800/60 my-10" />

        <SkillsSection />


        <motion.hr variants={slideUp} className="border-zinc-800/60 my-10" />

        {/* Project Cards */}
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
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={slideUp}
                  className="min-w-0 flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/20 p-4 transition-colors duration-200 hover:border-zinc-600"
                >
                  {project.images.length > 0 ? (
                    <PhotoView src={project.images[0]}>
                      <button
                        type="button"
                        aria-label={`Preview ${project.title} image 1`}
                        className="relative block w-full aspect-video overflow-hidden rounded-md bg-zinc-950 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                      >
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} cover`}
                          fill
                          sizes="(min-width: 640px) 320px, 100vw"
                          className="object-cover"
                        />
                      </button>
                    </PhotoView>
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-xs text-zinc-500">
                      No preview available
                    </div>
                  )}

                  <div className="mt-4 flex flex-1 flex-col gap-2 min-w-0">
                    <span className="text-[11px] font-mono text-zinc-500">
                      {project.date}
                    </span>
                    <h3 className="text-sm font-medium text-zinc-200 wrap-break-word">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="rounded-sm hover:text-white hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed wrap-break-word">
                      {project.shortDescription}
                    </p>
                  </div>

                  {project.images.length > 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.images.slice(1).map((img, imgIndex) => (
                        <PhotoView key={img} src={img}>
                          <button
                            type="button"
                            aria-label={`Preview ${project.title} image ${imgIndex + 2}`}
                            className="relative w-12 h-8 shrink-0 overflow-hidden rounded border border-zinc-800 bg-zinc-950 cursor-zoom-in transition-colors hover:border-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                          >
                            <Image
                              src={img}
                              alt=""
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </button>
                        </PhotoView>
                      ))}
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </PhotoProvider>
        </motion.div>

      </div>


      <div className="h-16" />
    </motion.section>
  );
}

export default HeroSection;
