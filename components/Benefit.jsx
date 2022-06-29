
import React from 'react';
import Image from 'next/image';

import p from '../public/assets/icons/crad icon/card-home-hero.svg';
import p1 from '../public/assets/icons/crad icon/grow_icon.svg';
import p2 from '../public/assets/icons/crad icon/manage_icon.svg';
const Benefit = () => {
  return (
  <>
       
<div className=' bg-gray-200 mb-10 py-10'>
<div class=" bg-gray-50 ">
    <div className='flex items-center justify-center -mt-10 pt-8'>
        <h1 className='text-2xl md:text-4xl  font-bold'>How your business can benefit</h1>
    </div>



    <div class=" m-auto px-6  text-gray-500 md:px-12">
        
        <div class="mt-8 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-1 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <Image src={p1} class="w-10" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Grow productivity across the organization</h5>
                        <p class="text-sm text-gray-600">Make business spending painless regardless of the payment method used. Finance teams can manage budgets, spending and close books instantly, while employees are empowered to use company funds in a responsible and easy to report way.</p>
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Read more</span>
                    </a>
                </div>
            </div>
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <Image src={p} class="w-10"  alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Modernize company payments
</h5>
                        <p class="text-sm text-gray-600">Payhawk allows finance teams to automate all crucial spend and expense management processes and lead the digital transformation agenda of companies across Europe. Read how A.T.U. uses Payhawk to replace handling of cash with company cards</p>
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Read more</span>
                    </a>
                </div>
            </div>
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <Image src={p2} class="w-10"  alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Manage international expansion</h5>
                        <p class="text-sm text-gray-600">Payhawk can be used for any business registered in the UK or EU and therefore allows companies to roll-out the solution across all subsidiaries across Europe. Our advanced approval workflows help managers to keep transparency and control costs – no matter where money is spent.</p>
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Read more</span>

                    </a>
                </div>
            </div>
            
        </div>
    </div>
</div>
</div>
</>
  )
}

export default Benefit