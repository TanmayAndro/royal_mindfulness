import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";
const config = require("../../config");

const Session = () => {
  const [location, setLocation] = React.useState("");
  const [session, setSession] = React.useState(""); 

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleSessionChange = (event: SelectChangeEvent) => {
    setSession(event.target.value);
  };

  const disablePastDates = (date: Dayjs) => {
    return dayjs(date).isBefore(dayjs(), 'day');
  };

  return (
    <>
      <div className="heading-container">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
        <Divider className="divider" />
      </div>
      {console.log(config.dropHeading[0])}
      <div className="filter-container">
        <h3>{config.filterHeading}</h3>
       
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="location-select-label">{config.dropHeading[0]}</InputLabel>
          <Select
            id="location-select"
            value={location}
            label="Location"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>{config.droplable}</em>
            </MenuItem>
            {config.location.map((item : any, index: any) => (
              <MenuItem key={index} value={index}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>{config.dropHeading[1]}</InputLabel>
          <Select
            id="session-select"
            value={session}
            label="Session"
            onChange={handleSessionChange}
          >
            <MenuItem value="">
              <em>{config.droplable}</em>
            </MenuItem>
            {config.session.map((item : any, index : any) => (
              <MenuItem key={index} value={index}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="calander-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            shouldDisableDate={(date) => dayjs(date).isBefore(dayjs(), 'day')}
          />
        </LocalizationProvider>
        <div className="time-comtainer">
            <h2>Njsjsdghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h2>
        </div>
      </div>
    </>
  );
};

export default Session;
