import React from 'react'
import "./HealthMind.css"
import { Link } from "react-router-dom";
import { trackEvent } from "../../analitics/analytics";
function HealthMind() {
  return (
    <div className='healthy-mind-section'>
      <div className='healthy-min-contet'>
        <h2 className='healthy-mind-title title-main'>
          "A healthy mind is the key to a stronger you."
        </h2>
        <p className='healthy-mind-description heading-main'>
          Start your journey today. It's free and takes just a few minutes.
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
          Book Free Consultation
        </Link>
        <span
          style={{
            fontSize: "12px",
            color: "#555",
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
