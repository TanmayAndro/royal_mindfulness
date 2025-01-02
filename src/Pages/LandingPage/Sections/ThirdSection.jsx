import React from "react";
import videoImg from "../../../Assests/VideoImg.png";
import { Box } from "@mui/material";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", sm: "100%", md: "100%" }, // Responsive height
        position: "relative",
        cursor: "pointer",
        backgroundColor: "#0F2E15",
      }}
      onClick={() => {
        window.open("https://www.youtube.com/watch?v=ssss7V1_eyA", "_blank");
      }}
    >
      <img
        src={videoImg}
        alt="Video Thumbnail"
        style={{
          width: "100%",
          height: "100%", // Optional: Set height to 100% to fill the Box
          // objectFit: "cover", // Ensures the image covers the Box without distortion
        }}
      />
    </Box>
  );
};
