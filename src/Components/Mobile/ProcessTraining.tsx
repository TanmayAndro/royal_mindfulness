// src/Components/mobile/ProcessTraining.tsx

import React from "react";

import { Box, Typography } from "@mui/material";

import relaxImg from "../../Assests/images/mobile/pt1.png";
import awarenessImg from "../../Assests/images/mobile/pt2.png";
import responseImg from "../../Assests/images/mobile/pt3.png";
import habitImg from "../../Assests/images/mobile/pt4.png";

import processbg from "../../Assests/images/mobile/Line_4-removebg-preview.png";

const processData = [
  {
    id: "01",
    title: "Relaxation",
    description: "Calm your mind and body through guided relaxation",
    image: relaxImg,
  },

  {
    id: "02",
    title: "Awareness",
    description: "Develop self-awareness by observing your thoughts",
    image: awarenessImg,
  },

  {
    id: "03",
    title: "Response Training",
    description: "Learn to pause and choose your responses",
    image: responseImg,
  },

  {
    id: "04",
    title: "Behavioral & Habit",
    description: "Integrate practices for lasting strength",
    image: habitImg,
  },
];

const ProcessTraining = () => {
  return (
    <Box
      sx={{
        width: {
  xs: "88%",
  sm: "88%",
  md: "44%",
},

mx: {
  md: "auto"
},

    

        px: 3,
        pt: 5,
        pb: 8,

        boxSizing: "border-box",

        overflow: "hidden",

        position: "relative",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        /* BG IMAGE LAYER */
        "&::before": {
          content: '""',

          position: "absolute",

          inset: 0,

          backgroundImage: `url(${processbg})`,

          backgroundSize: "91% 91%",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",

          zIndex: 1,

          /* ONLY BG IMAGE BLUE */
          filter:
            "brightness(0) saturate(100%) invert(32%) sepia(94%) saturate(1100%) hue-rotate(185deg) brightness(92%) contrast(92%)",

          // opacity: 0.35,
        },
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",

          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            textAlign: "center",

            mb: 5,
          }}
        >
          <Typography
            sx={{
              color: "#5B9BD5",

              fontSize: {
                xs: "18px",
                sm: "22px",
              },

              fontWeight: 700,

              lineHeight: 1.1,
              marginTop: "-13px",
            }}
          >
            Process of Our
          </Typography>

          <Typography
            sx={{
              color: "#1470AF",

              fontSize: {
                xs: "20px",
                sm: "20px",
              },

              fontWeight: 700,

              lineHeight: 1.08,

              letterSpacing: "-0.5px",
              marginTop: "21px",
            }}
          >
            Mental Fitness Training
          </Typography>
        </Box>

        {/* PROCESS LIST */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: 8,

            position: "relative",
          }}
        >
          {processData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",

                  display: "flex",

                  justifyContent: isEven ? "flex-start" : "flex-end",
                }}
              >
                {/* DOTTED PATH */}
                <Box
                  sx={{
                    position: "absolute",

                    top: "-20px",

                    left: isEven ? "20px" : "auto",
                    right: !isEven ? "20px" : "auto",

                    width: "100%",
                    height: "140px",

                    // border: "2px dashed #A7C9E8",

                    borderRadius: "42px",

                    zIndex: 1,
                  }}
                />

                {/* CARD */}
                <Box
                  sx={{
                    width: "100%",

                    display: "flex",
                    alignItems: "center",

                    position: "relative",

                    zIndex: 2,
                  }}
                >
                  {/* IMAGE SECTION */}
                  <Box
                    sx={{
                      position: "relative",

                      width: "42%",

                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* IMAGE BG */}
                    <Box
                      sx={{
                        width: 84,
                        height: 84,

                        borderRadius: "50%",

                        background:
                          "linear-gradient(180deg,#EAF4FB 0%,#DDECF8 100%)",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        boxShadow: "0px 6px 12px rgba(0,0,0,0.16)",
                      }}
                    >
                      {/* IMAGE */}
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "50%",
                          height: "50%",

                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {/* NUMBER BADGE */}
                    <Box
                      sx={{
                        position: "absolute",

                        top: -6,
                        right: 18,

                        width: 31,
                        height: 31,

                        borderRadius: "50%",

                        background: "#1470AF",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        color: "#fff",

                        fontSize: "14px",

                        fontWeight: 700,

                        boxShadow: "0px 4px 10px rgba(0,0,0,0.16)",
                      }}
                    >
                      {item.id}
                    </Box>
                  </Box>

                  {/* CONTENT */}
                  <Box
                    sx={{
                      width: "58%",

                      pl: 1,
                    }}
                  >
                    {/* TITLE */}
                    <Typography
                      sx={{
                        color: "#1470AF",

                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                        },

                        fontWeight: 700,

                        lineHeight: 1.08,

                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                      sx={{
                        color: "#4A4A4A",

                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                        },

                        lineHeight: 1.2,

                        fontWeight: 400,

                        maxWidth: "180px",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessTraining;
