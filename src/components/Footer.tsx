import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-10 gap-24">
            <ul className="w-[95%] h-fit items-start flex flex-col md:flex-row gap-5 dm-sans font-bold text-sm">
                <li>
                    <Link href={'#benefits'}>Benefits</Link>
                </li>
                <li>
                    <Link href={''}>Specification</Link>
                </li>
                <li>
                    <Link href={''}>How-to</Link>
                </li>
            </ul>
            <div className="w-[95%] h-fit roboto-mono flex items-center justify-between">
                <div className="text-sm ">
                    <Image
                        loading="lazy"
                        src="/_assets/v9/090b80a21b62ba18e35a0eff8aff6562be1d8d0e.svg"
                        alt="Human footer logo"
                        fill
                        className="css-9j6u1t css-8zr56v"
                        ></Image>
                    <p className="text-sm text-footer-text">© Area. 2025</p>
                </div>
                <p className="text-sm text-footer-text">All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
