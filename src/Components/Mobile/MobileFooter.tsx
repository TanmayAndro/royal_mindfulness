// src/Components/mobile/MobileFooter.tsx

import React from "react";

import {
  Box,
  Typography,
  Link,
} from "@mui/material";

import { Icon } from "@iconify/react";

import logo from "../../Assests/images/logo/logo.webp";
import footerBg from "../../Assests/images/mobile/Rectangle36.png";

const leftLinks = [
  "About us",
  "Contact us",
  "Blogs",
  "Hire Trainer",
  "Our Pricing",
  "Our Trainings",
  "Terms & Conditions",
  "Privacy Policy",
];

const rightLinks = [
  "Feedback",
  "Email Us",
];

const MobileFooter = () => {
  return (
    <Box
      sx={{
        width: "100%",

        // px: 2,
        // pb: 2,

        boxSizing: "border-box",
      }}
    >
      {/* MAIN FOOTER */}
      <Box
  sx={{
    width: "100%",

    position: "relative",

    overflow: "hidden",

    backgroundColor: "#1470AF",

    px: 3,
    py: 5,

    boxSizing: "border-box",

    boxShadow: "0px 8px 20px rgba(0,0,0,0.18)",

    "&::before": {
      content: '""',

      position: "absolute",

      inset: 0,

      backgroundImage: `url(${footerBg})`,

      backgroundSize: "cover",

      backgroundPosition: "center",

      backgroundRepeat: "no-repeat",

      opacity: 0.08,

      zIndex: 1,
    },
  }}
>
        {/* MAIN GRID */}
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
                underline="always"
                href="#"
                sx={{
                  color: "#fff",

                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                  },

                  fontWeight: 400,

                  lineHeight: 1.2,

                  textDecorationColor: "#fff",
                }}
              >
                {item}
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
                    xs: "16px",
                    sm: "18px",
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
                  width: 70,
                  height: "auto",

                  objectFit: "contain",

                  filter:
                    "brightness(0) invert(1)",
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
                  xs: "16px",
                  sm: "18px",
                },

                fontWeight: 500,

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
              <Icon
                icon="skill-icons:linkedin"
                width="32"
                height="32"
              />

              {/* INSTAGRAM */}
              <Icon
                icon="skill-icons:instagram"
                width="32"
                height="32"
              />

              {/* FACEBOOK */}
              <Icon
                icon="logos:facebook"
                width="32"
                height="32"
              />

              {/* X/TWITTER */}
              <Icon
                icon="pajamas:twitter"
                width="30"
                height="30"
              />
            </Box>

            {/* COPYRIGHT */}
            <Typography
              sx={{
                color: "#fff",

                fontSize: {
                  xs: "14px",
                  sm: "16px",
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