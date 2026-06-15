import React, { useState, useEffect, useRef } from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";

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

import Header from "../../test1/Header";

import herobg from "../../../Assests/images/checklist_bg.jpg";

function MobileLanding() {
  const heroRef = useRef(null);

  const checklistRef = useRef(null);

  const [showStickyNav, setShowStickyNav] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* STICKY NAV LOGIC */
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;

      setShowStickyNav(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* AUTO SCROLL ONLY ON FIRST LOAD (MOBILE) */
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const hasAutoScrolled = sessionStorage.getItem("mobileLandingAutoScrolled");

    if (hasAutoScrolled) return;

    const timer = setTimeout(() => {
      if (!checklistRef.current) return;

      const stickyNavHeight = 80;

      const targetPosition = checklistRef.current.offsetTop - stickyNavHeight;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });

      sessionStorage.setItem("mobileLandingAutoScrolled", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* STICKY NAV */}
      {isMobile && showStickyNav && (
        <>
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
            <MobileNav isSticky={true} showMenuIcon={true} />
          </div>

          {/* Spacer */}
          {isMobile && showStickyNav && (
  <div
    style={{
      height: "110px",
    }}
  />
)}
        </>
      )}

      <div ref={heroRef}>
        {isMobile ? (
          <MobileHero hideNav={showStickyNav} />
        ) : (
          <Header hideNav={showStickyNav} />
        )}
      </div>

      {/* CHECKLIST */}
     <div
  ref={checklistRef}
  style={{
    marginTop: isMobile && showStickyNav ? "110px" : "0px",
    transition: "margin-top 0.3s ease",
  }}
>
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

     <Box
  sx={{
    position: "relative",

    "&::before": {
      content: '""',

      position: "absolute",

      inset: 0,

      backgroundImage: {
        xs: "none",
        md: `url(${herobg})`,
      },

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      opacity: 0.25,

      zIndex: 0,
    },
  }}
>
  <Box
    sx={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <ProcessTraining />

    <div
      style={{
        position: "relative",
        zIndex: 13,
      }}
    >
      <ComparisonSection />
    </div>

    {/* GET IT FREE */}
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },

        mx: {
          md: "auto",
        },

        mt: "-60px",

        position: "relative",
        zIndex: 10,
      }}
    >
      <GetItFree />
    </Box>

    {/* HOW WE WORK */}
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },

        mx: {
          md: "auto",
        },

        mt: {
          xs: "-100px",
          md: "-100px",
        },

        position: "relative",
        zIndex: 1,
      }}
    >
      <HowWeWork />
    </Box>

    {/* FAQ */}
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "50%",
        },

        mx: {
          md: "auto",
        },
      }}
    >
      <MobileFaq />
    </Box>

        <Box
  sx={{
    width: {
      xs: "100%",
      md: "50%",
    },

    mx: {
      md: "auto",
    },
  }}
>
  <MobileFooter />
</Box>

  </Box>
</Box>
      
    </>
  );
}

export default MobileLanding;
