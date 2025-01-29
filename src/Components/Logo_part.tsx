import {
  Grid,
  Box,
  Typography,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assests";
import "../Components/common.css";
const config = require("../config");

const Logo_part: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  const handleDashboard = () => {
    navigate(`/dashboard/${localStorage.getItem("user_id")}`);
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <Grid item xs={12} md={3} sm={12} lg={2}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          className="main_heading_css"
        >
          <img src={logo} style={{ width: "80px" }} alt="logo" />
          <Typography
            className="main_heading_css"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {config.main_heading}
          </Typography>
        </Box>
      </Link>

      <Box display={{ xs: "flex" }} className="second_grid_css drawer">
        <IconButton
          style={{ color: "white" }}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: "50%" }}
        PaperProps={{
          sx: { width: "50%", backgroundColor: "#ffff", color: "black" },
        }}
      >
        <Box
          className="drawerparent"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {config.drawerItems.map(
              (item: { name: string; link: string }, index: number) => (
                <ListItem key={index} onClick={toggleDrawer(false)}>
                  <Link
                    to={item.link}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                      fontFamily: "lato",
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </Link>
                </ListItem>
              )
            )}
          </List>
          {token && first_name && (
            <Box>
              <Button
                onClick={handleDashboard}
                sx={{ color: "black" }}
                variant="contained"
                data-test-id="button"
                className="drawerbtn"
                color="inherit"
              >
                Dashboard
              </Button>
              <Button
                onClick={handleLogout}
                sx={{ marginTop: 2, color: "black" }}
                variant="contained"
                data-test-id="button"
                className="drawerbtn"
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          )}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              marginBottom: 2,
              flexDirection: "column",
            }}
          >
            {/* {!token && ()} */}
            <Link to={"/login"}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#0F2E15",
                  color: "white",
                  marginBottom: "10px",
                  fontFamily: "lato",
                  fontSize: "14px",
                  width: "150px",
                  height: "45px",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#0F2E15",
                  color: "white",
                  marginBottom: "10px",
                  fontFamily: "lato",
                  fontSize: "14px",
                  width: "150px",
                  height: "45px",
                }}
              >
                Register
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Grid>
  );
};

export default Logo_part;
