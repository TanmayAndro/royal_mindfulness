import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import TimeButton from "./TimeBox/TimeButton";
const config = require("../../config");

const Session = () => {
  const [location, setLocation] = React.useState("");
  const [session, setSession] = React.useState(""); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const buttonRef = useRef(null);

  const options = ['New York', 'California'];

  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option :any ) => {
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
          {/* <InputLabel id="location-select-label">{config.dropHeading[0]}</InputLabel> */}
          <Select
            id="location-select"
            value={location}
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
          {/* <InputLabel>{config.dropHeading[1]}</InputLabel> */}
          <Select
            id="session-select"
            value={session}
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
      <div>
        <h3>Please select data and time</h3>
      </div>
      <Divider/>
      <div className="calander-container">
       <div className="calander">
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            shouldDisableDate={(date) => dayjs(date).isBefore(dayjs(), 'day')}
          />
        </LocalizationProvider>
       </div>
        <div className="time-comtainer">
         
            <TimeButton/>
        </div>
        <div style={{ position: 'relative' }}>
      <Button
        variant="contained"
        ref={buttonRef}
        aria-haspopup="true"
        aria-controls={Boolean(anchorEl) ? 'menu-list-grow' : undefined}
        style={{ background: selectedOption ? 'blue' : undefined, color: selectedOption ? 'white' : undefined }}
        onClick={handleClick}
      >
        {selectedOption || 'Animal Type'}
      </Button>
      <Menu
        id="menu-list-grow"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
      </div>
    </>
  );
};

export default Session;
