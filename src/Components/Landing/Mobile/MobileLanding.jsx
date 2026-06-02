import React, { useEffect, useRef, useState } from "react";

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

import MobileFooter from "../../Mobile/MobileFooter";

function MobileLanding() {
  const heroRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <div ref={heroRef}>
        <MobileHero />
      </div>

      {/* HEADER */}
      <MobileHeader isSticky={isSticky} />

      {/* PREVENT LAYOUT JUMP */}
      {isSticky && (
        <div
          style={{
            height: "72px",
          }}
        />
      )}

      <Checklist />

      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
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
          <StatsSection />

          <ServiceCarousel />
        </div>
      </div>

      

      <ProcessTraining />

      <ComparisonSection />

      <GetItFree />

      <HowWeWork />

      <MobileFaq />

      <MobileFooter />
    </>
  );
}

export default MobileLanding;
