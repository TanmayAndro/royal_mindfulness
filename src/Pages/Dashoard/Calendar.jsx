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
});

const Calendar = () => {
  const token = localStorage.getItem("user_token");
  const user_id = localStorage.getItem("user_id");

  const USE_DUMMY_DATA = false;

  const [events, setEvents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  /* ---------------- FETCH ATTENDANCE ---------------- */
  const fetchAttendance = async () => {
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
        const startDate = dayjs(attr.start_date, "DD MMM YYYY");
        const endDate = dayjs(attr.end_date, "DD MMM YYYY");

        let current = startDate.startOf("day");

        while (current.isSame(endDate, "day") || current.isBefore(endDate, "day")) {
          const dateStr = current.format("YYYY-MM-DD");

          const bookingDateTime = dayjs(
            `${dateStr} ${attr.start_time}`,
            "YYYY-MM-DD hh:mm A"
          );

          slots.push({
            id: `${booking.id}-${dateStr}`,
            bookingId: booking.id,
            date: dateStr,
            time: attr.start_time,
            trainer_id: attr.trainer_id,
            bookingDateTime,
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

    const formats = [
      "MMMM DD, YYYY",
      "MMMM D, YYYY",
      "DD MMM YYYY",
    ];

    for (let format of formats) {
      const parsed = dayjs(dateString, format, true);
      if (parsed.isValid()) return parsed;
    }

    const fallback = dayjs(dateString);
    return fallback.isValid() ? fallback : null;
  };

  /* ---------------- ATTENDANCE SYMBOL ---------------- */
  const getAttendanceSymbol = (date) => {
    const record = attendanceData.find((a) => {
      const parsed = parseAttendanceDate(a.date_of_class);
      return parsed?.format("YYYY-MM-DD") === date;
    });

    if (!record) return null;

    if (record.attendance_key === "present") return "✅";
    if (record.attendance_key === "late") return "🕒";
    if (record.attendance_key === "absent") return "❌";

    return null;
  };

  /* ---------------- ATTENDANCE STATUS ---------------- */
  const determineAttendanceStatus = (eventTime) => {
    const now = dayjs();
    const lateLimit = eventTime.add(10, "minute");

    if (now.isSameOrBefore(eventTime)) return "present";
    if (now.isAfter(eventTime) && now.isBefore(lateLimit)) return "late";
    return "absent";
  };

  /* ---------------- JOIN MEETING ---------------- */
  const handleJoinMeeting = async () => {
    if (!selectedEvent) return;

    const status = determineAttendanceStatus(selectedEvent.bookingDateTime);
    await markAttendance(status);

    const link = localStorage.getItem("meet_link");
    if (link) window.open(link, "_blank");

    setOpen(false);
  };

  /* ---------------- MARK ATTENDANCE ---------------- */
  const markAttendance = async (status) => {
    try {
      await axios.post(
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

      fetchAttendance();
    } catch (err) {
      console.error("Attendance error:", err);
    }
  };

  /* ---------------- POPUP CONTENT (FIXED JOIN LOGIC) ---------------- */
  const renderPopupContent = () => {
    if (!selectedEvent) return null;

    const start = dayjs(selectedEvent.bookingDateTime);
    const now = dayjs();

    const joinStart = start.subtract(15, "minute");
    const joinEnd = start.add(15, "minute");

    // ❌ After 15 minutes
    if (now.isAfter(joinEnd)) {
      return (
        <Typography sx={{ mt: 2, color: "gray" }}>
          Session Closed
        </Typography>
      );
    }

    // ⏰ Too early
    if (now.isBefore(joinStart)) {
      return (
        <Typography sx={{ mt: 2, color: "orange" }}>
          ⏰ Join link available 15 minutes before start
        </Typography>
      );
    }

    // ✅ Join allowed
    return (
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleJoinMeeting}>
        Join Meeting
      </Button>
    );
  };

  /* ---------------- CLICK HANDLERS ---------------- */
  const handleDateClick = (info) => {
    const event = events.find((e) => e.date === info.dateStr);
    if (event) {
      setSelectedEvent(event);
      setOpen(true);
    }
  };

  return (
    <CalendarBox>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((e) => ({
          ...e,
          title: `${getAttendanceSymbol(e.date) || ""} ${e.title}`,
        }))}
        dateClick={handleDateClick}
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
