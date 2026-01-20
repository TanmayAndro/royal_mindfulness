import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CalendarSection from "../../../Components/test1/consultation/CalendarSection";
import TimeSlotSection from "../../../Components/test1/consultation/TimeSlotSection";
import "./ConsultationPage.css";
// /home/ravi/Desktop/Tanmay_sir/royal_mindfulness/src/Components/test1/consultation/CalendarSection.jsx

const ConsultationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const response = location.state?.response;
  const [selectedDate, setSelectedDate] = useState(null);

  //  Guard: direct access / refresh case
  if (!response || response.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="overlay">
          <div className="content">
            <div className="form-box">
              <p className="error-text">
                No response found. Please start the consultation again.
              </p>
              <button
                className="submit-btn"
                onClick={() => navigate("/talkspace")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className="page-wrapper">
    <div className="hero-bg"></div>

    <div className="overlay">
      <div className="content">

        {/* ONE SINGLE CARD */}
        <div className="form-box consultation-card">

          <div className="consultation-inner">

            {/* LEFT SIDE – Reflection */}
            <div className="consultation-left">
              <h1 className="title">Your Reflection</h1>

              <div className="options-list">
                {response.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE – Calendar + Slots */}
            <div className="consultation-right calendly-layout">

              {/* Calendar ALWAYS visible */}
              <div className="calendar-column">
                <CalendarSection onDateSelect={setSelectedDate} />
              </div>

              {/* Slots appear AFTER date click */}
              {selectedDate && (
                <div className="slot-column">
                  <TimeSlotSection date={selectedDate} />
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);

};

export default ConsultationPage;
