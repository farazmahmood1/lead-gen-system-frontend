
export default function About() {
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10 lg:px-20 lg:py-20 lg:pt-20 lg:pb-0">
        <div className="flex-1 max-w-full lg:max-w-[65%] text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-5">
            Start Reaching Real Clients / Patients Already Searching for You.
          </h1>
          <p className="text-[#252525] leading-relaxed mb-14">
            When a new client walks into your clinic, you don’t wing it. You assess. Diagnose. Customize. Deliver results.
          </p>
          <p className="font-semibold text-gray-800 mb-1">
            Why should your marketing be any different?
          </p>
          <p className="text-[#252525] leading-relaxed mb-12">
            Most ads rely on vague targeting: age, interests, keywords. But skincare decisions are personal—and <br /> driven by <span className="font-semibold">specific concerns</span> like acne, aging, or hyperpigmentation.
          </p>
          <p className="font-semibold text-gray-800 mb-2">
            Why should your marketing be any different?
          </p>
          <p className="text-[#252525] leading-relaxed mb-12">
            What if you could <span className="font-semibold">reach only the consumers already in the market for professional skincare solutions?</span> What if you could <span className="font-semibold">connect with high-intent prospects—people </span> who’ve visited competitors, researched your treatments, and are financially ready to book.
          </p>
          <p className="font-semibold text-gray-800 mb-2">
            What if your marketing worked as beautifully as your skincare recommendations?
          </p>
          <p className="text-[#252525] leading-relaxed mb-2">
            Just like you assess your clients—combining expert insight with real data to deliver <br /> only the most effective treatments—imagine if your marketing did the same.
          </p>
          <p className="text-[#252525] leading-relaxed mb-2">
            Now it can. Picture your practice being discovered only by high-intent <br /> skincare consumers—people already searching for exactly what you offer.
          </p>
          <p className="text-[#252525] leading-relaxed mb-4">
            No guesswork. No wasted spend. Just precision-targeted <br /> marketing that mirrors your own professional excellence.
          </p>
        </div>
        <div className="flex-1 max-w-full lg:max-w-[40%] absolute mt-10" style={{ right: "-20px" }}>
          <img
            src="/assets/Group.png"
            alt="A skincare consumer researching professional skincare solutions"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </>
  );
} 