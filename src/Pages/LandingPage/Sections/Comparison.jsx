import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const data = [
  {
    label: "Frequency",
    myYoga: "Daily/ thrice a week",
    traditional: "Weekly/Bi-weekly",
  },
  {
    label: "Cost",
    myYoga: "Affordable ($5 -$20 per session)",
    traditional: "$100–$200 per session",
  },
  {
    label: "Impact",
    myYoga: "Immediate & lifelong benefits",
    traditional: "Gradual, long-term",
  },
  {
    label: "Place",
    myYoga: "Clinic/Online (varies)",
    traditional: "100% Online, train anywhere",
  },
  {
    label: "Availability",
    myYoga: "Appointment-based",
    traditional: "Instant access, 24/7",
  },
  {
    label: "Focus",
    myYoga: "Healing from mental ailments",
    traditional: "Healing + Fitness Training",
  },
];

export const Comparison = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          marginTop: "2rem",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#1470AF",
          alignSelf: "baseline",
          fontFamily: "Instrument sans",
        }}
      >
        Royal Mindfulness vs Traditional Training
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0px", // No gap between cards
          margin: "3rem",
        }}
      >
        {isMd && (
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              marginRight: "-20px", // Overlaps center card
              opacity: 0.9,
              transform: "scale(0.95)",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontFamily: "lato",
                  fontSize: "18px",
                  // color: "#E5E7EB",
                }}
              >
                Feature
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, index) => (
              <CardContent key={index}>
                <Typography
                  sx={{
                    marginTop: "7px",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                >
                  {item.label}
                </Typography>
              </CardContent>
            ))}
          </Card>
        )}

        <Card
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "10px",
            width: "320px",
            backgroundColor: "#cbe6ff",
            zIndex: 2, // Higher z-index to be on top
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              align="center"
              sx={{
                fontFamily: "lato",
                fontSize: "18px",
              }}
            >
              Royal Mindfulness
            </Typography>
          </CardContent>
          <Divider />
          {data.map((item, index) => (
            <CardContent key={index}>
              <Typography
                align="center"
                color="primary"
                sx={{
                  marginTop: "7px",
                  fontFamily: "lato",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {item.myYoga}
              </Typography>
            </CardContent>
          ))}
        </Card>

        {isSM && (
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              marginLeft: "-20px", // Overlaps center card
              opacity: 0.9,
              transform: "scale(0.95)",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontFamily: "lato",
                  fontSize: "18px",
                  // color: "#E5E7EB",
                }}
              >
                Traditional Personal Training
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, index) => (
              <CardContent key={index}>
                <Typography
                  sx={{
                    marginTop: "7px",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                >
                  {item.traditional}
                </Typography>
              </CardContent>
            ))}
          </Card>
        )}
      </div>
    </div>
  );
};
