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
  import { useLocation } from "react-router-dom";
  const config = require("../config");

  const Logo_part: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const token = localStorage.getItem("user_token");
    const first_name = localStorage.getItem("first_name");
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;  
     const consultationPaths = ["/consultation_question", "/consulation","/free_consultance"];
    const isConsultationPage = consultationPaths.includes(pathname); 
   

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

    const headingColor = isConsultationPage ? "#1470AF !important" : undefined;


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
            <img
              src={logo}
              style={{
                width: "60px",
                filter: isConsultationPage
                  ? "brightness(0) saturate(100%) invert(34%) sepia(92%) saturate(1039%) hue-rotate(176deg) brightness(91%) contrast(93%)"
                  : "none",
              }}
              alt="logo"
              onClick={() => navigate("/")}
            />

            <Typography
              className="main_heading_css heading_css"
              sx={{ color: headingColor }}
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
          PaperProps={{
            sx: { width: "50%", backgroundColor: "#fff", color: "black" },
          }}
        >
          <Box
            className="drawerparent"
            sx={{
              height: "100%",
              overflowY: "auto",
              paddingBottom: 4,
            }}
          >
          <List>
            {config.drawerItems.map((item:any, index:any) => (
              <ListItem key={index} onClick={toggleDrawer(false)}>
                <Link
                  to={item.link}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    
                  }}
                >
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))}
          </List>

          {token && first_name && (
            <Box>
              <Button
                onClick={handleDashboard}
                sx={{ color: "black" }}
                variant="contained"
                className="drawerbtn"
              >
                Dashboard
              </Button>

              <Button
                onClick={handleLogout}
                sx={{ marginTop: 2, color: "black" }}
                variant="contained"
                className="drawerbtn"
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
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>

            <Link to={"/register"}>
              <Button>Register</Button>
            </Link>
          </Box>
          </Box>
       </Drawer>

       
      </Grid>
    );
  };

  export default Logo_part;
