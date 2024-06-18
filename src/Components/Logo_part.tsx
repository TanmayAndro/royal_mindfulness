import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assests'
const config=require('../config')

const Logo_part = () => {
  return (
    <Grid item xs={12} md={3} sm={12} lg={2}>

      <Link to='/' style={{textDecoration:'none'}}>
      <Box style={{display:'flex',flexDirection:'row',alignItems:'center'}} className='main_heading_css'>
      <img src={logo} style={{width:'80px'}} alt="logo"/>
      <Typography className="main_heading_css" style={{
        fontFamily:' "Fraunces", serif '
      }}>
      {config.main_heading}
      </Typography>
      </Box>
      </Link>

    </Grid>
  )
}

export default Logo_part;