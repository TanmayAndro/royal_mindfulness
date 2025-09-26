import React from "react";
import { Box, Typography } from "@mui/material";
import rightImg from "../../../Assests/iStock.png";
import CommonButtons from "../CommonButtons";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <>
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
            Royal Mindfulness...{" "}
            <Link to="/aboutus" style={{ color: "#1470AF", textDecoration: "underline" }}>
              Learn More
            </Link>
          </Typography>

          <CommonButtons />
        </Box>

        {/* Image Section */}
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

export default SecondSection;
