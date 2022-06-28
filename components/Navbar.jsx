import { useRouter } from 'next/router';
import React, { useState,useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from 'next/image';
import p from '../public/assets/projects/download (1).svg';
import p1 from '../public/assets/projects/download (2).svg';
import p2 from '../public/assets/projects/download (3).svg';
import p3 from '../public/assets/projects/download (4).svg';
import p4 from '../public/assets/projects/download.svg';
import { createPopper } from '@popperjs/core';
const Navbar = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
	const [isOpen, setIsOpen] = useState(false);



  return (
    <div className=''>
			<nav className=" fixed z-20 bg-white w-full ">
				<div className="w-full">
					<div className="flex items-center h-14 w-full ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
              <div className="mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="ml-3 bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
           
						</div>
								<h1 className="ml-14 font-bold text-center items-center text-xl   cursor-pointer">
									Payhawk
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="m1-2 flex items-baseline space-x-2">
									<Link
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-blue-600 px-3 py-2 text-md"
									>
										Home
									</Link>
									<Link
										activeClass="services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-black  px-3 py-2"
									>
										Services
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-black px-3 py-2"
									>
										Projects
									</Link>

									<Link
										activeClass="Clients"
										to="Clients"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-black px-3 py-2"
									>
										Clients
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-black px-3 py-2"
									>
										Contact
									</Link>
								</div>
							</div>
              
							<div className="flex justify-center items-center flex-shrink-0 ml-20">
								<h1 className=" font-semibold text-lg cursor-pointer hidden md:block">
									open account  |  <span className="">login</span>
								</h1>
							</div>
              <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="inline-flex text-black font-bold uppercase text-sm  outline-none focus:outline-none  mb-1   ease-linear transition-all duration-150"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
               <div className='mr-1 mt-2 w-5'>
                <Image src={p} className="rounded-full inline-block"/> 
              </div>
			  <svg class="-mr-1 mt-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                " bg-white text-base z-50 float-left py-2 list-none text-left rounded  mt-1 min-w-48"
              }
            >
           
			  <a
                href="#pablo"
                className="items-center justify-center inline-flex text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-transparent text-black"
                onClick={e => e.preventDefault()}
              >
                <div className='mr-2 mt-2 w-5'>
                <Image src={p1} className="rounded-full "/>
              </div>
			  <span className='font-bold'>Spain</span>
              </a>
              <a
                href="#pablo"
                className="items-center justify-center inline-flex text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-transparent text-black"
                onClick={e => e.preventDefault()}
              >
                <div className='mr-2 mt-2 w-5'>
                <Image src={p2} className="rounded-full "/>
              </div>
			  <span className='font-bold'>Nland</span>
              </a>
			  <a
                href="#pablo"
                className="items-center justify-center inline-flex text-sm py-2 px-4 font-normal  w-full whitespace-no-wrap bg-transparent text-black"
                onClick={e => e.preventDefault()}
              >
                <div className='mr-2 mt-2 w-5'>
                <Image src={p3} className="rounded-full "/>
              </div>
			  <span className='font-bold'>France</span>
              </a>
              
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
             
            </div>
          </div>
        </div>
      </div>
             
						</div>
						
            
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/Clients"
									activeClass="Clients"
									to="Clients"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Clients
								</Link>

								<Link
									href="/contact"
									activeClass="contact"
									to="contact"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>

								<Link
									href="/hi"
									activeClass="hi"
									to="hi"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Open account  |  <span className=" text-black">login</span>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
   
  )
}

export default Navbar
