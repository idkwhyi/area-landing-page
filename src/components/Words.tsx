import React from 'react'
import Image from 'next/image'

const Words = () => {
    const list_style = 'w-[95%] md:w-[20%] h-fit flex flex-col items-start justify-center gap-4'
    const p_title = 'crimson-regular text-lg'
    const p_class = 'w-full dm-sans text-secondary-text'

    return (
        <div className="w-full h-fit flex items-center justify-center py-10 gap-12 ">
            <ul className="w-full md:w-[95%] h-fit flex items-center justify-between flex-col md:flex-row gap-12 md:gap-0">
                <li className={list_style}>
                    <Image src={'/images/cable.png'} alt="insight image" width={30} height={30} />
                    <p className={p_title}>Amplify Insight</p>
                    <p className={p_class}>
                        Unlock data-driven decisions with comprehensive analytics, revealing key
                        opportunities for strategic regional growth.
                    </p>
                </li>
                <li className={list_style}>
                    <Image src={'/images/globe.png'} alt="global image" width={30} height={30} />
                    <p className={p_title}>Control Your Global Presence</p>
                    <p className={p_class}>
                        Manage and track satellite offices, ensuring consistent performance and
                        streamlined operations everywhere.
                    </p>
                </li>
                <li className={list_style}>
                    <Image
                        src={'/images/connect.png'}
                        alt="language barrier image"
                        width={30}
                        height={30}
                    />
                    <p className={p_title}>Remove Language Barriers</p>
                    <p className={p_class}>
                        Adapt to diverse markets with built-in localization for clear communication
                        and enhanced user experience.
                    </p>
                </li>
                <li className={list_style}>
                    <Image src={'/images/globe.png'} alt="growth image" width={30} height={30} />
                    <p className={p_title}>Visualize Growth</p>
                    <p className={p_class}>
                        Generate precise, visually compelling reports that illustrate your growth
                        trajectories across all regions.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Words
