import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import "./CalendarSection.css";
import { Box } from "@mui/material";
import TimezoneSelect from "react-timezone-select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const CalendarSection = ({ onDateSelect, onTimeZoneChange }) => {
  const after24hours = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const [selectedDate, setSelectedDate] = useState(null);
  const [timeZone, setTimeZone] = useState(null);

  // GMT offset helper
  const getGMTOffset = (tz) => {
    const offsetMinutes = dayjs().tz(tz).utcOffset();
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const abs = Math.abs(offsetMinutes);
    const h = String(Math.floor(abs / 60)).padStart(2, "0");
    const m = String(abs % 60).padStart(2, "0");
    return `GMT${sign}${h}:${m}`;
  };

  /* ✅ LOAD LOCAL STORAGE ON MOUNT ONLY */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("freeConsultanceData"));
    if (!stored) return;

    const { time_zone, free_consultance_date } = stored;

    // Set date
    if (free_consultance_date) {
      const parsedDate = new Date(free_consultance_date);
      setSelectedDate(parsedDate);
      onDateSelect(parsedDate);
    }

    // Set timezone
    if (time_zone) {
      const tzName = time_zone;
      const tzObj = { value: tzName, label: tzName };

      setTimeZone(tzObj);
      onTimeZoneChange(time_zone);
    }
  }, []); // <-- ONLY on mount

  /* ✅ HANDLE USER DATE CHANGE */
  const handleDateClick = (date) => {
    const onlyDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    setSelectedDate(onlyDate);
    onDateSelect(onlyDate);

    // Update localStorage so that new selection persists
    const stored =
      JSON.parse(localStorage.getItem("freeConsultanceData")) || {};

    localStorage.setItem(
      "freeConsultanceData",
      JSON.stringify({
        ...stored,
        free_consultance_date: onlyDate.toISOString(),
      }),
    );
  };

  /* ✅ HANDLE USER TIMEZONE CHANGE */
  const handleTimeZoneChange = (val) => {
    setTimeZone(val);
    if (!val?.value) return;

    const tzName = val.value;
    const gmtOffset = getGMTOffset(tzName);
    // const finalValue = `${gmtOffset} (${tzName})`;
    const finalValue = val.label;

    onTimeZoneChange(val.label);

    // Update localStorage so that new selection persists
    const stored =
      JSON.parse(localStorage.getItem("freeConsultanceData")) || {};
    localStorage.setItem(
      "freeConsultanceData",
      JSON.stringify({ ...stored, time_zone: finalValue }),
    );
  };

  return (
    <div className="calendar-section">
      <h1 className="calendar-heading">Choose a time slot</h1>

      <div className="calendar-wrapper">
        <Calendar
          minDate={after24hours}
          onClickDay={handleDateClick}
          value={selectedDate}
        />
      </div>

      <div className="timezone-text-calendar">
        <h2 className="timezone-heading">Time Zone</h2>
        {/* <h1>{stored.timeZone}</h1> */}
        <Box mt={2} mb={3}>
          <TimezoneSelect
            value={timeZone}
            onChange={handleTimeZoneChange}
            labelStyle="original"
            menuPortalTarget={document.body}
            styles={{
              control: (base) => ({
                ...base,
                minHeight: "40px",
                background: "#fffefdff",
                borderRadius: "6px",
              }),
              menuPortal: (base) => ({
                ...base,
                zIndex: 9999,
              }),
              menu: (base) => ({
                ...base,
                zIndex: 9999,
              }),
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default CalendarSection;
