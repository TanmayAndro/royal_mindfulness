import React,{useState} from 'react'
import Result from "../ResultView/Result";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import "./QuizComponent.css"
import { useNavigate } from "react-router-dom";

const questions= [
    
    // Focus & Mental Energy
    {id: 1, text: "My mind feels clear when I start my day"},
    {id: 2, text: "I can stay focused on one task without drifting too much"},
    {id: 3, text: "I feel mentally fresh rather than drained most days"}, 

    // Emotional Balance     
    {id: 4, text: "I notice my emotions without getting carried away by them"},
    {id: 5, text: "Small things don’t disturb me as much as they used to"},
    {id: 6, text: "I recover emotionally fairly quickly after a stressful moment"},

    // Discipline & Consistency
    {id: 7, text: "I follow through on things I decide to do"},
    {id: 8, text: "I can stick to routines even when motivation is low"},
    {id: 9, text: "I feel in control of my daily habits"},

    //  Inner Stability & Awareness
    {id: 10, text: "I can pause and observe my thoughts instead of reacting immediately"},
    {id: 11, text: "I feel comfortable spending a few moments alone with my mind"},
    {id: 12, text: "I have a sense of inner steadiness even on busy days"},

    // Overall Mental Fitness
    {id: 13, text: "I feel mentally balanced in my day-to-day life"},
    {id: 14, text: "I understand my mental patterns reasonably well"},
    {id: 15, text: "I feel confident in my ability to train and improve my mind"},
]

const options = [
    { label: "Almost never", value: 1 },
  { label: "Rarely", value: 2 },
  { label: "Sometimes", value: 3 },
  { label: "Often", value: 4 },
  { label: "Almost always", value: 5 },
]

const QuizComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (value) => {
    const updatedAnswers = {
      ...answers,
      [currentIndex]: value,
    };

    setAnswers(updatedAnswers);

    // 👉 Auto navigation logic
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };



  const handleBack = () => {
    if (currentIndex === 0) return navigate(-1);
    setCurrentIndex((prev) => prev - 1);
  };

  if (showResult) {
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0
    );

    return <Result score={totalScore} />;
  }

  const progressPercentage =  ((currentIndex + 1) / questions.length) * 100;
   

  return (
    <div className="quiz-page">
      <div className="quiz-container">
       <div className="quiz-actions">
         <IconButton
            onClick={handleBack}
            sx={{
              color: "#040608ff",
              backgroundColor: "transparent",
              ml: "-11px",
              "&:hover": {
                backgroundColor: "rgba(7, 11, 13, 0.1)",
              },
            }}
          >
          <ArrowBackIcon sx={{ fontSize: 28 }} />
         </IconButton>

        </div>

        {/* Box section */}
        <Box sx= {{ mb: 3 }}>
          <Typography variant='body2' sx={{mb:1}}>
             {currentIndex + 1} / {questions.length}
          </Typography>

          <LinearProgress
          variant="determinate"
          value={progressPercentage}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#E0E0E0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1470AF",
            },
          }}
        />
        </Box>



       <p className="quiz-question">
          <span className="question-text">
            {questions[currentIndex].text}?
          </span>
        </p>

        <div className="quiz-options">
          {options.map((opt) => (
            <label key={opt.value} className="quiz-option">
              <input
                type="radio"
                name={`question-${currentIndex}`}
                checked={answers[currentIndex] === opt.value}
                onChange={() => handleSelect(opt.value)}
              />
              <span className="option-text">{opt.label}</span>
            </label>
          ))}
        </div>
        
      </div>

      
    </div>
  );
};


export default QuizComponent
