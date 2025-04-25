// import { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const questions = [
//   {
//     category: "Mental Stress & Overwhelm",
//     id: 1,
//     text: "I often feel stressed due to my work or relationships.",
//     answer:
//       "Stress is tough, but your mind can be trained to handle it better.",
//   },
//   {
//     category: "Mental Stress & Overwhelm",
//     id: 2,
//     text: "I feel anxious about my future, work, health, or relationships.",
//     answer: "Anxiety drains energy. Let’s build a calmer, more focused mind.",
//   },
//   {
//     category: "Mental Stress & Overwhelm",
//     id: 3,
//     text: "I struggle to stay calm in high-pressure/intense situations.",
//     answer: "Stay sharp under pressure. Your mind can learn resilience.",
//   },
//   {
//     category: "High Achievers Seeking Growth",
//     id: 4,
//     text: "I know I can do better at work and in personal life, but I need better mental discipline.",
//     answer: "Success starts with discipline. Let’s train your focus.",
//   },
//   {
//     category: "High Achievers Seeking Growth",
//     id: 5,
//     text: "I want to improve my emotional intelligence and handle situations better.",
//     answer: "Mastering emotions means mastering life. Let’s build that skill.",
//   },
//   {
//     category: "High Achievers Seeking Growth",
//     id: 6,
//     text: "I want to train my mind just like athletes train their bodies—for peak performance.",
//     answer: "Peak performance starts in the mind. Let’s train it.",
//   },
//   {
//     category: "High Achievers Seeking Growth",
//     id: 7,
//     text: "I know that mindset is everything, but I don’t know how to train it effectively.",
//     answer: "Mindset is key. We’ll show you how to sharpen it.",
//   },
//   {
//     category: "High Achievers Seeking Growth",
//     id: 8,
//     text: "I feel like my mind is my biggest asset—but sometimes it also holds me back.",
//     answer: "Your mind is powerful—let’s make sure it works for you.",
//   },
// ];

// const Questionnaire = () => {
//   const [selectedQuestions, setSelectedQuestions] = useState([]);

//   const handleToggle = (id) => {
//     setSelectedQuestions((prev) =>
//       prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
//     );
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} md={6}>
//         {["Mental Stress & Overwhelm", "High Achievers Seeking Growth"].map(
//           (category, index) => (
//             <Accordion key={index}>
//               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography variant="h6">{category}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 {questions
//                   .filter((q) => q.category === category)
//                   .map((q) => (
//                     <FormControlLabel
//                       key={q.id}
//                       control={
//                         <Checkbox
//                           checked={selectedQuestions.includes(q.id)}
//                           onChange={() => handleToggle(q.id)}
//                         />
//                       }
//                       label={q.text}
//                     />
//                   ))}
//               </AccordionDetails>
//             </Accordion>
//           )
//         )}
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h6">Your Insights</Typography>
//         {selectedQuestions.length > 0 ? (
//           selectedQuestions.map((id) => {
//             const question = questions.find((q) => q.id === id);
//             return (
//               <Typography key={id} variant="body1">
//                 ✔️ {question.answer}
//               </Typography>
//             );
//           })
//         ) : (
//           <Typography variant="body2" color="textSecondary">
//             Select a question to see insights.
//           </Typography>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default Questionnaire;

import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";

const questionsAndAnswers = [
  {
    question: "I often feel stressed due to my work or relationships.",
    answer:
      "Stress is tough, but your mind can be trained to handle it better.",
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

export default function MentalTrainingSelector() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <Box bgcolor={"#EAEAEE"}>
      <Grid container spacing={2}>
        {/* Left side - Questions */}
        <Grid
          item
          xs={12}
          md={7.2}
          sx={{ backgroundColor: "red"}}
        >
          <Typography
            sx={{ fontSize: "50px", color: "#1470AF", fontWeight: "600" }}
          >
            Your Insights
          </Typography>
          {questionsAndAnswers.map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedIndex === index}
                  onChange={() => handleSelect(index)}
                />
              }
              label={item.question}
              sx={{ display: "block", marginBottom: 1 }}
            />
          ))}
        </Grid>

        {/* Right side - Answer */}
        <Grid item xs={12} md={4.8}>
          <Box
            sx={{
              backgroundColor: "#8EB6DC",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "50%",
                height: "50%",
                padding: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#fff0f0",
              }}
            >
              <Typography variant="h6">
                {selectedIndex !== null
                  ? questionsAndAnswers[selectedIndex].answer
                  : "Select a question to see the answer."}
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
