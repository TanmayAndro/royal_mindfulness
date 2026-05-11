// import React, { useEffect, useState } from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Grid,
//   Typography,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import Logo_part from "./Logo_part";
// import LogoutIcon from "@mui/icons-material/Logout";
// import axios from "axios";
// const config = require("../config");

// const Header: React.FC = () => {
//   const navigate = useNavigate();
//   const [sessions, setSessions] = useState([]);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [scrolled, setScrolled] = useState(false);

//   const token = localStorage.getItem("user_token");
//   const first_name = localStorage.getItem("first_name");
//   const user_id = localStorage.getItem("user_id");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://deedee-unchainable-optionally.ngrok-free.dev/sessions"
//         );
//         const processedSessions = response.data.data.map((session: any) => ({
//           id: session.id,
//           sessionName: session.attributes.session_name,
//         }));
//         setSessions(processedSessions);
//       } catch (error) {
//         console.error("Error fetching sessions:", error);
//       }
//     };
//     fetchData();
//   }, []);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 10);
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDashboard = () => {
//     navigate(`/dashboard/${user_id}`);
//     handleMenuClose();
//   };

//   const handleSessionClick = (sessionId: any, sessionName: any) => {
//     navigate(`/session/${sessionId}`);
//   };

//   return (
//     <>
//       <Grid container className={`main_header_css ${scrolled ? "scrolled" : ""}`}>

//         <Logo_part />
//         <Grid item xs={12} md={6} sm={12} lg={8} className="header_item_box_css">
//           {config.headerItem.map(
//             (item: { name: string; link: string }, index: number) => {
//               const { name, link } = item;
//               return (
//                 <div key={`${index}`}>
//                   <Link to={link} style={{ textDecoration: "none" }}>
//                     <Typography
//                       className="item_heading_css"
//                       style={{ fontFamily: "lato", cursor: "pointer" }}
//                     >
//                       {name}
//                     </Typography>
//                   </Link>
//                 </div>
//               );
//             }
//           )}
//         </Grid>
//         <Grid item xs={12} md={3} sm={12} lg={2}>
//           {!token && (
//             <Box
//               className="second_grid_css"
//               sx={{ "@media (max-width:500px)": { display: "none" } }}
//             >
//               <Link to="/login" className="button_login_css">
//                 <Button className="button_login_css" color="inherit">
//                   {config.login_button_name}
//                 </Button>
//               </Link>
//               <Link to="/register" className="button_login_css">
//                 <Button className="button_login_css" color="inherit">
//                   {config.register_button_name}
//                 </Button>
//               </Link>
//             </Box>
//           )}
//           {token && first_name && (
//             <Box className="second_grid_css hidebutton">
//               <Avatar onClick={handleMenuClick} style={{ cursor: "pointer" }}>
//                 {first_name[0]}
//               </Avatar>
//               <LogoutIcon
//                 style={{ color: "white", cursor: "pointer" }}
//                 onClick={() => {
//                   localStorage.removeItem("user_token");
//                   localStorage.removeItem("first_name");
//                   localStorage.removeItem("user_id");
//                   navigate("/login");
//                 }}
//               />
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
//               </Menu>
//             </Box>
//           )}
//         </Grid>
//       </Grid>
//     </>
//   );
// };x

// export default Header;

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
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo_part from "./Logo_part";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AuthModal from "./AuthModal";
import { trackEvent } from "../analitics/analytics";
const config = require("../config");



const Header: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "register">("login");
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deedee-unchainable-optionally.ngrok-free.dev/sessions"
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
  const WHITE_ROUTES = ["/consultation_question", "/consulation","/free_consultance"];
  const isTransparentRoute = TRANSPARENT_ROUTES.includes(pathname);
  const isWhiteRoute = WHITE_ROUTES.includes(pathname);


 return (
  <>
    <Grid
      container
      className="main_header_css"
      alignItems="center"
      sx={{
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
        padding: {
          xs: "8px 15px",
          sm: "2px 20px",
          md: "2px 20px",
        },

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
                  color="inherit"
                  onClick={() => {
                    setAuthView("login");
                    setAuthOpen(true);
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
