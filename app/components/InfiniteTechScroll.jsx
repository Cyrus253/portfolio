'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const logos = [
  { src: assets.mongodb, alt: 'MongoDB' },
  { src: assets.javascript, alt: 'JavaScript' },
  { src: assets.typescript, alt: 'TypeScript' },
  { src: assets.reactjs, alt: 'React.js' },
  { src: assets.nextjs, alt: 'Next.js' },
  { src: assets.nodejs, alt: 'Node.js' },
  { src: assets.express, alt: 'Express.js' },
  { src: assets.postgresql, alt: 'PostgreSQL' },
  { src: assets.docker, alt: 'Docker' },
  { src: assets.tailwindcss, alt: 'Tailwind CSS' },
  { src: assets.restapi, alt: 'REST API' },
  { src: assets.gemini, alt: 'Gemini API' },
  { src: assets.openai, alt: 'OpenAI API' },
  { src: assets.firebase, alt: 'Firebase' },
  { src: assets.cloudinary, alt: 'Cloudinary' },
  { src: assets.vscode, alt: 'VS Code' },
  { src: assets.postman, alt: 'Postman' },
  { src: assets.git, alt: 'Git' },
  { src: assets.github, alt: 'GitHub' },
  { src: assets.cpp, alt: 'C++' },
];

const InfiniteLogoScroll = () => {
  return (
    <div className="relative w-full overflow-hidden py-14 bg-transparent">
      <h2 className="text-5xl text-center font-extrabold text-gray-800 mb-3 dark:text-gray-100">Tech Stack</h2>
      <p className="text-gray-600 text-lg text-center pb-10 dark:text-gray-300">Technologies I work with</p>

      {/* 🌐 SCROLLING LOGOS */}
      <div className="flex relative z-10">
        {[...Array(2)].map((_, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="flex flex-shrink-0"
          >
            {logos.map((logo, index) => (
              <div key={`${rowIndex}-${index}`} className="flex-shrink-0 px-6">
                <div className="p-4 rounded-full dark:bg-gray-200 shadow-[0_0_10px_rgba(246,123,0,0.8)]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
