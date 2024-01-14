import Image from 'next/image'
import React from 'react'
import doctorthree from '../public/3.jpg'

const Herofour = () => {
  return (
    <div className=' flex items-center justify-evenly gap-4'>
        <div className=' h-screen w-1/2' >
            <Image
            src={doctorthree}
            height={600}
            alt=''
            className=' w-full h-full object-fit rounded-lg'
            />

        </div>
        <div className=' flex flex-col space-y-10 items-center evenly text-center '>
            <div className=' w-[70%]'>
                <h1 className=' text-3xl font-black tracking-widest text-[#2bb4d4]'>AIM</h1>
                <span className=' text-slate-700 font-medium text-xl dark:text-neutral-200'>
                D-AFYA's primary aim is to transform the healthcare landscape by leveraging blockchain technology. 
                </span>
            </div>
            <div  className=' w-[70%]'>
                <h1 className=' text-3xl font-black tracking-widest text-[#2bb4d4]'>VISION</h1>
                <span className=' text-slate-700 font-medium text-xl dark:text-neutral-200'>
                Empower patients, create an interconnected healthcare system, prioritize data privacy, and drive innovation in healthcare.
                </span>
            </div>
        </div>
    </div>
  )
}

export default Herofour