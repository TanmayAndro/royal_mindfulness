import React from "react";
import MobileHero from "../../Mobile/MobileHero";
import MobileHeader from "../../Mobile/MobileHeader";
import Checklist from "../../test1/checklist/checkList";
import StatsSection from "../../Mobile/StatsCard";
import ServiceCarousel from "../../Mobile/ServiceCarousel";
import MobileFaq from "../../Mobile/MobileFaq";
import HowWeWork from "../../Mobile/HowWeWork";
import GetItFree from "../../Mobile/GetItFree";
import ComparisonSection from "../../Mobile/ComparisonSection";
import ProcessTraining from "../../Mobile/ProcessTraining";

import herobg from "../../../Assests/images/checklist_bg.jpg";

function MobileLanding() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE WITH 25% OPACITY */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          opacity: 0.25,

          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <MobileHero />

        <MobileHeader />

        <Checklist />

        <StatsSection />
        <ServiceCarousel />
        {/* GetItFree.tsx */}
        <GetItFree />
        <HowWeWork />
        <ProcessTraining />

        {/* ComparisonSection.tsx */}
        <ComparisonSection />
        <MobileFaq />
      </div>
    </div>
  );
}

export default MobileLanding;
