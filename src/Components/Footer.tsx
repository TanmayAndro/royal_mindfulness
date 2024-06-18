import { Grid,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { facebook_item, gmail, insta, linkdin } from '../assests';
import './common.css'
const config=require('../config.js')
const Footer = () => {
  return (
    <Grid container className="main_header_css">
    <Grid item xs={12} md={8} sm={12} lg={8} className="footer_item_box_css">
    {
  config.footerItem.map((item:{
    name:string;
    link:string
  },index:number)=>{
const {name,link}=item;
return <Link to={link} style={{textDecoration:'none'}} key={`${index}`}>
<Typography className="item_heading_css" style={{
  fontFamily:'lato'
}}>
{name}
</Typography>
</Link>
  })
}
      </Grid>
      <Grid item xs={12} md={4} sm={12} lg={4} className='footer_item_second_box_item'>
        <img src={insta} className='logo_style' onClick={()=>{
          window.open('https://www.instagram.com/royalmindfulness/', '_blank'); 
        }}/>
        <img src={facebook_item} className='logo_style'/>
        <img src={linkdin} className='logo_style'/>
        <img src={gmail} className='logo_style'/>
      </Grid>
    </Grid>
  )
}

export default Footer