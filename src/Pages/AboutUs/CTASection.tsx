import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled container to replicate the exact top curve of the section
const CurvedSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#1470af', // Match the exact golden-yellow color
  position: 'relative',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  textAlign: 'center',
  overflow: 'hidden',
  // Smooth CSS curve to match the slight arch in the reference image
  borderRadius: '50% 50% 0 0 / 15% 15% 0 0',
  width: '100%',
  // Ensure the curve looks right even on very wide screens
  [theme.breakpoints.up('xl')]: {
    borderRadius: '50% 50% 0 0 / 25px 25px 0 0',
  },
  // Dark blue/purple bottom border visible at the very edge of the image
   borderBottom: '16px solid #ffffff', 
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  textTransform: 'none', // Prevents automatic uppercase transformation
  fontWeight: 700,
  fontSize: '1rem',
  padding: '12px 36px',
  borderRadius: '100px', // Perfect pill shape
  boxShadow: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#ffff',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 28px',
    fontSize: '0.95rem',
  },
}));

export const ConnectWithUwill: React.FC = () => {
  return (
    <CurvedSection>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={3.5} // Precise spacing between typography and button
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#ffffff', // Deep dark-navy/black for the text
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontSize: {
                xs: '1.75rem', // Mobile optimization
                sm: '2.25rem', // Tablet optimization
                md: '2.75rem', // Desktop match
              },
            }}
          >
           Connect with Royal Mindfulness Experts
          </Typography>

          <ActionButton variant="contained" disableRipple>
            Contact us Today!
          </ActionButton>
        </Box>
      </Container>
    </CurvedSection>
  );
};

export default ConnectWithUwill;