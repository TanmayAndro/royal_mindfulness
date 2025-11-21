// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   FormControl,
//   FormLabel,
//   Button,
//   Box,
//   Paper,
//   Divider,
// } from "@mui/material";
// import { ToggleButtonGroup, ToggleButton } from "@mui/material";

// const questions = [
//   {
//     id: 1,
//     question: "When sudden changes disrupt your schedule, you stay calm and easily adjust.",
//     virtue: "Stress Resilience",
//   },
//   {
//     id: 2,
//     question: "You calmly handle criticism without feeling upset or defensive.",
//     virtue: "Emotional Resilience",
//   },
//   {
//     id: 3,
//     question: "When working, you effortlessly ignore social media notifications and distractions.",
//     virtue: "Focus & Concentration",
//   },
//   {
//     id: 4,
//     question: "You maintain healthy habits consistently, even when not motivated.",
//     virtue: "Discipline & Persistence",
//   },
//   {
//     id: 5,
//     question: "You clearly understand your emotions when upset or angry.",
//     virtue: "Emotional Intelligence",
//   },
//   {
//     id: 6,
//     question: "After a stressful day, you quickly unwind and achieve restful sleep.",
//     virtue: "Mental Recovery & Relaxation",
//   },
//   {
//     id: 7,
//     question: "You're able to resist impulses (like unhealthy eating, binge-watching) for long-term benefits.",
//     virtue: "Self-Control",
//   },
//   {
//     id: 8,
//     question: "You confidently make decisions even in uncertain situations.",
//     virtue: "Decision-Making Confidence",
//   },
//   {
//     id: 9,
//     question: "You rarely dwell on mistakes or failures, quickly moving forward instead.",
//     virtue: "Self-Compassion & Growth Mindset",
//   },
//   {
//     id: 10,
//     question: "When feeling anxious or overwhelmed, you have effective coping strategies to manage it.",
//     virtue: "Anxiety Management",
//   },
//   {
//     id: 11,
//     question: "In conflict situations, you easily empathize and understand the other person's viewpoint.",
//     virtue: "Empathy & Listening",
//   },
//   {
//     id: 12,
//     question: "You regularly take breaks during work to restore your mental clarity.",
//     virtue: "Energy Management",
//   },
//   {
//     id: 13,
//     question: "You easily detach from negative thoughts and don’t ruminate excessively.",
//     virtue: "Thought Management",
//   },
//   {
//     id: 14,
//     question: "Even when things go wrong, you remain optimistic about achieving your long-term goals.",
//     virtue: "Optimism & Positivity",
//   },
//   {
//     id: 15,
//     question: "You’re mindful and fully present during your day-to-day activities, rarely distracted by past or future worries.",
//     virtue: "Mindfulness & Presence",
//   },
// ];

// const options = [
//   { label: "1 - Very Untrue", value: 1 },
//   { label: "2 - Untrue", value: 2 },
//   { label: "3 - Neutral", value: 3 },
//   { label: "4 - True", value: 4 },
//   { label: "5 - Very True", value: 5 },
// ];

// const getFeedback = (score) => {
//   if (score <= 35) return { label: "⚠️ Needs Significant Mental Training", color: "error.main" };
//   if (score <= 55) return { label: "✅ Moderate Mental Fitness", color: "warning.main" };
//   return { label: "🌟 Excellent Mental Fitness", color: "success.main" };
// };

// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);

//   const handleOptionChange = (questionId, value) => {
//     setAnswers((prev) => ({ ...prev, [questionId]: Number(value) }));
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//   };

//   const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
//   const feedback = getFeedback(totalScore);

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom mt={4} sx={{color:"#0D47A1"}}>
//         Mental Wellness Quiz
//       </Typography>

//       {questions.map((q) => (
//         <Paper key={q.id} elevation={3} sx={{ my: 3, p: 3 }}>
//           <FormControl component="fieldset" fullWidth>
//             <FormLabel component="legend" sx={{ fontWeight: "bold", mb: 1 }}>
//               {q.id}. {q.question}
//             </FormLabel>
//             <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//               Mental Virtue Measured: <strong>{q.virtue}</strong>
//             </Typography>

//             <ToggleButtonGroup
//               exclusive
//               value={answers[q.id] || null}
//               onChange={(e, value) => value && handleOptionChange(q.id, value)}
//               fullWidth
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 flexWrap: "wrap",
//                 "& .MuiToggleButton-root": {
//                   flex: 1,
//                   m: 0.5,
//                   textTransform: "none",
//                   backgroundColor: "#f0f0f0",
//                   border: "1px solid #ccc",
//                   color: "black",
//                   "&.Mui-selected": {
//                     backgroundColor: "#1565c0", // darker blue
//                     color: "white",
//                     fontWeight: "bold",
//                     borderColor: "#0d47a1",
//                     "&:hover": {
//                       backgroundColor: "#0d47a1", // even darker on hover
//                     },
//                   },
//                 },
//               }}
//             >
//               {options.map((option) => (
//                 <ToggleButton key={option.value} value={option.value}>
//                   {option.label}
//                 </ToggleButton>
//               ))}
//             </ToggleButtonGroup>

//           </FormControl>
//         </Paper>
//       ))}

//       <Box textAlign="center" mt={4} mb={6}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={handleSubmit}
//           disabled={Object.keys(answers).length !== questions.length}
//         >
//           Submit Quiz
//         </Button>
//       </Box>

//       {showResult && (
//         <Box textAlign="center" mt={4} mb={8}>
//           <Divider />
//           <Typography variant="h5" mt={4}>
//             🧠 Total Mental Fitness Score: {totalScore} / 75
//           </Typography>
//           <Typography variant="h6" mt={2} sx={{ color: feedback.color }}>
//             {feedback.label}
//           </Typography>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default QuizPage;

import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  FormLabel,
  Button,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';


const questions = [
  {
    id: 1,
    question: "When sudden changes disrupt your schedule, you stay calm and easily adjust.",
    virtue: "Stress Resilience",
  },
  {
    id: 2,
    question: "You calmly handle criticism without feeling upset or defensive.",
    virtue: "Emotional Resilience",
  },
  {
    id: 3,
    question: "When working, you effortlessly ignore social media notifications and distractions.",
    virtue: "Focus & Concentration",
  },
  {
    id: 4,
    question: "You maintain healthy habits consistently, even when not motivated.",
    virtue: "Discipline & Persistence",
  },
  {
    id: 5,
    question: "You clearly understand your emotions when upset or angry.",
    virtue: "Emotional Intelligence",
  },
  {
    id: 6,
    question: "After a stressful day, you quickly unwind and achieve restful sleep.",
    virtue: "Mental Recovery & Relaxation",
  },
  {
    id: 7,
    question: "You're able to resist impulses (like unhealthy eating, binge-watching) for long-term benefits.",
    virtue: "Self-Control",
  },
  {
    id: 8,
    question: "You confidently make decisions even in uncertain situations.",
    virtue: "Decision-Making Confidence",
  },
  {
    id: 9,
    question: "You rarely dwell on mistakes or failures, quickly moving forward instead.",
    virtue: "Self-Compassion & Growth Mindset",
  },
  {
    id: 10,
    question: "When feeling anxious or overwhelmed, you have effective coping strategies to manage it.",
    virtue: "Anxiety Management",
  },
  {
    id: 11,
    question: "In conflict situations, you easily empathize and understand the other person's viewpoint.",
    virtue: "Empathy & Listening",
  },
  {
    id: 12,
    question: "You regularly take breaks during work to restore your mental clarity.",
    virtue: "Energy Management",
  },
  {
    id: 13,
    question: "You easily detach from negative thoughts and don’t ruminate excessively.",
    virtue: "Thought Management",
  },
  {
    id: 14,
    question: "Even when things go wrong, you remain optimistic about achieving your long-term goals.",
    virtue: "Optimism & Positivity",
  },
  {
    id: 15,
    question: "You’re mindful and fully present during your day-to-day activities, rarely distracted by past or future worries.",
    virtue: "Mindfulness & Presence",
  },
];

const options = [
  { label: "1 - Very Untrue", value: 1 },
  { label: "2 - Untrue", value: 2 },
  { label: "3 - Neutral", value: 3 },
  { label: "4 - True", value: 4 },
  { label: "5 - Very True", value: 5 },
];

const getFeedback = (score) => {
  if (score <= 35)
    return { label: "⚠️ Needs Significant Mental Training", color: "error.main" };
  if (score <= 55)
    return { label: "✅ Moderate Mental Fitness", color: "warning.main" };
  return { label: "🌟 Excellent Mental Fitness", color: "success.main" };
};

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: Number(value) }));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
  const feedback = getFeedback(totalScore);

  return (
    <Box
      sx={{
        minHeight: "100vh", // allow it to grow
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // changed from "center" to allow top alignment
        py: 4,
        backgroundColor: "#f0f4f8", // optional: add light background
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          p: 4,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#0D47A1",
            fontWeight: "700",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            mb: 5,
          }}
        >
          <SelfImprovementIcon fontSize="large" mt={6} />  Mental Wellness Quiz
        </Typography>

        {questions.map((q) => (
          <Paper
            key={q.id}
            elevation={6}
            sx={{
              my: 3,
              p: 3,
              borderRadius: 2,
              background: "linear-gradient(135deg, #f9f9f9 0%, #e3f2fd 100%)",
              boxShadow: "0 4px 20px rgba(33, 150, 243, 0.15)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              }
            }}
          >
            <FormControl component="fieldset" fullWidth>
              <FormLabel
                component="legend"
                sx={{ fontWeight: "bold", mb: 1, color: "#1565c0" }}
              >
                {q.id}. {q.question}
              </FormLabel>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, fontStyle: "italic" }}
              >
                Mental Virtue Measured: <strong>{q.virtue}</strong>
              </Typography>

              <ToggleButtonGroup
                exclusive
                value={answers[q.id] || null}
                onChange={(e, value) => value && handleOptionChange(q.id, value)}
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  "& .MuiToggleButton-root": {
                    flex: 1,
                    m: 0.5,
                    textTransform: "none",
                    backgroundColor: "#e3f2fd",
                    border: "1.5px solid #64b5f6",
                    color: "#0d47a1",
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: "0 1px 4px rgba(100, 181, 246, 0.3)",
                    transition: "all 0.3s ease",
                    "&.Mui-selected": {
                      backgroundColor: "#1565c0",
                      color: "white",
                      fontWeight: "bold",
                      borderColor: "#0d47a1",
                      boxShadow: "0 4px 12px rgba(21, 101, 192, 0.6)",
                      "&:hover": {
                        backgroundColor: "#0d47a1",
                      },
                    },
                    "&:hover": {
                      backgroundColor: "#bbdefb",
                    },
                  },
                }}
              >
                {options.map((option) => (
                  <ToggleButton key={option.value} value={option.value}>
                    {option.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </FormControl>
          </Paper>
        ))}

        <Box textAlign="center" mt={4} mb={6}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              boxShadow: "0 6px 20px rgba(21, 101, 192, 0.5)",
              "&:hover": {
                boxShadow: "0 10px 30px rgba(21, 101, 192, 0.8)",
              },
            }}
          >
            Submit Quiz
          </Button>
        </Box>

        {showResult && (
          <Box
            textAlign="center"
            mt={4}
            mb={8}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#e3f2fd",
              boxShadow: "0 6px 16px rgba(21, 101, 192, 0.3)",
            }}
          >
            <Divider />
            <Typography variant="h5" mt={4} sx={{ fontWeight: "700" }}>
              🧠 Total Mental Fitness Score: {totalScore} / 75
            </Typography>
            <Typography variant="h6" mt={2} sx={{ color: feedback.color }}>
              {feedback.label}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default QuizPage;

