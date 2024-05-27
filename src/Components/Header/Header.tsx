import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useReducer } from "react";
import "./Header.css";
import Login from "../../Pages/Login/login";
import { Link } from "react-router-dom";
const config = require("../../config");

interface State {
  loginOpen: boolean;
  registerOpen: boolean;
}

const Header: React.FC = () => {
  return (
    <>
      <Grid container className="main_header_css">
        <Grid item xs={12} md={6} sm={12} lg={6}>
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
