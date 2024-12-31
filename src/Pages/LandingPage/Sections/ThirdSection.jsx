import React from "react";
import videoImg from "../../../Assests/VideoImg.png";
import { Box } from "@mui/material";


export const ThirdSection = () => {
  return (
    <Box
      sx={{
        width:'100%',
        height: "630px",
        backgroundImage: `url(${videoImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => {
        window.open("https://www.youtube.com/watch?v=ssss7V1_eyA", "_blank");
      }}
    ></Box>
  );
};
