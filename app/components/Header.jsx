import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image  className='liquid-border w-48 h-48' />
            </div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}

                className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
                Hi! I'm Ravishankar saini
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}

                className='text-3xl md:text-6xl lg:text-[66px] font-ovo'>
                Full stack Developer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}

                className=' max-w-2xl mx-auto font-ovo'>I’m a full-stack developer with a strong foundation in web technologies and a passion for continuous learning.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a href="#contact"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}

                    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
                    Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>

                <motion.a href="/sample-resume.pdf" download
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}

                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black' > My Resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>

            </div>
        </div>
    )
}

export default Header