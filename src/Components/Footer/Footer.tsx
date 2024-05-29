import { Grid, Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assests'
import Logo_part from '../Logo_part'
const config=require('../../config.js')
const Footer = () => {
  return (
    <Grid container className="main_header_css">
    <Logo_part/>
      <Grid item xs={12} md={8} sm={12} lg={8}>
        <Box className="second_grid_css">
          <Link to="/login"  className="button_login_css">
          <Button className="button_login_css" color="inherit">
            {config.login_button_name}
          </Button>
          </Link>
          <Link to="/register" className="button_login_css">
          <Button className="button_login_css"  color="inherit">
            {config.register_button_name}
          </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer