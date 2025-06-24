import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center py-10 gap-12'>
            <h2 className='dm-sans text-secondary-text text-md'>Trusted by:</h2>
            <ul className='flex flex-wrap items-center justify-center gap-28 text-secondary-text'>
                <li><Image width={75} height={75} src={'/images/company_1.png'} alt='company 1'/></li>
                <li><Image width={100} height={100} src={'/images/company_2.png'} alt='company 2'/></li>
                <li><Image width={50} height={50} src={'/images/company_3.png'} alt='company 3'/></li>
                <li><Image width={100} height={100} src={'/images/company_4.png'} alt='company 4'/></li>
                <li><Image width={100} height={100} src={'/images/company_5.png'} alt='company 5'/></li>
                <li><Image width={100} height={100} src={'/images/company_6.png'} alt='company 6'/></li>
            </ul>
        </div>
    )
}

export default TrustedBy
