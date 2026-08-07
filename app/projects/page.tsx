"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HyperText } from "@/components/ui/hyper-text";
import { slideUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { FaArrowRight } from "react-icons/fa";

function ProjectsPage() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      <motion.h2 variants={slideUp}>
        <HyperText className="text-sm">Projects</HyperText>
      </motion.h2>

      {/* <motion.p
        className="text-xs text-zinc-400 leading-relaxed text-justify"
        variants={slideUp}
      >
        A collection of my work across data engineering, web development, and
        software engineering. Click on any project to see more details.
      </motion.p> */}

      <motion.div variants={slideUp} className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-3 p-4 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-xs text-zinc-500">{project.date}</span>
                <h3 className="text-sm font-semibold text-white group-hover:underline">
                  {project.title}
                </h3>
              </div>
              <span className="text-[0.65rem] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400 uppercase tracking-wider shrink-0">
                {project.category}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[0.65rem] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-white transition-colors duration-200">
              View details
              <FaArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProjectsPage;