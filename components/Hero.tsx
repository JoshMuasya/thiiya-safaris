import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import WavyLine from './WavyLine'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center align-middle h-screen'>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="herovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-muted-foreground/40" />

            {/* Content */}
            <div className='flex flex-col justify-center items-center align-middle z-20 md:w-2/3 text-card'>
                {/* Title */}
                <div>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-6xl text-center'>
                        Experience the trip of a lifetime with us
                    </h1>
                </div>

                {/* Subtitle */}
                <div>
                    <p className='font-medium text-lg md:text-xl lg:text-2xl text-center py-10'>
                        Let our travel agents help you plan your trip from start to finish.
                    </p>
                </div>

                {/* CTA */}
                <div>
                    <Button asChild className='md:text-xl font-bold hover:font-semibold p-7 bg-accent text-primary hover:text-card transition-all duration-200 ease-in-out'>
                        <Link href="/contact">Plan your Trip with Us</Link>
                    </Button>
                </div>
            </div>

            <WavyLine />
        </div>
    )
}

export default Hero
