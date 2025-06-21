import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-10 py-5 relative">
            <div className="text-black font-bold">Area</div>

            <div className="fixed left-1/2 transform -translate-x-1/2 w-fit flex items-center z-50 bg-white/20 backdrop-blur-2xl px-6 py-3 rounded-full">
                <ul className="flex items-center justify-center gap-6">
                    <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
                        Benefits
                    </li>
                    <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
                        Specifications
                    </li>
                    <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
                        How-to
                    </li>
                    <li className="font-bold text-sm text-black cursor-pointer hover:text-gray-700 transition-colors">
                        Contact Us
                    </li>
                </ul>
            </div>

            <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                Learn More
            </button>
        </div>
    )
}

export default Navbar
