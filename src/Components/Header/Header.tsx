import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { logo } from "../../assests";
const config = require("../../config");


const Header: React.FC = () => {
  return (
    <>
      <Grid container className="main_header_css">
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <img src={logo} style={{width:'80px'}} className="logo_css" alt="logo"/>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Box className="second_grid_css">
            <Link to="/login"  className="button_login_css">
            <Typography className="button_login_css">
              {config.login_button_name}
            </Typography>
            </Link>
            <Link to="/register" className="button_login_css">
            <Typography className="button_login_css">
              {config.register_button_name}
            </Typography>
            </Link>
            <Link to="/session" className="button_login_css">
            <Typography className="button_login_css">
              {config.dropHeading[1]}
            </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
