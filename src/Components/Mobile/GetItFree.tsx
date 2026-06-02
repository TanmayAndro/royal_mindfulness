// src/Components/mobile/GetItFree.tsx

import React from "react";

import { Box, Typography, Paper, IconButton } from "@mui/material";
import workbg from "../../Assests/images/mobile/Group103.png";
import checklist from "../../Assests/images/checklist_bg.jpg";

import { Icon } from "@iconify/react";

const freeItems = [
  {
    title: "Download Mental Fitness Checklist",
    description: "A checklist to evaluate your mental fitness.",
  },

  {
    title: "Book a Free Consultation",
    description: "Answer a few questions online and get expert guidance.",
  },

  {
    title: "Download Free Royal Mindfulness Journal",
    description: "A mindful journal to help you heal and grow.",
  },

  {
    title: "Take Mental Wellness Quiz",
    description: "If your first therapist isn’t a fit",
  },

  {
    title: "Take a Free Relaxation Session",
    description: "If your first therapist isn’t a fit",
  },
];

const GetItFree = () => {
  return (
   <Box
  sx={{
    width: "100%",

    px: 2.5,
    py: 6,

    boxSizing: "border-box",

    position: "relative",

    overflow: "hidden",
  }}
>
  {/* BG IMAGE */}
  <Box
    sx={{
      position: "absolute",

      inset: 0,

      backgroundImage: `url(${checklist})`,

      backgroundSize: "105% 103%",

      backgroundPosition: "center",

      backgroundRepeat: "no-repeat",

      opacity: 0.15,

      zIndex: 1,
    }}
  />

  {/* CONTENT */}
  <Box
    sx={{
      position: "relative",

      zIndex: 2,
    }}
  >
      {/* TITLE */}
      <Typography
        sx={{
          textAlign: "center",

          fontSize: {
            xs: "34px",
            sm: "44px",
          },

          fontWeight: 400,

          color: "#555",

          mb: 5,
        }}
      >
        Get it for{" "}
        <Box
          component="span"
          sx={{
            color: "#1470AF",
            fontWeight: 700,
          }}
        >
          Free!
        </Box>
      </Typography>

      {/* CARDS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {freeItems.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              width: "100%",

              minHeight: "105px",

              px: 2.5,
              py: 2,

              borderRadius: "26px",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              background: "rgba(255,255,255,0.55)",

              backdropFilter: "blur(10px)",

              border: "1px solid rgba(20,112,175,0.15)",

              boxShadow: "0px 6px 14px rgba(0,0,0,0.10)",

              boxSizing: "border-box",
            }}
          >
            {/* LEFT CONTENT */}
            <Box
              sx={{
                flex: 1,
                pr: 2,
              }}
            >
              {/* TITLE */}
              <Typography
                sx={{
                  color: "#1470AF",

                  fontSize: {
                    xs: "17px",
                    sm: "20px",
                  },

                  fontWeight: 700,

                  lineHeight: 1.15,

                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: "#555",

                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                  },

                  lineHeight: 1.25,

                  fontWeight: 400,
                }}
              >
                {item.description}
              </Typography>
            </Box>

            {/* RIGHT ICON */}

            <IconButton
              sx={{
                width: 42,
                height: 42,
              }}
            >
              <Icon
                icon="solar:map-arrow-right-bold"
                width="38"
                height="38"
                color="#1470AF"
              />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Box>
    </Box>

  );
};

export default GetItFree;
