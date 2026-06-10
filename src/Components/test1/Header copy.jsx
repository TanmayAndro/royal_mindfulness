  import React, { useState, useEffect } from 'react';
  import "./Header.css";
  import {
    Typography,
    Box,
    Container,
    Grid,
    Stack,
    useTheme,
    useMediaQuery
  } from "@mui/material";
  
  import CommonButtons from "./CommonButton";
  import YoungImage from "../../Assests/images/young-beaut.jpg";
  import { trackEvent } from "../../analitics/analytics";
  import { useNavigate } from "react-router-dom";
  import NavBar from "./NavBar";
  
  function Header() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const handelConsulation = (clickedOn) => {
      if (clickedOn === "calendly") navigate("/consultation_question");
      if (clickedOn === "rozerpay") navigate("/book-now");
    };
    
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
      const handleScrollLock = () => {
        if (isOpen && window.innerWidth <= 768) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      };
      
      handleScrollLock();
      window.addEventListener('resize', handleScrollLock);
      
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener('resize', handleScrollLock);
      };
    }, [isOpen]);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <Box component="header" className='header-root' sx={{ overflowX: "hidden", backgroundColor: "#1470AF" }}>
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
      
      <Box className='header-section' sx={{ py: { xs: 4, md: 8 }, mt: { xs: 8, md: 8 }, color: "#1470AF" }}>
      {/* Container padding ko 0 kiya taaki alignment disturb na ho */}
      <Container maxWidth={false} sx={{ px: 0 }}> 
      <Grid 
      container 
      spacing={0} 
      alignItems="center" 
      justifyContent="center" // Grid items ko center mein align karne ke liye
      sx={{ width: '100%', m: 0 }} // Negative margin reset kiya
      >
      
      {/* Column 1: Text Content */}
      <Grid item xs={12} md={6}>
      {/* Padding add ki taaki text screen se bilkul na chipke */}
      <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 8 } }}>
      <Typography 
      variant="h1" 
      sx={{ 
        color: "#fff", 
        fontWeight: 700, 
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        lineHeight: 1.2,
        mb: 2 
      }}
      >
      Train Your Mind To Be <br /> Happy !
      </Typography>
      
      <Typography 
      variant="h6" 
      component="p"
      sx={{ 
        color: "#e0e0e0", 
        mb: 1, 
        fontWeight: 400,
        fontSize: { xs: "1rem", md: "1.25rem" } 
      }}
      >
      1-on-1 Mind Fitness Training, Live Sessions, Free Consultation
      </Typography>
      
      {/* Buttons Stack */}
      <Stack 
      direction={{ xs: 'column', sm: 'row' }} 
      spacing={3} 
      alignItems="center" 
      justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
      <Box sx={{ textAlign: 'center' }}>
      <CommonButtons
      label="Book a free consultation"
      sx={{
        backgroundColor: "#1470AF",
        color: "white",
        height: "50px",
        width: { xs: "280px", sm: "auto" },
        px: 3
      }}
      variant="contained"
      onClick={() => {
        trackEvent("Landing Page", "Click", "BookConsultation", true);
        handelConsulation("calendly");
      }}
      />
      <Typography variant="caption" display="block" sx={{ mt: 1, color: "#dbc7c7" }}>
      (No Credit card required)
      </Typography>
      </Box>
      
      <Box sx={{ pb: { xs: 0, sm: '20px' } }}>
      <CommonButtons
      label="Hire Trainer"
      sx={{ 
        backgroundColor: "#1470AF", 
        color: "white",
        height: "50px",
        width: { xs: "280px", sm: "160px" } 
      }}
      variant="contained"
      onClick={() => {
        trackEvent("Landing Page", "Click", "Hire Trainer", true);
        handelConsulation("rozerpay");
      }}
      />
      </Box>
      </Stack>
      </Box>
      </Grid>
      
      {/* Column 2: Image Content */}
      <Grid item xs={12} md={6}>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Image ko horizontal center karne ke liye
        alignItems: "center", // Image ko vertical center karne ke liye
        width: "100%",
        mt: { xs: 4, md: 0 },
        px: { xs: 2, md: 0 }
      }}
      >
      <Box
      component="img"
      src={YoungImage}
      alt="Mindfulness Training"
      sx={{
        width: { xs: "260px", md: "440px" }, 
        height: { xs: "260px", md: "440px" },
        borderRadius: "50%", 
        objectFit: "cover", 
        border: "8px solid #ffffff",
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        
        display: "block",
        mx: "auto" 
      }}
      />
      </Box>
      </Grid>
      </Grid>
      </Container>
      </Box>
      </Box>
    );
  }
  
  export default Header;