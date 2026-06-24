import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import logo from "../../Assests/images/logo/logo.webp";

const MinimalMobileHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "100px",
        
        // Mobile aur Tab par absolute float karega takki background image piche seamlessly extend ho sake
        // Desktop (md) par hidden ho jayega
        position: { xs: "absolute", md: "none" },
        top: 0,
        left: 0,
        
        // VISIBILITY: xs aur sm screens par flex dikhega, md aur bade screens par hide ho jayega
        display: { xs: "flex", md: "none" }, 
        
        alignItems: "center",         
        justifyContent: "space-between", 
        padding: "0 42px",           
        
        backgroundColor: "transparent", 
        boxSizing: "border-box",
        zIndex: 100,
      }}
    >
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

      {/* Logo Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Royal Mindfulness Logo"
          style={{ width: "59px", height: "68.63px", display: "block" }}
        />
      </Box>
    </Box>
  );
};


export default React.memo(MinimalMobileHeader);