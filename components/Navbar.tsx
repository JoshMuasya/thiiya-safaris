'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 ) {
                setNavBg(true)
            } else 
            setNavBg(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className={`flex flex-row justify-between align-middle items-center px-10 py-7 transition-colors duration-300 fixed top-0 left-0 z-30  w-full ${navBg ? 'bg-white/70' : 'bg-white'}`}>
            {/* Logo */}
            <div className=''>
                <img src="/logo.png" alt="Logo" className='h-6 md:h-16' />
            </div>

            {/* Menu */}
            <div className='md:w-2/3 '>
                {/* Desktop Menu */}
                <div className='w-full hidden md:flex'>
                    <ul className='flex flex-row justify-around align-middle items-center w-full font-medium text-lg'>
                        <li className='hover:font-bold hover:text-xl hover:transition-transform hover:duration-100 hover:ease-in-out ease-in-out duration-100 transition-transform hover:underline hover:decoration-4 hover:decoration-primary hover:text-primary'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>

                        <li className='hover:font-bold hover:text-xl hover:transition-transform hover:duration-100 hover:ease-in-out ease-in-out duration-100 transition-transform hover:underline hover:decoration-4 hover:decoration-primary hover:text-primary'>
                            <Link href='/about'>
                                About Us
                            </Link>
                        </li>

                        <li className='hover:font-bold hover:text-xl hover:transition-transform hover:duration-100 hover:ease-in-out ease-in-out duration-100 transition-transform hover:underline hover:decoration-4 hover:decoration-primary hover:text-primary'>
                            <Link href='/tours'>
                                Tours
                            </Link>
                        </li>

                        <li className='hover:font-bold hover:text-xl hover:transition-transform hover:duration-100 hover:ease-in-out ease-in-out duration-100 transition-transform hover:underline hover:decoration-4 hover:decoration-primary hover:text-primary'>
                            <Link href='/gallery'>
                                Gallery
                            </Link>
                        </li>

                        {/* <li className='hover:font-bold hover:text-xl hover:transition-transform hover:duration-100 hover:ease-in-out ease-in-out duration-100 transition-transform hover:underline hover:decoration-4 hover:decoration-primary hover:text-primary'>
                            <Link href='/contact'>
                                Contact Us
                            </Link>
                        </li> */}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex flex-row justify-end items-end align-middle '>
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        className='py-7'
                        variant={'outline'}
                    >
                        {isOpen ? <IoMdClose
                            className='font-bold w-7 h-7 hover:text-primary absolute top-10 right-5 z-40'
                        /> :
                            <CiMenuFries
                                className='font-bold w-7 h-7 hover:text-primary'
                            />
                        }
                    </Button>

                    <div className={`${isOpen ? "block" : "hidden"} md:hidden flex flex-col justify-center align-middle items-start bg-white absolute top-14 right-0 w-2/3 pl-10`}>
                        <Link href="/" className="font-bold text-xl text-primary pb-5">Home</Link>
                        <Link href="/about" className="font-bold text-xl text-primary pb-5">About Us</Link>
                        <Link href="/tours" className="font-bold text-xl text-primary pb-5">Tours</Link>
                        <Link href="/gallery" className="font-bold text-xl text-primary pb-5">Gallery</Link>

                        <div className='pb-10'>
                            <Button asChild className='md:text-xl font-medium hover:font-semibold p-7 '>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className='hidden md:flex'>
                <Button asChild className='md:text-xl font-medium hover:font-semibold p-7'>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </nav>
    )
}

export default NavBar
