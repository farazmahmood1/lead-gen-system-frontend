export default function SkinProspects() {
  return (
    <div className="relative min-h-screen w-full mt-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 py-10 lg:p-20">
      {/* Image Section */}
      <div className="flex-1 max-w-full lg:max-w-[50%]">
        <img
          src="/assets/skinProspectus.png"
          alt="Skin Prospectus"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 max-w-full lg:max-w-[50%] text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-4">
        Why Skin Prospects? Because You're Not Here to Chase Maybes
        </h1>

        {/* List Section */}
        <ul className="space-y-4">
          {[
            {
              title: "AI That Knows Who’s Feeling... a Little Wrinkly Today",
              desc: "Our smart tech sniffs out people actively making a purchasing decision for skincare help—no psychic powers required.",
            },
            {
              title: "ZIP-Code Lockdown",
              desc: "Once you claim your area, it’s yours—and we mean that. No sharing, no exceptions.",
            },
            {
              title: "Instant Gratification, Skincare-Style",
              desc: "Download your verified leads same day. Reach out before your competitors even finish their coffee.",
            },
            {
              title: "Only the Hot Ones",
              desc: "We pre-verify every consumer so you’re not wasting time on anyone who “might be interested... next year.”",
            },
            {
              title: "Get Ahead of the Algorithms",
              desc: "No waiting for ads to “optimize.” While others pay for impressions and cross their fingers, you’re already in conversation with high-intent clients.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4 lg:gap-7">
              <div className="mt-1">
              <div className="flex flex-col items-center">
        <div className="w-2 h-2 bg-[#0E6EA9] rounded-full"></div>
        {index !== 5 && ( // Last item ke baad line nahi hogi
          <div className="w-[1px] h-16 border-l-2 border-[#0E6EA9] border-dashed"></div>
        )}
      </div>
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
  );
}
