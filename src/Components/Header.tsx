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
// };

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
const config = require("../config");

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


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
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <>
      <Grid container className={`main_header_css ${scrolled ? "scrolled" : ""}`} alignItems="center"
            sx={
        location.pathname === "/"
          ? {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              backgroundColor: "transparent",
              transition: "background-color 0.3s ease",
              zIndex: 10,
              padding: { xs: "5px 5px",sm: "2px 20px", md: "2px 20px" },
            }
          : null
      }
      >
        <Logo_part />

        {/* Toggle Button for Mobile
        <Grid item sx={{ display: { xs: "flex", md: "none" }, pl: 1 }} >
          <IconButton onClick={() => setMobileMenuOpen(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Grid> */}

        {/* Header items (hidden on small screens) */}
        <Grid item xs={12} md={6} sm={12} lg={8} className="header_item_box_css" sx={{ display: { xs: "none", md: "flex" } }}>
          {config.headerItem.map((item: { name: string; link: string }, index: number) => (
            <div key={index}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <Typography className="item_heading_css" style={{ fontFamily: "lato", cursor: "pointer" }}>
                  {item.name}
                </Typography>
              </Link>
            </div>
          ))}
        </Grid>

        {/* Login/Register or Avatar Section */}
        <Grid item xs={12} md={3} sm={12} lg={2}>
          {!token ? (
            <Box className="second_grid_css" sx={{ display: { xs: "none", md: "flex" } }}>
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
          ) : (
           <Box
  className="second_grid_css hidebutton"
  sx={{
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 1,
  }}
>
  <Avatar onClick={handleMenuClick} sx={{ cursor: "pointer" }}>
    {first_name?.[0]}
  </Avatar>
  <LogoutIcon
    sx={{ color: "white", cursor: "pointer" }}
    onClick={handleLogout}
  />
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
    <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
  </Menu>
</Box>

          )}
        </Grid>
      </Grid>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Box sx={{ width: 250, mt: 2 }} role="presentation" onClick={() => setMobileMenuOpen(false)}>
          <List>
            {config.headerItem.map((item: { name: string; link: string }, index: number) => (
              <ListItem button key={index} component={Link} to={item.link}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {!token ? (
            <List>
              <ListItem button component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={Link} to="/register">
                <ListItemText primary="Register" />
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem>
                <Avatar sx={{ mr: 1 }}>{first_name?.[0]}</Avatar>
                <Typography variant="subtitle1">{first_name}</Typography>
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
    </>
  );
};

export default Header;
