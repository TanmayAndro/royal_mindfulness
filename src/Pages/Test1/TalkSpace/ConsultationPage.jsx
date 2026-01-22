import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CalendarSection from "../../../Components/test1/consultation/CalendarSection";
import TimeSlotSection from "../../../Components/test1/consultation/TimeSlotSection";
import "./ConsultationPage.css";

const ConsultationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const response = location.state?.response;

  const [selectedDate, setSelectedDate] = useState(null);
  const [timeZone, setTimeZone] = useState("");
  const [error, setError] = useState("");

  /* 🔒 Guard: direct access */
  if (!response || response.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="overlayconsul">
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

  const handleDateSelect = (date) => {
    setSelectedDate(date);

    // Agar date select hui hai par timezone nahi hai
    if (!timeZone) {
      setError("Please select a time zone");
    } else {
      setError("");
    }
  };

  const handleTimeZoneChange = (tz) => {
    setTimeZone(tz);

    // Agar date pehle se select hai to error hata do
    if (selectedDate) {
      setError("");
    }
  };

  return (
    <div className="consultation-page">
    <div className="page-wrapper">
      <div className="hero-bg"></div>

      <div className="overlayconsul">
        <div className="content">
          <div className="form-box consultation-card">
            <div className="consultation-inner">

              {/* LEFT SIDE */}
              <div className="consultation-left">
                <h1 className="title">Your Reflection</h1>

                <div className="options-list">
                  {response.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="consultation-right calendly-layout">
                 
                  <div className="calendar-column">
                    <CalendarSection
                      onDateSelect={handleDateSelect}
                      onTimeZoneChange={handleTimeZoneChange}
                  />
                    {error && (
                    <p className="error-text" style={{ marginTop: 10 }}>
                      {error}
                    </p>
                  )}
                </div>

                

                {/* Slots sirf tab dikhen jab date + timezone dono ho */}
                {selectedDate && timeZone && (
                  <div className="slot-column">
                    <TimeSlotSection
                      date={selectedDate}
                      timeZone={timeZone}
                    />
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConsultationPage;
