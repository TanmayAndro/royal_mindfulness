import { Box, Typography } from "@mui/material";
import React from "react";
import bgImg from "../../../Assests/HowitWorksVector.png"; // adjust path if needed

export const HowItWorks = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "lightBlue",
        position: "relative",
        width: "100%",
        height: "100%",
        // minHeight: "100vh",
        // px: { xs: 4, md: 8 },
        // py: { xs: 4, md: 10 },
        padding: { xs: "3rem", sm: "4rem" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          zIndex: 1,
          maxWidth: { xs: "80%", md: "600px" },
          marginLeft: { xs: "0px", md: "30px" },
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={8}
          sx={{ fontSize: { xs: "50px", md: "80px",  } }}
        >
          How it works
        </Typography>

        <Box mb={8}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#DFEEF9",
              display: "inline-block",
              px: 1,
              fontSize: "25px",
              color: "#40ABF8"
            }}
          >
            Get a Free Consultation
          </Typography>
          <Typography
            variant="body2"
            mt={1}
            sx={{ fontSize: "16px", color: "#9A9A9A", marginTop:'1rem' }}
          >
            Start with a free 15-minute consultation where we understand your
            mental fitness goals, lifestyle, and needs — no obligations, just
            clarity.
          </Typography>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#FFECF0",
              display: "inline-block",
              px: 1,
              fontSize: "25px",
              color:"#FF426D"
            }}
          >
            We Match You with a Mental Fitness Trainer
          </Typography>
          <Typography
            variant="body2"
            mt={1}
            sx={{ fontSize: "16px", color: "#9A9A9A", marginTop:'1rem' }}
          >
            Based on your consultation, our system assigns you a certified
            mental fitness trainer — not chosen randomly, but carefully aligned
            with your personal goals.
          </Typography>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#F1E9FA",
              display: "inline-block",
              px: 1,
              fontSize: "25px",
              color:"#9A54DF"
            }}
          >
            Start Daily Training Sessions
          </Typography>
          <Typography
            variant="body2"
            mt={1}
            sx={{ fontSize: "16px", color: "#9A9A9A", marginTop:'1rem'   }}
          >
            You get live, guided training sessions (e.g., Antar Mouna, Yoga
            Nidra, breathwork, journaling) tailored to help you build a
            stronger, more resilient mind.
          </Typography>
        </Box>
      </Box>

      {/* Right Decorative Image */}
      <Box
        component="img"
        src={bgImg}
        alt="Decorative"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          right: "20%",
          top: "50%",
          transform: "translateY(-50%)",
          height: { xs: "60%", md: "60%" },
          //   opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </Box>
  );
};
