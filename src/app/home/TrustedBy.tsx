import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-10 gap-12">
            <h2 className="dm-sans text-secondary-text text-md">Trusted by:</h2>
            <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-28 text-secondary-text max-w-6xl mx-auto px-4">
                <li className="flex items-center justify-center">
                    <Image
                        width={75}
                        height={75}
                        src={'/images/company_1.png'}
                        alt="company 1"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[75px] md:h-[75px] object-contain"
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        src={'/images/company_2.png'}
                        alt="company 2"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain"
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={50}
                        height={50}
                        src={'/images/company_3.png'}
                        alt="company 3"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] object-contain"
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        src={'/images/company_4.png'}
                        alt="company 4"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain"
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        src={'/images/company_5.png'}
                        alt="company 5"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain"
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={100}
                        height={100}
                        src={'/images/company_6.png'}
                        alt="company 6"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-contain"
                    />
                </li>
            </ul>
        </div>
    )
}

export default TrustedBy
