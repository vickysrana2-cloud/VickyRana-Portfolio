import React from "react";
import AboutMeHeader from "./aboutComp/AboutMeHeader";
import PurposeSection from "./aboutComp/PurposeSection";
import LifeGoals from "./aboutComp/LifeGoals";
import InterestsSection from "./aboutComp/InterestsSection";
import PastExperienceSection from "./aboutComp/PastExperienceSection";

const AboutMe = () => {
  return (
    <div className="relative w-full mt-2 overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-600 rounded-3xl text-white">
      <AboutMeHeader />
      <PurposeSection />
      <LifeGoals />
      <InterestsSection />
      <PastExperienceSection/>
    </div>
  );
};

export default AboutMe;
