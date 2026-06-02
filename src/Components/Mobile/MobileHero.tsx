import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";

import Navgirl from "../../Assests/images/mobile/mobilegirl.png";
import herobg from "../../Assests/images/checklist_bg.jpg";
import logo from "../../Assests/images/logo/logo.webp";

function MobileHero() {
  return (
    <Box
      sx={{
        width: "100%",

        border: "1px solid rgba(255,255,255,0.26)",

        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* MAIN CARD */}
      <Box
        sx={{
          width: "100%",

          borderTopLeftRadius: "28px",
          borderTopRightRadius: "28px",

          overflow: "hidden",
          position: "relative",

          boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",

          /* BACKGROUND IMAGE LAYER */
          "&::before": {
            content: '""',

            position: "absolute",
            inset: 0,

            backgroundImage: `url(${herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            opacity: 0.25,

            zIndex: 1,
          },
        }}
      >
        {/* MAIN CONTENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* IMAGE SECTION */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={Navgirl}
              alt="girl"
              sx={{
                width: "100%",
                height: 425,
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box
            sx={{
              px: 4,
              pb: 5,
              pt: 6,
              mt: -3,

              textAlign: "center",

              position: "relative",
              zIndex: 3,

              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                color: "#1470AF",

                fontWeight: 700,

                fontSize: {
                  xs: "32px",
                  sm: "36px",
                  md: "39px",
                },

                lineHeight: "99%",
                letterSpacing: "-0.01em",

                textAlign: "center",

                fontFamily: "Roboto",
              }}
            >
              Train Your Mind To
              <br />
              Be Happy !
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                mt: 2,

                color: "#0B67B2",

                fontSize: "18px",
                lineHeight: 1.4,

                fontWeight: 400,
              }}
            >
              1-on-1 Mind Fitness Training,
              <br />
              Live Sessions, Free Consultation
            </Typography>

            {/* BUTTON */}
            <Button
              variant="contained"
              sx={{
                mt: 4,

                bgcolor: "#0B67B2",

                borderRadius: "999px",

                px: 4,
                py: 1.2,

                textTransform: "none",

                fontSize: "17px",
                fontWeight: 500,

                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#0B67B2",
                  boxShadow: "none",
                },
              }}
            >
              Hire A Trainer
            </Button>

            {/* BOTTOM CARD */}
            <Paper
              elevation={0}
              sx={{
                mt: 8,

                p: 2,

                borderRadius: "18px",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                gap: 2,

                /* FIGMA GLASS EFFECT */
                background: "rgba(255,255,255,0.02)",

                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",

                border: "1px solid rgba(255,255,255,0.26)",

                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            >
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
                {/* LOGO IMAGE */}
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

                {/* LOGO TEXT */}
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

              {/* BUTTON */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0B67B2",

                  borderRadius: "999px",

                  px: 3.5,
                  py: 1,

                  minWidth: "190px",

                  textTransform: "none",

                  fontSize: "10px",
                  fontWeight: 500,

                  boxShadow: "1px 1px 2px rgba(210, 23, 23, 0.2)",

                  "&:hover": {
                    bgcolor: "#0B67B2",
                    boxShadow: "none",
                  },
                }}
              >
                Get Free Guidance
              </Button>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MobileHero;
