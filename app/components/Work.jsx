"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] py-16 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg text-gray-500 font-ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-ovo font-semibold"
      >
        My Latest Works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-2xl mx-auto text-center mt-8 mb-6 font-ovo text-gray-600 dark:text-gray-300"
      >
        I’m a full-stack developer with a strong foundation in web technologies
        and a passion for continuous learning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
               border-[5px] border-gray-100 dark:border-gray-700 
               bg-gray-200 dark:bg-black/15 flex flex-col"
          >
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full group"
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 flex flex-col justify-end flex-grow"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm mt-1 text-gray-600 dark:text-gray-300"
                >
                  {project.description}
                </motion.p>
              </motion.div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Work;
