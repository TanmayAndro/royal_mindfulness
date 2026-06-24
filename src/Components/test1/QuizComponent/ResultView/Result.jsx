import React from "react";
import "./Result.css";
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import {
  Typography,
  Box,
} from "@mui/material";
import CommonButtons from "../../CommonButton";
import { useNavigate } from "react-router-dom";
// src/Components/test1/CommonButton.jsx


const SCORE_CONFIG = [
  {
    min: 60,
    title: "You are doing Great.",
    stars: 3,
    description:
      "Your mind shows good balance, clarity, and self-regulation. With the right training, you can further strengthen focus and inner stability.",
    text: "Train your mind like elite performers do.",
    color: "#16a34a",
  },
  {
    min: 40,
    title: "You’re Doing Well, and You Can Do Better",
    stars: 2,
    description:
      "Your mind has strengths, but some areas may need attention. Mental fitness training can help you build consistency, clarity, and emotional steadiness.",
    text:
      "With the right training, you can build consistency and inner stability.",
    color: "#ca8a04",
  },
  {
    min: 0,
    title: "Let’s Build Your Mental Strength",
    stars: 1,
    description:
      "Your mind may be carrying more load than it needs to. This doesn’t mean something is wrong — it simply means your mind hasn’t been trained yet.",
    text:
      "With structured mental fitness training, you can regain clarity and control.",
    color: "#2563eb",
  },
];

const Result = ({ score }) => {
  const resultData =
    SCORE_CONFIG.find((config) => score >= config.min) || SCORE_CONFIG[2];

  const { title, description, text, color, stars } = resultData;
  const navigate = useNavigate();

  const handelConsulation = (clickedOn) => {
    if (clickedOn === "calendly") navigate("/consultation_question");
  };

  return (
    <div className="result-page">
      <div className="result-card">
        <h2>Thank You</h2>

        <p className="result-score">
          Your Total Score: <strong>{score}</strong> / 75
          
          {/* ⭐ Dynamic Rating */}
          <Stack spacing={1} alignItems="center" sx={{ my: 2 }}>
            <Rating
              value={stars}       
              max={3}             
              readOnly
              sx={{
                fontSize: 32,
                "& .MuiRating-iconEmpty": {
                  color: "#d1d5db",   
                },
              }}
            />
          </Stack>
        </p>


        <h3 style={{ color }}>{title}</h3>

        <p className="result-description">{description}</p>
        <p className="result-note">{text}</p>
        
       {/* Book free consulation button */}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "600px", 
            }}
          >
          {/* Book consultation */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",   // 👈 1440px+
                },

                textAlign: "center",
              }}
            >
              <CommonButtons
                label="Book a free consultation"
                height="50px"

                sx={{
                  backgroundColor: "#1470AF",
                  color: "white",
                  marginTop: { xs: "15px", sm: "25px" },
                }}

                variant="contained"
                onClick={() => handelConsulation("calendly")}
              />
              <Typography fontSize="12px" color="#555" mt="4px">
                (No Credit card required)
              </Typography>
            </Box>

          </Box>
        </Box>
        <Typography fontSize="8px" color="#555" mt="30px" fontWeight={100}>
          These remarks and scores are not an accurate measure of your mental health and should not be considered as diagnosis reports or for legal purposes. 
        </Typography>

      </div>
    </div>
  );
};

// export default Result;


export default React.memo(Result);