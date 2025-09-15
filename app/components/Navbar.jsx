"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const sideMenuRef = useRef()
    const[isScroll, setIsScroll] = useState(false)

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    })
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            </div>
            <nav className={"w-full h-18 fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 mb-2 bg-[#f7f3ed/20] border-b-[.5px] backdrop-blur-sm shadow-sm dark:[background-image:var(--bg-darkTheme)] dark:shadow-white/20"}>

                <div className='flex items-center '>
                <Link href="/">
                    <h1  className='text-3xl cursor-pointer'>Ravishankar</h1>
                    {/* <Image src={isDarkMode ?assets.logo_dark : assets.logo} className=' w-58 cursor-pointer mr-14' alt='' /> */}
                </Link>
                </div>

                <ul className="hidden md:flex items-center font-medium text-black gap-6 lg:gap-13 px-12 py-3 ">
                    <Link className='font-ovo text-[20px] hover:text-[#986c32] ' href={"/about"}>About</Link>
                    <Link className='font-ovo text-[20px] hover:text-[#986c32] ' href={"/work"}>Work</Link>
                    <Link className='font-ovo text-[20px] hover:text-[#986c32]' href={"/contact"}>Contact</Link>
                </ul>
                <div className='flex items-center gap-4'>
                    {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer' />
                    </button> */}

                    <a className='hidden md:flex items-center justify-end gap-3 px-10 
                    py-2.5 ml-4 font-medium font-ovo border-b-1 rounded-2xl hover:bg-[#986c32]/80 hover:text-white transition-colors duration-1000 ease-in-out' href="https://www.linkedin.com/in/ravishankar-saini" target='_blank'>Linkedin
                         <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></a>

                    <button className='inline-block md:hidden ml-3'onClick={openMenu}>
                        <Image src={ isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' width={24} height={24} className='w-6' />
                    </button>
                </div>
                {/* Mobile Menu */}
                

                <ul ref={sideMenuRef} className=' flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ?assets.close_white : assets.close_black} alt='menu' className='w-5 cursor-pointer' />
                    </div>

                    <Link onClick={closeMenu} className='font-ovo' href={"/"}>Home</Link>
                    <Link onClick={closeMenu} className='font-ovo' href={"/about"}>About me</Link>
                    <Link onClick={closeMenu} className='font-ovo' href={"/work"}>My works</Link>
                    <Link  onClick={closeMenu} href={"/contact"}>Contact</Link>
                </ul>

            </nav>
        </>
    )
}

export default Navbar