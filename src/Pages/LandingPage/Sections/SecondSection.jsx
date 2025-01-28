import React from "react";
import { Box, Typography, Button } from "@mui/material";
import rightImg from "../../../Assests/iStock.png";

const SecondSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        width: "100%",
        backgroundColor: "#F9FAFB",
      }}
    >
      {/* Text Content */}
      <Box
        sx={{
          padding: "3rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box
          sx={{ flex: 1.5, paddingRight: { md: "2rem" }, textAlign: "left" }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#1470AF" }}
          >
            Discover Our Story: Experience the Joy of Relaxation
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: "400",
              marginTop: "2rem",
              textAlign: "justify",
            }}
          >
            At Royal Mindfulness, our mission is to assist individuals in
            combating mental health challenges such as depression, anxiety,
            anger issues, hyper emotions, and more. Our accessible relaxation
            sessions offer an affordable avenue for releasing tension, directly
            addressing various mental health concerns.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#8EB6DC",
              fontStyle: "italic",
              fontSize: "22px",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Peace emanates from within, Relaxation comes from Royal Mindfulness.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "justify",
            }}
          >
            Join us on a journey where affordable well-being meets regal
            serenity, and discover the transformative power of mindfulness at
            Royal Mindfulness.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{
              marginTop: "2rem",
              textTransform: "none",
              fontWeight: "bold",
              width: { xs: "100%", sm: "250px" },
              height: "48px",
              backgroundColor: "#1470AF",
              borderRadius: "34px",
              "&:hover": { backgroundColor: "#1470AF" },
            }}
            onClick={() => {
              window.location.href = "/aboutus"; // Update URL to your about us page
            }}
          >
            Learn More About us...
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            marginTop: { xs: "2rem", sm: "2rem", md: "0px" },
          }}
        >
          <img
            src={rightImg}
            alt="Relaxing Person"
            style={{
              borderRadius: "12px",
              width: "100%",
              maxWidth: "530px",
              height: "auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
