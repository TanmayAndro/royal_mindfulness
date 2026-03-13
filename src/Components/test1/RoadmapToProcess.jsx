import React from 'react';
import './RoadmapToProcess.css';
import roadmap1 from '../../Assests/images/roadmap1.jpg';
import roadmap2 from '../../Assests/images/roadmap2.jpg';
import roadmap3 from '../../Assests/images/roadmap3.jpg';
import { Link } from "react-router-dom";
import { trackEvent } from "../../analitics/analytics";
import ArrowImg from "../../Assests/images/arrow1.png"

const RoadmapToProcess = () => {

  const userId = localStorage.getItem("user_id");
  const steps = [
    {
      id: 1,
      title: "Relaxation ",
      highlight: "Training",
      description:
        "Learn deep and practical relaxation methods that can be applied in daily life, workspaces, stressful situations and even public environments, helping the mind slow down and release accumulated stress.",
      buttonText: "Book a free consultaion",
      note: "(Duration: 1 Month)",
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
      title: "Awareness ",
      highlight: "Training",
      description:
        "Train your mind to observe automatic thoughts, recurring concerns, and daily mental patterns through guided awareness practices and structured reflection techniques.",
      // buttonText: "Duration: 2 Months",
      image: roadmap2,
     note: "(Duration: 1 Month)",
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
      title: "Response Training",
      highlight: "Training",
      description:
        "Develop the ability to respond consciously to concerning thoughts/emotions, instead of reacting automatically — through thought-response practices and daily mental review exercises.",
      // buttonText: "Duration: 1 Month",
      note: "(Duration: 1 Month)",
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
    },
   {
      id: 4,
      title: "Behavioral ",
      highlight: "& Habit Training",
      description:
        "Build awareness and respond to habits, compulsions, and behavioral patterns, goals/ambitions while aligning daily actions with personal goals and long-term intentions.",
      // buttonText: "Duration: 1 Months",
      image: "https://media.istockphoto.com/id/1446368365/photo/autumn-patio-portraits-hispanic-mexican-american-outdoors-photo-series.webp?a=1&b=1&s=612x612&w=0&k=20&c=fGAXlLD8HU6K0XiUVfd7DB5xZnr54nwiPU8rgYFR95M=",
      note: "(Duration: 1 Month)",
      position: "left",
      backdrop: "style2",
      sparkleicon: "icon2",
      link: "/book-now",
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
        <h2 className="roadmap-main-title title-main">About Our Mental Fitness Trainings</h2>

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
                    {step.buttonText && (
                    <Link to={step.link} className="roadmap-btn"  onClick={() => {
                      trackEvent(
                        "Landing Page",
                        "Click",
                        `BookConsultation`
                      );
                    }}>
                      {step.buttonText}
                    </Link>
                  )}
                  {step.note && (
                    <span className="btn-note">
                      {step.note}
                    </span>
                  )}

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
