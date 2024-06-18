import React, { useEffect, useRef, useState } from "react";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import TimeButton from "./TimeBox/TimeButton";
import { AllStyle } from "../Login/login";

const config = require("../../config");

const Session = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [locationAnchorEl, setLocationAnchorEl] = useState<null | HTMLElement>(null);
  const [sessionAnchorEl, setSessionAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const locationButtonRef = useRef<HTMLButtonElement>(null);
  const sessionButtonRef = useRef<HTMLButtonElement>(null);

  const locations = ["New York", "California"];
  const sessionsTime = ["1 Session", "7 Session", "20 Session"];

  const handleDateSelect = (date: any) => {
    const formattedDate = date.format('DD/MM/YY');
    setSelectedDate(formattedDate);
  };

  const handleLocationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLocationAnchorEl(event.currentTarget);
  };

  const handleSessionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSessionAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setLocationAnchorEl(null);
    setSessionAnchorEl(null);
  };

  const handleLocationSelect = (option: string) => {
    setSelectedLocation(option);
    setLocationAnchorEl(null);
  };

  const handleSessionSelect = (option: string) => {
    setSelectedSession(option);
    setSessionAnchorEl(null);
  };

  const disablePastDates = (date: Dayjs) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  const handleTimeSelect = (value: string) => {
    setSelectedTime(value);
  };

  return (
    <div className="main">
      <div className="heading-container">
        <Typography style={AllStyle.heading} sx={{fontSize:'26px !important'}}>{config.heading}</Typography>
        <Typography style={AllStyle.smallHeading} sx={{fontSize:'18px !important'}}>
          {config.subHeading}
        </Typography>
        <Divider className="divider" />
      </div>
      <div className="filter-container">
        <Button
          variant="outlined"
          ref={locationButtonRef}
          aria-haspopup="true"
          aria-controls={Boolean(locationAnchorEl) ? "location-menu-list-grow" : undefined}
          style={{
            color: selectedLocation ? "white" : "black",
            width: "170px",
            height: "50px",
            backgroundColor: selectedLocation ? "#050A44" : "white",
            borderColor: "#050A44",
            border: "1px solid !important",
          }}
          onClick={handleLocationClick}
        >
          {selectedLocation || "Location"}
        </Button>
        <Menu
          id="location-menu-list-grow"
          anchorEl={locationAnchorEl}
          open={Boolean(locationAnchorEl)}
          onClose={handleClose}
          MenuListProps={{
            style: {
              width: locationButtonRef.current ? locationButtonRef.current.offsetWidth : undefined,
            },
          }}
        >
          {locations.map((option: string) => (
            <MenuItem key={option} onClick={() => handleLocationSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>

    <Button
      variant="outlined"
      ref={sessionButtonRef}
      aria-haspopup="true"
      aria-controls={Boolean(sessionAnchorEl) ? "session-menu-list-grow" : undefined}
      style={{
        color: selectedSession ? "white" : "black",
        width: "170px",
        height: "50px",
        backgroundColor: selectedSession ? "#050A44" : "white",
        borderColor: "#050A44",
        border: "1px solid !important",
      }}
      onClick={handleSessionClick}
    >
      {selectedSession || "Sessions"}
    </Button>
    <Menu
      id="session-menu-list-grow"
      anchorEl={sessionAnchorEl}
      open={Boolean(sessionAnchorEl)}
      onClose={handleClose}
      MenuListProps={{
        style: {
          width: sessionButtonRef.current ? sessionButtonRef.current.offsetWidth : undefined,
        },
      }}
    >
      {sessionsTime.map((option: string) => (
        <MenuItem key={option} onClick={() => handleSessionSelect(option)}>
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
          marginBottom: "50px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <DateCalendar
            shouldDisableDate={(date: any) => dayjs(date).isBefore(dayjs(), "day")}
            onChange={handleDateSelect}
            sx={{ "& .Mui-selected": { backgroundColor: "#050A44 !important" } }}
          />
        </LocalizationProvider>

        <div className="time-comtainer">
          <TimeButton
          //@ts-ignore
          selectedTime={selectedTime} onTimeSelect={handleTimeSelect} />
        </div>
      </Box>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ padding: "5px" }}>
      <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
        Service Details
      </Typography>
      <Box  sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", sm: "100%" }}}>
        <TableContainer>
          <Table sx={{ maxWidth: 550, "& td, & th": { fontSize: "16px" } }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">Date</TableCell>
                <TableCell align="right">{selectedDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Time</TableCell>
                <TableCell align="right">{selectedTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Location</TableCell>
                <TableCell align="right">{selectedLocation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Number of Sessions</TableCell>
                <TableCell align="right">{selectedSession}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        
      </Box>
      
    </Grid>
    <Grid item sx={{width :'100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
      <Button variant="contained" className="button1" color="inherit">
        Next
      </Button>
  </Grid>
    
 
  </Grid>
  
</div>
  );
};

export default Session;