import React from 'react'
import {Card, CardMedia, Box, Typography, Button } from "@mui/material"; 

import "./TestimonialCard.css"
const TestimonialCard = ({name, text, image, bgColor, textColor}) => {
  return (
   <Card className="testimonial-card-root">
      {/* Image Section  */}

      <CardMedia 
      component="img"
      className="testimonial-image"
      image = {image}
      alt={name}
      />

      {/* Content Section - Dynamic Background use inline css */}

      <Box 
        className="testimonial-content"
        style={{ backgroundColor: bgColor, color: textColor }}
      >

        <Typography className="testimonial-text">
          "{text}"
        </Typography>

        <Box className="testimonial-footer">
          <Button variant="outlined" className="badge-btn">
            {name}
          </Button>

        </Box>
      </Box>   
   </Card>
  )
}

export default TestimonialCard
