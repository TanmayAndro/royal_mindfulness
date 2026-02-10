import React from 'react';
import './RoadmapToProcess.css';
import roadmap1 from '../../Assests/images/roadmap1.jpg';
import roadmap2 from '../../Assests/images/roadmap2.jpg';
import roadmap3 from '../../Assests/images/roadmap3.jpg';
import { Link } from "react-router-dom";


import ArrowImg from "../../Assests/images/arrow1.png"

const RoadmapToProcess = () => {

  const userId = localStorage.getItem("user_id");
  const steps = [
    {
      id: 1,
      title: "Get a",
      highlight: "Free Consultation",
      description:
        "Start with a free 15-minute consultation where we understand your mental fitness goals, lifestyle, and needs — no obligations, just clarity.",
      buttonText: "Book Free Consultation",
      note: "(No Credit card required)",
      image: roadmap1,
      position: "right",
      backdrop: "style1",
      sparkleicon: "icon1",
      link: "/consultation_question", 
      sparkle: {
        l1: { x1: 5, y1: 80, x2: 45, y2: 80 },
        l2: { x1: 25, y1: 20, x2: 60, y2: 55 },
        l3: { x1: 85, y1: 0, x2: 85, y2: 45 }
      }
    },
    {
      id: 2,
      title: "We match you with a",
      highlight: "Mental Fitness Trainer",
      description:
        "Based on your consultation, our system assigns you a certified mental fitness trainer — not chosen randomly, but carefully aligned with your personal goals.",
      buttonText: "Hire Trainer",
      image: roadmap2,
      position: "left",
      backdrop: "style2",
      sparkleicon: "icon2",
      link: "/book-now",
     sparkle: {
        l1: { x1: 5, y1: 80, x2: 45, y2: 80 },
        l2: { x1: 25, y1: 20, x2: 60, y2: 55 },
        l3: { x1: 85, y1: 0, x2: 85, y2: 45 }
      }
    },
    {
      id: 3,
      title: "Start Daily",
      highlight: "Training Sessions",
      description:
        "You get live, guided training sessions (e.g., Antar Mouna, Yoga Nidra, breathwork, journaling) tailored to help you build a stronger, more resilient mind.",
      buttonText: "Start Session",
      image: roadmap3,
      position: "right",
      backdrop: "style3",
      sparkleicon: "icon3",
      link: `/dashboard/${userId}`, 
      
  
      sparkle: {
        l1: { x1: 5, y1: 80, x2: 45, y2: 80 },
        l2: { x1: 25, y1: 20, x2: 60, y2: 55 },
        l3: { x1: 85, y1: 0, x2: 85, y2: 45 }
      }
    }
  ];

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        <h2 className="roadmap-main-title title-main">How It works</h2>

        <div className="roadmap-steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={`roadmap-step ${step.position}`}>
                {/* Text Content */}
                <div className="step-text-content">
                  <h3 className="step-header heading-main">
                    {step.title}{" "}
                    <span className="blue-highlight">{step.highlight}</span>
                  </h3>
                  <p className="step-para text-main ">{step.description}</p>
                  <div className="button-group">
                    <Link to={step.link} className="roadmap-btn">
                      {step.buttonText}
                    </Link>
                    {step.note && <span className="btn-note">{step.note}</span>}
                  </div>
                </div>

                {/* Visual */}
                <div className="step-visual">
                  <div className="visual-block">
                    <div className={`blue-backdrop1 ${step.backdrop}`}></div>

                    <img
                      src={step.image}
                      alt={step.highlight}
                      className="visual-img"
                    />

                    <div className="sparkle-icons-container">
                      <svg
                        className={`sparkle-icon ${step.sparkleicon}`}
                        width="120"
                        height="100"
                        viewBox="0 0 120 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          {...step.sparkle.l1}
                          stroke="#1470AF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          {...step.sparkle.l2}
                          stroke="#1470AF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          {...step.sparkle.l3}
                          stroke="#1470AF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>


              {index < steps.length - 1 && (
                <div className="roadmap-arrow">
                  <div className="roadmap-connector">
                    <img
                      src={ArrowImg}
                      alt="roadmap flow arrow"
                      className={`flow-arrow-img ${
                        step.position === "right" ? "arrow-right" : "arrow-left"
                      }`}
                    />
                  </div>
                </div>
              )}


            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapToProcess;
