"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0f] text-[var(--primary-color)] z-[9999]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="text-3xl font-bold tracking-widest"
      >
        Loading Arena...
      </motion.h1>

      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="h-[4px] mt-6 bg-[var(--primary-color)] rounded-full shadow-[0_0_20px_var(--primary-color)]"
      ></motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-4 text-sm text-gray-400"
      >
        Please wait, preparing your gaming arena 🎮
      </motion.span>
    </div>
  );
}
