import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo_part from "./Logo_part";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AuthModal from "./AuthModal";
import { trackEvent } from "../analitics/analytics";

import MinimalMobileHeader from "../Components/Header/MinimalMobileHeader";
const config = require("../config");



const Header: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "register">("login");
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const user_id = localStorage.getItem("user_id");

  // / 1.  Isse pata chalega ki screen size mobile (md breakpoint se choti) hai ya nahi
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/sessions`  
        );
        const processedSessions = response.data.data.map((session: any) => ({
          id: session.id,
          sessionName: session.attributes.session_name,
        }));
        setSessions(processedSessions);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("meet_link");
    localStorage.removeItem("email");
    localStorage.removeItem("freeConsultanceData");

    navigate("/");
  };

  
  const pathname = location.pathname;
  const TRANSPARENT_ROUTES = ["/"];
  const WHITE_ROUTES = ["/consultation_question", "/consulation","/free_consultation"];
  // 2.Hide navbar mobile view only 
  const HIDDEN_ROUTES = ["/consultation_question", "/consulation","/free_consultation"];;
  const isTransparentRoute = TRANSPARENT_ROUTES.includes(pathname);
  const isWhiteRoute = WHITE_ROUTES.includes(pathname);
  const shouldHideNavbarOnMobile = HIDDEN_ROUTES.includes(pathname) && isMobile;
  if (HIDDEN_ROUTES.includes(pathname) && isMobile) {
    return <MinimalMobileHeader />; 
  }

 return (
  <>
    <Grid
      container
      className="main_header_css"
      alignItems="center"
      sx={{
        display: shouldHideNavbarOnMobile ? "none" : "flex",
        position:
          isTransparentRoute || isWhiteRoute ? "absolute" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: isWhiteRoute
          ? "#ffffff"
          : isTransparentRoute
          ? "transparent"
          : undefined,
        transition: "background-color 0.3s ease",
        zIndex: 10,
        // ✅ Exact CSS padding applied here
        padding: "15px 10%", 

        ...(isWhiteRoute && {
          "& .item_heading_css": {
            color: "#1470AF !important",
          },
          "& .button_login_css": {
            color: "#1470AF !important",
          },
          "& .MuiSvgIcon-root": {
            color: "#1470AF !important",
          },
        }),
      }}
    >
      {/* ✅ Logo */}
      <Grid item>
        <Logo_part />
      </Grid>

      {/* ✅ Spacer */}
      <Grid item sx={{ flexGrow: 1 }} />

      {/* ✅ Mobile Toggle Button */}
      <Grid
        item
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
       
      <MenuIcon  onClick={() => setMobileMenuOpen(true)}
      sx={{ color: isWhiteRoute ? "#1470AF" : "white" }} />
        
      </Grid>

      {/* ✅ Desktop Right Section */}
      <Grid
        item
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Header Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {config.headerItem.map(
            (item: { name: string; link: string }, index: number) => (
              <Link
                key={index}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  className="item_heading_css"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                  trackEvent(
                    "Navigation",
                    "Click",
                    `Nav Actions ${item.name}`,
                    true
                  );
                }}
                >
                  {item.name}
                </Typography>
              </Link>
            )
          )}
        </Box>

        {/* Login / Avatar */}
        {!token ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            <a className="button_login_css">
              <Button
                className="button_login_css"
                variant="outlined" // 1. Border layout lane ke liye variant ko outlined kiya
                onClick={() => {
                  setAuthView("login");
                  setAuthOpen(true);
                }}
                sx={{
                  color: "#1470AF",
                  borderColor: "#1470AF", // 2. 'boorderColor' typo ko fix kiya
                  borderWidth: "1px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#1470af",
                    backgroundColor: "rgba(20, 112, 175, 0.04)", 
                    borderWidth: "1px",
                  },  
                }}
              >
                Login
              </Button>
            </a>
          </Box>

        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar onClick={handleMenuClick} sx={{ cursor: "pointer" }}>
              {first_name?.[0]}
            </Avatar>

            <LogoutIcon
              sx={{
                color: isWhiteRoute ? "#1470AF" : "white",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            />

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleDashboard}>
                Dashboard
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Grid>
    </Grid>
  
    {/* ✅ Mobile Drawer (WORKING) */}
    {!shouldHideNavbarOnMobile && (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box
        sx={{ width: 250, mt: 2 }}
        role="presentation"
        onClick={() => setMobileMenuOpen(false)}
      >
        <List>
          {config.headerItem.map(
            (item: { name: string; link: string }, index: number) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.link}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            )
          )}
        </List>

        <Divider />

        {!token ? (
          <List>
            <ListItem  onClick={() => {
                    setAuthView("login");
                    setAuthOpen(true);
                  }}>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem>
              <Avatar sx={{ mr: 1 }}>
                {first_name?.[0]}
              </Avatar>
              <Typography variant="subtitle1">
                {first_name}
              </Typography>
            </ListItem>

            <ListItem button onClick={handleDashboard}>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        )}
      </Box>
    </Drawer>
    )}

    {/* AUTH MODAL */}
    
    <AuthModal
      open={authOpen}
      onClose={() => setAuthOpen(false)}
      defaultView={authView}
    />

  </>
);
};

export default Header;
