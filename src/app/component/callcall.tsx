import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Call() {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-[30px] font-black'>Find Me On</h1>
            <div className='flex gap-30'>
                <Link href={'https://www.instagram.com/om_geb/'} target='blank'>
                    <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/instagram.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
                </Link>
                <Link href={'https://www.linkedin.com/in/gabriel-dwi-putra-tangkelayuk-1220693a5'} target='blank'>
                    <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linkedin.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
                </Link>
            </div>
        </div>
    )
}
