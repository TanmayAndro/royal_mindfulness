// src/Components/mobile/ComparisonSection.tsx

import React from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../Assests/images/logo/logo.webp";


const comparisonData = [
  {
    feature: "Training Sessions",
    royal: "Every Other Day",
    therapy: "Weekly/Bi-weekly",
  },

  {
    feature: "Pricing",
    royal: "$19.83/Session",
    therapy: "$65 + /Session",
  },

  {
    feature: "Sessions by Certified Trainer",
    royal: true,
    therapy: false,
  },

  {
    feature: "Messaging any time",
    royal: true,
    therapy: false,
  },

  {
    feature: "In-Place visits",
    royal: false,
    therapy: true,
  },

  {
    feature: "Chat sessions",
    royal: true,
    therapy: false,
  },

  {
    feature: "Phone sessions",
    royal: true,
    therapy: false,
  },

  {
    feature: "Video sessions",
    royal: true,
    therapy: false,
  },

  {
    feature: "Easy scheduling",
    royal: true,
    therapy: false,
  },

  {
    feature: "Smart provider matching",
    royal: true,
    therapy: false,
  },

  {
    feature: "Access Training from anywhere",
    royal: true,
    therapy: false,
  },
];

const ComparisonSection = () => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckIcon
          sx={{
            color: "#16B23A",
            fontSize: "28px",
            fontWeight: 700,
          }}
        />
      ) : (
        <CloseIcon
          sx={{
            color: "#FF3B30",
            fontSize: "28px",
            fontWeight: 700,
          }}
        />
      );
    }

    return (
      <Typography
        sx={{
          color: "ffffff",

          fontSize: "12px",

          fontWeight: 500,

          textAlign: "center",

          lineHeight: 1.2,
          
        }}
      >
        {value}
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",

        px: 2.5,
        py: 6,

        boxSizing: "border-box",
        // bgcolor: "#1470AF",
      }}
    >
      {/* MAIN CARD */}
      <Box
  sx={{
    width: "100%",

    background: "#1470AF",

    /* FIGMA SHAPE */
    borderTopLeftRadius: "70px",
    borderTopRightRadius: "120px",
    borderBottomLeftRadius: "95px",
    borderBottomRightRadius: "95px",

    px: 2,
    py: 5,

    boxShadow:
      "0px 12px 28px rgba(0,0,0,0.18)",

    overflow: "hidden",

    position: "relative",
  }}
>
        {/* TITLE */}
        <Typography
          sx={{
            color: "#fff",

            textAlign: "center",

            fontSize: {
              xs: "28px",
              sm: "36px",
            },

            fontWeight: 700,

            lineHeight: 1.15,

            mb: 5,
          }}
        >
          Royal Mindfulness Training
          <br />
          vs Traditional Therapy
        </Typography>

        {/* TABLE */}
        <Box
          sx={{
            width: "100%",

            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns:
                "1.6fr 1fr 1fr",

              alignItems: "center",

              pb: 2,

              borderBottom:
                "1px solid rgba(255,255,255,0.4)",
            }}
          >
            {/* EMPTY */}
            <Box />

            {/* ROYAL */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
               
              }}
            >
              <Box
                sx={{
                  width: 82,
                  height: 82,

                  borderRadius: "18px",

                  background: "#F5F5F5",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fff",
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
                  }}
                />
              </Box>
            </Box>

            {/* THERAPY */}
            <Typography
              sx={{
                color: "#fff",

                fontSize: "20px",

                fontWeight: 700,

                lineHeight: 1.1,

                textAlign: "center",
              }}
            >
              Traditional
              <br />
              Therapy
            </Typography>
          </Box>

          {/* ROWS */}
          {comparisonData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",

                gridTemplateColumns:
                  "1.6fr 1fr 1fr",

                alignItems: "center",

                minHeight: "58px",

                borderBottom:
                  "1px solid rgba(255,255,255,0.4)",
              }}
            >
              {/* FEATURE */}
              <Typography
                sx={{
                  color: "#fff",

                  fontSize: "16px",

                  fontWeight: 500,

                  lineHeight: 1.15,

                  pr: 1,
                }}
              >
                • {item.feature}
              </Typography>

              {/* ROYAL */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#1470AF",
                }}
              >
                {renderValue(item.royal)}
              </Box>

              {/* THERAPY */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {renderValue(item.therapy)}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonSection;