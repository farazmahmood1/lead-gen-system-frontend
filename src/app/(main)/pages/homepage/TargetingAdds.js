import Button from "@/components/common/Button";
import Image from "next/image";

export default function TargetingAdds() {
  return (
    <div className="w-full flex  justify-center">
      <div className="p-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 leading-tight">
          Think of It as Jet Fuel for Your Existing Ads
        </h1>
        <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-md">
          {/* Header Row */}
          <div className="bg-[#DBDFFF] font-bold text-gray-800 p-4 text-center border-r border-gray-200">
            Broad Targeting
          </div>
          <div className="bg-[#DBDFFF] font-bold text-gray-800 p-4 text-center border-r border-gray-200">
            Laser Targeting
          </div>

          {/* Row 1 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">Low Conversions</span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">High-Intent Consumers</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">
              Expensive & Unpredictable Costs
            </span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">
              Typical 50% Lower Cost per Acquisition
            </span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-5 p-4 border-t border-r border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">No Direct Contact Info</span>
          </div>
          <div className="flex items-center gap-5 p-4 border-t border-gray-200">
            <input type="checkbox" checked className="text-blue-500" readOnly />
            <span className="text-gray-700">
              Full Contact Details for Direct Outreach
            </span>
          </div>
        </div>

        <div className="mt-6 flex  justify-center ">
          <Button size="md" className="mt-6">
            Discover your Market Potential
          </Button>
        </div>
      </div>
    </div>
  );
}
