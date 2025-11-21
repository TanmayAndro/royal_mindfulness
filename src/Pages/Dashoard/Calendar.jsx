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

dayjs.extend(utc);

const CalendarBox = styled(Box)({
  height: "38rem",
  padding: "10px",
  borderRadius: "20px",
  backgroundColor: "white",
});

const Calendar = () => {
  const token = localStorage.getItem("user_token");
  const user_id = localStorage.getItem("user_id");

  const [events, setEvents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  /* ----------------------- FETCH ATTENDANCE ----------------------- */
  const fetchAttendance = () => {
    axios
      .get(
        `https://deedee-unchainable-optionally.ngrok-free.dev/attendances?user_id=${user_id}`,
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((res) => {
        const attendances = res.data?.attendances || res.data || [];
        setAttendanceData(attendances);
      })
      .catch((err) => console.error("Error fetching attendance:", err));
  };

  /* ----------------------- FETCH BOOKINGS ----------------------- */
  const fetchEventsForMonth = () => {
    axios
      .get(
        `https://deedee-unchainable-optionally.ngrok-free.dev/bookings?user_id=${user_id}`,
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        const data = response.data?.bookings || [];
        const slots = [];

        data.forEach((booking) => {
          const attr = booking.attributes;
          const startDate = dayjs(attr.start_date);
          const endDate = dayjs(attr.end_date);

          let current = startDate;

          while (current.isBefore(endDate) || current.isSame(endDate)) {
            slots.push({
              id: booking.id,
              title: `Session at ${attr.start_time}`,
              date: current.format("YYYY-MM-DD"),
              time: attr.start_time,
              trainer_id: booking.trainer_id,
              bookingDateTime: dayjs(
                `${current.format("YYYY-MM-DD")} ${attr.start_time}`,
                "YYYY-MM-DD hh:mm A"
              ),
            });

            current = current.add(1, "day");
          }
        });

        setEvents(slots);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  useEffect(() => {
    fetchEventsForMonth();
    fetchAttendance();
  }, []);

  /* ----------------------- SYMBOL ON CALENDAR ----------------------- */
  const getAttendanceSymbol = (date) => {
    const record = attendanceData.find(
      (a) => dayjs(a.date_of_class).format("YYYY-MM-DD") === date
    );

    if (!record) return "❌";
    if (record.attendance_key === "present") return "✅";
    if (record.attendance_key === "late") return "🕒";
    return "❌";
  };

  /* ----------------------- DETERMINE ATTENDANCE STATUS ----------------------- */
  const determineAttendanceStatus = (eventTime) => {
    const now = dayjs();

    if (now.isBefore(eventTime)) return "present";
    if (now.isAfter(eventTime) && now.isBefore(eventTime.add(10, "minute")))
      return "late";

    return "absent";
  };

  /* ----------------------- POST ATTENDANCE ----------------------- */
  const markAttendance = async (status, selectedEvent) => {
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
      console.error("Attendance POST error:", err);
    }
  };

  /* ----------------------- JOIN MEETING ----------------------- */
  const handleJoinMeeting = async () => {
    if (!selectedEvent) return;

    const attendanceStatus = determineAttendanceStatus(
      selectedEvent.bookingDateTime
    );

    await markAttendance(attendanceStatus, selectedEvent);

    const meetingLink = localStorage.getItem("meet_link")
    window.open(meetingLink, "_blank");
    setOpen(false);
  };

  /* ----------------------- CLICK HANDLERS ----------------------- */
  const handleDateClick = (info) => {
    const clickedDate = dayjs(info.dateStr).format("YYYY-MM-DD");
    const list = events.filter((e) => e.date === clickedDate);
    if (list.length > 0) {
      setSelectedEvent(list[0]);
      setOpen(true);
    }
  };

  const handleEventClick = (info) => {
    const clickedDate = dayjs(info.event.startStr).format("YYYY-MM-DD");
    const list = events.filter((e) => e.date === clickedDate);
    if (list.length > 0) {
      setSelectedEvent(list[0]);
      setOpen(true);
    }
  };

  return (
    <CalendarBox>
      {/* ----------------------- CALENDAR ----------------------- */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          ...event,
          title: `${event.title} ${getAttendanceSymbol(event.date)}`,
        }))}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />

      {/* ----------------------- POPUP ----------------------- */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Session & Attendance Details</DialogTitle>

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

              {/* ----------------------- FIXED LOGIC ----------------------- */}
              {(() => {
                const start = dayjs(selectedEvent.bookingDateTime);
                const now = dayjs();

                const isPast = now.isAfter(start.add(30, "minute")); // completely finished
                const isLive = now.isAfter(start) && now.isBefore(start.add(30, "minute"));
                const isUpcoming = now.isBefore(start);

                const canJoin =
                  isLive ||
                  (isUpcoming &&
                    now.isAfter(start.subtract(15, "minute")));

                const attendanceRecord = attendanceData.find(
                  (a) =>
                    dayjs(a.date_of_class).format("YYYY-MM-DD") ===
                    selectedEvent.date
                );

                /* ------------ CASE 1: PAST SESSION ------------ */
                if (isPast) {
                  return (
                    <>
                      <Typography sx={{ mt: 2, color: "gray" }}>
                        Session Completed
                      </Typography>

                      <Typography sx={{ mt: 1 }}>
                        <strong>Attendance:</strong>{" "}
                        {attendanceRecord
                          ? attendanceRecord.attendance_key
                          : "Not Marked"}
                      </Typography>
                    </>
                  );
                }

                /* ------------ CASE 2: JOIN AVAILABLE ------------ */
                if (!canJoin) {
                  return (
                    <Button
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={handleJoinMeeting}
                    >
                      Join Meeting
                    </Button>
                  );
                }

                /* ------------ CASE 3: UPCOMING BUT EARLY ------------ */
                if (isUpcoming) {
                  return (
                    <Typography sx={{ mt: 2, color: "red" }}>
                      ⏰ Meeting link will be available 15 minutes before session start.
                    </Typography>
                  );
                }

                return null;
              })()}
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
