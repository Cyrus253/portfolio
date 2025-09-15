"use client"
import { assets, infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {ReactLenis} from 'lenis/react'

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
    <ReactLenis />
    <motion.div id='about'
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1 }}

      className='w-full px-[12%] py-10 pt-[120px] scroll-mt-[120px]'>
      <motion.h4
        // initial={{ opacity: 0, y: -20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-ovo'>
        Introduction </motion.h4>
      <motion.h2
        // initial={{ opacity: 0, y: -20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-ovo'>
        About Me</motion.h2>

      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.8 }}
        className=' flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
        <motion.div
        //   initial={{ opacity: 0, scale: 0.9 }}
        //   whileInView={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.6, }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
        //   initial={{ opacity: 0 }}
        //   whileInView={{ opacity: 1 }}
        //   transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>I’m a full-stack developer with a strong foundation in web technologies and a passion for continuous learning.I build applications that combine clean UI with solid backend logic, using tools like React, Node.js, and MongoDB. As I grow in this field, I'm actively exploring new technologies, improving my problem-solving skills, and building projects that challenge me to think deeper and code smarter.</p>

          <motion.ul
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="rounded-2xl p-10 flex flex-col items-start
               border-[5px] border-gray-100 dark:border-gray-700
               bg-gray-200 dark:bg-black/15
               shadow-sm hover:shadow-md 
               transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                    bg-gray-100 dark:bg-zinc-800 mb-4">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </motion.li>
            ))}

          </motion.ul>

        </motion.div>
      </motion.div>

    </motion.div>
 
 </>
  )

}

export default About