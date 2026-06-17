// src/Components/mobile/ProcessTraining.tsx

import React from "react";

import { Box, Typography } from "@mui/material";

import relaxImg from "../../Assests/images/mobile/pt1.png";
import awarenessImg from "../../Assests/images/mobile/Group.png";
import responseImg from "../../Assests/images/mobile/pt3.png";
import habitImg from "../../Assests/images/mobile/Vector.png";


import processbg from "../../Assests/images/mobile/Line_4-removebg-preview.png";
import processbg1 from "../../Assests/images/mobile/Line_4__1_-removebg-preview.png"

const processData = [
  {
    id: "01",
    title: "Relaxation",
    description: "Calm your mind and body through guided relaxation",
    image: relaxImg,
    imgWidth: "120%",
    imgHeight: "95%",
    imgMt: "30px",
  },

  {
    id: "02",
    title: "Awareness",
    description: "Develop self-awareness by observing your thoughts",
    image: awarenessImg,
    imgWidth: "70%",
    imgHeight: "61%",
    imgMt: "30px",
    
  },

  {
    id: "03",
    title: "Response Training",
    description: "Learn to pause and choose your responses",
    image: responseImg,
    imgMt: "30px"
  },

  {
    id: "04",
    title: "Behavioral & Habit",
    description: "Integrate practices for lasting strength",
    image: habitImg,
    imgWidth: "50%",
    imgHeight: "55%",
    imgMt: "50px",
  },
];

const ProcessTraining = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "88%",
          sm: "88%",
          md: "85%",
        },

        mx: {
          md: "auto",
        },

        px: 3,
        pt: 5,
        pb: 8,

        boxSizing: "border-box",

        overflow: {
          xs: "hidden",
          md: "visible",
        },

        position: "relative",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        /* BG IMAGE LAYER */
        "&::before": {
          content: '""',

          position: "absolute",

          inset: 0,

          top: {
            xs: 0,
            md: "180px", // jitna niche chahiye
          },

          // backgroundImage: `url(${processbg})`,

          backgroundImage: {
            xs: `url(${processbg})`,
            md: `url(${processbg1})`,
          },

          // backgroundSize: "91% 91%",

          backgroundSize: {
            xs: "91% 91 %",
            md: "75% 100%"
          },

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

          my: {
            md: "40px",
          },

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
                md: "36px",
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
                md: "36px",
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

            // gap: 8,
            gap: {
              xs: 8,
              md: "50px",
            },

            mt: {
              md: "174px",
            },

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
                    gap: {
                      md: "240px",
                    },
                  }}
                />

                {/* CARD */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",

                    gap: {
                      md: "240px", // 20px, 30px, 40px try karo
                    },

                    position: "relative",
                    zIndex: 2,
                    pb:{
                      md:" 30px"
                    }
                  }}
                >
                  {/* IMAGE SECTION */}
                  <Box
                    sx={{
                      position: "relative",

                      width: {
                        xs: "42%",
                        md: "42%",
                      },

                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* IMAGE BG */}
                    <Box
                      sx={{
                        width: {
                          xs: 84,
                          md: "130px",
                        },

                        height: {
                          xs: 84,
                          md: "130px",
                        },

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
                          width: {
                            xs: "80%",
                            md: item.imgWidth, // image bigger
                          },

                          height: {
                            xs: "80%",
                            md: item.imgHeight, // image bigger
                          },

                          mt: {
                            xs: 0,
                            md: item.imgMt, // top se niche push
                          },

                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {/* NUMBER BADGE */}
                    <Box
                      sx={{
                        position: "absolute",

                        top: {
                          xs: -6,
                          md: -8,
                        },

                        right: {
                          xs: 18,
                          md: 20,
                        },

                        width: {
                          xs: 31,
                          md: 40,
                        },

                        height: {
                          xs: 31,
                          md: 40,
                        },

                        borderRadius: "50%",

                        background: "#1470AF",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        color: "#fff",

                        fontSize: {
                          xs: "14px",
                          md: "18px",
                        },

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
                      width: {
                        xs: "58%",
                        md: "100%",
                      },

                      pl: {
                        xs: 1,
                        md: 0,
                      },

                      display: "flex",

                      flexDirection: "column",

                      justifyContent: "center",

                      alignItems: {
                        md: "center",
                      },
                    }}
                  >
                    {/* TITLE */}
                    <Typography
                      sx={{
                        color: "#1470AF",

                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "32px",
                        },

                        fontWeight: 700,

                        lineHeight: 1.08,

                        mb: 0.5,

                        textAlign: {
                          xs: "left",
                          md: "center",
                        },
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
                          md: "20px",
                        },

                        lineHeight: 1.2,

                        fontWeight: 400,

                        maxWidth: {
                          xs: "180px",
                          md: "320px",
                        },

                        textAlign: {
                          xs: "left",
                          md: "center",
                        },

                        mx: {
                          md: "auto",
                        },
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
