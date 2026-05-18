import React from 'react';
import { Box, Typography, Button, Grid, Stack, Container } from '@mui/material';
import { trackEvent } from "../../analitics/analytics";
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
    <Box sx={{ width: '100%', overflow: 'hidden', bgcolor: '#fff', marginTop: "50px" }}>
      <Container 
        disableGutters 
        maxWidth={false} 
        sx={{ 
          p: 0, 
          m: 0, 
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
            width: { xs: '85%', md: '45%', lg: '45%', xl: '40%' },
            height: '100%', 
            bgcolor: '#1470af',
            zIndex: 0,
            display: { xs: 'none', md: 'block' },
            maskImage: `radial-gradient(circle at ${isImageLeft ? '100% 0%' : '0% 0%'}, transparent 55%, black 55.1%)`,
            WebkitMaskImage: `radial-gradient(circle at ${isImageLeft ? '100% 0%' : '0% 0%'}, transparent 55%, black 55.1%)`,
          }} 
        />

        <Grid 
          container 
          alignItems="center"
          flexDirection={isImageLeft ? 'row-reverse' : 'row'}
          sx={{ position: 'relative', zIndex: 1, m: 0, width: '100%' }}
        >
          {/* Text Content Grid Item */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack 
              spacing={3} 
              sx={{ 
                width: '100%', 
                maxWidth: '650px',

                // FIXED: 1200px se kam me padding add hogi, 1200px+ (aur 1440px) par strict 0 rahegi
                pt: { 
                  xs: '48px', // 0px se lekar 1199px tak padding-top: 48px apply rahega
                  md: '48px', // 900px screen par bhi padding-top active rahega
                  lg: 0       // Strict 1200px aur usse upar (jaise 1440px) par padding 0 ho jayegi
                },
                pb: { 
                  xs: 0,      // Padding-bottom har jagah commented/zero hai
                  md: 0,      
                  lg: 0 
                },
                px: { 
                  xs: 0,      // Horizontal padding har jagah commented/zero hai
                  md: 0,      
                  lg: 0       
                }
              }}
            >
              <Box>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#1470af', 
                    fontSize: { xs: '2.5rem', md: '3.8rem', lg: '4.8rem', xl: '5.7rem' }, 
                    lineHeight: 1.1 
                  }}
                >
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
                  color: '#fff', 
                  '&:hover': { bgcolor: '#105d91' } 
                }}
                onClick={() => {
                  trackEvent(
                    "about_section_button",
                    "Click",
                    "BookConsultation",
                    true
                  );
                  navigate("/consultation_question");
                }}
              >
                {buttonText}
              </Button>              
            </Stack>
          </Grid>

          {/* Image Content Grid Item */}
          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              justifyContent: isImageLeft ? 'flex-start' : 'flex-end', 
              alignItems: 'flex-end',
              p: 0,
              m: 0
            }}
          >
            <Box 
              component="img" 
              src={image} 
              alt={title}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                zIndex: 2,
                
                maxWidth: { 
                  md: '357px',   
                  lg: '450px',   
                }, 

                mb: { 
                  md: '-7px',    
                  lg: -2,        
                }, 

                mr: { 
                  md: '182px',   
                  lg: '311px',   
                  xl: '311px'    
                },
                ml: {
                  xs: 0,
                  md: isImageLeft ? '182px' : 0,
                  lg: isImageLeft ? '311px' : 0,
                  xl: isImageLeft ? '311px' : 0
                }
              }} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;