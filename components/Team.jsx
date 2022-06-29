
import React from 'react';
import Image from 'next/image';
import p from '../public/assets/Team/team-3.jpg';
import p1 from '../public/assets/Team/team-4.jpg';




const Team = () => {
  return (
    <div className='bg-gray-100 pb-8'>

      <div>
        <div className='text-center p-8'>
          <h1 className='text-xl md:text-4xl font-bold '>Freedom within a framework</h1>
          <p className='text-xs md:text-xl'>Built for employees, loved by finance teams.
          </p>
        </div>
    
      </div>
    <div className="flex flex-wrap justify-center gap-12 container mx-auto ">
    
        
        <div className="w-[360px] h-[480px] py-8 px-1">
            <div
                className="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 text-slate-50 shadow-lg rounded-3xl hover:shadow-xl">
    
                <h3 className="absolute -top-5 -left-5 w-40 p-2  bg-slate-800 rounded-3xl text-[12px] font-merriweather text-center">
                <span className='font-bold'>Jenny Herald</span> <br /> VP of Product Marketing
                </h3>
    
                <a href="https://eazyip.github.io/" target="__blank"
                    class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2  transition ease-in-out delay-75 duration-150">
                    <Image src={p1} alt="Eazy IP Web app showcase  mockup" class="object-fill rounded-md"/>
                </a>
    
                <p
                    className="absolute -bottom-12 left-6  p-4 bg-inherit border-slate-900 text-slate-900 border shadow-lg rounded-3xl hover:text-black hover:shadow-xl">
                 I find that Payhawk makes it super easy to keep track of my spend and turns long and crazy hard expense reports into a 2-3 minute exercise.
                </p>
            </div>
        </div>
    

        <div className="w-[360px] h-[480px] py-8 px-1">
            <div
                className="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">
    
                <h3
                    className="absolute -top-5 -left-5 w-40 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-[13px] font-merriweather text-center">
                    <span className='font-bold'>Rosen Mihaylov</span> <br /> VP Finance
                </h3>
    
                <a href="https://eazyip.github.io/" target="__blank"
                    class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150">
                    <Image src={p} alt="Eazy IP Web app showcase mockup" class="object-fill rounded-md"/>
                </a>
    
                <p className="absolute -bottom-12 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">
                We can now trust employees to pay for things as our accounting team can track, store, and manage everyone’s receipts and invoices without manual chasing.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Team