import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full bg-[#f7f3ed] border-t-[0.5px] border-gray-500">
      {/* grid section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0.5 w-full">
        <div className=" flex justify-center items-center border-b-[0.5px] border-gray-500 md:border-none">
          <Image src={assets.logo} alt='' className='' />
        </div>

        <div className="md:flex md:flex-col grid grid-cols-2 grid-rows-2 border-l-[0.5px] border-gray-500 md:border-l">
          <a
            href="/"
            className="p-[40px_25px] flex justify-start border-b-[0.5px] border-gray-500 hover:bg-[#9e8f7b] transition-colors duration-1000 ease-in-out"
          >
            Home
          </a>
          <a
            href="/work"
            className="p-[40px_25px] flex justify-start border-l-[0.5px] border-b-[0.5px] border-gray-500 hover:bg-[#9e8f7b] transition-colors duration-1000 ease-in-out"
          >
            Work
          </a>
          <a
            href="/about"
            className="p-[40px_25px] flex justify-start border-b-[0.5px] border-gray-500 hover:bg-[#9e8f7b] transition-colors duration-1000 ease-in-out"
          >
            About
          </a>
          <a
            href="/contact"
            className="p-[40px_25px] flex justify-start hover:bg-[#9e8f7b] border-l-[0.5px] transition-colors duration-1000 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-full flex flex-col md:h-[170px] md:flex-row border-[0.5px] border-gray-500">
        <div className="p-[1.5rem] flex flex-col flex-1 justify-between border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-gray-500">
          <span className="text-gray-500">Contact</span>
          <p>ravishankarsaini279@gmail.com</p>
        </div>

        <div className="p-[1.5rem] flex flex-col flex-1 justify-between border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-gray-500">
          <span className="text-gray-500">Socials</span>
          <a href="https://www.linkedin.com/in/ravishankar-saini" target='_blank' className="font-medium">Linkedin</a>
        </div>

        <div className="p-[1.5rem] flex flex-col flex-1 justify-between border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-gray-500">
          <span className="text-gray-500">Repository</span>
          <a href="https://www.github.com/Cyrus253" target='_blank' className="font-medium">Github</a>
        </div>

        <div className="p-[1.5rem] flex flex-col flex-1/4 justify-between border-gray-500">
          <span className="text-gray-500">Privacy policy</span>
          <div className="flex flex-col md:flex-row md:gap-20">
            <p>All rights reserved.</p>
            <p>© 2025 Ravishankar Saini.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className='mt-20 '>
//     <div className='text-center '>
//         <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-46 mx-auto mb-2'/>

//         <div className='w-max flex items-center gap-2 mx-auto '>
//            <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
//            ravishankarsaini279@gmail.com
//         </div>
//     </div>

//     <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
//         <p> © 2025 Ravishankar Saini. All rights reserved.</p>
//         <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//             <li> <a target='_blank' href="https://github.com/Cyrus253"></a>Github</li>
//             <li> <a target='_blank' href="https://github.com/Cyrus253"></a>Linkedin</li>
//         </ul>
//     </div>
// </div>