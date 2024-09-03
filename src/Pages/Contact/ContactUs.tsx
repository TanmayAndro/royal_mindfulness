import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(46, 82, 82, 1)', 
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
      variant="h5"
      component="h1"
      gutterBottom
      sx={{ textAlign: 'center', marginBottom: 3 }}
    >
      BOOK A FREE CALL WITH US
    </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              type="tel"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              required
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
