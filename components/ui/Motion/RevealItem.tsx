"use client";

import { motion } from "framer-motion";
import { defaultViewport, staggerItem } from "../../../lib/animations";

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealItem({ children, className = "" }: RevealItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
