import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import bgImg from '../../Assests/Contact.jpg'
import { AllStyle, InputField } from '../Login/login'


const ContactUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundSize: 'center', 
        backgroundPosition: 'center', 
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: '100%',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0px 40px 70px rgba(0, 0, 0, 0.6)', 
        }}
      >
      <Typography
      style={{...AllStyle.heading,marginBottom:"20px"}}
    >
      Book a free call with us
    </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              fullWidth
              placeholder="First Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Phone"
              type="tel"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              fullWidth
              placeholder="Message"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            style={{ background:'#050A44'}}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactUs
