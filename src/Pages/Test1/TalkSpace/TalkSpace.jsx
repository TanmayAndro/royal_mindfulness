import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConsultationPage.css";
import { OPTIONS, getFinalResponse } from "./TalkSpaceLogic";

function TalkSpace() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleOption = (index) => {
    setSelectedOptions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleSubmit = () => {
    // validation
    if (selectedOptions.length === 0) {
      setError("Please select at least one option.");
      return; // STOP here
    }

    setError("");

    const response = getFinalResponse(selectedOptions);

    //  navigate ONLY when valid
    navigate("/consulation", {
      state: { response },
    });
  };

  return (
    <div className="talkspace-page">
    <div className="page-wrapper">
      <div className="hero-bg"></div>

      <div className="overlayconsul">
        <div className="content">
          <div className="form-box">
            <h1 className="title">
              Which of these feel like your inner weather these days?
            </h1>

            

            <div className="options-list">
              {error && <p className="error-text">{error}</p>}
              {OPTIONS.map((opt, index) => (
                <label key={index} className="option-item">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedOptions.includes(index)}
                    onChange={() => toggleOption(index)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
              <button
              type="button"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TalkSpace;
