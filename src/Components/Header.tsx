import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo_part from "./Logo_part";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
const config = require("../config");

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [bookNowMenuAnchorEl, setBookNowMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://be-royal-mindfulness.onrender.com/sessions"
        );
        const processedSessions = response.data.data.map((session: any) => ({
          id: session.id,
          sessionName: session.attributes.session_name,
        }));
        console.log("helllllo", processedSessions);
        setSessions(processedSessions);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBookNowMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setBookNowMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBookNowMenuClose = () => {
    setBookNowMenuAnchorEl(null);
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${user_id}`);
    handleMenuClose();
  };

  const handleSessionClick = (sessionId: any, sessionName: any) => {
    console.log("Clicked Session:", { id: sessionId, name: sessionName });
    navigate(`/session/${sessionId}`);
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
            (item: { name: string; link: string }, index: number) => {
              const { name, link } = item;

              return (
                <div key={`${index}`}>
                  {name === "Book Now" ? (
                    <div
                      onMouseEnter={handleBookNowMenuClick}
                      onMouseLeave={handleBookNowMenuClose} // Close when leaving "Book Now"
                    >
                      <Typography
                        className="item_heading_css"
                        style={{ fontFamily: "lato", cursor: "pointer" }}
                      >
                        {name}
                      </Typography>
                      <Menu
                        anchorEl={bookNowMenuAnchorEl}
                        open={Boolean(bookNowMenuAnchorEl)}
                        onClose={handleBookNowMenuClose}
                        autoFocus={false}
                        MenuListProps={{
                          onMouseLeave: handleBookNowMenuClose,
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            window.location.href =
                              "https://tanmaysmarty.wixsite.com/my-site-1/service-page/antar-mouna-inner-silence";
                          }}
                          sx={{
                            padding: "2rem",
                            display: "flex",
                            justifyContent: "space-between",
                            transition: "all 0.3s ease-in-out",
                            backgroundColor: "transparent",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#1470AF",
                              transform: "scale(1.05)",
                              "& svg": {
                                color: "#1470AF",
                                transform: "translateX(5px)", // Moves icon slightly right on hover
                              },
                            },
                          }}
                        >
                          Antar Mouna
                          <ChevronRightIcon
                            sx={{
                              transition: "all 0.3s ease-in-out",
                              color: "inherit",
                            }}
                          />
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={() => {
                            window.location.href =
                              "https://tanmaysmarty.wixsite.com/my-site-1/service-page/daily-yogic-relaxation";
                          }}
                          sx={{
                            padding: "2rem",
                            display: "flex",
                            justifyContent: "space-between",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#1470AF",
                              transform: "scale(1.05)",
                              "& svg": {
                                color: "#1470AF",
                                transform: "translateX(5px)", // Moves icon slightly right on hover
                              },
                            },
                          }}
                        >
                          Daily Relaxation
                          <ChevronRightIcon
                            sx={{
                              transition: "all 0.3s ease-in-out",
                              color: "inherit",
                            }}
                          />
                        </MenuItem>

                        {/* {sessions.map((session: any) => (
                          <>
                            <MenuItem
                              key={session.id}
                              onClick={() =>
                                handleSessionClick(
                                  session.id,
                                  session.sessionName
                                )
                              }
                              sx={{
                                padding: "1.5rem",
                                display: "flex",
                                justifyContent: "space-between",
                                transition: "all 0.3s ease-in-out",
                                backgroundColor: "transparent",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  color: "#1470AF",
                                  transform: "scale(1.05)",
                                  "& svg": {
                                    color: "#1470AF",
                                    transform: "translateX(5px)", // Moves icon slightly right on hover
                                  },
                                },
                              }}
                            >
                              {session.sessionName}
                              <ChevronRightIcon
                                sx={{
                                  transition: "all 0.3s ease-in-out",
                                  color: "inherit",
                                }}
                              />
                            </MenuItem>
                          </>
                        ))} */}
                      </Menu>
                    </div>
                  ) : (
                    <Link to={link} style={{ textDecoration: "none" }}>
                      <Typography
                        className="item_heading_css"
                        style={{ fontFamily: "lato" }}
                      >
                        {name}
                      </Typography>
                    </Link>
                  )}
                </div>
              );
            }
          )}
        </Grid>
        <Grid item xs={12} md={3} sm={12} lg={2} display={"none"}>
          {!token && (
            <Box
              className="second_grid_css"
              sx={{
                "@media (max-width:500px)": { display: "none" },
              }}
            >
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
              <Avatar onClick={handleMenuClick} style={{ cursor: "pointer" }}>
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
                  "aria-labelledby": "basic-button",
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
