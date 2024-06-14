import React, { useEffect, useRef, useState } from "react";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import TimeButton from "./TimeBox/TimeButton";
import { AllStyle } from "../Login/login";
const config = require("../../config");

const Session = () => {
  const [location, setLocation] = React.useState("");
  const [session, setSession] = React.useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");


const buttonRef = useRef<HTMLButtonElement>(null);


  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSessionClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };
  const handleSessionTIme =(option: any) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleSessionChange = (event: SelectChangeEvent) => {
    setSession(event.target.value);
  };

  const disablePastDates = (date: Dayjs) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  return (
    <div className="main"> 
        <div className="heading-container">
          <Typography style={AllStyle.heading}>{config.heading}</Typography>
          <Typography style={AllStyle.smallHeading}>
            {config.subHeading}
          </Typography>
          <Divider className="divider" />
        </div>
         <div className="filter-container">
        
            <Button
              variant="contained"
              ref={buttonRef}
              aria-haspopup="true"
              aria-controls={Boolean(anchorEl) ? "menu-list-grow" : undefined}
              style={{
                background: selectedOption ? "#050A44 !important" : undefined,
                color: selectedOption ? "white" : undefined,
                width:'200px',
                height: '55px',
                backgroundColor: "green !important"
              }}
              onClick={handleClick}
            >
              {selectedOption || "Location"}
            </Button>
            <Menu
              id="menu-list-grow"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                style: {
                  width: buttonRef.current ? buttonRef.current.offsetWidth : undefined
                }
              }}
            >
              {config.options.map((option : any) => (
                <MenuItem key={option} onClick={() => handleSelect(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            {/* Second Button */}
            <Button
              variant="contained"
              ref={buttonRef}
              aria-haspopup="true"
              aria-controls={Boolean(anchorEl) ? "menu-list-grow" : undefined}
              style={{
                background: selectedOption ? "#050A44 !important" : undefined,
                color: selectedOption ? "white" : undefined,
                width:'200px',
                height: '55px',
                backgroundColor: "green !important"
              }}
              onClick={handleSessionClick}
            >
              {selectedOption || "Session"}
            </Button>
            <Menu
              id="menu-list-grow"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                style: {
                  width: buttonRef.current ? buttonRef.current.offsetWidth : undefined
                }
              }}
            >
               {config.sessionsTime.map((option : any) => (
                <MenuItem key={option} onClick={() => handleSessionTIme(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
        
        </div> 
      
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom:'50px'
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  shouldDisableDate={(date: any) =>
                    dayjs(date).isBefore(dayjs(), "day")
                  }
                  sx={{ "& .Mui-selected": { backgroundColor: "#050A44 !important" } }} 
                />
              </LocalizationProvider>

              <div className="time-comtainer">
                <TimeButton />
              </div>
            </Box>
          </Grid>

          <Grid item  xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{padding: '5px',fontSize:'22px', fontWeight:'bold'}}> Service Details</Typography>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography>Time</Typography>
              <Typography>Location</Typography>
              <Typography>Number of Sessions</Typography>
            </Box>
          </Grid>
        </Grid>
        
    </div>
  );
};

export default Session;
