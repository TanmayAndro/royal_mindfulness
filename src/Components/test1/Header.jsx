import React, { useState,useEffect } from 'react';
import "./Header.css";
import {
  Typography,
  Box,
} from "@mui/material";

import CommonButtons from "./CommonButton";
import bookConsulation from "../../Assests/images/book_freeconsultation.png"
import hiretrainer from "../../Assests/images/hire_traniner.png"
import { HiArrowCircleRight } from "react-icons/hi";
import { trackEvent } from "../../analitics/analytics";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {

  const navigate = useNavigate();
  
  const handelConsulation = (clickedOn) => {
    if (clickedOn === "calendly") navigate("/consultation_question");
    if (clickedOn === "rozerpay") navigate("/book-now");
  };
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleScrollLock = () => {
      // Sirf tab lock karein jab menu open ho AUR screen mobile width ho
      if (isOpen && window.innerWidth <= 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

  handleScrollLock(); 
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
          <div className="hero-container">
            {/* Column 1: Text Content */}
            <div className="hero-content">
              <h1 className='title-main hero-section-heading'>Train Your Mind To Be Happy</h1>
              <p className='heading-main'>1-on-1 Mind Fitness Training, Live Sessions, Free Consultation</p>
              {/* Optional: Add buttons here if needed */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "600px", // 🔑 laptop/1440px fix
            }}
          >
           {/* Book consultation */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",   // 👈 1440px+
                },
                textAlign: "center",
              }}
            >
              <CommonButtons
                label="Book a free consultation"
                height="50px"

                sx={{
                  backgroundColor: "#1470AF",
                  color: "white",
                  marginTop: { xs: "15px", sm: "25px" },
                }}

                variant="contained"
                onClick={() => {
                  trackEvent(
                    "Landing Page",
                    "Click",
                    "BookConsultation"
                  );

                  handelConsulation("calendly");
                }}
              />
              <Typography fontSize="12px" color="#555" mt="4px">
                (No Credit card required)
              </Typography>
            </Box>

            {/* Hire Trainer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",   // 👈 1440px+
                },
              }}
            >
              <CommonButtons
                label="Hire Trainer"
                height="50px"
                sx={{ backgroundColor: "#1470AF", color: "white" }}
                variant="contained"
                onClick={() => {
                trackEvent(
                  "Landing Page",
                  "Click",
                  "Hire Trainer"
                );
                handelConsulation("rozerpay");
              }}
              />
            </Box>

          </Box>
        </Box>
            </div>

            {/* Column 2: Image Content */}
            <div className="hero-image">
              <img src={bookConsulation} alt="Mindfulness Training" />
            </div>
          </div>
        </section>
      </div>
    </div>
    </> 
  );
}

export default Header;