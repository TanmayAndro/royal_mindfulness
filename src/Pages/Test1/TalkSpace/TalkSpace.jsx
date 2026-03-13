import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConsultationPage.css";
import { OPTIONS, getFinalResponse } from "./TalkSpaceLogic";
import { trackEvent } from "../../../analitics/analytics";

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
    <div className="page-wrapper-talkspace">
      <div className="hero-bg-talk"></div>

      <div className="overlayconsul-talkspace">
        <div className="content-talkspace">
          <div className="form-box-talkspace">
            <h1 className="title-talkspace">
              Which of these sounds a little like you?
            </h1>
            <p className="subtitle-talkspace subheading-main">(You can select more than one. There's no right or wrong.)</p>

            <div className="options-list-talkspace">
              {error && <p className="error-text-talkspace">{error}</p>}
              {OPTIONS.map((opt, index) => (
                <label key={index} className="option-item-talkspace">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(index)}
                    onChange={() => toggleOption(index)}
                  />
                  <span className="checkbox">{opt}</span>
                </label>
              ))}
             <button
                type="button"
                className="submit-btn-talk"
                onClick={() => {
                  handleSubmit();
                  trackEvent("consultation_question", "submit", "consultation_question");
                }}
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
