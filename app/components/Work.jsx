'use client';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id='work'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[8%] py-16 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-center mb-2 text-lg text-gray-500 font-ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-ovo font-semibold'
      >
        My Latest Works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className='max-w-2xl mx-auto text-center mt-8 mb-6 font-ovo text-gray-600 dark:text-gray-300'
      >
        I’m a full-stack developer with a strong foundation in web technologies and a passion for continuous learning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className='relative rounded-2xl overflow-hidden shadow-lg group border border-gray-200 dark:border-gray-800'
          >
            <a
              href={project.Link}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              {/* Background Image */}
              <div
                className='aspect-[4/3] bg-cover bg-center'
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 group-hover:from-black/90 
                ${isDarkMode
                    ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                    : 'bg-gradient-to-t from-neutral-900/50 via-neutral-100/10 to-transparent'
                  }`}
              />

              {/* Content */}
              <div className='absolute bottom-0 z-20 w-full p-5 text-white'>
                <div>
                  <h3 className='text-xl font-semibold'>{project.title}</h3>
                  <p className='text-sm mt-1 opacity-90'>{project.description}</p>
                </div>

               
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href='#'
        className='w-max flex items-center justify-center gap-2 bg-black text-white border border-gray-700 py-3 px-8 rounded-full mx-auto mt-16 hover:bg-gray-900 transition dark:border-white'
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt='arrow icon'
          className='w-4'
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
