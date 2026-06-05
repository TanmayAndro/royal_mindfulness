import React, { useState, useEffect, useRef } from "react";

import MobileHero from "../../Mobile/MobileHero";
import MobileNav from "../../Mobile/MobileNav";

import Checklist from "../../test1/checklist/checkList";
import StatsSection from "../../Mobile/StatsCard";
import ServiceCarousel from "../../Mobile/ServiceCarousel";
import MobileFaq from "../../Mobile/MobileFaq";
import HowWeWork from "../../Mobile/HowWeWork";
import GetItFree from "../../Mobile/GetItFree";
import ComparisonSection from "../../Mobile/ComparisonSection";
import ProcessTraining from "../../Mobile/ProcessTraining";
import MobileFooter from "../../Mobile/MobileFooter";

import herobg from "../../../Assests/images/checklist_bg.jpg";

function MobileLanding() {
  const heroRef = useRef(null);

  const checklistRef = useRef(null);

  const [showStickyNav, setShowStickyNav] = useState(false);

  /* STICKY NAV LOGIC */
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;

      setShowStickyNav(window.scrollY > heroHeight - 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* AUTO SCROLL ONLY ON FIRST LOAD (MOBILE) */
  useEffect(() => {
    // Desktop par mat chalao
    if (window.innerWidth > 768) return;

    // Pehle check karo auto scroll ho chuka hai ya nahi
    const hasAutoScrolled = sessionStorage.getItem("mobileLandingAutoScrolled");

    if (hasAutoScrolled) return;

    const timer = setTimeout(() => {
      if (checklistRef.current) {
        checklistRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        sessionStorage.setItem("mobileLandingAutoScrolled", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* STICKY NAV */}
      {showStickyNav && (
        <div
          style={{
            position: "fixed",

            top: 0,
            left: 0,

            width: "100%",

            zIndex: 9999,

            boxSizing: "border-box",

            background: "transparent",
          }}
        >
          <MobileNav isSticky={true} />
        </div>
      )}

      {/* HERO */}
      <div ref={heroRef}>
        <MobileHero hideNav={showStickyNav} />
      </div>

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

      <div
        style={{
          position: "relative",
          zIndex: 13,
        }}
      >
        <ComparisonSection />
      </div>
      <div
        style={{
          marginTop: "-60px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <GetItFree />
      </div>

      <div
        style={{
          marginTop: "-100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <HowWeWork />
      </div>

      <MobileFaq />

      <MobileFooter />
    </>
  );
}

export default MobileLanding;
