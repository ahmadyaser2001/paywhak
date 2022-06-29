import React from 'react'

import p4 from '../public/Free-Plastic-Credit-Debit-Card-Mockup-PSD-1.svg';

import Image from 'next/image';

const Testion = () => {
  return (

	<div className='  bg-black md:mt-10 p-10'>
      <div
        class=" flex flex-col items-center px-6 mx-auto   space-y-0 md:space-y-0 md:flex-row"
      >
        
        <div class="flex flex-col  space-y-4 md:w-1/2 -mt-24">
          <h1
            className="text-white max-w-md text-xl font-bold text-center md:text-3xl md:text-left"
          >
		<p className='text-2xl text-black opacity-0'> 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores natus sit, est vero libero.
	 </p> 
	 Level up with Payhawk
     </h1>
          <p class="max-w-sm text-center text-white md:text-left ">
          Take financial control and manage your company cards and spend easily, all from the same account. That's the power of all-in-one finance.
          </p>
          <div class="flex justify-center md:justify-start">
			  <div class="inline-flex rounded-md shadow-sm">
  <a href="#" aria-current="page" class="py-2 mr-3 px-4 text-sm font-medium text-white bg-green-500 rounded-full border-0 outline-none hover:bg-gray-100 hover:text-green-400 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile demo
  </a>
  <a href="#" aria-current="page" class=" block py-2 mr-3 px-4 text-sm font-medium text-white hover:text-white border borde rounded-full border-1 outline-none hover:bg-green-400  hover:text-focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile demo
  </a>
  
</div>
</div>
 </div>
 <div class="mt-10 w-[370px] md:w-1/2">
          <Image src={p4} alt="" />
        </div>
        
         
      </div>
	 
    </div>
 
  )
}

export default Testion