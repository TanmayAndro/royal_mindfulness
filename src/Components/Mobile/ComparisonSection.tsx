// src/Components/mobile/ComparisonSection.tsx

import React from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../Assests/images/logo/logo.webp";

import comimage from "../../Assests/images/mobile/Rectangle16.png";

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

    px: 4,
    py: 4,

    boxSizing: "border-box",

    display: "flex",

    justifyContent: "center",
  }}
>
  {/* MAIN CARD */}
  <Box
    sx={{
      width: "100%",
      // height: "450px",
      

      // borderTopLeftRadius: "80px",
      // borderTopRightRadius: "120px",
      // borderBottomLeftRadius: "90px",
      // borderBottomRightRadius: "90px",

      px: 2.5,
      py: 5,

      overflow: "hidden",

      position: "relative",

      /* IMAGE AS BACKGROUND */
      backgroundImage: `url(${comimage})`,

      backgroundSize: "cover",

      backgroundPosition: "center",

      backgroundRepeat: "no-repeat",

      // marginTop: "-100px",
    }}
  >
    {/* CONTENT */}
    <Box
      sx={{
        position: "relative",

        zIndex: 2,
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

                gridTemplateColumns:
                  "1.7fr 1fr 1fr",

                alignItems: "center",

                pb: 2,

                borderBottom:
                  "1px solid rgba(255,255,255,0.6)",
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
                    width: 92,
                    height: 92,

                    borderRadius: "18px",

                    background: "#F4F4F4",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="logo"
                    sx={{
                      width: "54%",

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
            {comparisonData.map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "grid",

                    gridTemplateColumns:
                      "1.7fr 1fr 1fr",

                    alignItems: "center",

                    py: 1.8,

                    borderBottom:
                      "1px solid rgba(255,255,255,0.5)",
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
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonSection;