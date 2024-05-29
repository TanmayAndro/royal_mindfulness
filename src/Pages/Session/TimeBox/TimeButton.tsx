import React from 'react';
import '../../../Components/Header/Header.css'
import Button from '@mui/material/Button';
import './TimeButton.css'
import { Box } from '@mui/material';
const config = require("../../../config");

const TimeButton = () => {
  return (
    <div className='time-button'>
       <h4>Select Time</h4>
       <Box  className="button-outer">
      {config.buttonTime.map((item : {start:string,end:string},index :number)=>{
       return( 
        <Box className='button-inner' >
          <Button variant='contained' className="button" color="inherit">
       {item.start}
     </Button>
     <Button variant='contained' className="button" color="inherit">
       {item.end}
     </Button>
          </Box>
       );
      })}
       </Box>
      
      
    </div>
  )
}

export default TimeButton
