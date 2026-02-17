import  { useEffect, useState } from "react";
import axios from "axios";
import "./TalkspaceFeature.css";
import PhoneImg from "../../Assests/images/phone-frame-img.svg";
import { useNavigate } from "react-router-dom";

// import mobile images

import Journal1 from "../../Assests/images/mobile_1.jpg";
import CheckList from "../../Assests/images/mobile_2.jpg";
import videoPlay from "../../Assests/images/mobile3.jpg";
import Image1 from "../../Assests/images/consutaion1.png";
import Image2 from "../../Assests/images/consultation_question-Picsart-AiImageEnhancer.jpg";  




const API_URL =
  "https://deedee-unchainable-optionally.ngrok-free.dev/checklists";

/* 🔹 STATIC UI */
const DEFAULT_STEPS = [
  {
    id: 1,
    title: "Download Mental Fitness Checklist",
    desc: "checklist description",
    img: CheckList,
  },
  {
    id: 2,
    title: "Book a free consultation",
    desc: "Answer a few questions online...",
    img: Image1,
    route: "/consultation_question",
    imgClass: "consultation-img"
  },
  {
    id: 3,
    title: "Download free Royal Mindfulness journal",
    desc: "journal description",
    img: Journal1,
  },
  {
    id: 4,
    title: "Take Mental Wellness Quiz",
    desc: "If your first therapist isn't a fit...",
    img: Image2,
    route: "/quiz_questions",
    imgClass: "quiz-img"
  },
  {
    id: 5,
    title: "Take a Free Relaxation Session",
    desc: "If your first therapist isn't a fit...",
    img: videoPlay,
    link_url: "https://youtu.be/y9pG051DWqc?si=SBP9wl75W1ozw9XG",
  },
];

const TalkspaceFeature = () => {
  const [steps, setSteps] = useState(DEFAULT_STEPS);
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  /* 🔹 FETCH DATA ON MOUNT */
  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        });

        const list = response?.data?.data || [];

        const checklist = list.find(
          (i) => i.attributes.title === "Mental Fitness Checklist"
        );

        const journal = list.find(
          (i) => i.attributes.title === "Royal Mindfulness Journal"
        );

        setSteps((prev) =>
          prev.map((step) => {
            if (step.id === 1 && checklist) {
              return {
                ...step,
                document_url: checklist.attributes.document_url.replace(
                  "http://",
                  "https://"
                ),
              };
            }

            if (step.id === 3 && journal) {
              return {
                ...step,
                document_url: journal.attributes.document_url.replace(
                  "http://",
                  "https://"
                ),
              };
            }

            return step;
          })
        );
      } catch (error) {
        console.warn("Initial API failed – using static UI");
      }
    };

    fetchChecklist();
  }, []);

  // FUNCTION CHECK SERVER ON /OFF 
  const isBackendAlive = async () => {
    try {
      await axios.head(API_URL, { timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }
  

  /* 🔹 CLICK HANDLER */
  const handleStepClick = async (step) => {
    setErrorMessage("");

    // 1️⃣ Internal route
    if (step.route) {
      navigate(step.route);
      return;
    }

    // 2️⃣ Document (needs backend alive)
    if (step.document_url) {
      const alive = await isBackendAlive();

      if (!alive) {
        setErrorMessage(
          "Service is temporarily unavailable. Please try again later."
        );
        return;
      }

      window.open(step.document_url, "_blank", "noopener,noreferrer");
      return;
    }

    // 3️⃣ External link (independent)
    if (step.link_url) {
      window.open(step.link_url, "_blank", "noopener,noreferrer");
      return;
    }

    // 4️⃣ Nothing available
    setErrorMessage(
      "Content is currently unavailable. Please try again later."
    );
  };

  return (
    <div className="talkspace-container">
      <h2 className="main-title title-main">Get it for free!</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="content-wrapper">
        <div className="steps-column">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-card ${activeStep === index ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(0)}
              onClick={() => handleStepClick(step)}
              style={{
                cursor:
                  step.route || step.document_url || step.link_url
                    ? "pointer"
                    : "default",
              }}
            >
              <div className="step-num">{step.id}</div>
              <div className="step-info">
                <h3 className="heading-main" >{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mockup-column">
          <div className="phone-container">
            <img
              src={PhoneImg}
              className="phone-frame-overlay"
              alt="phone frame"
            />
            <div className="phone-inner">
              <img
                src={steps[activeStep].img}
                alt="app-screen"
                className={`screen-fade ${steps[activeStep].imgClass || ""}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkspaceFeature;
