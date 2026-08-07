"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";
import { HyperText } from "@/components/ui/hyper-text";

function AboutPage() {
  const certificates = [
    {
      date: "March - April 2026",
      title: "Introduction to dbt",
      provider: "DataCamp",
      href: "",
    },
    {
      date: "March - April 2026",
      title: "Dengue ETL & Health Data Analytic Dashboard",
      provider: "DataCamp",
      href: "",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={slideUp}><HyperText className='text-sm'>About Me</HyperText></motion.h2>

      <motion.p
        className="text-xs text-zinc-400 leading-relaxed mt-8 text-justify"
        variants={slideUp}
      >
        I'm Pahasara Ridmaka, from Panama—a coastal village in the Eastern Province of Sri Lanka.

        <br />
        <br />
My interest in technology started in 2014, back in my village school. I read an HTML5 book written in Sinhala and wrote my first HTML page. That was the beginning. Around the same time, I was reading Wijaya Pariganaka Magazine and trying out everything in it—experimenting, breaking things, fixing them. That's how I fell into development.
<br />
<br />
I took IT as a subject for O/Ls and continued with it for A/Ls. In 2023, I got selected to study Physical Science-ICT at the University of Sri Jayewardenepura.
<br />
<br />
Now I'm an ICT undergraduate working on full-stack development and data engineering. I build systems that are scalable, repeatable, and reliable.
<br />
<br />
I also do graphics design. Still curious. Still building.
      </motion.p>

      {/* Education Section */}
      <motion.div className="mt-8 mb-8" variants={slideUp}>
        <h2 className="mt-8"><HyperText className='text-sm'>Education</HyperText></h2>
        <div className="flex flex-row w-full gap-4 items-start justify-start mt-4">
          <div className="w-full">
            <p className="text-sm font-light">
              Univerisity of Sri Jayewardenepura
            </p>
            <p className="italic text-xs font-extralight">
              BSc. Physical Science - ICT
            </p>
          </div>
        </div>
        <span className="text-xs font-light text-zinc-400">2017-2020</span>
      </motion.div>

      <motion.hr variants={slideUp} className="border-zinc-800" />

      {/* Certifications Section */}
      <motion.div className="mt-8 mb-8" variants={slideUp}>
        <motion.h3 className="mb-3" variants={slideUp}>
          <HyperText className="text-sm">Certificates</HyperText> 
        </motion.h3>
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="font-light flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start text-zinc-400 text-sm py-2 transition-colors duration-200 hover:bg-zinc-800/30 rounded-lg px-2 -mx-2"
            variants={slideUp}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs whitespace-nowrap">{cert.date}</span>
            <div className="flex-1 flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start">
              <p className="text-white underline break-words">
                <Link href={cert.href}>{cert.title}</Link>
              </p>
              <p className="italic underline whitespace-nowrap">
                by {cert.provider}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;