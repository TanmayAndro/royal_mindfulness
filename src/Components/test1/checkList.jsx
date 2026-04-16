import React, { useState } from 'react';
import "./checkList.css";
import { Link } from "react-router-dom";

const statements = [
  {
    question: "I often feel stressed due to my work or relationships.",
    answer: "Stress is tough, but your mind can be trained to handle it better.",
  },
  {
    question: "I feel anxious about my future, work, health, or relationships.",
    answer: "Anxiety drains energy. Let’s build a calmer, more focused mind.",
  },
  {
    question: "I struggle to stay calm in high-pressure/intense situations.",
    answer: "Stay sharp under pressure. Your mind can learn resilience.",
  },
  {
    question:
      "I know I can do better at work and in personal life, but I need better mental discipline.",
    answer: "Success starts with discipline. Let’s train your focus.",
  },
  {
    question:
      "I want to improve my emotional intelligence and handle situations better.",
    answer: "Mastering emotions means mastering life. Let’s build that skill.",
  },
  {
    question:
      "I want to train my mind just like athletes train their bodies—for peak performance.",
    answer: "Peak performance starts in the mind. Let’s train it.",
  },
  {
    question:
      "I know that mindset is everything, but I don’t know how to train it effectively.",
    answer: "Mindset is key. We’ll show you how to sharpen it.",
  },
  {
    question:
      "I feel like my mind is my biggest asset—but sometimes it also holds me back.",
    answer: "Your mind is powerful—let’s make sure it works for you.",
  },
];

const Checklist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false); 
  const [displayedAnswer, setDisplayedAnswer] = useState(null); 
 

  const currentStatement = statements[currentIndex];

  const handleAnswer = (response) => {
    
    // if (response == 'yes') {
    //   setLastAnswer('yes'); 

    //   setAnswers((prev) => [
    //     ...prev,
    //     { index: currentIndex, response: 'yes' },
    //   ]);
    //   return; 
    // }

    // if (response == 'no') {
    //   setLastAnswer(null); 

    //   setAnswers((prev) => [
    //     ...prev,
    //     { index: currentIndex, response: 'no' },
    //   ]);

    //   setCurrentIndex((prev) => 
    //   prev < statements.length - 1 ? prev + 1 : prev
    //   ); 
    // }

      setDisplayedAnswer(statements[currentIndex].answer); 
      setLastAnswer(response); 

      setAnswers((prev) => [
        ...prev, 
        {index: currentIndex, response }, 
      ]); 

      // move to next question

      if(currentIndex < statements.length - 1) {
        setCurrentIndex((prev) => prev+1); 
      } else {
        setIsFinished(true);
      }
  }



  return (
    
    <section>
       <div className="checklist-container">
      {/* Zigzag Header */}
      <div className="zigzag-header" />

        {/* Main Content */}
        <div className="checklist-content">
          {/* Heading */}
          <div className="checklist-heading">
            {/* Decorative Sparkle SVG */}
            <div className="heading-decorator">
            <svg 
                className="sparkle-icon" 
                width="120" 
                height="100" 
                viewBox="0 0 120 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Bottom Line - Iski width badhayi hai (x1: 5 to x2: 40) */}
                <line x1="5" y1="70" x2="58" y2="70" stroke="#1470AF" strokeWidth="3" strokeLinecap="round"/>
                
                {/* 2. Middle Diagonal Line - Iski height aur gap badhaya hai */}
                <line x1="25" y1="20" x2="60" y2="55" stroke="#1470AF" strokeWidth="3" strokeLinecap="round"/>
                
                {/* 3. Top Vertical Line - Isko sabse zyada height di hai (0 to 45) */}
                <line x1="85" y1="0" x2="85" y2="45" stroke="#1470AF" strokeWidth="3" strokeLinecap="round"/>
              </svg>  
              <h2 className='title-main'>
                We want to know you a bit better<br />
                here is the your <span className="highlight">Checklist</span>
              </h2>
            </div>
          </div>

        {!isFinished && (
          <div className="statement-container">
            <div className="statement-card">
              
              {/* Left Arrow */}
              <button 
                className="nav-arrow left-arrow" 
                onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                disabled={currentIndex === 0}
              >
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
                  <g filter="url(#filter0_d_1_3007)">
                    <rect x="30" y="29" width="27" height="26" rx="13" transform="rotate(180 30 29)" fill="white"/>
                    <path d="M19.7071 16.7071C20.0976 16.3166 20.0976 15.6834 19.7071 15.2929L13.3431 8.92893C12.9526 8.53841 12.3195 8.53841 11.9289 8.92893C11.5384 9.31946 11.5384 9.95262 11.9289 10.3431L17.5858 16L11.9289 21.6569C11.5384 22.0474 11.5384 22.6805 11.9289 23.0711C12.3195 23.4616 12.9526 23.4616 13.3431 23.0711L19.7071 16.7071Z" fill="#1470AF"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_1_3007" x="0" y="0" width="37" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_3007"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3007"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3007" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </button>

              {/* Text content */}
              <div className="statement-text">
                {!isFinished && currentStatement.question}
              </div>

              {/* Right Arrow */}
              <button 
                className="nav-arrow right-arrow"
                onClick={() => currentIndex < statements.length - 1 && setCurrentIndex(currentIndex + 1)}
                disabled={currentIndex === statements.length - 1}
              >
                {/* Your Provided SVG */}
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_3007)">
                    <rect x="30" y="29" width="27" height="26" rx="13" transform="rotate(180 30 29)" fill="white"/>
                    <path d="M19.7071 16.7071C20.0976 16.3166 20.0976 15.6834 19.7071 15.2929L13.3431 8.92893C12.9526 8.53841 12.3195 8.53841 11.9289 8.92893C11.5384 9.31946 11.5384 9.95262 11.9289 10.3431L17.5858 16L11.9289 21.6569C11.5384 22.0474 11.5384 22.6805 11.9289 23.0711C12.3195 23.4616 12.9526 23.4616 13.3431 23.0711L19.7071 16.7071Z" fill="#1470AF"/>
                  </g>
                </svg>
              </button>

              {/* Action Buttons Container */}
              {!isFinished && (
                <div className="action-buttons-overlay">
                  <button className="circle-btn check-btn" onClick={() => handleAnswer('yes')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E20" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </button>
                  <button className="circle-btn cross-btn" onClick={() => handleAnswer('no')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B71C1C" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

          {/* Answer Display Card */}
          <div className={`answer-card ${displayedAnswer ? 'answered' : 'placeholder'}`}>
            {isFinished ? (
              
              <span className="final-message">
                <h3 className='final-message-1'>You have completed all questions!</h3>
                Your mind is powerful—let’s make sure it works for you.
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                    margin: "10px", 
                  }}
                >
                <Link type='submit' to="/consultation_question" className='healthy-mind-btn'>
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

              </span>
              
            ) : displayedAnswer ? (
              <>
                
                <span>
                   {currentStatement.answer}
                </span>
              </>
            ) : (
              <>
                <span className='answer-text'>Answer will appear here when you click</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Checklist;
