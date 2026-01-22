import { useNavigate } from "react-router-dom";
import "./TimeSlotSection.css"

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

  /* ✅ Format date ONLY for display */
  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const handleSlotClick = (slot) => {
    if (!timeZone) {
      alert("Please select a time zone first");
      return;
    }

    navigate("/free_consultance", {
      state: {
        free_consultance_date: date, // Date object (safe)
        free_consultance_time: slot,
        time_zone: timeZone
      }
    });
  };

  return (
    <div className="time-slot-wrapper">
      <h4 className="date-title">
        {formattedDate}
      </h4>

      <div className="slot-list">
        {DUMMY_SLOTS.map((slot) => (
          <button
            key={slot}
            className="slot-btn"
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
