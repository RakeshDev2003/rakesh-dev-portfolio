"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.42, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
