"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HyperText } from "@/components/ui/hyper-text";
import { slideUp } from "@/lib/animations";
import { education } from "@/lib/profile";

export function EducationSection() {
  return (
    <motion.div className="mt-4 mb-4" variants={slideUp}>
      <h2>
        <HyperText className="text-sm">Education</HyperText>
      </h2>
      {education.map((entry) => (
        <div key={entry.institute} className="flex w-full gap-4 items-start mt-4">
          {entry.logo && (
            <Image
              src={entry.logo}
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 shrink-0 object-contain"
            />
          )}
          <div className="min-w-0">
            <p className="font-light">{entry.institute}</p>
            <p className="italic text-sm font-extralight">{entry.qualification}</p>
            <span className="text-xs font-light text-zinc-400">{entry.dates}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
