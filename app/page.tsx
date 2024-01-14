import Hero from '@/components/Hero'
import HeroThree from '@/components/HeroThree'
import Herofour from '@/components/Herofour'
import Herotwo from '@/components/Herotwo'
import React from 'react'

const page = () => {
  return (
    <>
    <div className=' bg-gradient-to-b from-[#2bb4d4] via-white  dark:via-[#2bb4d4]'>
      <Hero />
    </div>
    <br className='my-10' />
    <Herotwo />
    <br className='my-10' />
    <HeroThree />
    <br className='my-10' />
    <Herofour />
    </>
  )
}

export default page