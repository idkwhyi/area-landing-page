'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {
    const textRef = useRef<HTMLDivElement>(null) // Tambah ref untuk background
    const bgRef = useRef<HTMLDivElement>(null) // Tambah ref untuk background
    const mobileImgRef = useRef<HTMLDivElement>(null)
    const desktopImgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            // delay: 0.1
        })
        gsap.to(bgRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            // delay: 0.1
        })
        gsap.to(mobileImgRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.1,
        })
        gsap.to(desktopImgRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.1,
        })
    }, [])

    return (
        <div className="w-full h-[75vh] md:h-[90vh] py-4 flex flex-col items-start justify-center sm:gap-5 gap-12 px-5 md:px-10">
            <h1
                ref={textRef}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
                className="
                    w-full
                    text-[clamp(48px,12vw,160px)]
                    text-center
                    leading-[clamp(64px,10vw,136px)]
                    crimson-regular
                    mb-4
                    tracking-tighter
                "
            >
                Browse everything.
            </h1>
            <div className="w-full md:p-5 md:h-[60%] lg:h-full flex items-start justify-center relative overflow-hidden">
                {/* Mobile */}
                <div
                    ref={mobileImgRef}
                    style={{ opacity: 0, transform: 'translateY(60px)' }}
                    className="w-75 md:hidden relative z-10 flex-shrink-0 -mx-20"
                >
                    <Image
                        src="/images/device/mobile.png"
                        alt="Mobile mockup"
                        width={600}
                        height={800}
                        priority
                        className="w-full h-auto object-contain object-top"
                    />
                </div>

                {/* Tablet, Desktop */}
                <div
                    ref={desktopImgRef}
                    style={{ opacity: 0, transform: 'translateY(60px)' }}
                    className="hidden md:block relative z-10"
                >
                    <Image
                        src="/images/device/desktop.png"
                        alt="Desktop mockup"
                        width={800}
                        height={600}
                        priority
                        className="w-full h-auto object-contain object-top"
                    />
                </div>

                {/* Background Div */}
                <div
                    ref={bgRef}
                    style={{ opacity: .5, transform: 'translateY(40px)' }}
                    className="z-0 absolute inset-x-0 bottom-0 h-[80%] md:min-h-[65%] w-full bg-matcha rounded-4xl"
                ></div>
            </div>
        </div>
    )
}

export default Hero
