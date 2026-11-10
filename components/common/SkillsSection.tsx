"use client";

import { motion } from "framer-motion";
import { HyperText } from "@/components/ui/hyper-text";
import { slideUp } from "@/lib/animations";
import { skills } from "@/lib/profile";

export function SkillsSection() {
  return (
    <motion.div className="mt-4 mb-4" variants={slideUp}>
      <motion.h3 className="mb-4" variants={slideUp}>
        <HyperText className="text-sm">Skills</HyperText>
      </motion.h3>
      <div className="flex flex-col gap-4">
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={slideUp}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-sm"
          >
            <span className="text-zinc-200 font-medium sm:w-48 shrink-0">
              {skillGroup.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-light text-zinc-400 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/40 rounded-md px-2 py-0.5 transition-colors duration-150"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
