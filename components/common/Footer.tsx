"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GlyphMatrix } from "../ui/glyph-matrix";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-24 pb-8 relative"
      variants={slideUp}
      initial="hidden"
      animate="visible"
    >
      <motion.hr variants={slideUp} className="border-zinc-800" />

      <motion.div
        className="mt-8 flex flex-col items-center gap-6 "
        variants={slideUp}
      >
        {/* Social & nav links */}


            <GlyphMatrix className="absolute rounded-xl inset-0 z-10"  fadeBottom={1}/>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">

          <Link
            href="https://github.com/pahasara-ridmaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pahasara-ridmaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <span className="text-zinc-700">·</span>
          <Link
            href="/"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            About
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-600">
          © {year} Pahasara Ridmaka. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;