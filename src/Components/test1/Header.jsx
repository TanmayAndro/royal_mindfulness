import React, { useState,useEffect } from 'react';
import "./Header.css";

import bookConsulation from "../../Assests/images/book_freeconsultation.png"
import hiretrainer from "../../Assests/images/hire_traniner.png"
import { HiArrowCircleRight } from "react-icons/hi";
import { trackEvent } from "../../analitics/analytics";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);
// Header.js mein useEffect ko aise update karein
useEffect(() => {
  const handleScrollLock = () => {
    // Sirf tab lock karein jab menu open ho AUR screen mobile width ho
    if (isOpen && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  handleScrollLock(); // Run on mount/change

  // Window resize par bhi check karein (agar user screen badi kare)
  window.addEventListener('resize', handleScrollLock);

  return () => {
    document.body.style.overflow = "auto";
    window.removeEventListener('resize', handleScrollLock);
  };
}, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className='header-root'>    
      <div className='header-section'>
        <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <section className="hero-section">
          <header className="hero">
            <h1 className='title-main hero-section-heading'>Train Yourself To Be Happy</h1>
            <p className='heading-main'>1-on-1 training, live sessions, Free Consultation</p>
          </header>

          <div className="book-card-wrapper">
            <div className="book-card">
              
              {/* Card 1: Consultation */}
              <div className="book-image-wrapper">
                <Link to="/consultation_question" className="card-link" onClick={() => {
                  trackEvent(
                    "Landing Page",
                    "Click",
                    `Free Consultation `
                  );
                }}>
                  <div className="card-content">
                    <div className="card-header">
                      <div className="title-section">
                        <span className="book-text">Book</span>
                        <div className="bottom-row">
                          <span className="consultation-text">Free Consultation</span>
                          <HiArrowCircleRight className="card-icon" />
                        </div>
                      </div>
                    </div>
                    
                    <img
                      src={bookConsulation}
                      alt="Book Consultation"
                      className="book-consulation-img"
                    />
                  </div>
                </Link>
              </div>

              {/* Card 2: Hire Trainer */}
              <div className="book-image-wrapper">
                <Link to="/book-now" className="card-link" onClick={() => {
                  trackEvent(
                    "Landing Page",
                    "Click",
                    "Hire Trainer"
                  );
                }}>
                    <div className="card-content">
                    <div className="card-header">
                      <div className="title-section">
                        <span className="book-text">Hire</span>
                        <div className="bottom-row">
                          <span className="consultation-text">Trainer</span>
                          <HiArrowCircleRight className="card-icon" />
                        </div>
                      </div>
                    </div>
                    <img
                      src={hiretrainer}
                      alt="Hire Trainer"
                      className="book-consulation-img"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </> 
  );
}

export default Header;