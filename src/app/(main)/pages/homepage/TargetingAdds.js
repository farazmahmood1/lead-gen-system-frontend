import Button from "@/components/common/Button";
import Image from "next/image";

export default function TargetingAdds() {
  return (
    <div className="w-full flex  justify-center px-24">
      <div className="p-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 leading-tight">
          Think of It as Jet Fuel for Your Existing Ads
        </h1>
        <div className="border border-gray-200 rounded-md bg-[#fafdff]">
        <div className="grid grid-cols-2 gap-0 ">
          {/* Header Row */}
          <div className="bg-[#DBDFFF] font-bold text-gray-800 p-4 border-r border-[#9F9F9F]">
            Broad Targeting
            <p className="font-normal">(It’s Time to Break Up)</p>
          </div>
          <div className="bg-[#DBDFFF] font-bold text-gray-800 p-4  border-r border-[#9F9F9F]">
            Laser Targeting
            <p className="font-normal">Where Every Click Counts</p>
          </div>

          {/* Row 1 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-[#9F9F9F]">
            <span className="text-[#9F9F9F]">Let’s be honest—broad targeting is burning your budget and wasting your time. Here’s what you get with traditional ad platforms:</span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-[#9F9F9F]">
            <span className="text-[#9F9F9F]">We don’t just show your ad to “people who like skincare.”  We find the ones actively searching for it—right now.</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-[#9F9F9F]">
          <img src="/icons/deleteIcon.svg" className="w-6 h-6"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            Low Conversions
            <div className="font-normal text-[14px]">Your ads reach the uninterested masses, not real skincare buyers.</div>
            </span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-[#9F9F9F]">
          <img src="/icons/checkBox.svg" className="w-6 h-6 rounded-sm"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            High-Intent Consumers
            <div className="font-normal text-[14px]">Verified behavior signals show they’re ready to book or buy.</div>
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-[#9F9F9F]">
          <img src="/icons/deleteIcon.svg" className="w-6 h-6"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            Sky-High, Unpredictable Costs
            <div className="font-normal text-[14px]">You keep spending more to get less
            </div>
            </span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-[#9F9F9F]">
          <img src="/icons/checkBox.svg" className="w-6 h-6 rounded-sm"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            Up to 50% Lower Cost Per Acquisition            
            <div className="font-normal text-[14px]">Stop overspending. Start scaling.</div>
            </span>
          </div>
              {/* Row 4 */}
              <div className="flex items-center gap-5 p-4 border-t border-r border-[#9F9F9F]">
          <img src="/icons/deleteIcon.svg" className="w-6 h-6"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            No Contact Info
            <div className="font-normal text-[14px]">You can't follow up, nurture, or even know who clicked.
            </div>
            </span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-[#9F9F9F]">
          <img src="/icons/checkBox.svg" className="w-6 h-6 rounded-sm"/>
            <span className="font-semibold text-[#676767] text-[18px]">
            Full Contact Details          
            <div className="font-normal text-[14px]"> Emails. Phones. Real profiles. Real outreach opportunities.</div>
            </span>
          </div>
        </div>
        <div className="flex items-center text-center gap-5 p-4 px-24 border-t border-[#9F9F9F]">
            <span className="text-[#676767] text-[18px]">
            It’s not advertising anymore. It’s alignment. <span className="font-semibold">PrecisionMatch</span> connects your offer to the exact right people, at the exact right time—before your competitors even know they exist. Ready to ditch the guesswork and start converting with clarity?         
            
            </span>
          </div>
        </div>

        <div className="mt-6 flex  justify-center ">
          <Button size="md" className="mt-6">
          Book Your Free Data Demo Now
          </Button>
        </div>
      </div>
    </div>
  );
}
