import React from 'react'
import SpecificationList from '../../components/SpecificationList'
import Image from 'next/image'
import Button from '@/components/Button'

const Specification = () => {
    return (
        <div id="specification" className="w-full flex flex-col items-center justify-center">
            <div className="w-[95%] h-full items-center justify-center flex flex-col gap-10 border-y border-line md:pt-24 md:pb-10">
                <h2 className="roboto-mono text-sm text-footer-text">Specs</h2>
                <h3 className="crimson-regular text-6xl">Why Choose Area?</h3>
                <p className="dm-sans text-secondary-text text-md text-center">
                    You need a solution that keeps up. That&apos;s why we developed Area. A
                    developer-friendly approach to streamline your business.
                </p>
                <Button text='Discover More'/>

                {/* List of specification */}
                <div className="w-full flex items-center justify-center">
                    <div className="border border-line rounded-lg w-[30%] shadow-md">
                        <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                            Area
                        </h4>

                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Seamless integration" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Full UTF-8 support" />
                    </div>
                    <div className="w-[30%] border-r border-line">
                        <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                            Area
                        </h4>

                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Seamless integration" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Full UTF-8 support" />
                    </div>
                    <div className="w-[30%]">
                        <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                            Area
                        </h4>

                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Seamless integration" />
                        <SpecificationList benefit="Advanced AI insights" />
                        <SpecificationList benefit="Ultra-fast browsing" />
                        <SpecificationList benefit="Full UTF-8 support" />
                    </div>
                </div>

                {/* Fixed image section */}
                <div className="w-full h-[600px] md:h-[750px] flex flex-col md:flex-row items-stretch gap-8">
                    <div className="w-full md:w-[50%] h-[500px] md:h-full relative">
                        <Image
                            src="/images/idk1.png"
                            alt="Specs image"
                            fill
                            className="object-cover rounded-4xl"
                            priority={false}
                        />
                    </div>
                    <div className="w-full md:w-[50%] h-full md:h-full flex flex-col items-start justify-center md:justify-start gap-6 md:gap-12 px-4 md:px-0">
                        <div className="w-full h-[1px] bg-line"></div>
                        <p className="crimson-regular text-4xl  md:px-10 md:pt-24">
                            &quot;I was skeptical, but Area has completely transformed the way I
                            manage my business. The data visualizations are so clear and intuitive,
                            and the platform is so easy to use. I can&apos;t imagine running my
                            company without it.&quot;
                        </p>
                        <div className="flex flex-col gap-2 px-10">
                            <p className="dm-sans text-md ">John Smith</p>
                            <p className="roboto-mono text-sm text-gray-600">Head of Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification
