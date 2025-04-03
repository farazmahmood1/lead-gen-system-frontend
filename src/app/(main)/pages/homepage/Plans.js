"use client";
import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: 99,
    consumers: "Up to 2,000 daily local consumers",
    features: ["Daily automated Custom...", "FB Audience Updates"],
  },
  {
    name: "Premium",
    price: 199,
    consumers: "Up to 5,000 daily local consumers",
    features: [
      "Daily automated Custom...",
      "FB Audience Updates",
      "CSV including name, address, phone, household data incl income and net worth",
    ],
  },
  {
    name: "Elite",
    price: 499,
    consumers: "Up to 10,000 daily local consumers",
    features: [
      "Daily automated Custom...",
      "FB Audience Updates",
      "CSV including name, address, phone, household data incl income and net worth...",
      "A complete marketing system including daily postcards, SMS, and email system.",
    ],
  },
];

const benefitsData = [
  {
    title: "Composite Market Score",
    description:
      "We score every ZIP code based on real demographic data like income levels, age ranges, education, and population density. This score helps us measure the market value.",
    icon: "/icons/marketGrowth.svg",
  },
  {
    title: "Tier-Based Pricing",
    description:
      "Tier-Based Pricing ZIPs are placed in pricing tiers (like Premium, High, Standard, etc.) based on their score. Higher-tier ZIPs cost more because they offer better marketing opportunity.",
    icon: "/icons/opportunity.svg",
  },
  {
    title: "Market Adjustments ",
    description:
      "We also adjust pricing based on how saturated the ZIP is with skincare businesses, how much people typically spend in that area, and how engaged they are with skincare services.",
    icon: "/icons/market.svg",
  },
  {
    title: "Exclusive Access",
    description:
      "Once a ZIP code is purchased, it’s locked for that professional only (in their category). That exclusivity adds value to the pricing.",
    icon: "/icons/access.svg",
  },
  {
    title: "Bundle Discounts",
    description:
      "If users select multiple ZIPs in a region, we automatically give them a discount. Buying a local group of ZIPs is more cost-effective.",
    icon: "/icons/discount.svg",
  },
  {
    title: "Transparent Pricing",
    description:
      "Formula Pricing is simple: Lead count × tier-adjusted price per 100 leads. We show it clearly so there are no surprises.",
    icon: "/icons/pricing.svg",
  },
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  
    

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center">
        Explore Our Exclusive Data Packages
      </h2>
      <p className="text-center text-lg text-gray-600 mt-2">
        Unlock high-intent skincare market consumer tailored to your needs.
      </p>

      {/* Plan Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg cursor-pointer transition-all duration-300 
              ${
                selectedPlan === index
                  ? "bg-[#DBDFFF] text-black transform -translate-y-4 scale-105 z-10 shadow-xl"
                  : "bg-white"
              }`}
            onClick={() => setSelectedPlan(index)}
          >
            {/* Plan Name */}
            <div
              className={`p-6 ${
                selectedPlan === index
                  ? "bg-[#0E6EA9] text-white rounded-t-md"
                  : "bg-[#DBDFFF] rounded-t-md"
              }`}
            >
              <h3 className="text-lg font-bold">{plan.name}</h3>
            </div>

            {/* Pricing */}
            <p className="mt-2 text-sm font-semibold p-6">
              Starting at <span className="text-xl">${plan.price}</span>{" "}
              <span className="text-sm">/MONTH</span>
            </p>

            {/* Consumers */}
            <p className="mt-2 p-6">{plan.consumers}</p>

            {/* Features List */}
            <ul className="mt-4 p-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <img src="/icons/tickBox.svg" alt="tick" />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Unlock Data Section */}
            <p className={`mt-4 p-6 text-sm ${
                selectedPlan === index
                  ? " text-[black]"
                  : " text-[#C1C1C1]"
              }`}>
              <hr class={`border-t-[1.5px] border-dashed my-4 mr-16 ${selectedPlan===index?"border-black":"border-[#0E6EA9]"}`} />
              Unlock <span className="text-[#0E6EA9]">Full </span>
              Data After Login
            </p>

            {/* Buttons */}
            <div className="mt-4 p-6 flex space-x-4 mb-4">
              <button className="px-4 py-2 rounded-3xl font-semibold bg-[#0E6EA9] text-white">
                Explore Package
              </button>
              <button className="px-4 py-2 text-[#0E6EA9] font-semibold">
                Claim Your Region
              </button>
            </div>

            {/* Edit Icon */}
            <div className="absolute bottom-4 right-4 text-blue-500 cursor-pointer">
              <img src="/icons/penIcon.svg" className="w-8 h-8" alt="edit" />
            </div>
          </div>
        ))}
      </div>

      {/* What's This? */}
      <div className="mt-10 relative"> 
      <div
        className="flex items-center space-x-2 text-gray-500 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-xl">
          <img src="/icons/arrow.svg" className="w-8 h-8" alt="arrow" />
        </span>
        <p className="underline">What’s this?</p>
      </div>

      {isOpen && (
        
        <div
        className="fixed inset-0 z-50 rounded-xl  bg-cover bg-center bg-no-repeat overflow-y-auto custom-scroll m-16 mt-34 "
        style={{ backgroundImage: "url('/background.png')" }} 
        onClick={() => setIsOpen(false)} 
        >
          
          <div className="absolute inset-0 bg-[#0E6EA9] opacity-50 "></div> 

          <button
      className="absolute top-4 right-4 cursor-pointer text-white text-3xl font-bold hover:text-gray-300 transition duration-300"
      onClick={() => setIsOpen(false)}
    >
      &times;
    </button>
          <div className="relative z-10">     
        <div className="text-white text-center mt-8 font-medium text-[35px] leading-[39px]">Pricing Explanation</div>
        <div className="text-white text-center mt-2 mb-8">Skincare consumer by zipcode</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4 ">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-6 border border-[#bee1fc] rounded-xl shadow-md cursor-pointer bg-white`}
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className={`w-10 h-10`}
            />
            <h3 className="font-bold text-lg mt-4">{benefit.title}</h3>
            <p className="mt-4 font-extralight text-[#3A3A3A]">{benefit.description}</p>
          </div>
        ))}
      </div>
</div>
        </div>
      )}
    </div>
    </div>
  );
}
