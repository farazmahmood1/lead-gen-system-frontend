"use client";
import { Button } from "@/components/common";
import React, { useState } from "react";

const benefitsData = [
  {
    description:
      "We track trillions of real-time behavioral signals from 330+ million U.S. consumers",
    icon: "/icons/geo-target.svg",
  },
  {
    description:
      "Monitor 50+ billion URLs—including competitor websites—daily",
    icon: "/icons/ai.svg",
  },
  {
    description:
      "Analyze millions of device fingerprints, IP addresses, and hashed cookie signatures",
    icon: "/icons/verified.svg",
  },
  {
    description:
      "Use proprietary scoring to identify skincare-focused buyers the moment they start researching a solution like yours",
    icon: "/icons/results.svg",
  }
];

const points = [
  "Imagine having instant access to a live list of high-intent skincare consumers near you—people actively researching treatments, browsing product reviews, even visiting your competitor’s website today.",
  "This isn’t a fantasy. It’s the most valuable data your practice could ever touch.",
  "While platforms like Facebook waste your budget on broad, vague interest categories that don’t signal intent, we deliver verified buyers already on the path to purchase. Here’s how we do it:"
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-[#252525]">
        What If You Could See Exactly Who’s Searching for<br /> Skincare in Your Area—Right Now?”
      </h2>

      <div className="space-y-4 mt-12 mb-10 ms-3 me-3">
        {points.map((point, index) => (
          <div key={index} className=" space-x-3" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", width: "70%" }}>
            <div style={{ height: "20px", width: "20px", borderRadius: "25px", position: "absolute", backgroundColor:"#0E6EA9" }}></div>
            <p className="text-gray-800 text-[15px] ms-10">
              {index === 2 ? (
                <>
                  While platforms like Facebook waste your budget on broad, vague interest categories that don’t signal intent,{" "}
                  <span className="font-bold">we deliver verified buyers already on the path to purchase. Here’s how we do it:</span>
                </>
              ) : (
                point
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="p-7 border border-[#0E6EA9] rounded-xl shadow-md cursor-pointer"
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className={`w-12 h-12 ms-24 mt-5  ${activeIndex === index ? "filter invert brightness-0" : ""
                }`}
            />
            <p className="mt-4 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-[#3A3A3A] max-w-5xl text-center">That data gets sent straight to your ad account or CRM, so you reach the right people before your competitors even know they exist. Curious how many people in your market are searching for services like yours right now? Book a quick discovery call to see the data for yourself—completely risk-free. We even run a side-by-side A/B test against your current targeting using your existing ads. If we don’t outperform it? You pay nothing. But when we do (and we typically increase results by 20% or more)... We reserve your ZIP code exclusively—for you and you alone.</p>
      </div>

<div className="mt-10 flex flex-col items-center justify-center">
<Button>Book Your free demo data now</Button>
</div>
    </div>
  );
}
