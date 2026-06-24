import React from "react";
import { Box, Button } from "@mui/material";

import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import logo from "../../Assests/images/logo/logo.webp";
interface MobileNavbarProps {
  isSticky?: boolean;
}

function MobileNavbar({
  isSticky = false,
}: MobileNavbarProps) {


  return (
    <Box
  sx={{
    width: "100%",

    display: "flex",

    justifyContent: "center",

    pt: isSticky ? 1 : 2,

    position: isSticky
      ? "fixed"
      : "relative",

    top: 0,

    left: 0,

    zIndex: 9999,

    transition:
      "all 0.3s ease",

    backgroundColor: isSticky
      ? "transparent"
      : "transparent",

    backdropFilter: isSticky
      ? "blur(10px)"
      : "none",
  }}
>
      {/* NAVBAR CONTAINER */}
      <Box
        sx={{
          width: "92%",
          height: "74px",

          px: 2.5,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          borderRadius: "18px",

          /* GLASS EFFECT */
          background: "rgba(255,255,255,0.02)",

          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",

          border: "1px solid rgba(255,255,255,0.26)",

          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",

          position: "relative",
          zIndex: 20,
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
          {/* MENU ICON */}
          <MenuOpenIcon
            sx={{
              color: "#0B67B2",
              fontSize: "34px",
            }}
          />

          {/* LOGO */}
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              width: "52px",
              height: "52px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            minWidth: "102px",
            height: "42px",

            borderRadius: "14px",

            bgcolor: "#0B67B2",

            textTransform: "none",

            fontSize: "15px",
            fontWeight: 400,

            lineHeight: 1.2,

            boxShadow: "0px 4px 8px rgba(0,0,0,0.18)",

            px: 2,

            "&:hover": {
              bgcolor: "#0B67B2",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.18)",
            },
          }}
        >
          Free
          <br />
          Consultation
        </Button>
      </Box>
    </Box>
  );
}

export default MobileNavbar;
