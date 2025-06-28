import Button from '@/components/Button'
import React from 'react'

const MapYourSuccess = () => {
    return (
        <div className="w-full flex items-center justify-center ">
            <div className="min-w-[95%] h-fit flex flex-col md:flex-row gap-8 py-10 items-center md:items-center justify-center md:justify-between">
                <h2 className="w-fit crimson-regular text-4xl sm:text-5xl md:text-6xl text-center md:text-left">
                    Map Your Success
                </h2>
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <Button text="Discover More" />
                </div>
            </div>
        </div>
    )
}

export default MapYourSuccess
