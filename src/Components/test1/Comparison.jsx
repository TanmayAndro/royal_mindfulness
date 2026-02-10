import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import CommonButtons from "./CommonButton";
import { useNavigate } from "react-router-dom";

const data = [
  { label: "Frequency", myYoga: "Daily/ thrice a week ", traditional: "Weekly/Bi-weekly" },
  { label: "Cost", myYoga: "Affordable ($5 -$20 per session) ", traditional: "$100–$200 per session " },
  { label: "Impact", myYoga: "Gradual, long-term ", traditional: "Immediate & lifelong benefits" },
  { label: "Place", myYoga: "100% Online, train anywhere ", traditional: "Clinic/Online (varies)" },
  { label: "Availability", myYoga: "Instant access, 24/7 ", traditional: "Appointment-based" },
  { label: "Focus", myYoga: "Healing + Fitness Training ", traditional: "Healing from mental ailments" },
];

const Comparison = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const handelConsulation = (clickedOn) => {
    if (clickedOn === "calendly") navigate("/consultation_question");
    if (clickedOn === "rozerpay") navigate("/book-now");
  };

  return (
    <>
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        {/* Heading */}
        <Typography
        className="title-main"
          variant="h4"
          fontWeight="bold"
          sx={{
            mt: "2rem",
            fontSize: { xs: "26px", sm: "40px" },
            color: "#010406ff",
          }}
        >
          Royal Mindfulness vs Traditional Training
        </Typography>

        {/* Cards Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 0,
            mt: { xs: 3, md: 6 },
            flexWrap: "nowrap",
          }}
        >
          {isMd && (
            <Card
              sx={{
                width: 300,
                borderRadius: "10px",
                opacity: 0.9,
                transform: "scale(0.95)",
                mr: "-20px",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography  fontWeight="bold" className="heading-main">Feature</Typography>
              </CardContent>
              <Divider />
              {data.map((item, i) => (
                <CardContent key={i}>
                  <Typography>{item.label}</Typography>
                </CardContent>
              ))}
            </Card>
          )}

          <Card
            sx={{
              width: 300,
              borderRadius: "10px",
              backgroundColor: "#CBE6FF",
              zIndex: 2,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography fontWeight="bold" color="primary" align="center">
                Royal Mindfulness
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, i) => (
              <CardContent key={i}>
                <Typography align="center" fontWeight={600} color="primary">
                  {item.myYoga}
                </Typography>
              </CardContent>
            ))}
          </Card>

          <Card
            sx={{
              width: 300,
              borderRadius: "10px",
              opacity: 0.9,
              transform: "scale(0.95)",
              ml: "-20px",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography fontWeight="bold">Traditional Personal Training</Typography>
            </CardContent>
            <Divider />
            {data.map((item, i) => (
              <CardContent key={i}>
                <Typography>{item.traditional}</Typography>
              </CardContent>
            ))}
          </Card>
        </Box>

        {/* ================= BUTTONS SECTION (FIXED) ================= */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "600px", // 🔑 laptop/1440px fix
            }}
          >
           {/* Book consultation */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",   // 👈 1440px+
                },

                textAlign: "center",
              }}
            >
              <CommonButtons
                label="Book a free consultation"
                height="50px"

                sx={{
                  backgroundColor: "#1470AF",
                  color: "white",
                  marginTop: { xs: "15px", sm: "25px" },
                }}

                variant="contained"
                onClick={() => handelConsulation("calendly")}
              />
              <Typography fontSize="12px" color="#555" mt="4px">
                (No Credit card required)
              </Typography>
            </Box>

            {/* Hire Trainer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                width: {
                  xs: "100%",
                  sm: "auto",
                  xl: "auto",   // 👈 1440px+
                },
              }}
            >
              <CommonButtons
                label="Hire Trainer"
                height="50px"
                sx={{ backgroundColor: "#1470AF", color: "white" }}
                variant="contained"
                onClick={() => handelConsulation("rozerpay")}
              />
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Comparison;
