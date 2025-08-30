import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  const [result, setResult] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8d71db3b-f9b1-45ab-8bab-8cff4b21198f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'remove' : 'bg-custom-footer'} `} >

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-center mb-2 text-lg font-ovo'>Connect with Me </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-ovo'>Get in Touch </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className='max-w-2xl mx-auto text-center mt-12 mb-6 font-ovo'>
        I'd love to here from you! Whether you have a question, want to collaborate on a project,have offer for me or just want to say hi, feel free to reach out.
      </motion.p>

      <motion.form onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className='max-w-2xl mx-auto'>

        <div className='grid grid-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className='flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white dark:bg-black/15 dark:border-white/90 ' type="text" placeholder='Enter your name' required name='name' />

          <motion.input
           initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          className='flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white dark:bg-black/15 dark:border-white/90' type="email" placeholder='Enter your email' required name='email' />
        </div>

        <motion.textarea 
         initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.6 }}
        className='w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-black/15 dark:border-white/90' rows='6' placeholder='Enter your message' required name='message'>
        </motion.textarea>

        <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{duration: 0.3}}
        
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
          Submit <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact