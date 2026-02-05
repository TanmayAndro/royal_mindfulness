import React from 'react'
import "./HealthyStory.css"
import stroyImage from "../../Assests/images/Healthstroy.png"
import { Link } from "react-router-dom";


function HealthyStory() {
  return (
    <div className='health-section'>
    <div className='health-wrappe'>
    <div className='health-content'>
        <h2 className='health-content-title '>
          Discover Our Story: Experience the Joy of Relaxation
          
          </h2>
          <p className='health-descption1'>
          Peace emanates from within, Relaxation comes from Royal Mindfulness.
          
          </p>
          <p className='health-description-main'>
          Join us on a journey where affordable well-being meets regal serenity, and discover the transformative power of mindfulness at Royal Mindfulness
          </p>
          <Link to="/aboutus" className="healthy-story-btn">
            Learn More
          </Link>
    
    </div>
    
    {/* Right Side: Image */}
    <div className="healthy-story-image-box">
    <img 
    src={stroyImage} 
    alt="Person meditating" 
    className="healthy-story-img"
    />
    </div>
    </div>
    </div>
  )
}

export default HealthyStory
