import React from "react";
import AboutMeHeader from "./aboutComp/AboutMeHeader";
import PurposeSection from "./aboutComp/PurposeSection";
import LifeGoals from "./aboutComp/LifeGoals";
import InterestsSection from "./aboutComp/InterestsSection";
import PastExperienceSection from "./aboutComp/PastExperienceSection";

const AboutMe = () => {
  return (
    <div className="relative mt-2 w-full overflow-x-hidden rounded-3xl bg-gradient-to-br from-amber-900 via-amber-800 to-amber-600 px-1 text-white sm:px-2">
      <AboutMeHeader />
      <PurposeSection />
      <LifeGoals />
      <InterestsSection />
      <PastExperienceSection />
    </div>
  );
};

export default AboutMe;
