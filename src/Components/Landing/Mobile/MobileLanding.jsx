import React, {
  useEffect,
  useRef,
  useState,
} from "react";

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

  const checklistRef = useRef(null);

  const [isSticky, setIsSticky] =
    useState(false);

  /* STICKY HEADER LOGIC */
  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setIsSticky(
            entry.intersectionRatio < 0.5
          );
        },
        {
          threshold: [
            0,
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1,
          ],
        }
      );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* AUTO SCROLL AFTER 3 SECONDS */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (checklistRef.current) {
        checklistRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <div ref={heroRef}>
        <MobileHero />
      </div>

      {/* SHOW HEADER AFTER HERO SCROLL */}
      {isSticky && (
        <>
          <MobileHeader
            isSticky={true}
          />

          {/* PREVENT LAYOUT JUMP */}
          <div
            style={{
              height: "72px",
            }}
          />
        </>
      )}

      {/* CHECKLIST */}
      <div ref={checklistRef}>
        <Checklist />
      </div>

      {/* BACKGROUND SECTION */}
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

            backgroundPosition:
              "center",

            backgroundRepeat:
              "no-repeat",

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