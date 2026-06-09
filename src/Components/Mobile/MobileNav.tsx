import React,{useState} from "react";

import {
  Paper,
  Box,
  Typography,
  Button,
  Drawer
} from "@mui/material";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import logo from "../../Assests/images/logo/logo.webp";

import { useNavigate } from "react-router-dom";

import { trackEvent } from "../../analitics/analytics";

import Header from "../../Components/Header";

const MobileNav = ({
  isSticky = false,
  showMenuIcon = false,
}) => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen((prev) => !prev);
};

  const handleGetFreeGuidance = () => {
    trackEvent("Get Free Guidance Clicked");
    navigate("/consultation_question");
  };


   return (
  <>
    <Paper
      elevation={0}
      sx={{
        mt: isSticky ? 0 : 8,
        p: isSticky ? 1 : 2,
        mx: isSticky ? "25px" : 0,
        borderRadius: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isSticky ? 1 : 2,
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.26)",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {showMenuIcon && (
          <MenuOpenIcon
            onClick={() => {
              console.log("Menu Clicked");
              toggleMenu();
            }}
            sx={{
              color: "#0B67B2",
              fontSize: "34px",
              cursor: "pointer",
            }}
          />
        )}

        {/* LOGO SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              width: 42,
              height: 42,
              objectFit: "contain",
              mb: 0.5,
            }}
          />

          <Typography
            sx={{
              fontSize: "11px",
              color: "#0B67B2",
              fontWeight: 400,
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            ROYAL
          </Typography>

          <Typography
            sx={{
              fontSize: "11px",
              color: "#0B67B2",
              fontWeight: 400,
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            MINDFULNESS
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={handleGetFreeGuidance}
          sx={{
            bgcolor: "#0B67B2",
            borderRadius: "999px",
            minWidth: "169px",
            height: "48px",
            px: 2,
            textTransform: "none",
            fontSize: "12px",
            fontWeight: 600,
            color: "#fff",
            whiteSpace: "nowrap",
            boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              bgcolor: "#0B67B2",
              boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
            },
          }}
        >
         Book a Free consultaion
        </Button>

        <Typography
          sx={{
            mt: "2px",
            fontSize: "11px",
            color: "#878788",
            textAlign: "center",
            lineHeight: 2,
          }}
        >
          (No Credit card required)
        </Typography>
      </Box>
    </Paper>

    {/* MOBILE MENU */}
    {isMenuOpen && (
      <Box
      >
        <Header
  isOpen={isMenuOpen}
  toggleMenu={toggleMenu}
  drawerOnly={true}
/>
      </Box>
    )}
  </>
);
};

export default MobileNav;