// src/Components/mobile/MobileFooter.tsx

import React from "react";

import { Box, Typography, Link } from "@mui/material";

import { Icon } from "@iconify/react";

import logo from "../../Assests/images/logo/logo.webp";
import footerBg from "../../Assests/images/mobile/Rectangle36.png";

// import { Link } from 'react-router-dom';
import { trackEvent } from "../../analitics/analytics";
import { useNavigate } from "react-router-dom";

const leftLinks = [
  { label: "About us", path: "/aboutus" },
  { label: "Contact us", path: "/contact" },
  { label: "Blogs", path: "https://tanmaysmarty.wixsite.com/my-site-1/blog" },
  // { label: "Hire Trainer", path: "/book-now" },
  // { label: "Our Pricing", path: "/pricing" },
  { label: "Our Trainings", path: "/trainings" },
  { label: "Terms & Conditions", path: "/term-condition" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];



// const rightLinks = ["Feedback", "Email Us"];
const rightLinks = [""];


const MobileFooter = () => {
  const navigate = useNavigate();
   const handleNavigation = (
    label: string,
    path: string
  ) => {
    trackEvent(
      "Footer",
      "Click",
      label
    );

    navigate(path);
  };
  return (
    <Box
      sx={{
        width: "100%",

        boxSizing: "border-box",
      }}
    >
      {/* MAIN FOOTER */}
      <Box
        sx={{
          width: "100%",

          position: "relative",

          overflow: "hidden",

          px: 3,
          py: 5,

          boxSizing: "border-box",

          backgroundImage: `url(${footerBg})`,

          backgroundSize: "100% 100%",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",
          marginTop: "-5px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,

            display: "grid",

            gridTemplateColumns: "1.4fr 1fr 1.3fr",

            gap: 3,

            alignItems: "start",
          }}
        >
          {/* COLUMN 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: 0.8,
            }}
          >
            {leftLinks.map((item, index) => (
  <Link
    key={index}
    component="button"
    underline="always"
    onClick={() =>
      handleNavigation(
        item.label,
        item.path
      )
    }
    sx={{
      color: "#fff",

      fontSize: {
        xs: "11px",
        sm: "11px",
      },

      fontWeight: 400,

      lineHeight: 1.2,

      textDecorationColor: "none",

      cursor: "pointer",

      background: "none",

      border: "none",

      textAlign: "left",

      p: 0,
    }}
  >
    {item.label}
  </Link>
))}
          </Box>

          {/* COLUMN 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: 1,
            }}
          >
            {rightLinks.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#fff",

                  fontSize: {
                    xs: "11px",
                    sm: "11px",
                  },

                  fontWeight: 400,

                  lineHeight: 1.4,

                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* COLUMN 3 */}
          <Box
           onClick={() => {
    trackEvent(
      "Footer",
      "Click",
      "Logo"
    );

    navigate("/");
  }}
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            {/* LOGO */}
            <Box
              sx={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Royal Mindfulness"
                sx={{
                  width: 45,
                  height: "auto",

                  objectFit: "contain",

                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>

            {/* BRAND NAME */}
            <Typography
              component="h5"
              sx={{
                color: "#fff",

                textAlign: "center",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                fontSize: {
                  xs: "12px",
                  sm: "12px",
                },

                fontWeight: 400,

                lineHeight: 1.2,

                textTransform: "uppercase",

                mt: 1,
              }}
            >
              Royal
              <br />
              Mindfullness
            </Typography>

            {/* SOCIAL ICONS */}
            <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: 1.2,

    mt: 3,
    mb: 2,
  }}
>
  {/* LINKEDIN */}
  <Box
    component="a"
    href="https://www.linkedin.com/company/royalmindfulness/"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() =>
      trackEvent(
        "Footer",
        "Click",
        "LinkedIn"
      )
    }
    sx={{
      display: "flex",
      cursor: "pointer",
    }}
  >
    <Icon
      icon="skill-icons:linkedin"
      width="32"
      height="32"
    />
  </Box>

  {/* INSTAGRAM */}
  <Box
    component="a"
    href="https://www.instagram.com/royalmindfulness24?igsh=MTE3emV1bWJtejV5"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() =>
      trackEvent(
        "Footer",
        "Click",
        "Instagram"
      )
    }
    sx={{
      display: "flex",
      cursor: "pointer",
    }}
  >
    <Icon
      icon="skill-icons:instagram"
      width="32"
      height="32"
    />
  </Box>

  {/* FACEBOOK */}
  <Box
    component="a"
    href="https://www.facebook.com/profile.php?id=61585328290655"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() =>
      trackEvent(
        "Footer",
        "Click",
        "Facebook"
      )
    }
    sx={{
      display: "flex",
      cursor: "pointer",
    }}
  >
    <Icon
      icon="logos:facebook"
      width="32"
      height="32"
    />
  </Box>

  {/* TWITTER/X */}
  <Box
    component="a"
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() =>
      trackEvent(
        "Footer",
        "Click",
        "Twitter"
      )
    }
    sx={{
      display: "flex",
      cursor: "pointer",
      
    }}
  >
    <Icon
      icon="pajamas:twitter"
      width="30"
      height="30"
      color="#000000"
    />
  </Box>
</Box>

            {/* COPYRIGHT */}
            <Typography
              sx={{
                color: "#fff",

                fontSize: {
                  xs: "11px",
                  sm: "11px",
                },

                fontWeight: 400,

                textAlign: "center",

                lineHeight: 1.3,
              }}
            >
              © 2025 Royal Mindfulness
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileFooter;
