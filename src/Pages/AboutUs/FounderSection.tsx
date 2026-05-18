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
    <Box sx={{ width: '100%', bgcolor: '#fff', pt: { xs: 4, md: 0 }, pb: 0, overflow: 'hidden' }}>
      <Container disableGutters maxWidth={false} sx={{ position: 'relative' }}>
        
        {/* Background Blue Shape - KEPT EXACTLY THE SAME AS ORIGINAL */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: { xs: '100%', md: '82%' }, 
            bgcolor: '#1470af',
            zIndex: 0,
            clipPath: {
              xs: 'none', 
              md: 'ellipse(100% 100% at 50% 100%)'
            },
            borderRadius: { xs: 0, md: 0 }
          }} 
        />

        {/* Stack Direction - Balanced dynamic layout container */}
        <Stack 
          direction={{ xs: 'column-reverse', md: 'row-reverse' }} 
          spacing={{ xs: 3, md: 4, lg: 6 }} 
          alignItems="stretch" 
          justifyContent="center"
          sx={{ 
            position: 'relative', 
            zIndex: 1, 
            px: { xs: 3, md: 5, lg: 10 }, 
            maxWidth: '1440px',
            m: '0 auto'
          }}
        >
          
          {/* Text Content Area - FIXED WITH YOUR EXACT PADDING & ALIGNMENT PROPERTIES */}
          <Box sx={{ 
            flex: 1, 
            color: '#fff', 
            // FIXED: Enforced text-align left across all desktop monitor sizes
            textAlign: { xs: 'center', md: 'left' }, 
            // FIXED: Added exact requested paddings to completely secure text visibility
            pb: { xs: 4, md: '48px' }, 
            pt: { xs: 2, md: '101px' }, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // FIXED: Preserved minimum width control parameters to avoid compression
            minWidth: { md: '450px', lg: '600px' } 
          }}>
            <FormatQuoteIcon sx={{ 
              fontSize: { xs: 40, md: 60 }, 
              opacity: 0.9, 
              mb: 1, 
              transform: 'rotate(180deg)',
              mx: { xs: 'auto', md: '0' } 
            }} />
            
            <Typography variant="body1" sx={{ 
              fontSize: { xs: '0.95rem', md: '1rem', lg: '1.1rem' }, 
              lineHeight: 1.6, 
              mb: 3, 
              maxWidth: '800px', 
              mx: { xs: 'auto', md: '0' },
              whiteSpace: 'pre-line' 
            }}>
              {message}
            </Typography>

            <Typography variant="h6" sx={{ 
              fontStyle: 'italic', 
              fontWeight: 600, 
              mb: 3,
              fontSize: { xs: '1.1rem', md: '1.15rem', lg: '1.25rem' }
            }}>
              "{quote}"
            </Typography>

            <Box sx={{ mb: { xs: 2, md: 0 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.4rem', lg: '1.5rem' } }}>
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.8, fontWeight: 500 }}>
                {designation}
              </Typography>
            </Box>
          </Box>

          {/* Founder Image Area - Unchanged original desktop UI metrics */}
          <Box 
            sx={{ 
              width: { xs: '85%', sm: '65%', md: '380px', lg: '450px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end', 
              ml: { md: -2 }, 
              mt: { xs: 2, md: 0 },
              mx: { xs: 'auto', md: 0 },
              lineHeight: 0, 
              alignSelf: 'flex-end',
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
                maxWidth: { xs: '280px', sm: '320px', md: '380px', lg: '440px' },
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