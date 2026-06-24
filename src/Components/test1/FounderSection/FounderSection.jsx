import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FounderImage from "../../../Assests/images/tanmay_image.png"
import { styled } from "@mui/system";

const DescriptionText = styled(Typography)({
  color: "#4a5568", 
  fontWeight: 400,
  marginTop: "12px",
  lineHeight: 1.6,
});

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
    // Section ki top padding kam kar di hai (py: { xs: 4, md: 6 }) taaki extra space hat jaye
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: '#ffffff', width: '100%' }}>
      <Typography
      className="title-main"
      sx={{ 
        fontWeight: "500",
        color: "#1470AF",
        // Fix 1: textAlign ko fontSize se bahar nikala gaya hai
        textAlign: 'center', 
        fontSize: {
          xs: "24px",  
          md: "36px",  
        },
        mt: 0,
        mb: 1
      }}
    >
      Words From The Founder
    </Typography>
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, md: 6 }} 
          alignItems="center"
        >       
          {/* Column 1: Text Content (Left Side) */}
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              
              
              <Box sx={{ mb: 3 }}>
                 {text.map((para, index) => (
                  <DescriptionText
                    key={index}
                    sx={{
                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                    }}
                  >
                    {para}
                  </DescriptionText>
                ))} 
              </Box>

              <Box 
                sx={{ 
                  py: 1, 
                  borderLeft: { md: '4px solid #1470AF' },
                  pl: { md: 2 },
                  mb: 3,
                  fontStyle: 'italic'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#1a1a1a',
                    fontSize: { xs: '16px', md: '18px' }
                  }}
                >
                  "{motto}"
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h5" sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>
                  {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#1470AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>
                  {title}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 2: Image (Right Side) */}
          {/* <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={image}
              alt={name}
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0px 15px 35px rgba(20, 112, 175, 0.1)',
                display: 'block',
                mx: 'auto' 
              }}
            />
          </Grid> */}
          {/* Column 2: Image (Right Side) */}
<Grid item xs={12} md={5}>
  <Box
    component="img"
    src={image}
    alt={name}
    sx={{
      width: '100%',
      maxWidth: '360px',
      // Change 1: Fixed height dena zaroori hai niche se cut karne ke liye
      height: { xs: '300px', md: '400px' }, 
      // Change 2: 'cover' ensure karta hai ki image stretch na ho
      objectFit: 'cover',
      // Change 3: 'top' ka matlab hai image upar se dikhegi aur niche se cut jayegi
      objectPosition: 'top', 
      borderRadius: '24px',
      boxShadow: '0px 15px 35px rgba(20, 112, 175, 0.1)',
      display: 'block',
      mx: 'auto' 
    }}
  />
</Grid>

        </Grid>
      </Container>
    </Box>
  );
};

// export default FounderSection;

export default React.memo(FounderSection);