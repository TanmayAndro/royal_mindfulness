// import React from "react";
// import "./LandingPage.css";
// import ImgLanding from "../../../Assests/images/businessman-with-his-partner-working-office.jpg";

// const LandingPage = () => {
//   return (
//     <section className="landing-wrapper">
//       <div
//         className="banner-container"
//         style={{ backgroundImage: `url(${ImgLanding})` }}
//       >
//         <div className="overlay-langin-page">
//           <div className="content-card">
//             <h2 className="card-title-1 title-main">
//               Why Royal Mindfulness Works Differently Than Therapy
//             </h2>

//             <p className="card-description">
//              Royal Mindfulness is built on a simple idea: the mind improves and heals better with frequent guidance and regular training, not with long gaps between sessions. For many people, meeting someone once a week  or once in a while  and then being left alone to manage stress, emotions, and overthinking on their own is not very practical. When someone is already struggling mentally, expecting them to remember and apply everything discussed in a single session after several days can be difficult. That’s why our sessions happen on alternate days  so the mind is supported continuously, habits are trained gradually, and progress doesn’t depend only on willpower. Instead of treating mental health only as a medical problem, we focus on strengthening awareness, emotional balance, and mental habits through consistent practice. All sessions are guided by qualified psychologists trained in this method, so no one is left to struggle alone  support is consistent, guidance is regular, and change happens gradually, in a way the mind can actually sustain. If you’re unsure whether this approach is right for you, a free consultation can help you understand your current mental patterns and see if mental fitness training is the right next step.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LandingPage;
import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import ImgLanding from "../../../Assests/images/businessman-with-his-partner-working-office.jpg";
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", 
        backgroundColor: "#F9FAFB",
        pt: { xs: "40px", md: "80px" }, 
        pb: { xs: 4, md: 8 },
        overflowX: "hidden"
      }}
    >
      <Container maxWidth="lg">
        {/* Grid container with stretch to keep columns equal height */}
        <Grid container spacing={4} alignItems="stretch">
          
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6}>
            <Box 
              className="content-card" 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                backgroundColor: "#F9FAFB",
                borderRadius: "20px",
                p: { xs: 2, md: 0 } 
              }}
            >
              <Typography 
                variant="h2" 
                className="card-title-1 title-main"
                sx={{ 
                  color: "#1470AF", 
                  fontWeight: 700,
                  mb: 3,
                  // Responsive font sizes for better readability
                  fontSize: { xs: "24px", md: "32px" }, 
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                Why Royal Mindfulness Works Differently Than Therapy
              </Typography>

              <Typography 
                variant="body1" 
                className="card-description"
                sx={{ 
                  color: "#4b5563", 
                  lineHeight: 1.8,
                  fontSize: "16px",
                  textAlign: "justify",
                  mb: 4
                }}
              >
               Royal Mindfulness is built on a simple idea: the mind improves and heals better with frequent guidance and regular training, not with long gaps between sessions. For many people, meeting someone once a week  or once in a while  and then being left alone to manage stress, emotions, and overthinking on their own is not very practical. When someone is already struggling mentally, expecting them to remember and apply everything discussed in a single session after several days can be difficult. That’s why our sessions happen on alternate days  so the mind is supported continuously, habits are trained gradually, and progress doesn’t depend only on willpower. Instead of treating mental health only as a medical problem, we focus on strengthening awareness, emotional balance, and mental habits through consistent practice. All sessions are guided by qualified psychologists trained in this method, so no one is left to struggle alone  support is consistent, guidance is regular, and change happens gradually, in a way the mind can actually sustain. If you’re unsure whether this approach is right for you, a free consultation can help you understand your current mental patterns and see if mental fitness training is the right next step.
              </Typography>

              
            </Box>
          </Grid>

          {/* Right Side: Image Column with Top Crop Fix */}
          <Grid item xs={12} md={6}>
            <Box 
              className="banner-container"
              sx={{
                width: "100%", 
                height: "100%", 
                mt: { xs: 0, md: "40px" }, 
                minHeight: { xs: "350px", md: "520px" }, 
                backgroundImage: `url(${ImgLanding})`,
                backgroundSize: "cover !important",
              
                backgroundPosition: "65% -93px !important", 
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            />
          </Grid>
        </Grid> 
      </Container>
    </Box>
  );
};

export default LandingPage;