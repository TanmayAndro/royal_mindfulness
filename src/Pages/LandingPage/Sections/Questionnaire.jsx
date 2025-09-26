
// import React, { useState } from "react";
// import { Box, Grid, Checkbox, Typography } from "@mui/material";

// const questionsAndAnswers = [
//   {
//     question: "I often feel stressed due to my work or relationships.",
//     answer:
//       "Stress is tough, but your mind can be trained to handle it better.",
//   },
//   {
//     question: "I feel anxious about my future, work, health, or relationships.",
//     answer: "Anxiety drains energy. Let’s build a calmer, more focused mind.",
//   },
//   {
//     question: "I struggle to stay calm in high-pressure/intense situations.",
//     answer: "Stay sharp under pressure. Your mind can learn resilience.",
//   },
//   {
//     question:
//       "I know I can do better at work and in personal life, but I need better mental discipline.",
//     answer: "Success starts with discipline. Let’s train your focus.",
//   },
//   {
//     question:
//       "I want to improve my emotional intelligence and handle situations better.",
//     answer: "Mastering emotions means mastering life. Let’s build that skill.",
//   },
//   {
//     question:
//       "I want to train my mind just like athletes train their bodies—for peak performance.",
//     answer: "Peak performance starts in the mind. Let’s train it.",
//   },
//   {
//     question:
//       "I know that mindset is everything, but I don’t know how to train it effectively.",
//     answer: "Mindset is key. We’ll show you how to sharpen it.",
//   },
//   {
//     question:
//       "I feel like my mind is my biggest asset—but sometimes it also holds me back.",
//     answer: "Your mind is powerful—let’s make sure it works for you.",
//   },
// ];

// export default function MentalTrainingSelector() {
//   const [selectedIndexes, setSelectedIndexes] = useState([]);
//   const [lastSelectedIndex, setLastSelectedIndex] = useState(null);

//   const handleSelect = (index) => {
//     if (selectedIndexes.includes(index)) {
//       setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
//     } else {
//       setSelectedIndexes([...selectedIndexes, index]);
//       setLastSelectedIndex(index);
//     }
//   };

//   return (
//     <>
//       <Box bgcolor="#EAEAEE" p={3} width="100%">
//         <Typography
//           variant="h4"
//           sx={{
//             color: "#1470AF",
//             fontWeight: 700,
//             mb: 3,
//             ml: { xs: 1, sm: 4 },
//             fontFamily: "Lato",
//             textTransform: "uppercase",
//             letterSpacing: "1px",
//           }}
//         >
//           Your Insights
//         </Typography>

//         <Grid container spacing={2} px={{ xs: 1, sm: 4 }}>
//   {/* Left - Questions */}
//   <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "50%" } }}>
//     {questionsAndAnswers.map((item, index) => (
//       <Box
//         key={index}
//         display="flex"
//         alignItems="center"
//         mb={1.5}
//         maxWidth="100%"
//       >
//         <Checkbox
//           checked={selectedIndexes.includes(index)}
//           onChange={() => handleSelect(index)}
//         />
//         <Typography
//           variant="body2"
//           sx={{
//             fontSize: "14.5px",
//             fontWeight: 600,
//             color: "#333",
//             lineHeight: 1.4,
//           }}
//         >
//           {item.question}
//         </Typography>
//       </Box>
//     ))}
//   </Grid>

//   {/* Right - Answer */}
//   <Grid
//     item
//     xs={12}
//     md={6}
//     sx={{
//       width: { xs: "100%", md: "50%" },
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-start",
//       textAlign: "left",
//     }}
//   >
//     <Box
//       key={lastSelectedIndex}
//       sx={{
//         backgroundColor: "#fff",
//         borderLeft: "4px solid #1470AF",
//         padding: 3,
//         borderRadius: 2,
//         boxShadow: 2,
//         minWidth: "100%",
//         height: "100%",
//         fontSize: "70px",
//         fontWeight: 800,
//         color: "#444",
//         fontStyle: "italic",
//         "@keyframes blink": {
//           "0%": { opacity: 1, color: "blue" },
//           "50%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         animation: "blink 0.5s linear 1",
//       }}
//     >
//       {lastSelectedIndex !== null ? (
//         questionsAndAnswers[lastSelectedIndex].answer
//       ) : (
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{ height: "100px", fontSize: "20px" }}
//         >
//           Select a question to see your personalized insight here.
//         </Typography>
//       )}
//     </Box>
//   </Grid>
// </Grid>

//       </Box>
//       {/* <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
//             <svg
//               viewBox="0 0 1440 150"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="none"
//               style={{
//                 display: "block",
//                 width: "100vw",
//                 height: "100px",
//               }}
//             >
//               <defs>
//                 <linearGradient id="darkGreenGrad1" x1="0" y1="0" x2="1" y2="0">
//                   <stop offset="0%" stopColor="#145A32" stopOpacity="0.8" />
//                   <stop offset="100%" stopColor="#196F3D" stopOpacity="0.8" />
//                 </linearGradient>
//                 <linearGradient id="darkGreenGrad2" x1="0" y1="0" x2="1" y2="0">
//                   <stop offset="0%" stopColor="#117A65" stopOpacity="0.9" />
//                   <stop offset="100%" stopColor="#0E6251" stopOpacity="0.9" />
//                 </linearGradient>
//               </defs>
          
             
//               <path
//                 fill="url(#darkGreenGrad2)"
//                 d="M0,50 C400,90 1040,0 1440,40 L1440,150 L0,150 Z"
//               />
          
            
//               <path
//                 fill="#5B9DE8"
//                 d="M0,30 C360,60 1080,20 1440,50 L1440,150 L0,150 Z"
//               />
//             </svg>
//           </Box>   */}
//     </>
//   );
// }





// this is for next questions and as no buttons 
import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const questionsAndAnswers = [
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

export default function StepQuestionnaireSplit() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastAnswer, setLastAnswer] = useState("");

  const handleYes = () => {
    // Save the answer of the current question
    setLastAnswer(questionsAndAnswers[currentIndex].answer);

    // Move to next question
    setCurrentIndex((prev) =>
      prev + 1 < questionsAndAnswers.length ? prev + 1 : prev + 1
    );
  };

  const handleNo = () => {
    // Don't save answer, just move to next question
    setCurrentIndex((prev) =>
      prev + 1 < questionsAndAnswers.length ? prev + 1 : prev + 1
    );
  };

  if (currentIndex >= questionsAndAnswers.length) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h5" fontWeight={600}>
          You have completed all questions!
        </Typography>
        {lastAnswer && (
          <Typography variant="body1" mt={2} color="text.secondary">
            Last Answer Shown: {lastAnswer}
          </Typography>
        )}
      </Box>
    );
  }

  const currentQA = questionsAndAnswers[currentIndex];

  return (
    <Box bgcolor="#EAEAEE" p={4} borderRadius={3} m={2}>
      <Grid container spacing={3}>
        {/* Left: Question + buttons */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography
            variant="h6"
            mb={3}
            fontSize="20px"
            fontWeight={600}
            color="#1470AF"
          >
            {currentQA.question}
          </Typography>

          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary" onClick={handleYes}>
              Yes
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleNo}>
              No
            </Button>
          </Box>
        </Grid>

        {/* Right: Answer */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              borderLeft: "4px solid #1470AF",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
              minWidth: "100%",
              minHeight: "120px",
              fontSize: "18px",
              fontWeight: 500,
              color: "#444",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {lastAnswer ? (
              lastAnswer
            ) : (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "16px" }}
              >
                Answer will appear here when you click "Yes".
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
