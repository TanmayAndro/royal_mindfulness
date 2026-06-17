// src/Components/mobile/ServiceCarousel.tsx

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import anxiousImg from "../../Assests/images/mobile/anxious.jpg";
import stressedImg from "../../Assests/images/mobile/stressed.jpg";
import burnoutImg from "../../Assests/images/mobile/burnout.jpg";
import depression from "../../Assests/images/mobile/depression.jpg";

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
  {
    title: "Depression",
    image: depression,
  },
];

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
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
            md: "48px",
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

          width: {
            xs: "100%",
            md: "900px",
          },

          mx: {
            md: "auto",
          },

          height: {
            xs: 360,
            md: 650,
          },

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
            left: {
              xs: 10,
              md: 0,
            },
            zIndex: 20,
            color: "#1470AF",
            p: 0,
          }}
        >
          <PlayArrowIcon
            sx={{
              width: {
                xs: "24px",
                md: "62px",
              },
              height: {
                xs: "62px",
                md: "130px",
              },

              color: "#1470AF",
              transform: "rotate(180deg)",
            }}
          />
        </IconButton>

        {/* STACKED CARDS */}
        {carouselData.map((item, index) => {
          const offset =
            (index - activeIndex + carouselData.length) % carouselData.length;

          return (
              <Box
                key={index}
                sx={{
                  position: "absolute",

                  width: "auto",
                  height: "auto",

                  // borderRadius: "36px",
                   borderRadius: {
                    xs: "36px",
                    sm: "36px",
                    md: "19px"
                   },

                  overflow: "hidden",

                  background: "transparent",

                  transition: "all 0.4s ease",

                  transform: {
      xs: `translateX(${offset * 25}px) scale(${1 - offset * 0.04})`,
      sm: `translateX(${offset * 35}px) scale(${1 - offset * 0.04})`,
      md: `translateX(${offset * 50}px) scale(${1 - offset * 0.04})`,
    },
                  zIndex: carouselData.length - offset,
                  opacity: offset > 3 ? 0 : 1,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: {
                      xs: "200px",
                      sm: "200px",
                      md: "387.24px",
                    },
                    height: {
                      xs: "350px",
                      sm: "350px",
                      md: "508px",
                    },

                    display: "block",

                    objectFit: "cover",

                    borderRadius: {
                      xs: "36px",
                      sm: "36px",
                      md: "19px",
                    },
                    marginRight: {
                      xs: "75px",
                      sm: "75px",
                      md: "75px",
                    },
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
            right: {
              xs: 10,
              md: 0,
            },
            zIndex: 20,
            color: "#1470AF",
            p: 0,
          }}
        >
          <PlayArrowIcon
            sx={{
              width: {
                xs: "24px",
                md: "62px",
              },
              height: {
                xs: "62px",
                md: "130px",
              },
              color: "#1470AF",
            }}
          />
        </IconButton>
      </Box>

      {/* DOTS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.5,

          mt: {
            xs: 3,
            md: 5,
          },
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
                activeIndex === index ? "#1470AF" : "rgba(20,112,175,0.4)",

              transition: "0.3s",
            }}
          />
        ))}
      </Box>

      {/* ACTIVE LABEL */}
      <Box
        sx={{
          mt: {
            xs: 5,
            md: 4,
          },

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
