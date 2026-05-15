import React from 'react';
import { Box, Typography, Button, Grid, Stack, Container } from '@mui/material';
import { trackEvent } from "../../analitics/analytics";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export interface AboutData {
  id: number;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  note: string;
  image: any;
  isImageLeft: boolean;
  backdropStyle: string;
}

interface Props {
  data: AboutData;
}

const AboutSection: React.FC<Props> = ({ data }) => {
  const { title, highlight, description, buttonText, image, isImageLeft } = data;
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', bgcolor: '#fff' }}>
      <Container 
        disableGutters 
        maxWidth={false} 
        sx={{ 
          p: 0, // Force padding to 0
          m: 0, // Force margin to 0
          width: '100%',
          position: 'relative' 
        }}
      >
        {/* Structural Blue Backdrop */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            right: isImageLeft ? 'auto' : 0,
            left: isImageLeft ? 0 : 'auto',
            width: { xs: '85%', md: '45%' },
            height: '100%', 
            bgcolor: '#1470af',
            zIndex: 0,
            maskImage: 'radial-gradient(circle at 0% 0%, transparent 55%, black 56%)',
            WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 55%, black 56%)',
          }} 
        />

        <Grid 
          container 
          alignItems="center"
          flexDirection={isImageLeft ? 'row-reverse' : 'row'}
          sx={{ position: 'relative', zIndex: 1, m: 0, width: '100%' }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={3} sx={{ px: { xs: 3, md: 10 }, py: { xs: 6, md: 10 }, width: '100%', maxWidth: '650px' }}>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#1470af', fontSize: { xs: '2.5rem', md: '5.7rem' }, lineHeight: 1.1 }}>
                  {title} <br />
                  <span style={{ color: '#333' }}>{highlight}</span>
                </Typography>
               
              </Box>
              <Typography sx={{ color: '#141212', fontSize: '1.1rem', lineHeight: 1.7 }}>
                {description}
              </Typography>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#1470af', 
                  width: 'fit-content', 
                  px: 4, 
                  py: 1.5, 
                  fontWeight: 700, 
                  textTransform: 'none',
                  color: '#fff', // Ensure text is white
                  '&:hover': { bgcolor: '#105d91' } 
                }}
                onClick={() => {
                  // 1. Event Track karein
                  trackEvent(
                    "about_section_button",
                    "Click",
                    "BookConsultation",
                    true
                  );
                  
                  // 2. Navigation trigger karein
                  navigate("/consultation_question");
                }}
              >
                {buttonText}
              </Button>              
            </Stack>
          </Grid>

          {/* Image Content - No Padding/Margin */}
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            justifyContent: isImageLeft ? 'flex-start' : 'flex-end', 
            alignItems: 'flex-end',
            p: 0,
            m: 0
          }}>
            <Box 
              component="img" 
              src={image} 
              alt={title}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '650px',
                display: 'block',
                mb: -0.5, // Bottom gap fix
                zIndex: 2
              }} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;