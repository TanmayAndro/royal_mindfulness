import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useMemo } from "react";
import "./CalendarSection.css";

/* GMT offset helper */
const getGMTOffset = (timeZone) => {
  const now = new Date();
  const tzDate = new Date(
    now.toLocaleString("en-US", { timeZone })
  );

  const diff = (tzDate - now) / (1000 * 60);
  const sign = diff >= 0 ? "+" : "-";
  const abs = Math.abs(Math.round(diff));

  const h = String(Math.floor(abs / 60)).padStart(2, "0");
  const m = String(abs % 60).padStart(2, "0");

  return `GMT${sign}${h}:${m}`;
};

const CalendarSection = ({ onDateSelect, onTimeZoneChange }) => {
  const after24hours = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const allTimeZones = useMemo(() => {
    let zones = Intl.supportedValuesOf("timeZone") || [];

    if (!zones.includes("Asia/Kolkata")) {
      zones.push("Asia/Kolkata");
    }

    return zones
      .map((tz) => ({
        value: `${tz} (${getGMTOffset(tz)})`,
        label: `${tz} (${getGMTOffset(tz)})`
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const [timeZone, setTimeZone] = useState("");

  const handleDateClick = (date) => {
    const onlyDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    onDateSelect(onlyDate);
  };

  const handleTimeZoneChange = (e) => {
    const value = e.target.value;
    setTimeZone(value);
    onTimeZoneChange(value);
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

        <select
          className="timezone-select"
          value={timeZone}
          onChange={handleTimeZoneChange}
        >
          <option value="" disabled>
            Select Time Zone
          </option>

          {allTimeZones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CalendarSection;
