// src/Components/mobile/ServiceCarousel.tsx

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import anxiousImg from "../../Assests/images/mobile/anxious.jpg";
import stressedImg from "../../Assests/images/mobile/stressed.jpg";
import burnoutImg from "../../Assests/images/mobile/burnout.jpg";

const carouselData = [
  {
    title: "Anxious",
    image: anxiousImg,
  },
  {
    title: "Stressed",
    image: stressedImg,
  },
  {
    title: "Burnout",
    image: burnoutImg,
  },
];

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: 8,
        textAlign: "center",
        py: 6,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          color: "#1470AF",

          fontSize: {
            xs: "27px",
            sm: "27px",
          },

          fontWeight: 700,

          lineHeight: 1.1,

          mb: 5,
        }}
      >
        Who Are Taking Our Service?
      </Typography>

      {/* CAROUSEL */}
      <Box
        sx={{
          position: "relative",

          width: "100%",
          height: 360,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* LEFT BUTTON */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 10,

            zIndex: 20,

            color: "#1470AF",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* STACKED CARDS */}
        {carouselData.map((item, index) => {
          const offset =
            (index - activeIndex + carouselData.length) %
            carouselData.length;

          return (
          <Box
  key={index}
  sx={{
    position: "absolute",

    width: "auto",
    height: "auto",

    borderRadius: "36px",

    overflow: "hidden",

    background: "transparent",

    transition: "all 0.4s ease",

    transform: `
      translateX(${offset * 30}px)
      scale(${1 - offset * 0.05})
    `,

    zIndex: carouselData.length - offset,

    opacity: offset > 2 ? 0 : 1,

    // boxShadow: "0px 10px 24px rgba(0,0,0,0.22)",
  }}
>
  <Box
    component="img"
    src={item.image}
    alt={item.title}
    sx={{
      width: "250px",
      height: "350px",

      display: "block",

      objectFit: "cover",

      borderRadius: "36px",
      marginRight:"35px"
    }}
  />
</Box>
          );
        })}


        {/* RIGHT BUTTON */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,

            zIndex: 20,

            color: "#1470AF",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* DOTS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,

          mt: 3,
        }}
      >
        {carouselData.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 14,
              height: 14,

              borderRadius: "50%",

              background:
                activeIndex === index
                  ? "#1470AF"
                  : "rgba(20,112,175,0.4)",

              transition: "0.3s",
            }}
          />
        ))}
      </Box>

      {/* ACTIVE LABEL */}
      <Box
        sx={{
          mt: 5,

          width: 260,
          height: 60,

          mx: "auto",

          borderRadius: "999px",

          background: "#1a73e81a",

          backdropFilter: "blur(10px)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <Typography
          sx={{
            color: "#1470AF",

            fontSize: "24px",

            fontWeight: 700,
          }}
        >
          {carouselData[activeIndex].title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceCarousel;