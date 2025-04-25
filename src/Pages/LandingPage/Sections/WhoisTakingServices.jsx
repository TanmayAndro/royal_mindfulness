import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import enterprenuers from "../../../Assests/Entrepreneurs.png";
import addicts from "../../../Assests/Addicts.png";
import athlets from "../../../Assests/Athletes.png";
import sick from "../../../Assests/sick.png";

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
    <Box sx={{ padding: "4rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "#1470AF",
          alignSelf: "baseline",
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
                {/* Left Side - Image */}
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

                {/* Right Side - Text */}
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
    </Box>
  );
};
