import React from "react";
import HeroImg from "../../../Assests/hero.webp";
import { Box, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative", // Make the Box a relative container
        width: "100%", // Make the image full width
        overflow: "hidden",
        height: "100%",
      }}
    >
      <img
        src={HeroImg}
        alt="Hero Image"
        style={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          position: "absolute", // Position the text absolutely within the Box
          top: "30%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Translate to center
          color: "white", // Set text color (adjust as needed)
          textAlign: "center", // Center text horizontally
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Instrument sans",
              fontWeight: 700,
              fontSize: { xs: "30px", md: "70px" },
              color: "white",
            }}
          >
            Antra Shanti
          </Typography>
          <Typography
            sx={{
              fontFamily: "Instrument sans",
              fontWeight: 700,
              fontSize: "20px",
              color: "#EAEAEE",
            }}
          >
            Translate to Inner Silence
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
