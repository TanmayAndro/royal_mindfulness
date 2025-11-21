import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import WaveDivider from "../WaveDivider";

const statsData = [
  { value: "100k+ ", label: "Lives Impacted" },
  { value: "50+", label: "Countries Participating " },
  { value: "95%+ ", label: "Positive Feedback" },
];

export const Offerings = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: "#1470AF",
          pt: "3rem",
          // pb: "3rem",
          pb: 0, // No bottom padding
          
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Instrument Sans",
                    fontWeight: 600,
                    fontSize: "30px",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Instrument Sans",
                    fontWeight: 600,
                    fontSize: "22px",
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid>
              {index < statsData.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: "#1470AF",
                    marginX: 2,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                />
              )}
            </React.Fragment>
          ))}
          
        </Grid>
         {/* <WaveDivider fill="url(#waveGradient2)"/> */}
      </Box>

      {/* Wave SVG at bottom */}
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
        > */}
          {/* <defs>
            <linearGradient id="darkGreenGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#145A32" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#196F3D" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="darkGreenGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#117A65" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0E6251" stopOpacity="0.9" />
            </linearGradient>
          </defs> */}

          {/* Back wave - Dark Forest Green */}
          {/* <path
            fill="url(#darkGreenGrad2)"
            d="M0,50 C400,90 1040,0 1440,40 L1440,150 L0,150 Z"
          /> */}

          {/* Front wave - Deep Teal */}
          {/* <path
            fill="#5B9DE8"
            d="M0,30 C360,60 1080,20 1440,50 L1440,150 L0,150 Z"
          />
        </svg>
      </Box> */}

    </>
  );
};
