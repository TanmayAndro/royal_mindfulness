import React from "react";
import videoImg from "../../../Assests/sectionImg.webp";
import { Box } from "@mui/material";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: "pointer",
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
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
