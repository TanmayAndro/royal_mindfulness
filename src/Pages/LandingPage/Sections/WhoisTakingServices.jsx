import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import enterprenuers from "../../../Assests/Entrepreneurs.png";
import addicts from "../../../Assests/Addicts.png";
import athlets from "../../../Assests/Athletes.png";
import sick from "../../../Assests/sick.png";
import WaveDivider from "../WaveDivider";

export const WhoisTakingServices = () => {
  const items = [
    {
      title: "Athletes and Performers",
      description:
        " To stay calm under pressure, boost focus, and recover faster from setbacks.",
      image:  athlets ,
    },
    {
      title: "Entrepreneurs",
      description:
        "To handle stress, make better decisions, and manage work-life balance.",
      image:  enterprenuers ,
    },
    { 
      title: "People Who Want Better Relationships",
      description:
        "To improve emotional regulation, empathy, and communication.",
      image:  addicts ,
    },
    {
      title: " People Maintaining Their Mental Health",
      description:
        "To build daily mental habits that prevent stress, anxiety, and burnout.",
      image:  sick ,
    },
  ];

  return (
   <>
  <Box sx={{ padding: "4rem" }}>
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontSize: "40px",
        fontWeight: "bold",
        color: "#1470AF",
        fontFamily: "Instrument sans",
      }}
    >
      Who is Taking Our Services
    </Typography>

    <Grid container mt={4} spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={5}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: "600",
                    fontFamily: "Instrument sans",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#9A9CA0" }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
   {/* <WaveDivider fill="lightblue" />  */}
  </Box>
   

  {/* Move SVG outside the padded Box */}
  {/* <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100vw",
            height: "100px",
          }}
        >
          <defs>
            <linearGradient id="darkGreenGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#145A32" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#196F3D" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="darkGreenGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#117A65" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0E6251" stopOpacity="0.9" />
            </linearGradient>
          </defs>
      
          <path
            fill="url(#darkGreenGrad2)"
            d="M0,50 C400,90 1040,0 1440,40 L1440,150 L0,150 Z"
          />
      
       
          <path
            fill="#5B9DE8"
            d="M0,30 C360,60 1080,20 1440,50 L1440,150 L0,150 Z"
          />
        </svg>
      </Box>   */}

</>

  );
};
