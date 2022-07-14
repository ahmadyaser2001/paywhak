import React from "react";

import Marquee from "react-fast-marquee";
import pbymileslogo from '../../public/assets/icons/bymiles-logo.svg';
import heuralogo from '../../public/assets/icons/heura-logo.svg';
import heycar from '../../public/assets/icons/heycar-logo.svg';
import luxair from '../../public/assets/icons/luxair-logo.svg';
import macpaw from '../../public/assets/icons/macpaw-logo.svg';
import wagstream from '../../public/assets/icons/wagstream-logo.svg';
import Image from "next/image";


const App = () => (
  <div >
    <Marquee className="bg-black mt-10" >
  <div className="mr-20">
    <Image src={pbymileslogo}/>
  </div> <div className="mr-20">
    <Image src={heuralogo}/>
  </div>  <div className="mr-20">
    <Image src={heycar}/>
  </div>
  <div className="mr-20">
    <Image src={luxair}/>
  </div>
  <div className="mr-20">
    <Image src={wagstream}/>
  </div>
  <div className="mr-20">
    <Image src={macpaw}/>
  </div>
</Marquee>
</div>
);

export default App;