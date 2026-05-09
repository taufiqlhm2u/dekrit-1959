"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      onClick={onComplete}
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#111111] cursor-pointer overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-8 text-center px-4"
      >
        {/* Paper / Scroll Icon Section */}
        <div className="relative">
          <motion.div
             animate={{ 
                y: [0, -10, 0],
             }}
             transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
             }}
             className="relative z-10"
          >
            <Scroll size={100} strokeWidth={1} className="text-[#B45309] drop-shadow-[0_0_20px_rgba(180,83,9,0.3)]" />
          </motion.div>
          {/* Subtle glow underneath */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#B45309] opacity-10 blur-[60px] rounded-full" />
        </div>


      </motion.div>

      {/* Modern noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </motion.div>
  );
}
