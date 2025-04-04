import Button from "@/components/common/Button";
import { Checkbox } from "@/components/common";
export default function Analysis() {
  return (
    <>
      <div className="relative w-full lg:px-20 lg:py-20 lg:pt-20 lg:pb-0">
      <div>
          <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-5">
            Let your marketing reflect the same brilliance you bring to every treatment.
          </h3>
          <Button size="md" className="mt-20">
            Start your Precision Targeting
          </Button>
        </div>
      </div>
      <div className="relative min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 py-10 lg:p-20">
        {/* Image Section */}
        <div className="flex-1 max-w-full lg:max-w-[50%]">
          <img
            src="/assets/Frame.png"
            alt="Skincare consumer"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 max-w-full lg:max-w-[50%] text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-4">
            Meet 6D Targeting — Like a Skin Analysis, But for Your Marketing
          </h1>
          <p className="text-gray-600 mb-6 lg:mb-10">
            We use 6 key dimensions to identify and connect you with ready-to-book
            skincare clients
          </p>

          {/* List Section */}
          <ul className="space-y-4">
            {[
              {
                title: "Intent",
                desc: "Find skincare consumers actively researching treatments or products",
              },
              {
                title: "Qualification",
                desc: "Identify consumers who have the financial ability to invest in premium skincare.",
              },
              {
                title: "Audience Size",
                desc: "Ensure you are targeting a sufficiently sized audience for impactful results.",
              },
              {
                title: "Multi-Channel Behavior",
                desc: "Engage across multiple channels to increase effectiveness",
              },
              {
                title: "Influencer & Topic Signals",
                desc: "Leverage content that is already shaping their decisions",
              },
              {
                title: "Conversion Readiness",
                desc: "Focus on clients who are most likely to convert (bottom of the funnel)",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 lg:gap-7">
                <div className="mt-1">
                  <Checkbox checked className="w-[15px] h-[15px]"/>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
