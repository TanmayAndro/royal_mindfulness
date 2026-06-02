// src/Components/mobile/ComparisonSection.tsx

import React from "react";

import { Box, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../Assests/images/logo/logo.webp";

import comimage from "../../Assests/images/mobile/Rectangle16.png";

import topimage from "../../Assests/images/mobile/Rectangle16(1).png";

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
            fontSize: "30px",
          }}
        />
      ) : (
        <CloseIcon
          sx={{
            color: "#FF3B30",
            fontSize: "30px",
          }}
        />
      );
    }

    return (
      <Typography
        sx={{
          color: "#fff",

          fontSize: "13px",

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

        position: "relative",

        overflow: "hidden",

        borderBottomLeftRadius: "90px",

        borderBottomRightRadius: "90px",

        backgroundImage: `url(${topimage})`,

        backgroundSize: "100% 100%",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",
        mt: "-52px",
      }}
    >
      {/* TOP SHAPE IMAGE */}
      <Box
        component="img"
        src={comimage}
        alt="top-shape"
        sx={{
          width: "100%",

          display: "block",

          position: "absolute",

          top: 0,

          left: 0,

          zIndex: 1,

          pointerEvents: "none",
        }}
      />

      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          px: 2.5,

          pt: "80px",

          pb: 5,
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

            lineHeight: 1.12,

            mb: 5,
            mt: 5,
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

              gridTemplateColumns: "1.7fr 1fr 1fr",

              alignItems: "center",

              // pb: 2,

              borderBottom: "1px solid rgb(255, 255, 255)",
            }}
          >
            {/* EMPTY */}
            <Box />

            {/* ROYAL */}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 95,
                  height: 52,

                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  // px: 4,

                  background: "#F4F4F4",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                  borderBottom: "1px solid rgba(30, 34, 154, 0.6)",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    width: "33%",

                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            {/* THERAPY */}
            <Typography
              sx={{
                color: "#fff",

                fontSize: "18px",

                fontWeight: 700,

                textAlign: "center",

                lineHeight: 1.1,
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

                gridTemplateColumns: "1.7fr 1fr 1fr",

                alignItems: "center",

                py: 1.8,

                borderBottom: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              {/* FEATURE */}
              <Typography
                sx={{
                  color: "#fff",

                  fontSize: "15px",

                  fontWeight: 400,

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

                  alignItems: "center",
                }}
              >
                {renderValue(item.royal)}
              </Box>

              {/* THERAPY */}
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",

                  alignItems: "center",
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
