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
    <Box sx={{ width: '100%', bgcolor: '#fff', pt: { xs: 5, md: 12 }, pb: 0, overflow: 'hidden' }}>
      <Container disableGutters maxWidth={false} sx={{ position: 'relative' }}>
        
        {/* Background Blue Shape - Height and Curve Adjusted */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: { xs: '90%', md: '82%' }, // Slightly adjusted height
            bgcolor: '#1470af',
            zIndex: 0,
            clipPath: {
              xs: 'ellipse(150% 100% at 50% 100%)', 
              md: 'ellipse(100% 100% at 50% 100%)'
            },
          }} 
        />

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, md: 4 }} 
          alignItems="flex-end" // Image hamesha bottom se touch rahegi
          justifyContent="center"
          sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 10 } }}
        >
          {/* Text Content Area */}
          <Box sx={{ 
            flex: 1, 
            color: '#fff', 
            textAlign: 'center', 
            pb: { xs: 6, md: 8 }, // Space from name to bottom
            pt: { xs: 8, md: 2 } 
          }}>
            <FormatQuoteIcon sx={{ 
              fontSize: { xs: 40, md: 60 }, 
              opacity: 0.9, 
              mb: 1, 
              transform: 'rotate(180deg)' 
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

            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.8, fontWeight: 500 }}>
                {designation}
              </Typography>
            </Box>
          </Box>

          {/* Founder Image Area - Alignment Fixed */}
          <Box 
            sx={{ 
              width: { xs: '85%', sm: '65%', md: '450px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              mr: { md: -2 }, // Balanced right margin
              mt: { xs: 4, md: 0 },
              lineHeight: 0 // Removes any default spacing below image
            }}
          >
            <Box 
              component="img" 
              src={image} 
              alt={name}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: { xs: '320px', md: '440px' },
                display: 'block',
                // Niche se cut ko minimize kiya gaya he alignment ke liye
                mb: 0, 
                filter: 'drop-shadow(0px -10px 20px rgba(0,0,0,0.1))',
                zIndex: 2,
                // Inset percentage ko kam kiya taaki image natural lage
                clipPath: 'inset(0 0 2% 0)' 
              }} 
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FounderSection;