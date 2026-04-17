import React from 'react'
import "./HealthMind.css"
import { Link } from "react-router-dom";
import { trackEvent } from "../../analitics/analytics";
function HealthMind() {
  return (
    <div className='healthy-mind-section'>
      <div className='healthy-min-contet'>
        <h2 className='healthy-mind-title'>
          "A stronger you start with a trained mind. Improve your focus, reduce anxiety, and build real mental fitness."
        </h2>
        <p className='healthy-mind-description'>
          Start your journey today, it’s free and takes just a few minutes.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
        <Link type='submit' to="/consultation_question" className='healthy-mind-btn' onClick={() => {
          trackEvent(
            "Landing Page",
            "Click",
            `Free Consultation`
          );
          
        }}>
          Book Your Free Consultation
        </Link>
        <span
          style={{
            fontSize: "12px",
            color: "#ffffff",
          }}
        >
        (No Credit card required)
        </span>
        </div>
      </div>
    </div>
  )
}

export default HealthMind
