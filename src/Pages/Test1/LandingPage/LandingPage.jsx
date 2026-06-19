import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import ImgLanding from "../../../Assests/images/businessman-with-his-partner-working-office.webp";
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", 
        backgroundColor: "#F9FAFB",
        pt: { xs: "40px", md: "20px" }, 
        pb: { xs: 4, md: 2 },
        overflowX: "hidden"
      }}
    >
      <Container maxWidth="lg">
         <Typography 
            variant="h2" 
            className="card-title-1 title-main"
            sx={{ 
              color: "#1470AF", 
              fontWeight: 700,
              mb: 1, // Gap badhaya heading aur content ke beech
              fontSize: { xs: "24px", md: "36px" }, 
              textAlign: "center"
            }}
          >
            Why Royal Mindfulness Works Differently Than Therapy
          </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                p: { xs: 2, md: 0 } 
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "#4b5563", 
                  lineHeight: 1.8,
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
               Royal Mindfulness is built on a simple idea: the mind improves and heals better with frequent guidance and regular training, not with long gaps between sessions. For many people, meeting someone once a week  or once in a while  and then being left alone to manage stress, emotions, and overthinking on their own is not very practical. When someone is already struggling mentally, expecting them to remember and apply everything discussed in a single session after several days can be difficult. That’s why our sessions happen on alternate days  so the mind is supported continuously, habits are trained gradually, and progress doesn’t depend only on willpower. Instead of treating mental health only as a medical problem, we focus on strengthening awareness, emotional balance, and mental habits through consistent practice. All sessions are guided by qualified psychologists trained in this method, so no one is left to struggle alone  support is consistent, guidance is regular, and change happens gradually, in a way the mind can actually sustain. If you’re unsure whether this approach is right for you, a free consultation can help you understand your current mental patterns and see if mental fitness training is the right next step.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side: Image Fixed Border Radius */}
          <Grid item xs={12} md={6}>
  <Box 
    className="banner-container"
    sx={{
      width: "100%", 
      height: "100%", 
      minHeight: { xs: "350px", md: "520px" }, 
      backgroundImage: `url(${ImgLanding})`,
      
      /* Change 1: Image ko container se bada (zoom) kiya taaki cutting ke liye margin mile */
      backgroundSize: "180% !important", 
      
      /* Change 2: Vertical value 100% rakhi taaki image niche se align ho aur TOP se cut jaye */
      backgroundPosition: "60% 100% !important", 
      
      backgroundRepeat: "no-repeat",
      borderRadius: "20px", 
      overflow: "hidden", 
      border: "1px solid #e5e7eb"
    }}
  />
</Grid>
        </Grid> 
      </Container>
    </Box>
  );
};

export default LandingPage;

