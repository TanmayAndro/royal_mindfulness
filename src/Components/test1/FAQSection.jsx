import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { trackEvent } from "../../analitics/analytics";

const faqs = [
  {
    question: "What is a Mental Fitness Trainer?",
    answer:
      "A Mental Fitness Trainer is like a personal trainer for your mind, guiding you through structured practices to improve focus, emotional strength, and resilience for handling everyday challenges.",
  },
  {
    question: "How will a Mental Fitness Trainer help me?",
    answer:
      "Your trainer will provide daily training sessions to boost mental clarity, reduce stress, and build emotional resilience. Over time, this strengthens your ability to handle pressure, uncertainty, and personal or professional challenges.",
  },
  {
    question: "Why should I hire a Mental Fitness Trainer?",
    answer:
      "A Mental Fitness Trainer is for anyone who wants to reduce stress, improve productivity at work, build better relationships, and create healthier habits. It’s not just about mental wellness but about training your mind to excel in every aspect of life.",
  },
  {
    question: "Do I need to hire a Mental Fitness Trainer?",
    answer:
      "If you want to enhance your focus, reduce anxiety, strengthen emotional control, or develop a more disciplined lifestyle, then mental fitness training is for you. It helps improve relationships, work performance, and overall mental well-being.",
  },
  {
    question:
      "Who needs mental fitness training? Is it only for people going through mental issues?",
    answer:
      "Not at all! Mental fitness is for everyone—from high performers to those dealing with stress. It’s about training your mind to stay sharp, just like people go to the gym to stay physically fit.",
  },
  {
    question:
      "How is a Mental Fitness Trainer different from a conventional psychologist?",
    answer:
      "A psychologist helps you heal past wounds, while a Mental Fitness Trainer strengthens your mind to handle life proactively. It's about training for challenges ahead, not just recovering from past struggles.",
  },
  {
    question: "Does Royal Mindfulness provide therapy or counseling?",
    answer:
      "No, we don’t offer therapy or counseling. Instead, we focus on mental fitness training—daily guided exercises that help improve productivity, develop healthy habits, strengthen relationships, and reduce stress, anxiety, and depression.",
  },
  {
    question:
      "What kind of sessions do you offer? What are your training techniques?",
    answer:
      "We offer structured daily training sessions, including guided meditation, focus-building exercises, relaxation training, and emotional strength-building techniques to enhance your mental endurance.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Mental fitness training costs less than an average gym trainer in the USA—but instead of training your body, we help you train your mind for lifelong strength and resilience.",
  },
  {
    question: "How do I get started?",
    answer:
      "It’s simple! Start with a free consultation, and we’ll match you with the best trainer based on your needs. Your mental fitness journey begins with daily guided training sessions designed for maximum impact.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
  <Box
  sx={{
    width: "100%",
    backgroundColor: "#F9FAFB",
  }}
>
  <Container
    sx={{
      padding: { xs: "2rem 1.5rem", md: "6rem 4rem" },
      maxWidth: "lg",
    }}
  >
    <Grid
      container
      spacing={4}
      // 'column' direction se elements upar-neeche stack ho jayenge
      direction="column" 
      alignItems="center"
    >
      {/* SECTION A: Heading */}
      <Grid item xs={12} sx={{ width: '100%' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          className="title-main"
          sx={{
            // Desktop size 28px aur Mobile size 22px aapki requirement ke hisaab se
            fontSize: { xs: "22px", md: "28px" }, 
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI',
              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
              'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
            textAlign: "center", // Dono view par center align
            lineHeight: 1.2,
            mb: { xs: 4, md: 6 }, // Neeche gap dene ke liye
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Grid>

      {/* SECTION B: FAQ Accordions */}
      <Grid 
        item 
        xs={12} 
        sx={{ width: '100%' }}
        onClick={() => {
          trackEvent("Landing Page", "Click", `FAQ Section`);     
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)} 
            sx={{
              boxShadow: "none",
              border: "none",
              backgroundColor: "#F9FAFB",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                paddingRight: { xs: 0, sm: 2 },
                "& .MuiAccordionSummary-content": {
                  margin: { xs: "8px 0" },
                },
              }}
            >
              <Typography
                className="heading-main"
                sx={{
                  fontSize: { xs: "15px", sm: "16px" },
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingRight: { xs: 0, sm: 2 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  </Container>
</Box>
    </>
  );
};

export default FAQSection;