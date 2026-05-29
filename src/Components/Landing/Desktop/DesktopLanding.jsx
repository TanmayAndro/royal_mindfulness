import React from "react";
import Header from "../../test1/Header";
import Checklist from "../../test1/checklist/checkList";

import Footer from "../../test1/Footer";
import Service from "../../test1/Service";
import FeedBack from "../../test1/FeedBack";
import RoadmapToProcess from "../../test1/RoadmapToProcess";
import HealthMind from "../../test1/HealthMind";
import Comparison from "../../test1/Comparison";
import FAQSection from "../../test1/FAQSection";
import TalkspaceFeature from "../../test1/TalkspaceFeature";
import FounderSection from "../../test1/FounderSection/FounderSection";
import TrustMetrics from "../../test1/TrustMetrics/TrustMetrics";
import LandingPage from "../../../Pages/Test1/LandingPage/LandingPage";

function DesktopLanding() {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Responsive Wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          padding: "0 0px", // mobile padding
          boxSizing: "border-box",
        }}
      >
        <Header />

        <div style={{ marginTop: "0px" }}>
          <Checklist />
        </div>


        <div style={{ marginTop: "0px" }}>
          <Service />
        </div>

        <div style={{ marginTop: "0px" }}>
          <RoadmapToProcess />
        </div>

        {/* <div style={{ marginTop: "0px" }}>
          <TestimonialsPage />
        </div> */}

        <div style={{ marginTop: "0px" }}>
          <Comparison />
        </div>

        <div style={{ marginTop: "0px" }}>
          <TalkspaceFeature />
        </div>

        <div style={{ marginTop: "0px" }}>
          <LandingPage />
        </div>

        {/* <div style={{ marginTop: "0px" }}>
          <FounderSection />
        </div> */}

        <div style={{ marginTop: "0px" }}>
          <TrustMetrics />
        </div>

        <div style={{ marginTop: "0px" }}>
          <HealthMind />
        </div>

        <div style={{ marginTop: "0px" }}>
          <FAQSection />
        </div>

        <div style={{ marginTop: "0px" }}>
          <FeedBack />
        </div>

        <div style={{ marginTop: "0px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DesktopLanding;
