import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { thankyouimage } from '../../assests';
import { useNavigate } from 'react-router-dom';
import { AllStyle } from '../Login/login';
const ThankYouPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/")
    };

    return (
        <Container>
            <ImageBox>
                <StyledImage 
                    src={thankyouimage}
                    alt="Thank You"
                />
            </ImageBox>
            <Typography style={{...AllStyle.heading}} variant="h4" component="h1" gutterBottom>
                Thank You!
            </Typography>
            <Typography style={{...AllStyle.smallHeading}} variant="body1" gutterBottom>
                Your payment was successful. We appreciate your support.
            </Typography>
            <Button variant="contained"  style={{...AllStyle.btnStyle}} onClick={handleGoBack}>
                Go Back to Home
            </Button>
        </Container>
    );
};

export default ThankYouPage;

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    // padding: '20px',
}));

const ImageBox = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
}));

const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
}));
