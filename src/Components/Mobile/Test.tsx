// src/Components/mobile/Test.tsx

import React from "react";

import { Box, Typography } from "@mui/material";

import comimage from "../../Assests/images/mobile/Rectangle16.png";

const Test = () => {
  return (
    <Box
      sx={{
        width: "100%",

        px: 2,
        py: 4,
      }}
    >
      {/* MAIN CARD */}
      <Box
        sx={{
          width: "100%",

          overflow: "hidden",

          borderBottomLeftRadius: "60px",

          borderBottomRightRadius: "60px",

          background: "#1470AF",
        }}
      >
        {/* TOP SHAPE IMAGE */}
        <Box
          component="img"
          src={comimage}
          alt="shape"

          sx={{
            width: "100%",

            height: "auto",

            display: "block",
          }}
        />

        {/* CONTENT AREA */}
        <Box
          sx={{
            px: 4,

            pt: 2,

            pb: 10,

            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              color: "#fff",

              fontSize: {
                xs: "40px",
                sm: "54px",
              },

              fontWeight: 700,

              lineHeight: 1.1,

              mb: 3,
            }}
          >
            Royal Mindfulness
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              color: "#fff",

              fontSize: {
                xs: "20px",
                sm: "26px",
              },

              lineHeight: 1.8,

              fontWeight: 400,
            }}
          >
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
            Train your mind with modern
            mindfulness practices.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Test;