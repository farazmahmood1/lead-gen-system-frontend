"use client";
import React, { useState } from "react";

const benefitsData = [
  {
    title: "Geo-Targeted In-Market Skincare Consumers",
    description:
      "Target local high-intent skincare clients with precision. Whether you’re a dermatologist or esthetician, gain exclusive access to valuable consumers in your area.",
    icon: "/icons/geo-target.svg",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Smarter targeting with data-driven intelligence. Our AI analyzes consumer behavior to identify those seeking skincare solutions, providing insights to engage potential clients effectively.",
    icon: "/icons/ai.svg",
  },
  {
    title: "Verified High-Intent Market Skincare Consumers",
    description:
      "Focus on market skincare consumers who are ready to take action. Each prospect is verified, ensuring you connect with consumers serious about skincare treatments.",
    icon: "/icons/verified.svg",
  },
  {
    title: "Instant Results",
    description:
      "Download your Market Skincare Consumers list immediately and start reaching out the same day.",
    icon: "/icons/results.svg",
  },
  {
    title: "Exclusive Access",
    description:
      "Once you claim your region, those prospects are yours alone – competitors get locked out.",
    icon: "/icons/exclusive.svg",
  },
  {
    title: "Verified High-Intent Market Skincare Consumers",
    description:
      "Consumers actively seeking skincare solutions, not random contacts.",
    icon: "/icons/targetAudience.svg",
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-10">
        Key Benefits of Skin Prospect
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-6 border border-[#bee1fc] rounded-xl shadow-md cursor-pointer bg-gradient-to-b ${
              activeIndex === index
                ? "from-[#0E6EA9] to-[#0E6EA9] text-white"
                : "from-white to-[#d5e6f3]"
            }`}
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className={`w-10 h-10  ${
                activeIndex === index ? "filter invert brightness-0" : ""
              }`}
            />
            <h3 className="font-bold text-lg mt-4">{benefit.title}</h3>
            <p className="mt-4">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
