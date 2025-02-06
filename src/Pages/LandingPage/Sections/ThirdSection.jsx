import React from "react";
import videoImg from "../../../Assests/sectionImg.webp";
import { Box, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "3rem",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#1470AF",
          fontWeight: "bold",
          marginBottom: "1rem",
          width: "100%",
          fontFamily: "Instrument Sans",
          fontSize: { xs: "30px", md: "40px" },
        }}
      >
        Relax & Unwind: Our Guided Yoga for Deep Relaxation
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "gray",
          marginBottom: "2rem",
          textAlign: "justify",
        }}
      >
        Step into a world of peace and tranquility with this guided relaxation
        yoga session. Designed to release stress, calm the mind, and rejuvenate
        the body, this video will help you find your inner balance. Whether
        you're winding down after a long day or simply seeking a moment of
        stillness, follow along and experience deep relaxation through gentle
        movements and mindful breathing. 🌿✨
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "80%",
          borderRadius: "10px",
          position: "relative",
          cursor: "pointer",
          overflow: "hidden",
          marginTop: "2rem",
        }}
        onClick={() => {
          window.open(
            "https://youtu.be/y9pG051DWqc?si=a4ey2FyalYjmOrWs",
            "_blank"
          );
        }}
      >
        <img
          src={videoImg}
          alt="Video Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(0.9px)",
            opacity: 0.7,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#1470AF",
            fontSize: { xs: "4rem", sm: "6rem" },
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </Box>
      </Box>
    </Box>
  );
};
