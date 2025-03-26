import Benefits from "./Benefits";
import Hero from "./Hero";
import About from "./About";
import Analysis from "./Analysis";
import Plans from "./Plans";
import Working from "./Working";
import TargetingAdds from "./TargetingAdds";
import Skincare from "./Skincare";
import VideoSection from "./VideoSection";
import PracticeSection from "./PracticeSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Analysis />
      <div className="mx-6">
        <div className="mt-4">
          <Working />
        </div>
        <Benefits />
      </div>
      <Plans />
      <Skincare />
      <TargetingAdds />
      <VideoSection/>
      <PracticeSection/>
    </div>
  );
}
