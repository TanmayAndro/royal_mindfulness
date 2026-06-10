// src/Components/mobile/ComparisonSection.tsx

import React from "react";

import { Box, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../Assests/images/logo/logo.webp";

import comimage from "../../Assests/images/mobile/Rectangle16.png";

import topimage from "../../Assests/images/mobile/Rectangle16(1).png";
import { Icon } from "@iconify/react";

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
  const renderValue = (value: boolean | string, type: "royal" | "therapy") => {
    if (typeof value === "boolean") {
      return value ? (
        <Icon
          icon="icon-park-solid:correct"
          width="20"
          height="20"
          color="#16B23A"
        />
      ) : (
        <Icon icon="raphael:cross" width="34" height="34" color="#FF3B30" />
      );
    }

    return (
      <Typography
        sx={{
          color: type === "royal" ? "#1470AF" : "#FFFFFF",

          fontSize: "11px",

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
        marginRight: "23px",

        marginLeft: "23px",
      }}
    >
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
                xs: "24px",
                sm: "30px",
              },

              fontWeight: 700,

              lineHeight: 1.12,

              maxWidth: "320px",

              mx: "auto",

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

                gridTemplateColumns: "1.25fr 0.95fr 0.95fr",

                alignItems: "end",
              }}
            >
              {/* EMPTY */}
              <Box />

              {/* ROYAL */}
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",

                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: 90,

                    height: 42,

                    background: "#F4F4F4",

                    borderTopLeftRadius: "18px",

                    borderTopRightRadius: "18px",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    position: "relative",
                  }}
                >
                  {/* BLUE LINE */}
                  <Box
                    sx={{
                      position: "absolute",

                      bottom: 0,

                      left: 0,

                      width: "100%",

                      height: "2px",

                      background: "#1470AF",
                    }}
                  />

                  <Box
                    component="img"
                    src={logo}
                    alt="logo"
                    sx={{
                      width: "30%",

                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>

              {/* THERAPY */}
              <Typography
                sx={{
                  color: "#fff",

                  fontSize: "15px",

                  fontWeight: 700,

                  textAlign: "center",

                  lineHeight: 1.1,

                  pb: 1,
                }}
              >
                Traditional
                <br />
                Therapy
              </Typography>
            </Box>

            {/* CUSTOM BORDER */}
            <Box
              sx={{
                width: "60%",

                ml: "auto",

                borderBottom: "1px solid rgba(255,255,255,0.8)",
              }}
            />

            {/* ROWS */}
            {comparisonData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",

                  gridTemplateColumns: "1.25fr 0.95fr 0.95fr",

                  alignItems: "center",

                  // py: "3px",

                  position: "relative",

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: "18px",

                    right: 0,

                    bottom: 0,

                    height: "1px",

                    background: "rgba(255,255,255,0.55)",
                  },
                }}
              >
                {/* FEATURE */}
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 0.2,

                    pr: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      lineHeight: 1,

                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon icon="ph:dot-outline" width="20" height="20" />
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",

                      fontSize: "12px",

                      fontWeight: 400,

                      lineHeight: 1.15,
                    }}
                  >
                    {item.feature}
                  </Typography>
                </Box>

                {/* ROYAL */}
                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    backgroundColor: "#F4F4F4",

                    height: "100%",

                    position: "relative",

                    borderLeft: "1px solid #1470AF",

                    borderRight: "1px solid #1470AF",

                    borderBottom:
                      index === comparisonData.length - 1
                        ? "1px solid #1470AF"
                        : "none",

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      bottom: 0,

                      left: 0,

                      width: "100%",

                      height: "1px",

                      background: "#1470AF",
                    },
                  }}
                >
                  {renderValue(item.royal, "royal")}
                </Box>

                {/* i want to add border blue in this  */}

                {/* THERAPY */}
                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  {renderValue(item.therapy, "therapy")}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonSection;
