"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeIntro() {
  const fullCode = [
    "console.log(`Welcome to Ravishankar's Portfolio \n Give your valuable feedback/suggestion`);"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const clickSound = useRef(null);
  
  useEffect(() => {
    clickSound.current = new Audio("/typewriter-click.mp3");
    clickSound.current.volume = 0.3;
    clickSound.current.playbackRate = 0.7;
  }, []);

  useEffect(() => {
    if (lineIndex < fullCode.length) {
      if (charIndex < fullCode[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullCode[lineIndex][charIndex]);
          
          // ✅ Play sound ONLY for actual characters (not empty lines)
          if (clickSound.current && fullCode[lineIndex][charIndex] !== " ") {
            clickSound.current.currentTime = 0;
           
            clickSound.current.play().catch(() => {}); // Prevent console errors
          }
          
          setCharIndex((prev) => prev + 1);
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);

        return () => clearTimeout(timeout);
      }
    } else {
      // ✅ FIXED: Stop any playing sound when typing is complete
      if (clickSound.current) {
        clickSound.current.pause();
        clickSound.current.currentTime = 0;
      }
      
      const timeout = setTimeout(() => setShowIntro(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex]);

  // ✅ ADDITIONAL FIX: Clean up sound when component unmounts
  useEffect(() => {
    return () => {
      if (clickSound.current) {
        clickSound.current.pause();
        clickSound.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black text-green-300 font-mono text-xs sm:text-sm md:text-lg whitespace-pre p-4 sm:p-6 z-[9999] overflow-hidden"
        >
          <pre>
            {displayedText}
            <span className="animate-pulse">█</span>
          </pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}