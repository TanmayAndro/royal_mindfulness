import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './TimeButton.css';
import { Box, Typography } from '@mui/material';
const config = require("../../../config");

const TimeButton = ({selectedTime,onTimeSelect}:any) => {

  return (
    <div className='time-button'>
      <Typography sx={{padding: '5px',fontSize:'22px', fontWeight:'bold'}}> {config.Select_Time} </Typography>
      <Box className="button-outer">
        {config.buttonTime.map((item : any, index : any) => (
          <Box className='button-inner' key={index}>
            <Button
              variant='contained'
              className={`button ${selectedTime === index ? 'selected' : ''}`}
              color="inherit"
              onClick={() => onTimeSelect(index)}
            >
              {item.start}
            </Button>
            <Button
              variant='contained'
              className={`button ${selectedTime === index ? 'selected' : ''}`}
              color="inherit"
              onClick={() => onTimeSelect(index)}
            >
              {item.end}
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default TimeButton;
