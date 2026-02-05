import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Styling for the main section
const StyledSection = styled(Box)({
  backgroundColor: '#F9FBE7', // Soft greenish background from screenshot
  padding: '100px 0',
  textAlign: 'center',
});

const StatNumber = styled(Typography)({
  color: '#005D5D', // Teal color
  fontWeight: 700,
  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', // Responsive sizing
  fontFamily: '"Georgia", serif',
  lineHeight: 1.2,
});

const StatLabel = styled(Typography)({
  color: '#005D5D',
  fontSize: '1.1rem',
  fontWeight: 500,
  marginTop: '10px',
  opacity: 0.9,
});

const TrustMetrics = () => {
  // Isse animation tabhi start hogi jab user scroll karke yahan tak pahuchega
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 4999972, label: 'therapy sessions' },
    { value: 1199969, label: 'members helped' },
    { value: 5700, label: 'licensed providers' },
  ];

  return (
    <StyledSection ref={ref}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          sx={{ color: '#005D5D', mb: 8, fontWeight: 700 }}
          className="heading-main"
        >
          Experts in virtual mental health care
        </Typography>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StatNumber>
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2.5} 
                    separator="," 
                  />
                ) : '0'}
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default TrustMetrics;