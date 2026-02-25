import React from "react";
import { Box, Typography, Grid, Container, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// ================= Styled Components =================

const StyledSection = styled(Box)({
  backgroundColor: "#f3f5f8",
  padding: "100px 0",
  textAlign: "center",
});

const TitleText = styled(Typography)({
  color: "#1470AF",
  fontWeight: 700,
  fontSize: "1.4rem",
  marginTop: "16px", // Space between ID and Title
});

const DescriptionText = styled(Typography)({
  color: "#4a5568", // Changed to a softer grey-blue for better readability
  fontSize: "1.05rem",
  fontWeight: 400,
  marginTop: "12px",
  lineHeight: 1.6,
});

// ================= Reusable Feature Card =================

// Added 'id' to the props here
const FeatureCard = ({ id, title, description, subText, buttonText, route }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>

      <TitleText variant="h5">{title}</TitleText>

      <DescriptionText>{description}</DescriptionText>
      
      {buttonText && (
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1470af", // Removed semicolon
              padding: "10px 25px",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "#0d5a8f",
              },
            }}
            onClick={() => route && navigate(route)}
          >
            {buttonText}
          </Button>
        </Box>
      )}

      {subText && (
        <Typography
          sx={{
            color: "#64748b",
            fontSize: "0.85rem",
            mt: 1,
            fontWeight: 500
          }}
        >
          {subText}
        </Typography>
      )} 


      {/* Step ID Circle */}
      <Avatar 
        sx={{ 
          bgcolor: "#1470AF", 
          width: 50, 
          height: 50, 
          fontSize: "1.5rem", 
          fontWeight: 700,
          boxShadow: '0 4px 10px rgba(0,93,93,0.3)',
          mt: 1
        }}
      >
        {id}
      </Avatar>
    </Box>
  );
};

// ================= Main Component =================

const TrustMetrics = () => {
  const features = [
    {
      id: 1,
      title: "Get a Free Consultation",
      description: "Start with a free 15-minute consultation where we understand your mental fitness goals — no obligations.",
      // subText: "(No Credit card required)",
      // buttonText: "Book Free Consultation",
      // route: "/consultation_question",
    },
    {
      id: 2,
      title: "We match you with a Trainer",
      description: "Based on your consultation, our system assigns you a certified mental fitness trainer aligned with your goals.",
      // buttonText: "Hire Trainer",
      // route: "/book-now",
    },
    {
      id: 3,
      title: "Start Daily Training",
      description: "Get live, guided training sessions like Yoga Nidra and breathwork tailored to build mental resilience.",
      // buttonText: "Start Session",
    },
  ];

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ 
            color: "#1470AF", 

            mb: 10, 
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.5rem' } 
          }}
        >
          How It Works
        </Typography>

        <Grid container spacing={6}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              {/* React passes all properties of 'feature' (including id) to the component */}
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default TrustMetrics;