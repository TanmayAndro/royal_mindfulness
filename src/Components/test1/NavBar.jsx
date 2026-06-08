import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../Assests/images/royal_image.png";
import { logo } from "../../assests";
import "./NavBar.css";
import { Avatar, Box, Button, Grid, Menu, MenuItem } from "@mui/material";
import { trackEvent } from "../../analitics/analytics";
import AuthModal from "../AuthModal"; // path fix


const NavBar = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState("login");
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
    navigate("/");
  };

  return (
    <>
      <nav className="header">
        {/* LOGO */}
        <Link to="/" className="header-logo" onClick={toggleMenu}>
          <img
            src={logo}
            style={{
              width: "60px",
              filter:
                "brightness(0) saturate(100%) invert(34%) sepia(92%) saturate(1039%) hue-rotate(176deg) brightness(91%) contrast(93%)",
            }}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className="logo-text">
            <span className="logo-top main_heading_css heading_css brand-text">
              ROYAL
            </span>
            <span className="logo-bottom main_heading_css heading_css brand-text">
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
                  width: "100%",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    // Responsive Colors: White on Mobile/Tablet (xs), Blue on Laptop/Desktop (md)
                    color: { xs: "#fff", md: "#1976d2" },
                    borderColor: { xs: "#fff", md: "#1976d2" },

                    // Hover effect for better UX
                    "&:hover": {
                      borderColor: { xs: "#fff", md: "#1976d2" },
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },

                    borderRadius: "30px",
                    fontSize: "14px",
                    px: 3,
                    width: { xs: "100%", md: "auto" },
                    textTransform: "none", // Optional: Prevents all caps
                  }}
                  onClick={() => {
                    setAuthView("login");
                    setAuthOpen(true);
                    trackEvent("Navigation", "Click", `Login`, true);
                  }}
                >
                  Login
                </Button>

                {/* <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    px: 3,
                    width: { xs: "100%", md: "auto" },
                  }}
                  onClick={() => {
                    setAuthView("register");
                    setAuthOpen(true);
                  }}
                >
                  Register
                </Button> */}
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
                }}
              >
                {/* Avatar */}

                <Avatar
                  onClick={handleMenuClick}
                  sx={{ cursor: "pointer", bgcolor: "#1470AF" }}
                >
                  {firstName?.[0]}
                </Avatar>

                {/* Desktop Menu */}

                {/* <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                <MenuItem 
                onClick={() => {
                handleDashboard();
                    trackEvent(
                      "Navigation",
                      "Click",
                      `Dashboard`
                    );
                }}>Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu> */}

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  // Ye do lines menu ko avatar ke niche sahi jagah dikhayengi
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  // Z-index ko header se zyada rakhein taaki menu chhup na jaye
                  sx={{ zIndex: 2100 }}
                >
                  <MenuItem
                    onClick={() => {
                      handleDashboard();
                      trackEvent("Navigation", "Click", "Dashboard");
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>

                {/* Mobile Buttons */}

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

      {/* AUTH MODAL */}

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultView={authView}
      />
    </>
  );
};

export default NavBar;
