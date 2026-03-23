import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logoImg from '../../Assests/images/royal_image.png';
import { Link } from 'react-router-dom';
import { trackEvent } from "../../analitics/analytics";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-column brand-col">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="brand-logo-text">
                <img src={logoImg} alt="Logo" className="footer-logo" />
                <div className="brand-titles">
                  <h2 className="brand-name">ROYAL</h2>
                  <h2 className="brand-name">MINDFULNESS</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Column 2: Nav Links + Bottom Section (Stacked) */}
          <div className="footer-column center-col">
            <div className='footer-content'>
                <ul className="footer-nav">
                <li><a href="/aboutus"  onClick={() => {
                      trackEvent("Landing Page Footer", "Click", "About Us");
                    }}>About us</a></li>
                <li><a href="/contact"  onClick={() => {
                      trackEvent("Landing Page Footer", "Click", "contact us");
                    }}>Contact us</a></li>
                <li><a href="https://tanmaysmarty.wixsite.com/my-site-1/blog"  onClick={() => {
                      trackEvent("Landing Page Footer", "Click", "Blog");
                    }}>Blogs</a></li>
                <li>
                  <a
                    href="/book-now"
                    onClick={() => {
                      trackEvent("Landing Page Footer", "Click", "Hire Trainer");
                    }}
                  >
                    Hire Trainer
                  </a>
                </li>
                </ul>
                {/* Column 3: Social Icons */}
                <div className=" social-col">
                  <div className="footer-socials"  onClick={() => {
                                trackEvent(
                                  "Landing Page",
                                  "Click",
                                  `Social Media Icon`
                                );
                                        
                              }}>
                  <a href="https://www.facebook.com/profile.php?id=61585328290655"  target="_blank" className="social-circle"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/royalmindfulness24?igsh=MTE3emV1bWJtejV5" target="_blank"  className="social-circle"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/royalmindfulness/"  target="_blank" className="social-circle"><FaLinkedinIn /></a>
                  </div>
                </div>
            </div>
            <hr className="footer-divider" />
            
            <div className="footer-bottom-content">
              <div className="legal-links">
                <a href="/term-condition">Terms & Conditions</a>
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <p className="copyright">© 2026 Royal Mindfulness</p>
            </div>
          </div>       
        </div>
      </div>
   </footer>
  );
};

export default Footer;