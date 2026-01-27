import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
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

  const [timeZone, setTimeZone] = useState(null);

  // 🔥 GMT offset helper
  const getGMTOffset = (tz) => {
    const offsetMinutes = dayjs().tz(tz).utcOffset();
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const abs = Math.abs(offsetMinutes);

    const h = String(Math.floor(abs / 60)).padStart(2, "0");
    const m = String(abs % 60).padStart(2, "0");

    return `GMT${sign}${h}:${m}`;
  };

  const handleDateClick = (date) => {
    const onlyDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    onDateSelect(onlyDate);
  };

  // ✅ UPDATED handler (timezone + GMT offset)
  const handleTimeZoneChange = (val) => {
    setTimeZone(val);

    if (!val?.value) return;

    const tzName = val.value; // e.g. "Africa/Dakar"
    const gmtOffset = getGMTOffset(tzName);

    const finalValue = `${tzName} (${gmtOffset})`;
    // 👉 "Africa/Dakar (GMT-05:30)"

    onTimeZoneChange(finalValue);
  };

  return (
    <div className="calendar-section">
      <h1 className="calendar-heading">Choose a time slot</h1>

      <div className="calendar-wrapper">
        <Calendar
          minDate={after24hours}
          onClickDay={handleDateClick}
        />
      </div>

      <div className="timezone-text">
        <h2 className="timezone-heading">Time Zone</h2>

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
