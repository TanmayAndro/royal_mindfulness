import React, { useEffect, useState } from "react";
import {
  Box,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  DialogActions,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const CalendarBox = styled(Box)({
  width: "100%",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "white",
  "@media (max-width: 1199px)": {
    paddingBottom: "0px",
  },
  "@media (max-width: 699px)": {
    padding: "5px",
    fontSize: "15px",
  },
  "@media (max-width: 500px)": {
    fontSize: "13px",
  },
});

const Calendar = () => {
  const token = localStorage.getItem("user_token");
  const user_id = localStorage.getItem("user_id");

  // Toggle this to use dummy data for testing POST API
  // Set to false to use real API calls
  const USE_DUMMY_DATA = false;

  const [events, setEvents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  /* ---------------- DUMMY ATTENDANCE DATA FOR TESTING ---------------- */
  const getDummyAttendanceData = () => {
    return [
      {
        id: 93,
        booking_id: 35,
        trainer_id: 1,
        user_id: 57,
        date_of_class: "December 08, 2025",
        time_of_class: "10:00 AM",
        attendance_key: "absent",
      },
    ];
  };

  /* ---------------- FETCH ATTENDANCE ---------------- */
  const fetchAttendance = async () => {
    if (USE_DUMMY_DATA) {
      // Set dummy meeting link for testing
      if (!localStorage.getItem("meet_link")) {
        localStorage.setItem("meet_link", "https://meet.jit.si/test-meeting-room");
      }
      
      const dummyData = getDummyAttendanceData();
      setAttendanceData(dummyData);
      console.log("✅ [DUMMY MODE] Attendance data loaded:", dummyData.length, "records");
      return;
    }

    try {
      const res = await axios.get(
        `https://deedee-unchainable-optionally.ngrok-free.dev/attendances?user_id=${user_id}`,
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const attendances = res.data?.attendances || res.data || [];
      setAttendanceData(attendances);
      console.log("Attendance data loaded:", attendances.length, "records");
    } catch (err) {
      console.error("Error fetching attendance:", err);
    }
  };

  /* ---------------- FETCH BOOKINGS ---------------- */
  const fetchEventsForMonth = async () => {
    try {
      const response = await axios.get(
        `https://deedee-unchainable-optionally.ngrok-free.dev/bookings?user_id=${user_id}`,
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = response.data?.bookings || [];
      const slots = [];

      data.forEach((booking) => {
        const attr = booking.attributes;
        // Parse dates in format "08 Dec 2025"
        const startDate = dayjs(attr.start_date, "DD MMM YYYY");
        const endDate = dayjs(attr.end_date, "DD MMM YYYY");

        if (!startDate.isValid() || !endDate.isValid()) {
          console.error("Invalid date format:", attr.start_date, attr.end_date);
          return;
        }

        let current = startDate.startOf("day");

        while (current.isSame(endDate, "day") || current.isBefore(endDate, "day")) {
          const dateStr = current.format("YYYY-MM-DD");
          const bookingDateTime = dayjs(
            `${dateStr} ${attr.start_time}`,
            "YYYY-MM-DD hh:mm A"
          );

          slots.push({
            id: `${booking.id}-${dateStr}-${attr.start_time}`,
            bookingId: booking.id,
            date: dateStr,
            time: attr.start_time,
            trainer_id: attr.trainer_id || booking.trainer_id,
            bookingDateTime: bookingDateTime,
            title: `Session at ${attr.start_time}`,
            start: dateStr,
          });

          current = current.add(2, "day");
        }
      });

      setEvents(slots);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchEventsForMonth();
    fetchAttendance();
  }, []);

  /* ---------------- PARSE ATTENDANCE DATE ---------------- */
  const parseAttendanceDate = (dateString) => {
    if (!dateString) return null;

    // Try different date formats from API
    // Format 1: "December 08, 2025" or "December 8, 2025" (MMMM DD, YYYY or MMMM D, YYYY)
    let date = dayjs(dateString, "MMMM DD, YYYY", true);
    if (date.isValid()) return date;
    
    date = dayjs(dateString, "MMMM D, YYYY", true);
    if (date.isValid()) return date;

    // Format 2: "08 Dec 2025" (DD MMM YYYY)
    date = dayjs(dateString, "DD MMM YYYY", true);
    if (date.isValid()) return date;

    // Format 3: ISO format or default parsing
    date = dayjs(dateString);
    if (date.isValid()) return date;

    return null;
  };

  /* ---------------- ATTENDANCE SYMBOL ---------------- */
  const getAttendanceSymbol = (date) => {
    // If no attendance data exists, return null (don't show symbol)
    if (!attendanceData || attendanceData.length === 0) {
      return null;
    }

    // Find attendance record matching the date
    const record = attendanceData.find((a) => {
      if (!a.date_of_class) return false;
      
      const attendanceDate = parseAttendanceDate(a.date_of_class);
      if (!attendanceDate) {
        console.warn("Could not parse date:", a.date_of_class);
        return false;
      }
      
      const formattedDate = attendanceDate.format("YYYY-MM-DD");
      return formattedDate === date;
    });

    // If no record found for this date, return null (don't show symbol)
    if (!record) {
      return null;
    }

    // Return appropriate symbol based on attendance status
    if (record.attendance_key === "present") {
      return "✅";
    }
    if (record.attendance_key === "late") {
      return "🕒";
    }
    if (record.attendance_key === "absent") {
      return "❌";
    }

    return null;
  };

  /* ---------------- DETERMINE ATTENDANCE STATUS ---------------- */
  const determineAttendanceStatus = (eventTime) => {
    const now = dayjs();
    const tenMinutesAfter = eventTime.add(10, "minute");

    // If joining before or exactly at start time, mark as present
    if (now.isBefore(eventTime) || now.isSame(eventTime, "minute")) {
      return "present";
    }

    // If joining after start time but within 10 minutes, mark as late
    if (now.isAfter(eventTime) && now.isBefore(tenMinutesAfter)) {
      return "late";
    }

    // If joining after 10 minutes, mark as absent
    return "absent";
  };

  /* ---------------- MARK ATTENDANCE ---------------- */
  const markAttendance = async (status, selectedEvent) => {
    if (USE_DUMMY_DATA) {
      
console.log(selectedEvent.bookingId,"selectedEvent.bookingId>>>>>")
      
      const newRecord = {
        id: `dummy-${Date.now()}`,
        booking_id: selectedEvent.bookingId || 35,
        trainer_id: selectedEvent.trainer_id,
        user_id: parseInt(user_id) || 57,
        date_of_class: dayjs(selectedEvent.date).format("MMMM DD, YYYY"),
        time_of_class: selectedEvent.time,
        attendance_key: status,
      };

      setAttendanceData((prev) => {
        const filtered = prev.filter((a) => {
          if (!a.date_of_class) return true;
          const attendanceDate = parseAttendanceDate(a.date_of_class);
          if (!attendanceDate) return true;
          return attendanceDate.format("YYYY-MM-DD") !== selectedEvent.date;
        });
        const updated = [...filtered, newRecord];
        console.log("✅ [DUMMY MODE] Attendance updated locally:", updated);
        return updated;
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    try {
      const response = await axios.post(
        `https://deedee-unchainable-optionally.ngrok-free.dev/attendances`,
        {
          user_id,
          trainer_id: selectedEvent.trainer_id,
          date_of_class: selectedEvent.date,
          attendance_key: status,
        },
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      await fetchAttendance();
    } catch (err) {
      console.error("❌ Attendance POST error:", err);
      if (err.response) {
        console.error("  - Status:", err.response.status);
        console.error("  - Data:", err.response.data);
      }
    }
  };

  /* ---------------- JOIN MEETING ---------------- */
  const handleJoinMeeting = async () => {
    if (!selectedEvent) return;

    // Determine attendance status based on join time
    const attendanceStatus = determineAttendanceStatus(
      selectedEvent.bookingDateTime
    );
    // Mark attendance via POST API (or dummy mode)
    await markAttendance(attendanceStatus, selectedEvent);

    // Open meeting link
    const meetingLink = localStorage.getItem("meet_link");
    if (meetingLink) {
      if (USE_DUMMY_DATA) {
        console.log("🧪 [DUMMY MODE] Would open meeting link:", meetingLink);
        // Still open the link for testing
        window.open(meetingLink, "_blank");
      } else {
        window.open(meetingLink, "_blank");
      }
    } else {
      console.warn("⚠️ No meeting link found in localStorage");
    }

    setOpen(false);
  };

  /* ---------------- CLICK HANDLERS ---------------- */
  const handleDateClick = (info) => {
    const date = info.dateStr;
    const list = events.filter((e) => e.date === date);

    if (list.length > 0) {
      setSelectedEvent(list[0]);
      setOpen(true);
    }
  };

  const handleEventClick = (info) => {
    const clickedEvent = info.event.extendedProps;

    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setOpen(true);
    }
  };

  /* ---------------- POPUP CONTENT ---------------- */
  const renderPopupContent = () => {
    if (!selectedEvent) return null;

    const start = dayjs(selectedEvent.bookingDateTime);
    const now = dayjs();
    const sessionEnd = start.add(30, "minute");
    const fifteenMinutesBefore = start.subtract(15, "minute");

    const isPast = now.isAfter(sessionEnd);
    const isLive = now.isAfter(start) && now.isBefore(sessionEnd);
    const isUpcoming = now.isBefore(start);
    
    // In dummy mode, always allow joining for testing (unless explicitly past by more than 1 day)
    const canJoin = USE_DUMMY_DATA 
      ? !isPast || now.diff(sessionEnd, "day") < 1
      : isLive || (isUpcoming && now.isAfter(fifteenMinutesBefore));

    const attendanceRecord = attendanceData.find((a) => {
      if (!a.date_of_class) return false;
      
      const attendanceDate = parseAttendanceDate(a.date_of_class);
      if (!attendanceDate) return false;
      
      return attendanceDate.format("YYYY-MM-DD") === selectedEvent.date;
    });

    const meetingLink = localStorage.getItem("meet_link");

    // In dummy mode, show join button even for past sessions (for testing)
    if (isPast && !USE_DUMMY_DATA) {
      return (
        <>
          <Typography sx={{ mt: 2, color: "gray" }}>
            Session Completed
          </Typography>

          <Typography sx={{ mt: 1 }}>
            <strong>Attendance:</strong>{" "}
            {attendanceRecord
              ? attendanceRecord.attendance_key.charAt(0).toUpperCase() +
                attendanceRecord.attendance_key.slice(1)
              : "Not Marked"}
          </Typography>
        </>
      );
    }

    // Show join button if can join OR in dummy mode
    if (canJoin || USE_DUMMY_DATA) {
      if (!meetingLink) {
        return (
          <Typography sx={{ mt: 2, color: "red" }}>
            ⚠️ Meeting link not available
          </Typography>
        );
      }

      return (
        <>
          {USE_DUMMY_DATA && (
            <Typography sx={{ mt: 2, mb: 1, color: "blue", fontSize: "0.875rem" }}>
              🧪 [TEST MODE] Join button enabled for testing
            </Typography>
          )}
          <Button variant="contained" sx={{ mt: 3 }} onClick={handleJoinMeeting}>
            Join Meeting
          </Button>
        </>
      );
    }

    if (isUpcoming && now.isBefore(fifteenMinutesBefore) && !USE_DUMMY_DATA) {
      return (
        <Typography sx={{ mt: 2, color: "orange" }}>
          ⏰ Join link will be available 15 minutes before session start
        </Typography>
      );
    }

    return null;
  };

  return (
    <CalendarBox>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={events.map((event) => {
          const symbol = getAttendanceSymbol(event.date);
          return {
            id: event.id,
            title: symbol ? `${symbol} ${event.title}` : event.title,
            start: event.date,
            extendedProps: {
              ...event,
              attendanceSymbol: symbol,
            },
          };
        })}
        dayCellContent={(dayInfo) => {
          const dateStr = dayInfo.dateStr;
          const symbol = getAttendanceSymbol(dateStr);
          
          // Only show symbol if there's an attendance record for this date
          if (symbol) {
            return (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
                <span style={{ fontSize: "18px", lineHeight: "1" }}>{symbol}</span>
                <span>{dayInfo.dayNumberText}</span>
              </div>
            );
          }
          return dayInfo.dayNumberText;
        }}
        eventContent={(eventInfo) => {
          return <div>{eventInfo.event.title}</div>;
        }}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDisplay="block"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Session Details</DialogTitle>

        <DialogContent>
          {selectedEvent && (
            <>
              <Typography>
                <strong>Date:</strong>{" "}
                {dayjs(selectedEvent.date).format("DD MMM YYYY")}
              </Typography>

              <Typography>
                <strong>Time:</strong> {selectedEvent.time}
              </Typography>

              {renderPopupContent()}
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </CalendarBox>
  );
};

export default Calendar;
