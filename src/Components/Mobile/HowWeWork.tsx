// src/Components/mobile/HowWeWork.tsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

import workbg from "../../Assests/images/mobile/Group103.webp";
import { trackEvent } from "../../analitics/analytics";
import { useNavigate } from "react-router-dom";

const workSteps = [
  {
    title: "Get a Free Consultation",

    description:
      "Start with a free 15-minute consultation where we understand your mental fitness goals.",
  },

  {
    title: "We match you with a Trainer",

    description:
      "Based on your consultation, our system assigns you a certified mental fitness trainer aligned with your goals.",
  },

  {
    title: "Start Daily Training",

    description:
      "Get live, guided training sessions like Yoga Nidra and breathwork tailored to build mental resilience.",
  },
];

const HowWeWork = () => {
  const navigate = useNavigate();

  const handleBookFreeConsultation = () => {
    trackEvent("Book Free Consultation Clicked");
    navigate("/consultation_question");
  };
  return (
    <Box
      sx={{
        // width: "100%",
         width: {
          xs: "100%",
          sm: "100%",
          md: "50%"
         },

        position: "relative",

        zIndex: 1,

        // mt: 6,

        // px: 3,
        mx: "auto",

        px:{
          xs: 0,
          sm: 0,
          md: 0
        },
        pt: 6,
        pb: 10,
        // mt: 10,

        textAlign: "center",

        overflow: "hidden",

        /* ADD ONLY THIS */
        // backgroundColor: "#0B67B2",

        backgroundImage: `url(${workbg})`,

        backgroundSize: "103% 100%",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          position: "relative",

          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            color: "#1470AF",

            fontSize: {
              xs: "34px",
              sm: "42px",
            },

            fontWeight: 700,

            lineHeight: 1.1,

            mb: 4,
          }}
        >
          How we work?
        </Typography>

        {/* STEPS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {workSteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* ICON */}
              <Box
                sx={{
                  width: { xs: 34, md: 54 },
                  height: { xs: 34, md: 54 },
                  borderRadius: "50%",
                  backgroundColor: "#1470AF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.12)",
                }}
              >
                <SouthIcon
                  sx={{
                    color: "#fff",

                    fontSize: {
                      xs: 24,
                      md: 34,
                    },

                    stroke: "#fff",
                    strokeWidth: 1.5,
                  }}
                />
              </Box>

              {/* STEP TITLE */}
              <Typography
                sx={{
                  color: "#1470AF",

                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                  },

                  fontWeight: 700,

                  lineHeight: 1.2,

                  mb: 1,
                }}
              >
                {step.title}
              </Typography>

              {/* STEP DESCRIPTION */}
              <Typography
                sx={{
                  maxWidth: "330px",

                  color: "#111",

                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                  },

                  lineHeight: 1.3,

                  fontWeight: 400,

                  mb: 3,
                }}
              >
                {step.description}
              </Typography>
            </React.Fragment>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* CTA BUTTON */}
          <Button
            variant="contained"
            sx={{
              mt: 2,

              height: {
                xs: "40px",
                md: "75px",
              },
              px: 2,

              borderRadius: {
                xs: "999px",
                md: "10px",
              },
              background: "#1470AF",
              textTransform: "none",
              fontSize: {
                xs: "13px",
                sm: "13px",
                md: "25px",
              },
              fontWeight: 700,
              "&:hover": {
                background: "#1470AF",
              },
            }}
            onClick={handleBookFreeConsultation}
          >
            Book A Free Consultation
          </Button>
          <Typography
            sx={{
              mt: "2px",
              // fontSize: "11px",
              fontSize: {
                xs: "11px",
                md: "18px",
              },
              color: "#878788",
              textAlign: "center",
              lineHeight: 2,
            }}
          >
            (No Credit card required)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// export default HowWeWork;
export default React.memo(HowWeWork);