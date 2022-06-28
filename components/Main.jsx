import React from 'react'
import p4 from '../public/assets/card-home-hero.svg';
import { Element } from "react-scroll";
import Image from 'next/image';

const Main = () => {
  return (

	<div>
      <div
        class="container flex flex-col-reverse items-center px-6 mx-auto   space-y-0 md:space-y-0 md:flex-row"
      >
        <div class="mt-10 md:w-1/2">
          <Image src={p4} alt="" />
        </div>
        <div class="flex flex-col  space-y-12 md:w-1/2 mt-20">
          <h1
            className="text-white max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
		<p className='text-2xl text-black opacity-0'> 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores natus sit, est vero libero.
	 </p> 
            Bring everyone together to build better products
          </h1>
          <p class="max-w-sm text-center text-white md:text-left ">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores natus sit, est vero libero.
          </p>
          <div class="flex justify-center md:justify-start">
			  <div class="inline-flex rounded-md shadow-sm">
  <a href="#" aria-current="page" class="py-2 mr-3 px-4 text-sm font-medium text-white bg-green-500 rounded-full border-0 outline-none hover:bg-gray-100 hover:text-green-400 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile demo
  </a>
  <a href="#" aria-current="page" class="py-2 mr-3 px-4 text-sm font-medium text-green-700 hover:text-white bg-white rounded-full border-0 outline-none hover:bg-green-400  hover:text-focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile demo
  </a>
  
</div>
          </div>
        </div>
        
        
      </div>
    </div>
 
  )
}

export default Main