import React, { useState,useEffect } from 'react';
import "./Header.css";
import logoImg from '../../Assests/images/royal_image.png';
import bookConsulation from "../../Assests/images/book_1.png"
import hiretrainer from "../../Assests/images/hireTrainer.png"
import { Link } from "react-router-dom";

import NavBar from "./NavBar";


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
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
            <h1 className='title-main'>Train yourself to be "happy"</h1>
            <p className='subtitle-main'>1-on-1 training, live sessions, Free Consultation</p>
          </header>

          <div className="book-card-wrapper">
            <div className="book-card">
            <div className="book-image-wrapper">
              <Link to="/talk_space">
                <img
                  src={bookConsulation}
                  alt="Book Consultation"
                  className="book-consulation1"
                />
              </Link>
            </div>

            <div className="book-image-wrapper">
              <Link to="/book-now">
                <img
                  src={hiretrainer}
                  alt="Hire Trainer"
                  className="book-consulation1"
                />
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