
import React from 'react';
import Image from 'next/image';

import p from '../public/assets/finance-stack-homepage.svg';
import p1 from '../public/assets/Product-hero.webp';
import p3 from '../public/assets/card/finance-stack-mobile-en.svg';
import Card from '../components/Card';

const Finance = () => {
  return (

  <div className='bg-gradient-to-t from-green-100'>
      <div className=" max-w-7xl pt-14 mx-auto text-center">
        <h1 className="text-2xl md:text-4xl Avenir font-semibold text-gray-900">
        Simplify your finance stack
        </h1>
        <p className="mb-8 text-[13px] md:text-[16px]  Avenir font-semibold text-gray-600 text-center">
        All-in-one financial software to control company spend.
        </p>
        <div className="hidden md:flex container w-[76%]  flex-col items-center justify-center mx-auto rounded-lg ">
          <Image
            className=" object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src={p}
          />
          </div>
          <div className="flex md:hidden lg:hidden container w-[76%]  flex-col items-center justify-center mx-auto rounded-lg ">
          <Image
            className=" object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src={p3}
          />
        </div>
      </div>


      <div className="grr max-w-7xl pt-20 mx-auto text-center">
      <h1 className="text-[22px] md:text-4xl Avenir font-bold text-gray-900">
      Cards, payments and software <span className='text-2xl italic font-light'>in unison</span>
        </h1>
        <p className="text-[10] mb-8  Avenir  text-center font-normal">
        Come for our cards, stay for everything else.
        </p>
        <div className="container p-3 w-full md:w-[70%] flex flex-col items-center justify-center mx-auto rounded-lg ">
          <Image
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src={p1}
          />
        </div>
      </div>

      {/* Card section start */}
     <Card/>
     {/* Card section end */}

 </div>
  )
}

export default Finance