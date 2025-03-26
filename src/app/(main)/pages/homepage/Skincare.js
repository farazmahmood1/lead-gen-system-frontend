import React from 'react';

export default function Skincare() {
  return (
    <div>
      {/* Notification Bar */}
      <div className="flex justify-center items-center gap-1 bg-[#FAFAFA] p-4">
        <div className="flex justify-center items-center">
          <img src="/icons/padlock.svg" className="w-6 h-6" alt="Padlock" />
          <span className="font-roboto font-semibold ml-2 text-sm sm:text-base">
            Once a region is claimed, it’s gone!
          </span>
        </div>
      </div>

      {/* Market Potential Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[220px] flex-wrap justify-between items-center bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA] to-[#DBDFFF] p-6 lg:p-10 gap-4 lg:gap-0">
  <div className="w-full lg:w-[500px] text-[16px] sm:text-[17px] lg:text-[18px] font-roboto text-center lg:text-left">
    Potential based on specific market and size, can be increased by adding zip codes.
    <span className="font-semibold"> Login to explore more</span>
  </div>
  <div className="w-full lg:w-auto flex justify-center">
    <img src="/Group.png" className="h-32 sm:h-40 md:h-48 lg:h-45 max-w-full" alt="Market Potential" />
  </div>
</div>


      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="font-semibold text-[22px] md:text-[28px]">
          What Skincare Professionals Are Saying
        </h2>
        <p className="text-gray-600 text-sm md:text-base">Trusted by Skincare Professionals</p>
      </div>

      {/* Testimonials + Image Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 p-6">
        {/* Testimonial Box */}
        <div>
        <div className="bg-[#F2F4FF] border border-[#DBDFFF] relative max-w-full md:w-[600px] p-8 md:p-16 flex flex-col items-center justify-center text-center rounded-lg shadow-md">
          <img src="/hooks.png" className="h-10 w-10 absolute -top-5 left-1/2 transform -translate-x-1/2" alt="Quote" />
          <p className="leading-7 w-[90%] md:w-[300px]">
            We booked 37 new consultations in the first month alone! These skincare consumers are pure gold.
          </p>
          <p className="mt-4 font-semibold text-[#0E6EA9]">Dr. Lisa R., Dermatologist</p>
          <div className="mt-4 bg-white border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <img src="/icons/avatarIcon.svg" alt="Avatar" />
          </div>
        </div>
        <div className='relative mt-8 flex items-center justify-center'> 
          <div className=' bg-[#D9D9D9] w-[200px] h-1'></div>
          <div className=' bg-[#0E6EA9] w-8 h-3 rounded-sm absolute '></div>
        </div>
        </div>

        {/* Skincare Image */}
        <div className="w-full md:w-[570px] flex justify-center">
          <img src="/skinAnalyzer.png" className="w-full max-w-[570px]" alt="Skin Analyzer" />
        </div>
      </div>
    </div>
  );
}
