import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./common.css";
import { Link, useNavigate } from "react-router-dom";
import Logo_part from "./Logo_part";
import LogoutIcon from '@mui/icons-material/Logout';
const config = require("../config");


const Header: React.FC = () => {
  const navigate=useNavigate()
  const token=localStorage.getItem("user_token")
  const first_name=localStorage.getItem("first_name")
  return (
    <>
      <Grid container className="main_header_css">
       <Logo_part/>
       <Grid item xs={12} md={6} sm={12} lg={8} className="header_item_box_css">
{
  config.headerItem.map((item:{
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
        <Grid item xs={12} md={3} sm={12} lg={2}>
    { !token &&     <Box className="second_grid_css">
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
          </Box>}
          { token && first_name&&     <Box className="second_grid_css">
          <Avatar >{first_name[0]}</Avatar>
          <LogoutIcon style={{color:'white',cursor:'pointer'}} onClick={()=>{
            localStorage.removeItem("user_token")
            localStorage.removeItem("first_name")
            navigate("/login")
          }}/>
          </Box>}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
