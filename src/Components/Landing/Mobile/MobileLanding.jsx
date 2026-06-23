import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";

// import MobileHero from "../../Mobile/MobileHero";
// import MobileNav from "../../Mobile/MobileNav";

import herobg from "../../../Assests/images/checklist_bg.webp";

const Checklist = lazy(() => import("../../test1/checklist/checkList"));

const Header = lazy(() => import("../../test1/Header"));

const StatsSection = lazy(() => import("../../Mobile/StatsCard"));
const ServiceCarousel = lazy(() => import("../../Mobile/ServiceCarousel"));
const MobileFaq = lazy(() => import("../../Mobile/MobileFaq"));
const HowWeWork = lazy(() => import("../../Mobile/HowWeWork"));
const GetItFree = lazy(() => import("../../Mobile/GetItFree"));
const ComparisonSection = lazy(() => import("../../Mobile/ComparisonSection"));
const ProcessTraining = lazy(() => import("../../Mobile/ProcessTraining"));
const MobileFooter = lazy(() => import("../../Mobile/MobileFooter"));
const MobileHero = lazy(() => import("../../Mobile/MobileHero"));
const MobileNav = lazy(() => import("../../Mobile/MobileNav"));

function MobileLanding() {
  const heroRef = useRef(null);

  const [loadBelowFold, setLoadBelowFold] = useState(false);

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadBelowFold(true);
    }, 2500);

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
            <Suspense fallback={null}>
              <MobileNav isSticky={true} showMenuIcon={true} />
            </Suspense>
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
          <Suspense fallback={null}>
            {" "}
            <MobileHero hideNav={showStickyNav} />
          </Suspense>
        ) : (
          <Suspense fallback={null}>
            <Header hideNav={showStickyNav} />
          </Suspense>
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
        {loadBelowFold && (
          <Suspense fallback={null}>
            <Checklist />
          </Suspense>
        )}
      </div>

      {/* BACKGROUND SECTION */}

      {loadBelowFold && (
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
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

          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Suspense fallback={null}>
              <StatsSection />
            </Suspense>

            <Suspense fallback={null}>
              <ServiceCarousel />
            </Suspense>
          </div>
        </div>
      )}

      {loadBelowFold && (
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
            <Suspense fallback={null}>
              <ProcessTraining />
            </Suspense>

            <div
              style={{
                position: "relative",
                zIndex: 13,
              }}
            >
              <Suspense fallback={null}>
                <ComparisonSection />
              </Suspense>
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

                mt: {
                  xs: "-60px",
                  md: "0px",
                },

                position: "relative",
                zIndex: 10,
              }}
            >
              <Suspense fallback={null}>
                <GetItFree />
              </Suspense>
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
              <Suspense fallback={null}>
                <HowWeWork />
              </Suspense>
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
              <Suspense fallback={null}>
                <MobileFaq />
              </Suspense>
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
              <Suspense fallback={null}>
                <MobileFooter />
              </Suspense>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MobileLanding;
