import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10 lg:p-20">
      <div className="flex-1 max-w-full lg:max-w-[50%] text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-4">
          Guesswork vs. Game Plan
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Traditional marketing often relies on broad, surface-level data like
          age, interests, and generic keywords. There’s a massive difference
          between someone casually browsing skincare content and someone
          actively searching for professional solutions—whether it’s for acne,
          aging, or aesthetic treatments.
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mb-4">
          What if your marketing worked the same way?
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most advertising relies on broad, surface-level data—age, interests,
          and generic keywords. But skincare consumers aren’t all the same.
          There’s a massive difference between someone casually browsing
          skincare content and someone actively searching for professional
          solutions—whether it’s for acne, aging, hyperpigmentation, or
          aesthetic treatments.
        </p>
        <p className="font-semibold text-gray-800 mb-6">
          What if you could target only high-intent skincare clients already
          searching for your services? What if you could target matched
          prospects that have visited your competitor’s websites?
        </p>
        <Button size="md" className="mt-6">
          Start your Precision Targeting
        </Button>
      </div>

      <div className="flex-1 max-w-full lg:max-w-[50%]">
        <img
          src="/assets/Group.png"
          alt="Skincare consumer"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
