import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  Typography,
  Box,
  Container,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import CommonButtons from "./CommonButton";
import heroBg from "../../Assests/images/mobile/hero_bg.webp";
import { trackEvent } from "../../analitics/analytics";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { border } from "@mui/system";

function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handelConsulation = (clickedOn) => {
    if (clickedOn === "calendly") navigate("/consultation_question");
    if (clickedOn === "rozerpay") navigate("/book-now");
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScrollLock = () => {
      if (isOpen && window.innerWidth <= 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",

        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          // background: "rgba(0,0,0,0.35)",
          zIndex: 1,
        },
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
      </Box>

      {/* Hero Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          px: { xs: 2, md: 6 },
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "83px",
                  },
                  lineHeight: 1.1,
                  mb: 3,
                  textShadow: "0 4px 12px rgba(0,0,0,0.4)",
                }}
              >
                Train Your Mind To Be Happy!
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: {
                    xs: "1rem",
                    md: "32px",
                  },
                  // maxWidth: "700px",
                  // mx: "auto",

                  mx: {
                    xs: "auto",
                    md: "0"
                  },
                  mb: 5,
                }}
              >
                1-on-1 Mind Fitness Training, Live Sessions, Free Consultation
              </Typography>

              <Stack
                direction={{ xs: "row", sm: "row" }}
                spacing={{ xs: 1.5, md: 3 }}
                justifyContent="center"
                alignItems="flex-start"
                flexWrap="wrap"
              >
                {/* BOOK CONSULTATION */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CommonButtons
                    label="Book A Free Consultation"
                    variant="contained"
                    sx={{
                      width: {
                        xs: "46%",
                        sm: "320px",
                        md: "444px",
                      },

                      height: {
                        xs: "60px",
                        sm: "72px",
                        md: "91px",
                      },

                      borderRadius: "24px",

                      color: "#fff",

                      fontSize: {
                        xs: "14px",
                        sm: "20px",
                        md: "32px",
                      },

                      fontWeight: 700,

                      lineHeight: "116%",

                      textTransform: "none",

                      whiteSpace: "nowrap",

                      border: "1px solid rgba(255,255,255,0.35)",

                      background: "rgba(8,61,99,0.55)",

                      boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.18),
      0 4px 12px rgba(0,0,0,0.15)
    `,

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0) 100%)",
                        pointerEvents: "none",
                      },
                      "&:hover": {
                        background: "rgba(8, 61, 99, 0.72) !important",
                        boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.18),
    0 4px 12px rgba(0,0,0,0.15)
  `,
                      },

                      "&.MuiButton-contained:hover": {
                        background: "rgba(8, 61, 99, 0.72) !important",
                      },
                    }}
                    onClick={() => {
                      trackEvent(
                        "Landing Page",
                        "Click",
                        "BookConsultation",
                        true,
                      );
                      handelConsulation("calendly");
                    }}
                  />

                  <Typography
                    sx={{
                      mt: 1.5,
                      color: "#fff",
                      fontSize: {
                        xs: "14px",
                        md: "24px",
                      },
                      fontWeight: 400,
                    }}
                  >
                    (No Credit card required)
                  </Typography>
                </Box>

                {/* HIRE TRAINER */}

                <CommonButtons
                  label="Hire A Trainer"
                  variant="contained"
                  sx={{
                    width: {
                      xs: "46%",
                      sm: "256px",
                      md: "257px",
                    },

                    height: {
                      xs: "60px",
                      sm: "72px",
                      md: "91px",
                    },

                    borderRadius: "24px",

                    color: "#fff",

                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                      md: "32px",
                    },

                    fontWeight: 700,

                    lineHeight: "116%",

                    textTransform: "none",

                    whiteSpace: "nowrap",

                    border: "1px solid rgba(255,255,255,0.35)",

                    background: "rgba(8,61,99,0.55)",

                    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.18),
      0 4px 12px rgba(0,0,0,0.15)
    `,
                    "&:hover": {
                      background: "rgba(8, 61, 99, 0.72) !important",
                      boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.18),
    0 4px 12px rgba(0,0,0,0.15)
  `,
                    },

                    "&.MuiButton-contained:hover": {
                      background: "rgba(8, 61, 99, 0.72) !important",
                    },
                  }}
                  onClick={() => {
                    trackEvent("Landing Page", "Click", "Hire Trainer", true);
                    handelConsulation("rozerpay");
                  }}
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
