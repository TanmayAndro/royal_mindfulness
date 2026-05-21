import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const MinimalMobileHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "100px", 
        display: { xs: "flex", md: "none" }, // Sirf mobile par dikhega
        
        // 💥 Yahan absolute hata kar perfect flex alignment lagaya hai
        alignItems: "center",         /* Isse dono vertically bilkul center align ho jayenge */
        justifyContent: "space-between", /* Arrow left me aur Logo right me chala jayega */
        padding: "0 42px",            /* Aapki di hui spacing (left aur right se 42px) */
        
        backgroundColor: "#f0f4f8", 
        boxSizing: "border-box",
        zIndex: 100,
      }}
    >
      {/* 🔙 Back Button - Exact Dimensions maintained */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          width: "32px",
          height: "32px",
          borderRadius: "20px",
          opacity: 1,
          backgroundColor: "#1470AF", 
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#10598c", 
          },
          padding: 0, 
        }}
      >
        <ArrowBackIcon sx={{ fontSize: "18px" }} />
      </IconButton>

      {/* 🧠 Logo Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Royal Mindfulness Logo"
          style={{ width: "59px", height: "68.63px", display: "block" }}
        />
      </Box>
    </Box>
  );
};

export default MinimalMobileHeader;