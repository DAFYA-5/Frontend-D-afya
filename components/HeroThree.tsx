import Image from "next/image";
import React from "react";
import Doctor2 from '../public/1.jpg';

const HeroThree = () => {
  return (
    <div className=" px-[240px] flex flex-col space-y-10 pb-32">
      <div className=" flex items-center justify-center text-center mt-8">
        <h1 className=" text-5xl font-black text-slate-900 dark:text-neutral-200">
          Services for <span className=" text-[#2bb4d4]">D-AFYA</span>
        </h1>
      </div>
      <div className=' flex justify-around items-center w-full'>
        <div className=" w-[350px]">
          <span className=' text-xl font-medium '>
            Decentralized Medical Records, Streamlined Access, Data Security &
            Interoperability
          </span>
        </div>
        <div>
            <Image
            src={Doctor2}
            width={500}
            height={500}
            alt=""
            quality={100}
            priority
            className=" rounded-lg"
            />
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
