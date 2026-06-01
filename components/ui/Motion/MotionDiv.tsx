"use client";

import { motion } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
}

/** Passes parent animation variants through without defining its own. */
export function MotionDiv({ children, className = "" }: MotionDivProps) {
  return <motion.div className={className}>{children}</motion.div>;
}
