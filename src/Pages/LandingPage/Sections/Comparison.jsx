import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import CommonButtons from "../CommonButtons";
import { useNavigate } from "react-router-dom";


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
  const isMd = useMediaQuery(theme.breakpoints.up("md")); // >=900px
  const navigate = useNavigate();
  
  const handelConsulation = (clickedOn: "calendly" | "rozerpay") => {
  const token = localStorage.getItem("user_token");

  if (!token) {
    // Save intent before redirecting
    localStorage.setItem("redirectAfterLogin", clickedOn);
    navigate("/login");
    return;
  }

  // Already logged in → open directly
  if (clickedOn === "calendly") {
    window.open("https://calendly.com/royalmindfulness/30min", "_blank");
  } else if (clickedOn === "rozerpay") {
    window.open("https://pages.razorpay.com/pl_RJ40RFXQGpJ4w5/view", "_blank");
  }
};
  

  return (
    <>
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
            alignItems: "flex-start",
            gap: "0px",
            margin: "3rem",
            flexWrap: "nowrap", // ✅ force side by side, no stacking
          }}
        >
          {/* Feature Card – only on desktop >=900px */}
          {isMd && (
            <Card
              sx={{
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                width: "300px",
                marginRight: "-20px",
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

          {/* Royal Card – always visible */}
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              backgroundColor: "#cbe6ff",
              zIndex: 2,
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

          {/* Traditional Card – always visible */}
          <Card
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              width: "300px",
              marginLeft: "-20px",
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
        </div>

        {/* Buttons Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "start",
            }}
          >
            <CommonButtons
              label="Book a free consultation"
              height="50px"
              sx={{ backgroundColor: "#1470AF", color: "white" }}
              variant="contained"
              onClick={() =>handelConsulation("calendly")}
            />

            <CommonButtons
              label="Hire Trainer"
              width="150px"
              height="50px"
              sx={{ backgroundColor: "#1470AF", color: "white" }}
              variant="contained"
              onClick={() =>handelConsulation("rozerpay") }
            />
          </Box>
        </Box>
      </div>

      {/* Background Wave */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* wave SVG commented */}
      </Box>
    </>
  );
};
