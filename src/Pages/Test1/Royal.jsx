import React from 'react'

import Header from '../../Components/test1/Header'

import Checklist from '../../Components/test1/checkList'
import Footer from '../../Components/test1/Footer'
import Service from '../../Components/test1/Service'
import FeedBack from "../../Components/test1/FeedBack"
import RoadmapToProcess from '../../Components/test1/RoadmapToProcess'
import HealthMind from "../../Components/test1/HealthMind"
import HealthyStory from "../../Components/test1/HealthyStory"
import Comparison from "../../Components/test1/Comparison"
import FAQSection from "../../Components/test1/FAQSection"
// import TalkspaceFeature from "../../Components/test1/TalkspaceFeature"



function Royal() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
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
          padding: "0 0px",        // mobile padding
          boxSizing: "border-box",
        }}
      >
        <Header />

        <div style={{ marginTop: "0px" }}>
          <Checklist />
        </div>

        <div style={{ marginTop: "40px" }}>
          <Service />
        </div>

        <div style={{ marginTop: "40px" }}>
          <RoadmapToProcess />
        </div>

        <div style={{ marginTop: "40px" }}>
          <Comparison />
        </div>

        <div style={{ marginTop: "40px" }}>
          <FAQSection />
        </div>

        {/* <div style={{ marginTop: "40px" }}>
          <TalkspaceFeature />
        </div> */}

        <div style={{ marginTop: "40px" }}>
          <HealthyStory />
        </div>

        <div style={{ marginTop: "40px" }}>
          <HealthMind />
        </div>

        <div style={{ marginTop: "40px" }}>
          <FeedBack />
        </div>

        <div style={{ marginTop: "0px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default Royal
