import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import FounderImage from "../../../Assests/images/tanmay_image.png"
import { styled } from "@mui/system";

const DescriptionText = styled(Typography)({
  color: "#4a5568", // Changed to a softer grey-blue for better readability
  fontSize: "1.05rem",
  fontWeight: 400,
  marginTop: "12px",
  lineHeight: 1.6,
  textTransform: 'capitalize'
});

// Content configuration remains the same
const FOUNDER_CONTENT = {
  name: "Tanmay Agnihotri",
  title: "Founder",
  image: FounderImage,
  text: [
    "I started this organization to help those who have been struggling with mental health issues for a long time. When I saw how poorly many mental health care techniques were designed, it became necessary for me to come up with more advanced mental fitness training — training that is more beneficial and practical than many current practices.",
    "I sincerely hope that our mental fitness trainings and programs serve you to your satisfaction and bring greater clarity, strength, and joy into your life."
  ],
  motto: "With consistent training, the mind learns to serve you obediently."
};

const FounderSection = () => {
  const { name, title, image, text, motto } = FOUNDER_CONTENT;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Main Row Container - Direction column-reverse ensures image can stay on top or bottom if desired */}
        <Grid container spacing={6} alignItems="center">
          
          {/* Column 1: Text Content */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ pr: { md: 4 } }}>
             <Typography
                component="h2"
                className="card-title-1 title-main"
                sx={{ fontWeight: "700 !important" }}
              >
                Words From The Founder
              </Typography>
              
              <Box sx={{ mt: 3, mb: 4 }}>
                {text.map((para, index) => (
                  <DescriptionText>{para}</DescriptionText>
                ))}
              </Box>

              <Paper 
                elevation={0} 
                sx={{ 
                  p: 0, 
                  borderColor: 'primary.main',
                  borderRadius: '4px 16px 16px 4px',
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ fontWeight: 700 }}
                >
                  "{motto}"
                </Typography>
              </Paper>

              <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 400, color: '#0f172a' }}>
                  {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {title}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 2: Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={image}
              alt={name}
              sx={{
                width: { xs: '100%', sm: '80%', md: '80%' }, // Responsive width
                maxWidth: '400px',
                
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
                display: 'block',
                mx: 'auto' // Crucial for centering block elements
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default FounderSection;