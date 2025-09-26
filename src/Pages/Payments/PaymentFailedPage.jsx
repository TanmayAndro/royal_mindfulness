import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { PaymentFailed } from '../../assests';
import { useNavigate } from 'react-router-dom';

const PaymentFailedPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <Container>
            <ImageBox>
                <StyledImage 
                    src={PaymentFailed}
                    alt="Payment Failed"
                />
            </ImageBox>
            <Typography style={{ ...AllStyle.heading }} variant="h4" component="h1" gutterBottom>
                Payment Failed!
            </Typography>
            <Typography style={{ ...AllStyle.smallHeading }} variant="body1" gutterBottom>
                Unfortunately, your payment could not be processed. Please try again.
            </Typography>
            <Button variant="contained" style={{ ...AllStyle.btnStyle }} onClick={handleGoBack}>
                Go Back to Home
            </Button>
        </Container>
    );
};

export default PaymentFailedPage;

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    backgroundColor: '#fff5f5', 
    textAlign: 'center',
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

const AllStyle = {
    heading: {
        color: '#d32f2f', 
        fontWeight: 'bold',
    },
    smallHeading: {
        color: '#555555',
        marginBottom: '20px',
    },
    btnStyle: {
        backgroundColor: '#d32f2f',
        color: '#ffffff',
    },
};
