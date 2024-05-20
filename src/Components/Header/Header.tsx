import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import './Header.css'
const config=require('../../config')
const Header = () => {
  return (
    <Grid   container className='main_header_css'>
        <Grid item xs={12} md={6} sm={12} lg={6}>

        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} >
            <Box  className='second_grid_css'>

            <Button variant='contained' className='button_login_css'>
                {config.login_button_name}
            </Button>
            <Button variant='contained' className='button_login_css'>
                {config.register_button_name}
            </Button>
            </Box>

</Grid>
        
    </Grid>
  )
}

export default Header