import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Typography, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo_part from "./Logo_part";
import LogoutIcon from "@mui/icons-material/Logout";
const config = require("../config");

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const user_id = localStorage.getItem("user_id");

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${user_id}`);
    handleMenuClose();
  };

  return (
    <>
      <Grid container className="main_header_css">
        <Logo_part />
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          lg={8}
          className="header_item_box_css"
        >
          {config.headerItem.map(
            (
              item: {
                name: string;
                link: string;
              },
              index: number
            ) => {
              const { name, link } = item;
              return (
                <Link
                  to={link}
                  style={{ textDecoration: "none" }}
                  key={`${index}`}
                >
                  <Typography
                    className="item_heading_css"
                    style={{
                      fontFamily: "lato",
                    }}
                  >
                    {name}
                  </Typography>
                </Link>
              );
            }
          )}
        </Grid>
        <Grid item xs={12} md={3} sm={12} lg={2}>
          {!token && (
            <Box className="second_grid_css">
              <Link to="/login" className="button_login_css">
                <Button className="button_login_css" color="inherit">
                  {config.login_button_name}
                </Button>
              </Link>
              <Link to="/register" className="button_login_css">
                <Button className="button_login_css" color="inherit">
                  {config.register_button_name}
                </Button>
              </Link>
            </Box>
          )}
          {token && first_name && (
            <Box className="second_grid_css hidebutton">
              <Avatar
                onClick={handleMenuClick}
                style={{ cursor: 'pointer' }}
              >
                {first_name[0]}
              </Avatar>
              <LogoutIcon
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => {
                  localStorage.removeItem("user_token");
                  localStorage.removeItem("first_name");   
                  localStorage.removeItem("user_id");
                  navigate("/login");
                }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose} 
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
              </Menu>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
