import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TimeSlotSection.css";

const DUMMY_SLOTS = [
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:30",
  "5:30",
  "6:30",
  "7:30",
];

const TimeSlotSection = ({ date, timeZone }) => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);

  // ✅ Read from localStorage once on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("freeConsultanceData"));
    if (stored?.free_consultance_time) {
      setSelectedSlot(stored.free_consultance_time.trim()); // trim extra spaces
    }
  }, []);

  const handleSlotClick = (slot) => {
    if (!timeZone) {
      alert("Please select a time zone first");
      return;
    }

    setSelectedSlot(slot); // Update state immediately

    navigate("/free_consultation", {
      state: {
        free_consultance_date: date,
        free_consultance_time: slot,
        time_zone: timeZone
      }
    });
  };

  return (
    <div className="time-slot-wrapper">
      <h4 className="date-title">
        {date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
      </h4>
     
      <div className="slot-list">
        {DUMMY_SLOTS.map((slot) => (
          <button
            key={slot}
            className={`slot-btn-time ${selectedSlot === slot ? "selected" : ""}`} // ✅ Highlight selected
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSection;
