import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {ReactLenis} from 'lenis/react'
import Footer from './Footer'

const Header = () => {
    return (
        <>
        <ReactLenis root />
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <img className='liquid-border w-48 h-48' />
            </div>
            <motion.h3
                // initial={{ y: -20, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.6, delay: 0.3 }}

                className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
                Hi! I'm Ravishankar saini
            </motion.h3>
            <motion.h1
                // initial={{ y: -30, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.8, delay: 0.5 }}

                className='text-3xl md:text-6xl lg:text-[66px] font-ovo'>
                Full stack Developer
            </motion.h1>
            <motion.p
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 0.6, delay: 0.7 }}

                className=' max-w-2xl mx-auto font-ovo'>I’m a full-stack developer with a strong foundation in web technologies and a passion for continuous learning.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a href="/contact"
                    // initial={{ y: 30, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.6, delay: 1 }}

                    className='px-10 py-3 border border-black rounded-full bg-[#d5c8b0] hover:bg-[#986c32] text-black flex items-center gap-2 dark:bg-transparent hover:text-white transition-colors duration-1000 ease-in-out'>
                    Contact me
                    
                </motion.a>

                <motion.a href="https://drive.google.com/file/d/1IMMeE2JLjcApPNliwWMuYUWuxqxwEJNx" target='_blank'
                    rel='noopener noreferrer' download
                    // initial={{ y: 30, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.6, delay: 1.2 }}

                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-[#d5c8b0] hover:bg-[#986c32] dark:text-black hover:text-white transition-colors duration-1000 ease-in-out' > My Resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
                 <motion.a href="https://www.github.com/Cyrus253" target='_blank'
                    rel='noopener noreferrer'
                    // initial={{ y: 30, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.6, delay: 1.5 }}

                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-[#d5c8b0] hover:bg-[#986c32] text-black dark:text-black hover:text-white transition-colors duration-1000 ease-in-out' >
                    Github
                    <Image src={assets.arrow_icon} alt='' className='w-3' />
                </motion.a>

            </div>
        </div>
        </>
    )
}

export default Header