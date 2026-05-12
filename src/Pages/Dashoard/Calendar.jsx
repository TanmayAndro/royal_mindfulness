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
  Rating
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

dayjs.extend(utc);
dayjs.extend(timezone);
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

  const [events, setEvents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

  const isTrainer = localStorage.getItem("is_teacher") === "true";
  const [attendanceLoading, setAttendanceLoading] = useState(false);
  const [sessionRatings, setSessionRatings] = useState({});


  //  Session Details  Date: 11 Mar 2026 Time: 02:30 PM
 
  // Example :- const TEST_TIME = "2026-03-11 14:20:00";

    //  const TEST_TIME = "2026-03-23 11:00:00";

  /* ---------------- FETCH ATTENDANCE ---------------- */
  const fetchAttendance = async () => {
    try {
      const res = await axios.get(
         `${process.env.REACT_APP_BASE_URL}/attendances?user_id=${user_id}`,
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

  /* ---------------- TIME CONVERSION ---------------- */
    const gmtTime = (time) => {
    const viewerTimeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const today = dayjs().format("YYYY-MM-DD");

    const utcTime = dayjs.tz(
      `${today} ${time}`,
      "YYYY-MM-DD hh:mm A",
      "UTC"
    );
    const convertedTime = utcTime.tz(viewerTimeZone);
    return convertedTime.format("hh:mm A");
  };

  /* ---------------- FETCH BOOKINGS ---------------- */
  const fetchEventsForMonth = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/bookings`,
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
      const trainerDateMap = {};

      data.forEach((booking) => {
        const attr = booking.attributes;
        const startDate = dayjs(attr.start_date, "DD MMM YYYY");
        const endDate = dayjs(attr.end_date, "DD MMM YYYY");
        let current = startDate.startOf("day");

        while (
          current.isSame(endDate, "day") ||
          current.isBefore(endDate, "day")
        ) {
          const dateStr = current.format("YYYY-MM-DD");
          const viewerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const bookingDateTime = dayjs
            .tz(`${dateStr} ${attr.start_time}`, "YYYY-MM-DD hh:mm A", "UTC")
            .tz(viewerTimeZone);

          const sessionObject = {
            id: `${booking.id}-${dateStr}`,
            bookingId: booking.id,
            date: dateStr,
            time: attr.start_time,
            bookingDateTime,
            trainerId: attr.trainer_id,
            meet_link: attr.meeting_link?.meeting_link,
            student_name: attr.meeting_link?.full_name,
            student_phone_number: attr.meeting_link?.phone_number,
            student_email: attr.meeting_link?.email,
            title: `Session at ${gmtTime(attr.start_time)}`,
            start: dateStr,
          };

         

          if (isTrainer) {
            if (!trainerDateMap[dateStr]) {
              trainerDateMap[dateStr] = [];
            }
            trainerDateMap[dateStr].push(sessionObject);
          } else {
            slots.push(sessionObject);
          }
          current = current.add(2, "day");
        }
      });

      if (isTrainer) {
        Object.keys(trainerDateMap).forEach((date) => {
          slots.push({
            id: `trainer-${date}`,
            date,
            start: date,
            title: "Sessions",
            sessions: trainerDateMap[date],
          });
        });
      }
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
      "DD/MM/YYYY",
    ];

    for (let format of formats) {
      const parsed = dayjs(dateString, format, true);
      if (parsed.isValid()) return parsed;
    }

    return dayjs(dateString);
  };

  /* ---------------- ATTENDANCE SYMBOL ---------------- */
 
  const getAttendanceSymbol = (date, time) => {

    const record = attendanceData.find((a) => {
      const parsedDate = parseAttendanceDate(a.date_of_class)?.format("YYYY-MM-DD");
      const attendanceTime = dayjs(a.time_of_class, "hh:mm A").format("HH:mm");
      const sessionTime = dayjs(time, "hh:mm A").format("HH:mm");
      return parsedDate === date && attendanceTime === sessionTime;
    });

    if (!record) return null;

    const status =
      record.trainer_attendance_status ||
      record.user_attendance_status ||
      record.attendance_key;

    if (status === "present") return "✅";
    if (status === "late") return "🕒";
    if (status === "absent") return "❌";

    return null;

  };
  /* ---------------- MARK ATTENDANCE ---------------- */
  
  const markAttendance = async (session = null) => {

    if (attendanceLoading) return;

    try {
      setAttendanceLoading(true);
      const eventData = session || selectedEvent;

      // derive datetime from bookingDateTime
      const classUtc = dayjs(eventData.bookingDateTime).utc();
      const dateOfClass = classUtc.format("YYYY-MM-DD");
      const timeOfClass = classUtc.format("hh:mm A");
       const joinTime = dayjs().utc().format();
      // const joinTime = TEST_TIME
      //   ? dayjs(TEST_TIME).utc().format()
      //   : dayjs().utc().format();
      
      // prevent duplicate attendance
      const alreadyMarked = attendanceData.find((a) => {
        const parsed = parseAttendanceDate(a.date_of_class);
        return parsed?.format("YYYY-MM-DD") === dateOfClass;
      });

      if (alreadyMarked) {
        setAttendanceLoading(false);
        return;
      }

      await axios.post(
       `${process.env.REACT_APP_BASE_URL}/attendances`,
        {
          attendance: {
            booking_id: eventData.bookingId,
            date_of_class: dateOfClass,
            time_of_class: timeOfClass,
            join_time: joinTime
          }
        },

        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true"
          }
        }
      );
      fetchAttendance();
    }
    catch (err) {
      console.error("Attendance error:", err?.response?.data || err);
    }
    finally {
      setAttendanceLoading(false);
    }
  };

 
/*---------------------- Time zone manage-------------------------- */

  const getMeetingWindow = (bookingDateTime) => {
    // const viewerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const start = dayjs(bookingDateTime);
      /* Test dummy test time 
      const now = TEST_TIME
        ? dayjs.tz(TEST_TIME, "YYYY-MM-DD HH:mm", viewerTimeZone)
         : dayjs(); */

     const now = dayjs(); // real current time
    const joinStart = start.subtract(15, "minute");
    const joinEnd = start.add(15, "minute");
    return { start, now, joinStart, joinEnd };
  };
/* ---------------- JOIN MEETING ---------------- */
 
  const handleJoinMeeting = async (session = null) => {

    const eventData = session || selectedEvent;

    if (!eventData) return;

    const { start, now, joinStart, joinEnd } =
      getMeetingWindow(eventData.bookingDateTime);

    const meetingDate = start.format("YYYY-MM-DD");
    const currentDate = now.format("YYYY-MM-DD");

    if (currentDate !== meetingDate) return;

    if (now.isBefore(joinStart) || now.isAfter(joinEnd)) return;

    let link = null;

    if (isTrainer) {

      link = session?.meet_link;

    }

    else {

      link = localStorage.getItem("meet_link");

    }

    if (!link) return;

    await markAttendance(session);

    window.open(link, "_blank", "noopener,noreferrer");

    setOpen(false);

  };


  /* -----------------Rating------------------------*/
  
  const submitRating = async (session, ratingValue) => {
    try {

      const formData = new FormData();

      formData.append("rating[rating]", ratingValue);
      formData.append("rating[booking_id]", session.bookingId);
      // formData.append("rating[trainer_id]", session.trainer_id || null);
      formData.append(
        "rating[session_date]",
        dayjs(session.date).format("DD/MM/YYYY")
      );
      if (session.trainerId) {
        formData.append("rating[trainer_id]", session.trainerId);
      }
        

     const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/ratings`,
        formData,
        {
          headers: {
            accept: "application/json",
            token: token?.trim(),
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200){
        toast.success("Rating submitted successfully!");
      }
     toast.success("Rating submitted successfully");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.errors ||
        error?.response?.data?.message ||
        "Something went wrong";
      toast.error(errorMessage);
    }
  };

  const handleRatingChange = (session, value) => {
    if (!session) return;
    setSessionRatings((prev) => ({
      ...prev,
      [session.id]: value,
    }));
    submitRating(session, value);
  };

/* ---------------- POPUP CONTENT ---------------- */

 
  const renderPopupContent = (session = null) => {
  const eventData = session || selectedEvent;
  if (!eventData) return null;

  const { now, joinStart, joinEnd } = getMeetingWindow(eventData.bookingDateTime);

  if (now.isAfter(joinEnd)) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            mb: 2,
            fontWeight: 500,
            color: "gray"
          }}
        >
          Session Closed
        </Typography>
          {isTrainer ? null : (
            <>
              <Typography sx={{ mb: 1 }}>Rate your session</Typography>
              <Rating
                name={`rating-${eventData.id}`}
                value={sessionRatings[eventData.id] || 0}
                precision={0.5}
                disabled={!!sessionRatings[eventData.id]}
                onChange={(event, newValue) => {
                  handleRatingChange(eventData, newValue);
                }}
              />
              {sessionRatings[eventData.id] && (
              <Typography
                variant="body2"
                sx={{ mt: 1, fontWeight: 500, color: "#555" }}
              >
                Your Rating: {sessionRatings[eventData.id]} ⭐
              </Typography>
            )}
            </>
          )}
      </Box>
    );
  }

  if (now.isBefore(joinStart)) {
    return (
      <Typography
        sx={{
          textAlign: "center",
          color: "orange",
          fontWeight: 500
        }}
      >
        ⏰ Join link available 15 minutes before start
      </Typography>
    );
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 1,
          px: 4,
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600
        }}
        disabled={attendanceLoading}
        onClick={() => handleJoinMeeting(eventData)}
      >
        {attendanceLoading ? "Joining..." : "Join Meeting"}
      </Button>
    </Box>
  );
};
  
  /* ---------------- DATE CLICK ---------------- */
  const handleDateClick = (info) => {

    const clickedDate =
      info.dateStr ||
      dayjs(info.event?.start).format("YYYY-MM-DD");
      
    if (!clickedDate) return;

    if (isTrainer) {
      const sessions =
        info.event?.extendedProps?.sessions || [];       
      setSelectedEvent({
        date: clickedDate,
        sessions,
      });

      setOpen(true);
      return;
    }

    if (info.event) {
      const eventObj = events.find(
        (e) => e.id === info.event.id
      );
      setSelectedEvent(eventObj);
      setOpen(true);
    }
  };

  return (
    <CalendarBox>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => {

          const date = dayjs(eventInfo.event.start).format("YYYY-MM-DD");
          const time = eventInfo.event.extendedProps.time;

          return (
            <div style={{ whiteSpace: "normal", fontSize: "x-small" }}>
              {getAttendanceSymbol(date, time)} {eventInfo.event.title}
            </div>
          );

        }}
        dateClick={handleDateClick}
        eventClick={handleDateClick}
      />

      {isTrainer ? (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
          <DialogTitle>Sessions</DialogTitle>
          <DialogContent>
            {selectedEvent?.sessions?.length > 0 ? (
              <>
                <Typography sx={{ mb: 2 }}>
                  <strong>Date:</strong>{" "}
                  {dayjs(selectedEvent.date).format("DD MMM YYYY")}
                </Typography>

                {selectedEvent.sessions.map((session) => (
                  <div
                    key={session.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                      padding: "10px",
                      border: "1px solid #eee",
                      borderRadius: "8px",
                    }}
                  >
                  <Box>
                    <Typography>
                      {session.title?.replace("Session at ", "")}
                    </Typography>

                    <Typography variant="caption" sx={{ display: "block" }}>
                      {session.student_name}
                    </Typography>

                    <Typography variant="caption" sx={{ display: "block" }}>
                      {session.student_phone_number}
                    </Typography>

                    <Typography variant="caption" sx={{ display: "block" }}>
                      {session.student_email}
                    </Typography>
                  </Box>

                   {renderPopupContent(session)}
                  </div>
                ))}
              </>
            ) : (
              <>
                <Typography>No sessions available</Typography>
                             
               </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle
            sx={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: "20px",
              pb: 1
            }}
          >
            Session Details
          </DialogTitle>

          <DialogContent dividers>
            {selectedEvent && (
              <>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                    fontSize: "15px"
                  }}
                >
                  📅 <strong>Date:</strong>
                  {dayjs(selectedEvent.date).format("DD MMM YYYY")}
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    fontSize: "15px"
                  }}
                >
                  ⏰ <strong>Time:</strong>
                  {selectedEvent.title?.replace("Session at ", "")}
                </Typography>

                {renderPopupContent()}
              </>
            )}
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setOpen(false)}
              sx={{ textTransform: "none", px: 3 }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </CalendarBox>
  );
};

export default Calendar;