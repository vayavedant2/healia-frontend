"use client";

import { motion } from "framer-motion";
import { cardReveal, defaultViewport } from "../../../lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.article
      className={className}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {children}
    </motion.article>
  );
}
