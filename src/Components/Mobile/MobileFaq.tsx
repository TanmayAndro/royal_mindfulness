// src/Components/mobile/MobileFaq.tsx

import React, { useState } from "react";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import herobg from "../../Assests/images/checklist_bg.jpg";
// import herobg from "../../Assests";
// import TriangleDivider from "./TriangleDivider";

const faqData = [
  {
    question: "What is a Mental Fitness Trainer?",
    answer:
      "A Mental Fitness Trainer helps improve emotional strength, confidence, mindset, and overall mental wellness.",
  },
  {
    question: "How will a Mental Fitness Trainer help me?",
    answer:
      "They help you manage stress, anxiety, overthinking, emotional balance, and personal growth.",
  },
  {
    question: "Why should I hire a Mental Fitness Trainer?",
    answer:
      "A trainer gives you personalized guidance and structured techniques to improve mental clarity and performance.",
  },
  {
    question: "Do I need to hire a Mental Fitness Trainer?",
    answer:
      "If you struggle with stress, focus, emotions, or self-confidence, mental fitness training can help.",
  },
  {
    question:
      "Who is mental fitness training for? Is it only for mental health struggles?",
    answer:
      "No. Mental fitness is for everyone including students, professionals, entrepreneurs, and athletes.",
  },
  {
    question:
      "How is a Mental Fitness Trainer different from a psychologist?",
    answer:
      "Mental fitness focuses on growth, performance, and emotional strength, while psychologists treat clinical conditions.",
  },
  {
    question:
      "Does Royal Mindfulness provide therapy or counseling?",
    answer:
      "Royal Mindfulness focuses on mental fitness coaching, guided support, and self-growth practices.",
  },
  {
    question:
      "What kind of sessions do you offer? What are your training techniques?",
    answer:
      "We provide live sessions, guided exercises, mindfulness techniques, and 1-on-1 coaching.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the selected plan and coaching structure.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can begin by booking a free consultation session.",
  },
];

const MobileFaq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) =>
    (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
<>
    
    <Box
      sx={{
        width: "100%",
        background: "#0B67B2",
          position: "relative",
        overflow: "hidden",
        borderRadius: "22px",
        borderTopLeftRadius: "22px",
        borderTopRightRadius: "22px",
        px: 3,
        py: 6,
        boxSizing: "border-box",
        
         marginTop: {
          xs: "-80px",
          md: "-180px"
         },

      }}
    >


      
      {/* TITLE */}
      <Typography
        sx={{
          color: "#fff",

          textAlign: "center",

          fontSize: {
            xs: "20px",
            sm: "20px",
            md: "40px"
          },

          

          mt: {
            xs: "50px",
            md: "150px"
          },
          fontWeight: 700,

          mb: 4,
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ LIST */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            elevation={0}
            disableGutters
            sx={{
              background: "rgba(255,255,255,0.08)",

              border: "1px solid rgba(255,255,255,0.18)",

              borderRadius: "0px !important",

              color: "#fff",

              backdropFilter: "blur(10px)",

              "&:before": {
                display: "none",
              },
            }}
          >
            {/* QUESTION */}
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                  }}
                />
              }
              sx={{
                minHeight: "68px",

                px: 3,

                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                  },

                  fontWeight: 700,

                  lineHeight: 1.2,
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            {/* ANSWER */}
            <AccordionDetails
              sx={{
                px: 3,
                pb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",

                  lineHeight: 1.7,

                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
    </>
  );
};

export default MobileFaq;