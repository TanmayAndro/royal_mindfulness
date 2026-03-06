import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../Assests/images/royal_image.png";
import "./NavBar.css";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const NavBar = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("user_token");
  const firstName = localStorage.getItem("first_name");
  const userId = localStorage.getItem("user_id");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${userId}`);
    handleMenuClose();
    toggleMenu();
  };

  const handleLogout = () => {
    localStorage.clear();
    handleMenuClose();
    toggleMenu();
    navigate("/login");
  };

  return (
    <nav className="header">
      {/* LOGO */}
      <Link to="/" className="header-logo" onClick={toggleMenu}>
        <img src={logoImg} alt="Royal Mindfulness logo" className="logo-icon" />
        <div className="logo-text">
          <span className="logo-top main_heading_css heading_css">ROYAL</span>
          <span className="logo-bottom main_heading_css heading_css">
            MINDFULNESS
          </span>
        </div>
      </Link>

      {/* MOBILE TOGGLE */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </button>

      {/* NAV LINKS */}
      <ul className={`header-nav ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/aboutus" onClick={toggleMenu}>
            About us
          </Link>
        </li>

        <li>
          <Link to="/book-now" onClick={toggleMenu}>
            Book Now
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>

        {/* AUTH SECTION */}
        <Grid item xs={12} sx={{ margin: "0 auto", textAlign: "center" }}>
          {!token ? (
           <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { xs: "column", md: "row" },
                mt: { xs: 2, md: 0 },
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                margin: "0 auto",
              }}
            >
                      
              <Link to="/login" onClick={toggleMenu}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    px: 3,
                    width: { xs: "100%", md: "auto" },
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#1470AF",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>

              <Link to="/register" onClick={toggleMenu}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    px: 3,
                    width: { xs: "100%", md: "auto" },
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#1470AF",
                    },
                  }}
                >
                  Register
                </Button>
              </Link>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: { xs: "column", md: "row" },
                mt: { xs: 2, md: 0 },
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                margin: "0 auto",
              }}
            >
              {/* Avatar */}
              <Avatar
                onClick={handleMenuClick}
                sx={{ cursor: "pointer", bgcolor: "#7f888e" }}
              >
                {firstName?.[0]}
              </Avatar>

              {/* Desktop dropdown */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>

              {/* Mobile options */}
             <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                  gap: 1,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "30px",
                  }}
                  onClick={handleDashboard}
                >
                  Dashboard
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "30px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          )}
        </Grid>
      </ul>
    </nav>
  );
};

export default NavBar;