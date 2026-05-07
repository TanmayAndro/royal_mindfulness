import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Box,
  Container,
} from "@mui/material";
import CommonButtons from "./CommonButton";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../analitics/analytics";

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
    // Outer section remains 100% width, no extra internal padding
    <Box component="section" sx={{ width: "100%", py: "4rem", backgroundColor: "#ffffff" }}>
      <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Heading - Centered via textAlign and flex alignment */}
        <Typography
          className="title-main"
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "inherit",
            textAlign: "center",
            width: "100%",
            fontSize: { xs: "26px", sm: "40px" },
            color: "#1470AF", // Brand Blue
            mb: { xs: 3, md: 6 },
          }}
        >
          Royal Mindfulness vs Traditional Training
        </Typography>

        {/* Cards Section - Centered and flexible */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch", // Ensures cards have equal height
            width: "100%",
            maxWidth: "1200px", // Safety limit for very large screens
            gap: { xs: 1, md: 0 },
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile
          }}
        >
          {isMd && (
            <Card
              sx={{
                flex: 1,
                borderRadius: "10px 0 0 10px", // Round left corners only
                opacity: 0.9,
                transform: "scale(0.95)",
              }}
              variant="outlined"
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography fontWeight="bold" className="heading-main">Feature</Typography>
              </CardContent>
              <Divider />
              {data.map((item, i) => (
                <CardContent key={i} sx={{ textAlign: "center" }}>
                  <Typography variant="body2" fontWeight={500}>{item.label}</Typography>
                </CardContent>
              ))}
            </Card>
          )}

          <Card
            sx={{
              flex: 1.1, // Slightly larger to emphasize brand card
              borderRadius: isMd ? "10px" : "10px",
              backgroundColor: "#CBE6FF",
              zIndex: 2,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              transform: isMd ? "scale(1.05)" : "none", // Pop out the center card
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography fontWeight="bold" color="primary">
                Royal Mindfulness
              </Typography>
            </CardContent>
            <Divider />
            {data.map((item, i) => (
              <CardContent key={i} sx={{ textAlign: "center" }}>
                <Typography fontWeight={600} color="primary">
                  {item.myYoga}
                </Typography>
              </CardContent>
            ))}
          </Card>

          <Card
            sx={{
              flex: 1,
              borderRadius: isMd ? "0 10px 10px 0" : "10px", // Round right corners
              opacity: 0.9,
              transform: "scale(0.95)",
            }}
            variant="outlined"
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography fontWeight="bold">Traditional Personal Training</Typography>
            </CardContent>
            <Divider />
            {data.map((item, i) => (
              <CardContent key={i} sx={{ textAlign: "center" }}>
                <Typography variant="body2">{item.traditional}</Typography>
              </CardContent>
            ))}
          </Card>
        </Box>

        {/* ================= BUTTONS SECTION ================= */}
        <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 2, sm: 4 },
    // Change: 'center' ki jagah 'flex-start' kiya taaki buttons top se barabar align ho
    alignItems: { xs: "center", sm: "flex-start" }, 
    justifyContent: "center",
    mt: 8,
    width: "100%",
  }}
>
  {/* Book consultation */}
  <Box sx={{ textAlign: "center" }}>
    <CommonButtons
      label="Book a free consultation"
      height="50px"
      sx={{
        backgroundColor: "#1470AF",
        color: "white",
        minWidth: "250px",
      }}
      variant="contained"
      onClick={() => {
        trackEvent("Landing Page", "Click", "BookConsultation");
        handelConsulation("calendly");
      }}
    />
    <Typography fontSize="12px" color="#555" mt="4px">
      (No Credit card required)
    </Typography>
  </Box>

  {/* Hire Trainer */}
  <Box sx={{ textAlign: "center" }}>
    <CommonButtons
      label="Hire Trainer"
      height="50px"
      sx={{ 
        backgroundColor: "#1470AF", 
        color: "white", 
        minWidth: "250px" 
      }}
      variant="contained"
      onClick={() => {
        trackEvent("Landing Page", "Click", "Hire Trainer");
        handelConsulation("rozerpay");
      }}
    />
    {/* Optional: Agar symmetry chahiye toh yahan ek empty space add kar sakte hain */}
    <Box sx={{ height: "20px", display: { xs: "none", sm: "block" } }} />
  </Box>
</Box>
      </Container>
    </Box>
  );
};

export default Comparison;