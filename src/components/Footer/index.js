import React from 'react';
import { Button } from '../common';

export default function Index() {
  return (
    <div className='bg-[#F5F5F5] p-4'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Left Section */}
        <div className='w-full md:w-[33%] text-center md:text-left md:pl-16'>
          Exclusive Skincare Leads Backed by AI Insights. Purchase exclusive leads based on zip codes and regions. Subscribe for daily refreshed leads.
        </div>
        
        {/* Center Section */}
        <div className='flex flex-col items-center text-center md:text-right'>
          <img src='/Logo.png' alt='Skin Prospects' className='w-32 mx-auto md:mx-0' />
        </div>
        
        {/* Right Section */}
        <div className='w-full md:w-auto text-center md:text-left space-y-3 '>
          <div className='font-semibold w-full md:w-[70%]'>Claim Your Spot. Get Exclusive Access to Market Intel.</div>
          <input className='block w-full md:w-64 p-2 border bg-white border-gray-300' placeholder='Enter email' />
          <input className='block w-full md:w-64 p-2 border bg-white border-gray-300' placeholder='Enter zip code' />
          <Button className='rounded-none h-8 font-normal'>Submit</Button>
        </div>
      </div>
      <div className='text-center font-light text-[#7D7D7D]'>Privacy Policy • Terms & Conditions</div>

    </div>
  );
 }