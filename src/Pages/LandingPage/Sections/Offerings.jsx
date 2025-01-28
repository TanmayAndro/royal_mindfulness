import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

const statsData = [
  { value: "Services in 50+ ", label: "Countries" },
  { value: "Overall 100k+", label: "lives impacted" },
  { value: "Over 95% ", label: "Positive feedback" },
  { value: "Available 24/7", label: "Sessions" },
];

export const Offerings = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1470AF",
        color: "white", // White text color
        padding: "3rem",
        height: "100%",
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
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  marginX: 2,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
