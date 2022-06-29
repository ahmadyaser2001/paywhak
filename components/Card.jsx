
import React from 'react';
import Image from 'next/image';


import p2 from '../public/assets/card/corporate_cards_icon.svg';
import p3 from '../public/assets/card/expence_software_icon.svg';
import p4 from '../public/assets/card/integrated_payments_icon.svg';

const Card = () => {
  return (
    <div class=" max-w-5xl px-5 mx-auto  text-center">
      
    <h2 class="text-3xl font-bold text-center">
      
    </h2>
   
    <div class="flex flex-col  md:flex-row md:space-x-3">
      
      <div
        class="flex flex-col items-center p-6 pl-2 space-y-3  md:w-1/3"
      >
        <Image src={p2} class="w-10 -mt-14" alt="" />
        <h5 class="text-[14px] md:text-lg font-bold">Corporate cards</h5>
        <p class="text-[10px] font-medium  text-darkGrayishBlue">
        Built-in spend policies for greater control.
        </p>
      </div>
      


      <div
        class=" flex-col items-center p-6 space-y-3   md:flex md:w-1/3"
      >
        <Image src={p4} class="w-10 -mt-14" alt="" />
        <h5 class="text-[14px] md:text-lg font-bold">  Integrated payments</h5>
        <p class="text-[12px] font-medium text-darkGrayishBlue">
      
Dedicated IBAN for free bank transfers
        </p>
      </div>

      
      <div
        class=" flex-col items-center p-6 space-y-3  md:flex md:w-1/3"
      >
        <Image src={p3} class="w-10 -mt-14" alt="" />
        <h5 class="text-[14px] md:text-lg font-bold">  Expense software</h5>
        <p class="text-[12px] font-medium text-darkGrayishBlue">
      
One platform to manage all business spend
        </p>
      </div>
    </div>
</div>
       

 
  )
}

export default Card