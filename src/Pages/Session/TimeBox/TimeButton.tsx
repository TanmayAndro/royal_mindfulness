import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './TimeButton.css';
import { Box, Typography } from '@mui/material';
const config = require("../../../config");

const TimeButton = () => {
  const [selectedButtonValue, setSelectedButtonValue] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setSelectedButtonValue(value);
  };

  return (
    <div className='time-button'>
      <Typography sx={{padding: '5px',fontSize:'22px', fontWeight:'bold'}}> Select Time </Typography>
      <Box className="button-outer">
        {config.buttonTime.map((item : any, index : any) => (
          <Box className='button-inner' key={index}>
            <Button
              variant='contained'
              className={`button ${selectedButtonValue === index ? 'selected' : ''}`}
              color="inherit"
              onClick={() => handleClick(index)}
            >
              {item.start}
            </Button>
            <Button
              variant='contained'
              className={`button ${selectedButtonValue === index ? 'selected' : ''}`}
              color="inherit"
              onClick={() => handleClick(index)}
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
