"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { HyperText } from "@/components/ui/hyper-text";
import { slideUp, staggerContainer } from "@/lib/animations";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 max-w-4xl mx-auto px-4 py-8"
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

      {/* Images & Lightbox Gallery Section */}
      {hasImages && (
        <motion.div variants={slideUp} className="flex flex-col gap-3">
          <PhotoProvider
            maskOpacity={0.85}
            speed={() => 300}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            {/* Main Featured Image */}
            <PhotoView src={project.images[activeImageIndex]}>
              <motion.div
                data-sound="click"
                className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-zoom-in relative group"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={project.images[activeImageIndex]}
                  alt={`${project.title} active preview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </motion.div>
            </PhotoView>

            {/* Thumbnail Navigation Row */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 cursor-pointer ${
                      activeImageIndex === index
                        ? "border-blue-500 ring-2 ring-blue-500/20 opacity-100"
                        : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-700"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} thumb ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </PhotoProvider>
        </motion.div>
      )}

      {/* Description */}
      <motion.div variants={slideUp} className="flex flex-col gap-4">
        {project.longDescription?.map((paragraph, index) => (
          <p
            key={index}
            className="text-zinc-400 leading-relaxed text-justify"
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
          {project.techStack?.map((tech) => (
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
          {project.features?.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-zinc-400"
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
              <FaGithub className="w-4 h-4" />
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
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
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