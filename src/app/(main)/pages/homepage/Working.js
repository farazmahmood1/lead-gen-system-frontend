import React from 'react';

const Working = () => {
  return (
    <div className="m-4 max-w-7xl mx-auto">
      <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl ml-4 sm:ml-6 text-center sm:text-left">
        Your Next Booking Is Searching Right Now—Are You Showing Up?
      </div>
      <div className="mx-4 mt-10 font-medium leading-12 text-[40px] w-[500px]">
        How It Works: Precision Targeting in 3 Simple Steps
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 items-center mx-4">
        <div className="flex flex-col gap-6 text-center sm:text-left">
          {[
            {
              title: 'Choose Your Market',
              text: 'Select your zip code(s) for hyper-targeted access to skincare clients.',
            },
            {
              title: 'Receive Exclusive Audience Data',
              text: 'Get a verified, high-intent consumer list optimized for skincare professionals.',
            },
            {
              title: 'Engage & Convert',
              text: 'Reach your clients at the point they are ready to book now.',
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src="/point.png" className="w-6 h-6 mt-2" alt="point icon" />
              <div>
                <div className="font-extrabold text-lg sm:text-xl">{item.title}</div>
                <div className="text-sm sm:text-base">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full flex justify-center lg:justify-end">
          <img src="/skyBg.png" className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" alt="Background" />
          <img
            src="/zipScreen.png"
            className="absolute top-10 sm:top-16 w-3/4 sm:w-[630px] max-w-full"
            alt="Zip Screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Working;