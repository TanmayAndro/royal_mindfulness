import React from "react";
import "./Result.css"

const Result = ({ score }) => {
  let title = "";
  let description = "";
  let color = "";

  if (score >= 60) {
    title = "Strong Mental Fitness ";
    description =
      "Your mind shows good balance, clarity, and self-regulation. With the right training, you can further strengthen focus and inner stability.";
    color = "#16a34a";
  } else if (score >= 40) {
    title = "Developing Mental Fitness ";
    description =
      "Your mind has strengths, but some areas may need attention. Mental fitness training can help you build consistency, clarity, and emotional steadiness.";
    color = "#ca8a04";
  } else {
    title = "Mental Fitness Needs Support ";
    description =
      "Your mind may be carrying more load than it needs to. This doesn’t mean something is wrong — it simply means your mind hasn’t been trained yet.";
    color = "#2563eb";
  }

  return (
    <div className="result-page">
      <div className="result-card">
        <h2>Thank You </h2>

        <p className="result-score">
          Your Total Score: <strong>{score}</strong> / 75
        </p>

        <h3 style={{ color }}>{title}</h3>

        <p className="result-description">{description}</p>

        <p className="result-note">
          This assessment is not a diagnosis. It is a starting point for
          awareness and mental fitness training.
        </p>
      </div>
    </div>
  );
};

export default Result;
