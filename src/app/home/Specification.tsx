import React from 'react'
import SpecificationList from '../../components/SpecificationList'
import Image from 'next/image'
import Button from '@/components/Button'

const Specification = () => {
    return (
        <div id="specification" className="w-full flex flex-col items-center justify-center">
            <div className="w-[95%] h-full items-center justify-center flex flex-col gap-10 border-y border-line md:pt-24 py-10">
                <h2 className="roboto-mono text-sm text-footer-text">Specs</h2>
                <h3 className="crimson-regular text-6xl">Why Choose Area?</h3>
                <p className="dm-sans text-secondary-text text-md text-center">
                    You need a solution that keeps up. That&apos;s why we developed Area. A
                    developer-friendly approach to streamline your business.
                </p>
                <Button text="Discover More" />
                <br/>

                {/* List of specification - Horizontal scroll on mobile */}
                <div className="w-full flex items-center justify-center">
                    {/* Desktop: flex layout, Mobile: horizontal scroll */}
                    <div className="w-full md:w-auto flex md:justify-center overflow-x-auto pb-4">
                        <div className="flex md:flex-row gap-0 min-w-max md:min-w-0">
                            <div className="border border-line rounded-l-lg md:rounded-lg w-80 md:w-[300px] lg:w-[350px] shadow-md flex-shrink-0">
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
                            <div className="w-80 md:w-[300px] lg:w-[350px] border-r border-t border-b border-line flex-shrink-0">
                                <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                                    Area Pro
                                </h4>
                                <SpecificationList benefit="Ultra-fast browsing" />
                                <SpecificationList benefit="Advanced AI insights" />
                                <SpecificationList benefit="Seamless integration" />
                                <SpecificationList benefit="Advanced AI insights" />
                                <SpecificationList benefit="Ultra-fast browsing" />
                                <SpecificationList benefit="Full UTF-8 support" />
                            </div>
                            <div className="w-80 md:w-[300px] lg:w-[350px] border border-line rounded-r-lg md:rounded-lg md:border-l-0 flex-shrink-0">
                                <h4 className="text-center dm-sans font-medium text-2xl border-b border-thirdary-text py-8">
                                    Area Enterprise
                                </h4>
                                <SpecificationList benefit="Ultra-fast browsing" />
                                <SpecificationList benefit="Advanced AI insights" />
                                <SpecificationList benefit="Seamless integration" />
                                <SpecificationList benefit="Advanced AI insights" />
                                <SpecificationList benefit="Ultra-fast browsing" />
                                <SpecificationList benefit="Full UTF-8 support" />
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                {/* Fixed image section with proper mobile responsiveness */}
                <div className="w-full flex flex-col md:flex-row items-stretch gap-8">
                    {/* Image container with fixed aspect ratio */}
                    <div className="w-full md:w-[50%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] relative">
                        <Image
                            src="/images/idk1.png"
                            alt="Specs image"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover rounded-lg md:rounded-4xl"
                            priority={false}
                        />
                    </div>

                    {/* Content section */}
                    <div className="w-full md:w-[50%] flex flex-col items-start justify-center md:justify-start  gap-6 md:gap-12 px-4 md:px-0">
                        <div className="w-full h-[1px] bg-line"></div>
                        <p className="crimson-regular text-2xl sm:text-3xl md:text-4xl leading-relaxed md:px-10 md:pt-24">
                            &quot;I was skeptical, but Area has completely transformed the way I
                            manage my business. The data visualizations are so clear and intuitive,
                            and the platform is so easy to use. I can&apos;t imagine running my
                            company without it.&quot;
                        </p>
                        <div className="flex flex-col gap-2 md:px-10">
                            <p className="dm-sans text-md">John Smith</p>
                            <p className="roboto-mono text-sm text-gray-600">Head of Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification
