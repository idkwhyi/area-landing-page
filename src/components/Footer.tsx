import React from 'react'
import Link from 'next/link'

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
                    <p className="text-sm text-footer-text">© Area. 2025</p>
                </div>
                <p className="text-sm text-footer-text">All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
