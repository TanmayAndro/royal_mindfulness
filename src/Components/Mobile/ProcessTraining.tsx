import React from "react";

import { Box, Typography } from "@mui/material";

import relaxImg from "../../Assests/images/mobile/pt1.webp";
import awarenessImg from "../../Assests/images/mobile/Group.webp";
import responseImg from "../../Assests/images/mobile/pt3.webp";
import habitImg from "../../Assests/images/mobile/Vector.webp";

import processbg from "../../Assests/images/mobile/Line_4-removebg-preview.webp";
import processbg1 from "../../Assests/images/mobile/Line_4__1_-removebg-preview.png";

const processData = [
  {
    id: "01",
    title: "Relaxation",
    description: "Calm your mind and body through guided relaxation",
    image: relaxImg,
    imgWidth: "127.854286px",
    imgHeight: "74.46px",
    imgMt: "30px",
  },

  {
    id: "02",
    title: "Awareness",
    description: "Develop self-awareness by observing your thoughts",
    image: awarenessImg,
    imgWidth: "79.854286px",
    imgHeight: "46.46px",
    imgMt: "30px",
  },

  {
    id: "03",
    title: "Response Training",
    description: "Learn to pause and choose your responses",
    image: responseImg,
    imgMt: "30px",
    imgWidth: "74.85428619384766px",
    imgHeight: "55.46px",
  },

  {
    id: "04",
    title: "Behavioral & Habit",
    description: "Integrate practices for lasting strength",
    image: habitImg,
    imgWidth: "74.85428619384766px",
    imgHeight: "51.46px",
    imgMt: "30px",
  },
];

const ProcessTraining = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "93%",
          sm: "93%",
          md: "85%",
        },

        height: {
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
            xs: "30px",
            sm: "30px",
            md: "160px",
          },

          backgroundImage: {
            xs: `url(${processbg})`,
            md: `url(${processbg1})`,
          },

          backgroundSize: {
            xs: "91% 91 %",
            md: "44% 100%",
          },

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",

          zIndex: 1,

          /* ONLY BG IMAGE BLUE */
          filter:
            "brightness(0) saturate(100%) invert(32%) sepia(94%) saturate(1100%) hue-rotate(185deg) brightness(92%) contrast(92%)",
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
              md: "41px",
            },

            mt: {
              md: "130px",
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
                      md: "75px", // 20px, 30px, 40px try karo
                    },

                    position: "relative",
                    zIndex: 2,
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
                          md: "95px",
                        },
                        height: {
                          xs: 84,
                          md: "90px",
                        },

                        mb: {
                          md: "5px",
                        },

                        borderRadius: "50%",

                        background: "rgba(20, 112, 175, 0.12)",

                        border: "1px solid rgba(20, 112, 175, 0.16)",

                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                          md: "25px",
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
                          md: "16px",
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
