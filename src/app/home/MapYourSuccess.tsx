import Button from '@/components/Button'
import React from 'react'

const MapYourSuccess = () => {
    return (
        <div className="w-full items-center justify-center flex">
            <div className="min-w-[95%] h-fit items-center justify-center md:justify-between flex flex-col md:flex-row gap-8 border-y border-line  py-10">
                <h2 className="w-fit crimson-regular text-6xl">Map Your Success</h2>
                <Button text="Discover More" />
            </div>
        </div>
    )
}

export default MapYourSuccess
