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
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

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
  };

  const handleLogout = () => {
    localStorage.clear();
    handleMenuClose();
    navigate("/login");
  };

  return (
    <nav className="header">
      <Link to="/" className="header-logo" onClick={toggleMenu}>
        <img src={logoImg} alt="Royal Mindfulness logo" className="logo-icon" />
        <div className="logo-text">
          <span className="logo-top">Royal</span>
          <span className="logo-bottom">Mindfulness</span>
        </div>
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </button>

      <ul className={`header-nav ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/aboutus" onClick={toggleMenu}>About us</Link></li>
        <li><Link to="/book-now" onClick={toggleMenu}>Book Now</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>

        {/* AUTH SECTION */}
        <Grid item xs={12} md={3} sm={12} lg={2}>
          {!token ? (
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Link to="/login">
                <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#ffffffff",
                  borderColor: "#fff",
                  borderRadius: "30px",
                  fontWeight: "400",
                  fontSize: "14px",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#1470AF",
                    borderColor: "#fff",
                  },
                    }}
                  >
                  Login
                </Button>
              </Link>
              <Link to="/register">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  borderRadius: "30px",
                  fontWeight: "00",
                  fontSize: "14px",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#1470AF",
                    borderColor: "#fff",
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
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar onClick={handleMenuClick} sx={{ cursor: "pointer" }}>
                {firstName?.[0]}
              </Avatar>

              {/* <LogoutIcon
                sx={{ color: "white", cursor: "pointer" }}
                onClick={handleLogout}
              /> */}

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Grid>
      </ul>
    </nav>
  );
};

export default NavBar;
