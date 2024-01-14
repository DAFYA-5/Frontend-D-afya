import React from 'react'

const Hero = () => {
  return (
    <div className=' h-[700px] flex items-center justify-center flex-col text-center space-y-2'>
        <h1 className=' font-black text-9xl tracking-widest text-slate-900 dark:text-neutral-100'>D-AFYA</h1>
        <span className=' capitalize font-medium text-3xl text-slate-500 dark:text-neutral-400'>
            Your health, your data, your control
        </span>
        <span className=' lg:w-[70%] font-medium text-[15px]'>
            A decentralized health system that reimagines the traditional model by distributing authority, data, and decision-making across a network of interconnected nodes.
        </span>
        <button className=' px-6 py-3 bg-neutral-800 text-white rounded-lg'>Log In</button>
    </div>
  )
}

export default Hero