import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { GoDot } from "react-icons/go";

import { Separator } from "@/components/ui/separator"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-accent-foreground/90'>
            <div className='bg-background flex flex-col justify-center align-middle items-start px-36 pt-10'>
                {/* Top */}
                <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-start align-middle'>
                    {/* Title */}
                    <div className='w-1/4 flex flex-col justify-center items-start align-middle text-card'>
                        <p className='text-lg md:text-xl lg:text-2xl pb-1 md:pb-3 font-medium'>
                            How can we help?
                        </p>

                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                            Contact us Anytime
                        </h1>
                    </div>

                    {/* Number */}
                    <div className='w-1/4 flex flex-col justify-center align-middle items-start text-card'>
                        <p className='text-lg md:text-xl lg:text-2xl pb-1 md:pb-3 font-medium'>
                            Call/ Text/ Whatsapp us
                        </p>

                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                            +254 798 040 353
                        </h2>

                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                            +254 726 479 027
                        </h2>
                    </div>

                    {/* Email */}
                    <div className='w-1/4 flex flex-col justify-center align-middle items-start text-card'>
                        <p className='text-lg md:text-xl lg:text-2xl pb-1 md:pb-3 font-medium'>
                            Email Us
                        </p>

                        <p className='text-xl md:text-2xl lg:text-3xl font-bold'>
                            thiiyasafaris@gmail.com
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className='w-1/6 flex flex-col justify-center align-middle items-end text-card'>
                        <p className='text-lg md:text-xl lg:text-2xl pb-1 md:pb-3 font-medium'>
                            Follow Us
                        </p>

                        {/* Icons */}
                        <div className='w-full flex flex-row justify-between align-middle items-center'>
                            {/* Instagram */}
                            <div>
                                <FaInstagram className='w-7 h-7' />
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <SlSocialLinkedin className='w-7 h-7' />
                            </div>

                            {/* X */}
                            <div>
                                <FaXTwitter className='w-7 h-7' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <Separator className="my-4" />

                {/* Bottom */}
                <div className='w-full flex flex-col justify-center align-middle items-start'>
                    <div className='w-full flex flex-col md:flex-row justify-center md:justify-between align-middle items-center'>
                        {/* Logo */}
                        <div>
                            <img src="/logo.png" alt="Logo" className='w-5 md:w-10 lg:w-60' />
                        </div>

                        {/* Links */}
                        <div className='flex flex-row justify-center align-middle items-center text-card font-bold'>
                            <Link href='' className='text-xl hover:text-lg hover:font-extrabold transition-all duration-200 ease-in-out'>
                                Home
                            </Link>

                            <GoDot className='mx-2 md:mx-5' />

                            <Link href='' className='text-xl hover:text-lg hover:font-extrabold transition-all duration-200 ease-in-out'>
                                About Us
                            </Link>

                            <GoDot className='mx-2 md:mx-5' />

                            <Link href='' className='text-xl hover:text-lg hover:font-extrabold transition-all duration-200 ease-in-out'>
                                Tours
                            </Link>

                            <GoDot className='mx-2 md:mx-5' />

                            <Link href='' className='text-xl hover:text-lg hover:font-extrabold transition-all duration-200 ease-in-out'>
                                Gallery
                            </Link>

                            <GoDot className='mx-2 md:mx-5' />

                            <Link href='' className='text-xl hover:text-lg hover:font-extrabold transition-all duration-200 ease-in-out'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <Separator className="my-4" />

            <div>
                {/* Copyright */}
                <div className='flex flex-row justify-center align-middle items-center text-card'>
                    <p className='text-base md:text-lg lg:text-xl pb-1 md:pb-3 font-medium pr-3'>
                        Copyright
                    </p>

                    <div>
                        <FaRegCopyright className='w-5 h-5 mb-2' />
                    </div>

                    <p className='text-base md:text-lg lg:text-xl pb-1 md:pb-3 font-medium pl-3'>
                        thiiyasafaris
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
