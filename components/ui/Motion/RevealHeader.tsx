"use client";

import { motion } from "framer-motion";
import { defaultViewport, headerReveal } from "../../../lib/animations";

interface RevealHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealHeader({ children, className = "" }: RevealHeaderProps) {
  return (
    <motion.header
      className={className}
      variants={headerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.header>
  );
}
