import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";
// import { convertTo24HourFormat } from "./ChangTimeFormate";
import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
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
import axios from "axios";
import { bookings } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";

const config = require("../../config");

const Session = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [locationAnchorEl, setLocationAnchorEl] = useState<null | HTMLElement>(null);
  const [sessionAnchorEl, setSessionAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [formError, setFormError] = useState("");
  const [errorData, setErrorData] = useState("");

  // Error state
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [sessionError, setSessionError] = useState("");

  const token = localStorage.getItem("user_token");

  const navigate = useNavigate();

  const locationButtonRef = useRef<HTMLButtonElement>(null);
  const sessionButtonRef = useRef<HTMLButtonElement>(null);

  const locations = ["New York", "California"];
  const sessionsTime = ["1 Session", "7 Session", "20 Session"];

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.format("YYYY/MM/DD"));
    setDateError("");
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
    setLocationError("");
    setLocationAnchorEl(null);
  };

  const handleSessionSelect = (option: string) => {
    setSelectedSession(option);
    setSessionError("");
    setSessionAnchorEl(null);
  };

  const handleTimeSelect = (value: number) => {
    setSelectedTime(value);
    setTimeError("");
  };

  function convertTo24HourFormat(time: any) {
    return moment(time, "h A").format("HH:mm:ss");
  }
  const sessionSubmit = async () => {
    let valid = true;
    if (!selectedDate) {
      setDateError("Date is required.");
      valid = false;
    }
    if (selectedTime === null) {
      setTimeError("Time is required.");
      valid = false;
    }
    if (!selectedLocation) {
      setLocationError("Location is required.");
      valid = false;
    }
    if (!selectedSession) {
      setSessionError("Sessions is required.");
      valid = false;
    }
    if (!valid) {
      return;
    }

    setFormError("");

    const timeselect = convertTo24HourFormat(
      config.buttonTime[selectedTime || 0].start
    );
    const data = {
      booking: {
        date_of_booking: selectedDate,
        time_of_session: timeselect,
      },
    };
   
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + bookings,
        data,
        {
          headers: {
            token: token,
          },
        }
      );
      
     
      navigate("/");
    } catch (err: any) {
      setErrorData(err?.response?.data?.message);
    }
  };
  const handleCloseAlert = () => {
    setErrorData("");
  };

  return (
    <div className="main">
      {errorData && (
        <AlertComponent
          errorData={errorData}
          handleClose={handleCloseAlert}
          type={"error"}
        />
      )}
      <div className="heading-container">
        <Typography
          style={AllStyle.heading}
          sx={{ fontSize: "26px !important" }}
        >
          {config.heading}
        </Typography>
        <Typography
          style={AllStyle.smallHeading}
          sx={{ fontSize: "18px !important" }}
        >
          {config.subHeading}
        </Typography>
        <Divider className="divider" />
      </div>
      <div className="filter-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            ref={locationButtonRef}
            aria-haspopup="true"
            aria-controls={
              Boolean(locationAnchorEl) ? "location-menu-list-grow" : undefined
            }
            sx={{
              color: selectedLocation ? "white" : "black",
              width: {
                xs: "155px",
                sm: "170px",
              },
              height: "50px",
              backgroundColor: selectedLocation ? "#050A44" : "white",
              border: "1px solid #050A44",
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
                width: locationButtonRef.current
                  ? locationButtonRef.current.offsetWidth
                  : undefined,
              },
            }}
          >
            {locations.map((option: string) => (
              <MenuItem
                key={option}
                onClick={() => handleLocationSelect(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          {locationError && (
            <Typography component="span" color="error" fontSize={15}>
              {locationError}
            </Typography>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            ref={sessionButtonRef}
            aria-haspopup="true"
            aria-controls={
              Boolean(sessionAnchorEl) ? "session-menu-list-grow" : undefined
            }
            sx={{
              color: selectedSession ? "white" : "black",
              width: {
                xs: "155px",
                sm: "170px",
              },
              height: "50px",
              backgroundColor: selectedSession ? "#050A44" : "white",
              border: "1px solid #050A44",
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
                width: sessionButtonRef.current
                  ? sessionButtonRef.current.offsetWidth
                  : undefined,
              },
            }}
          >
            {sessionsTime.map((option: string) => (
              <MenuItem
                key={option}
                onClick={() => handleSessionSelect(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          {sessionError && (
            <Typography color="error" fontSize={15}>
              {sessionError}
            </Typography>
          )}
        </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="de"
              >
                <DateCalendar
                  shouldDisableDate={(date: any) =>
                    dayjs(date).isBefore(dayjs(), "day")
                  }
                  onChange={handleDateSelect}
                  sx={{
                    "& .Mui-selected": {
                      backgroundColor: "#050A44 !important",
                    },
                  }}
                />
              </LocalizationProvider>
              {dateError && (
                <Typography color="error" fontSize={15}>
                  {dateError}
                </Typography>
              )}
            </div>

            <div className="time-comtainer">
              <TimeButton
                selectedTime={selectedTime}
                onTimeSelect={handleTimeSelect}
              />
              {timeError && (
                <Typography color="error" fontSize={15}>
                  {timeError}
                </Typography>
              )}
            </div>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            padding: "5px",
            "@media (max-width:899px)": {
              display: "grid",
              justifyContent: "center",
              paddingTop: "0px !important",
            },
          }}
        >
          <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
            Service Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "100%" },
            }}
          >
            <TableContainer>
              <Table
                sx={{ maxWidth: 550, "& td, & th": { fontSize: "16px" } }}
                aria-label="simple table"
              >
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Start date
                    </TableCell>
                    <TableCell align="right">{selectedDate}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Time
                    </TableCell>
                    {selectedTime != null && (
                      <TableCell align="right">
                        {config.buttonTime[selectedTime].start} -{" "}
                        {config.buttonTime[selectedTime].end}
                      </TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Location
                    </TableCell>
                    <TableCell align="right">{selectedLocation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Number of Sessions
                    </TableCell>
                    <TableCell align="right">{selectedSession}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
        >
          <Button
            onClick={sessionSubmit}
            variant="contained"
            className="button1"
            color="inherit"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Session;
