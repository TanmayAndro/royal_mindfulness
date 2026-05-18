import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface FounderProps {
  image: string;
  name: string;
  designation: string;
  quote: string;
  message: string;
}

const FounderSection: React.FC<FounderProps> = ({ image, name, designation, quote, message }) => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', pt: { xs: 4, md: 12 }, pb: 0, overflow: 'hidden' }}>
      <Container disableGutters maxWidth={false} sx={{ position: 'relative' }}>
        
        {/* Background Blue Shape - Desktop and Mobile Adaptive View */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            // Mobile par full background cover strip aur desktop par original fixed height proportion
            height: { xs: '100%', md: '82%' }, 
            bgcolor: '#1470af',
            zIndex: 0,
            // Mobile par clean straight rectangular layer aur desktop par exact complex ellipse curve
            clipPath: {
              xs: 'none', 
              md: 'ellipse(100% 100% at 50% 100%)'
            },
            borderRadius: { xs: 0, md: 0 }
          }} 
        />

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 3, md: 4 }} 
          alignItems="stretch" 
          justifyContent="center"
          sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 10 } }}
        >
          {/* Text Content Area */}
          <Box sx={{ 
            flex: 1, 
            color: '#fff', 
            textAlign: 'center', 
            pb: { xs: 2, md: 2 }, 
            pt: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <FormatQuoteIcon sx={{ 
              fontSize: { xs: 40, md: 60 }, 
              opacity: 0.9, 
              mb: 1, 
              transform: 'rotate(180deg)',
              mx: 'auto' 
            }} />
            
            <Typography variant="body1" sx={{ 
              fontSize: { xs: '0.95rem', md: '1.1rem' }, 
              lineHeight: 1.6, 
              mb: 3, 
              maxWidth: '800px', 
              mx: 'auto',
              whiteSpace: 'pre-line' 
            }}>
              {message}
            </Typography>

            <Typography variant="h6" sx={{ 
              fontStyle: 'italic', 
              fontWeight: 600, 
              mb: 3,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              "{quote}"
            </Typography>

            <Box sx={{ mb: { xs: 2, md: 0 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.8, fontWeight: 500 }}>
                {designation}
              </Typography>
            </Box>
          </Box>

          {/* Founder Image Area - Responsive Clean Padding Integration */}
          <Box 
            sx={{ 
              width: { xs: '85%', sm: '65%', md: '450px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end', 
              mr: { md: -2 }, 
              mt: { xs: 2, md: 0 },
              mx: { xs: 'auto', md: 0 },
              lineHeight: 0, 
              alignSelf: 'flex-end',
              // Mobile screens par image ke neeche background border se subtle touch spacing maintain karne ke liye
              pb: { xs: 0, md: 0 }
            }}
          >
            <Box 
              component="img" 
              src={image} 
              alt={name}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: { xs: '280px', sm: '320px', md: '440px' },
                display: 'block',
                mb: 0, 
                filter: 'drop-shadow(0px -10px 20px rgba(0,0,0,0.15))',
                zIndex: 2,
                clipPath: 'none' 
              }} 
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FounderSection;