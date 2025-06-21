import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="w-full h-[75vh] md:h-[90vh] py-4 flex flex-col items-start justify-center sm:gap-5 gap-12 px-5 md:px-10">
            <h1
                className="
                    w-full
                    text-[clamp(48px,12vw,160px)]
                    text-center
                    leading-[clamp(64px,10vw,136px)]
                    font-bold
                    crimson-regular
                    mb-4
                    tracking-tighter
                "
            >
                Browse everything.
            </h1>
            <div className="w-full md:p-5 md:h-[60%] lg:h-full flex items-start justify-center relative overflow-hidden">
                {/* Mobile */}
                <div className="w-75 md:hidden relative z-10 flex-shrink-0 -mx-20">
                    {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-80 md:hidden relative z-10 flex-shrink-0"> */}
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
                <div className="hidden md:block relative z-10">
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
                <div className="z-0 absolute inset-x-0 bottom-0 h-[80%] md:min-h-[65%] w-full bg-matcha rounded-4xl"></div>
            </div>
        </div>
    )
}

export default Hero
