"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { HyperText } from "@/components/ui/hyper-text";
import { slideUp, staggerContainer } from "@/lib/animations";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { notFound } from "next/navigation";

function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      {/* Back link */}
      <motion.div variants={slideUp}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-md text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div variants={slideUp} className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs text-zinc-500">{project.date}</span>
          <span className="text-[0.65rem] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white leading-tight">
          <HyperText className="text-sm">{project.title}</HyperText>
        </h1>
      </motion.div>

      {/* Hero image */}
      <motion.div variants={slideUp}>
        <PhotoProvider>
          <PhotoView src={project.images[0]}>
            <motion.div
              data-sound="click"
              className="w-full aspect-video rounded-lg overflow-hidden bg-zinc-800 cursor-zoom-in"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </PhotoView>
        </PhotoProvider>
      </motion.div>

      {/* Description */}
      <motion.div variants={slideUp} className="flex flex-col gap-4">
        {project.longDescription.map((paragraph, index) => (
          <p
            key={index}
            className=" text-zinc-400 leading-relaxed text-justify"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Tech stack */}
      <motion.div variants={slideUp} className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">
          <HyperText className="text-sm">Tech Stack</HyperText>
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Features */}
      <motion.div variants={slideUp} className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">
          <HyperText className="text-sm">Key Features</HyperText>
        </h2>
        <ul className="flex flex-col gap-2">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2  text-zinc-400"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Links */}
      {project.links && (
        <motion.div variants={slideUp} className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-4.5 h-4.5" />
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>
      )}

      <motion.hr variants={slideUp} className="border-zinc-800" />

      {/* Prev / Next navigation */}
      <motion.div variants={slideUp} className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 flex-1 min-w-0"
          >
            <span className="text-[0.65rem] text-zinc-500 uppercase tracking-wider">
              Previous
            </span>
            <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 truncate">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-1 flex-1 min-w-0 text-right"
          >
            <span className="text-[0.65rem] text-zinc-500 uppercase tracking-wider">
              Next
            </span>
            <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 truncate">
              {next.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetailPage;