import React, {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
  useCallback,
  memo,
} from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
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
  const loadTriggerRef = useRef(null);
  const checklistRef = useRef(null);

  const [loadBelowFold, setLoadBelowFold] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ✅ avoid repeated scroll state updates
  const lastStickyState = useRef(false);

  /* ---------------- STICKY NAV (OPTIMIZED) ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const shouldShow = window.scrollY > heroHeight - 100;

      if (lastStickyState.current !== shouldShow) {
        lastStickyState.current = shouldShow;
        setShowStickyNav(shouldShow);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- AUTO SCROLL (UNCHANGED LOGIC) ---------------- */
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const hasAutoScrolled = sessionStorage.getItem(
      "mobileLandingAutoScrolled",
    );

    if (hasAutoScrolled) return;

    const timer = setTimeout(() => {
      if (!checklistRef.current) return;

      const stickyNavHeight = 80;
      const targetPosition =
        checklistRef.current.offsetTop - stickyNavHeight;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });

      sessionStorage.setItem("mobileLandingAutoScrolled", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  /* ---------------- LAZY BELOW FOLD (OPTIMIZED OBSERVER) ---------------- */
  useEffect(() => {
    const el = loadTriggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadBelowFold(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  /* ---------------- RENDER ---------------- */
  return (
    <>
      {/* STICKY NAV */}
      {isMobile && showStickyNav && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
            background: "transparent",
          }}
        >
          <Suspense fallback={null}>
            <MobileNav isSticky showMenuIcon />
          </Suspense>
        </div>
      )}

      {isMobile && showStickyNav && (
        <div style={{ height: "110px" }} />
      )}

      {/* HERO */}
      <div ref={heroRef}>
        {isMobile ? (
          <Suspense fallback={null}>
            <MobileHero hideNav={showStickyNav} />
          </Suspense>
        ) : (
          <Suspense fallback={null}>
            <Header hideNav={showStickyNav} />
          </Suspense>
        )}
      </div>

      {/* CHECKLIST (ALWAYS SAFE RENDER) */}
      <div
        ref={checklistRef}
        style={{
          marginTop: isMobile && showStickyNav ? "110px" : "0px",
          transition: "margin-top 0.3s ease",
        }}
      >
        <Suspense fallback={null}>
          <Checklist />
        </Suspense>
      </div>

      {/* TRIGGER */}
      <div ref={loadTriggerRef} style={{ height: "1px" }} />

      {/* BELOW FOLD */}
      {loadBelowFold && (
        <>
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
                opacity: 0.25,
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <Suspense fallback={null}>
                <StatsSection />
              </Suspense>

              <Suspense fallback={null}>
                <ServiceCarousel />
              </Suspense>
            </div>
          </div>

          <Box sx={{ position: "relative" }}>
            <Suspense fallback={null}>
              <ProcessTraining />
              <ComparisonSection />
              <GetItFree />
              <HowWeWork />
              <MobileFaq />
              <MobileFooter />
            </Suspense>
          </Box>
        </>
      )}
    </>
  );
}

export default memo(MobileLanding);