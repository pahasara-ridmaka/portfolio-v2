"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";
import { HyperText } from "@/components/ui/hyper-text";
import { FaArrowLeft } from "react-icons/fa";
import { Highlighter } from "@/components/ui/highlighter";

function AboutPage() {
  const [showHighlight, setShowHighlight] = useState(false);

  const achievements = [
    {
      date: "Sep 2024",
      title: "HackX 9.0 Finalist",
      provider: "IMSSA, University of Kelaniya",
      href: "",
    },
  ]

  const certificates = [
    {
      date: "Jul 2026",
      title: "Introduction to dbt",
      provider: "DataCamp",
      href: "",
    },
    {
      date: "Jul 2026",
      title: "Associate Data Engineer",
      provider: "DataCamp",
      href: "",
    },

    {
      date: "Jul 2026",
      title: "Introduction to PySpark",
      provider: "DataCamp",
      href: "",
    },
    {
      date: "Jul 2026",
      title: "Intermediate Docker",
      provider: "DataCamp",
      href: "",
    },

    {
      date: "Jul 2026",
      title: "Introduction to Apache Airflow in Python",
      provider: "DataCamp",
      href: "",
    },
    {
      date: "Jul 2026",
      title: "Introduction to Power BI",
      provider: "DataCamp",
      href: "",
    },
    {
      date: "Jun 2026",
      title:
        "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
      provider: "AWS Academy",
      href: "",
    },
    {
      date: "Jun 2026",
      title: "AWS Academy Graduate - Data Engineering - Training Badge",
      provider: "AWS Academy",
      href: "",
    },

    {
      date: "Jun 2026",
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      provider: "AWS Academy",
      href: "",
    },
    {
      date: "Jun 2025",
      title: "Introduction to Generative AI",
      provider: "Google",
      href: "",
    },

    {
      date: "Sep 2024",
      title: "Postman API Fundamentals Student Expert",
      provider: "Postman",
      href: "",
    },
    {
      date: "Dec 2023",
      title: "JavaScript Algorithm and Data Structure",
      provider: "freeCodeCamp",
      href: "",
    },
  ];

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

      <motion.h2 variants={slideUp}>
        <HyperText className="text-sm">About Me</HyperText>
      </motion.h2>

      <motion.p
        className=" text-zinc-400 leading-relaxed  text-justify"
        variants={slideUp}
        onAnimationComplete={() => setShowHighlight(true)}
      >
        <motion.img
          src="profile.jpg"
          alt="Pahasara Ridmaka"
          className="w-24 h-auto rounded-xl object-contain mb-4 saturate-0 hover:saturate-75 transition-all duration-300"
        />
        I'm{" "}
        {showHighlight ? (
          <Highlighter action="highlight" isView={true} animationDuration={0}>
            Pahasara Ridmaka
          </Highlighter>
        ) : (
          <span className="inline-block">Pahasara Ridmaka</span>
        )}
        , from Panama, a coastal village in the Eastern Province of Sri Lanka.
        <br />
        <br />
        My interest in technology started in 2014, back in my village school. I
        read an HTML5 book written in Sinhala and wrote my first HTML page. That
        was the beginning. Around the same time, I was reading Wijaya Pariganaka
        Magazine and trying out everything in it experimenting, breaking things,
        fixing them. That's how I fell into development.
        <br />
        <br />
        I took IT as a subject for O/Ls and continued with it for A/Ls. In 2023,
        I got selected to study Physical Science-ICT at the University of Sri
        Jayewardenepura.
        <br />
        <br />
        Now I'm an ICT undergraduate working on full-stack development and data
        engineering. I build systems that are scalable, repeatable, and
        reliable.
        <br />
        <br />I also do graphics design. <br /> <br />
        Still curious. Still building.
      </motion.p>

      {/* Education Section */}
      <motion.div className="mt-4 mb-4" variants={slideUp}>
        <h2>
          <HyperText className="text-sm">Education</HyperText>
        </h2>
        <div className="flex flex-row w-full gap-4 items-start justify-start mt-4">
          <div className="w-full">
            <p className=" font-light">
              Univerisity of Sri Jayewardenepura
            </p>
            <p className="italic text-sm font-extralight">
              BSc. Physical Science - ICT
            </p>
          </div>
        </div>
        <span className="text-xs font-light text-zinc-400">2023-2026</span>

        <div className="flex flex-row w-full gap-4 items-start justify-start mt-4">
          <div className="w-full">
            <p className=" font-light">B/Dharmadutha College, Badulla</p>
            <p className="italic text-sm font-extralight">
              Physical Science Stream (Combined Maths, ICT, Physics)
            </p>
          </div>
        </div>
        <span className="text-xs font-light text-zinc-400">2017-2020</span>

        <div className="flex flex-row w-full gap-4 items-start justify-start mt-4">
          <div className="w-full">
            <p className=" font-light">
              Am/Panama Maha Vidyalaya, Panama
            </p>
            <p className="italic text-sm font-extralight">
              Primary and Secondary Education
            </p>
          </div>
        </div>
        <span className="text-xs font-light text-zinc-400">2006-2016</span>
      </motion.div>

      <motion.hr variants={slideUp} className="border-zinc-800" />

      
      {/* Achievements Section */}
      <motion.div className="mt-4 mb-4" variants={slideUp}>
        <motion.h3 className="mb-3" variants={slideUp}>
          <HyperText className="text-sm">Achievements</HyperText>
        </motion.h3>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="font-light flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start text-zinc-400 text-sm py-2 transition-colors duration-200 hover:bg-zinc-800/30 rounded-lg px-2 -mx-2"
            variants={slideUp}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs whitespace-nowrap">{achievement.date}</span>
            <div className="flex-1 flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center justify-start">
              <p className="text-white underline wrap-break-word">
                <Link href={achievement.href}>{achievement.title}</Link>
              </p>
              <p className="italic  whitespace-nowrap">by {achievement.provider}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr variants={slideUp} className="border-zinc-800" />

      {/* Certifications Section */}
      <motion.div className="mt-4 mb-4" variants={slideUp}>
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
              <p className="text-white underline wrap-break-word">
                <Link href={cert.href}>{cert.title}</Link>
              </p>
              <p className="italic  whitespace-nowrap">by {cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;
