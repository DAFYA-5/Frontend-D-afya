import Doctor from '../public/5.jpg'
import Image from 'next/image'
import React from 'react'

const Herotwo = () => {
  return (
    <div className=' flex flex-col items-center text-center justify-center space-y-10'>
        <div>
            <h1 className=' text-5xl font-black text-slate-900 dark:text-neutral-200'>Why is <span className=' text-[#2bb4d4]'>D-AFYA</span> for you?</h1>
        </div>
        <div className=' flex px-[240px] justify-around items-center w-full'>
            <div>
                <Image
                src={Doctor}
                width={500}
                height={500}
                alt=''
                quality={100}
                priority
                className=' rounded-lg'
                />
            </div>
            <div className=' w-[450px]'>
                <span className=' text-xl font-medium '>D-AFYA offers secure and convenient access to your medical data through blockchain technology, giving you control over who accesses it</span>
            </div>
        </div>
    </div>
  )
}

export default Herotwo