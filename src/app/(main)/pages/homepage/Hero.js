import Button from "@/components/common/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-0 z-1 left-0 w-full h-full bg-gradient-to-r from-[#e8f1f8] to-transparent flex items-center justify-start p-6 md:p-20">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl leading-[35px] md:leading-[45px] text-gray-800" style={{ fontWeight: 999 }}>
            Find and Convert Engaged Skincare Consumers with Smarter, Precision Targeting          </h1>
          <p className="mt-4 leading-[25px] md:leading-[30px] text-[20px] text-[#252525]" style={{ fontWeight: 400 }} >
            Claim Exclusive Access by Zip Code.<br />
            Audience refreshed and updated daily.
          </p>
          <Button size="md" className="mt-6">
            Get Started
          </Button>
        </div>
      </div>

      {/* Background image responsive handling */}
      <img
        src="/assets/Hero.png"
        alt="Skincare consumer"
        className="absolute top-0 right-0  h-full object-cover"
      />
    </div>
  );
}
