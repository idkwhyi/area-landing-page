import React from 'react'

const Navbar = () => {
    return (
        <div className="sticky top-5 w-fit items-center bg-white/20 backdrop-blur-2xl p-5 rounded-full">
            <ul className='w-full flex items-center justify-center gap-8'>
                <li className='list-none font-bold text-sm text-black'>Benefits</li>
                <li className='list-none font-bold text-sm text-black'>Specifications</li>
                <li className='list-none font-bold text-sm text-black'>How-to</li>
                <li className='list-none font-bold text-sm text-black'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar
