import React from 'react'
import Image from 'next/image'

export default function Skill() {
  return (
    <div>
      <h1 className='text-[30px] font-black'>Skill</h1>
      <div className='flex gap-30'>
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nextjs.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nodejs.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/html.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/css.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/javascript.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tailwind.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/git.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
        <Image src={'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github.svg'} alt='' width={65} height={1} className='transition ease-in-out hover:-translate-y-4 ' />
      </div>


    </div>
  )
}
