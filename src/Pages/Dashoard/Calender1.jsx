import React, { useEffect, useState } from 'react';
import {
  Box, styled, colors, Dialog, DialogTitle, DialogContent,
  Typography, Rating, Button, DialogActions
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const CalendarBox = styled(Box)({
  height: '38rem',
  padding: '10px',
  gap: '24px',
  width: 'unset',
  borderRadius: '20px',
  backgroundColor: 'white',
  "@media (max-width:1150px)": {
    paddingBottom: '0px',
  },
  "@media (max-width:1199px)": {
    height: 'unset',
    width: '580px',
    marginRight: 'auto'
  },
  "@media (max-width:1200px)": {
    marginRight: '0px',
    padding: '10px'
  },
  "@media (max-width:699px)": {
    width: '360px',
    padding: '0px',
    fontSize: '15px'
  },
  "@media (max-width:500px)": {
    fontSize: '13px'
  },
});

const Calendar = () => {
  const token = localStorage.getItem('user_token');
  const user_id = localStorage.getItem('user_id');
  const [events, setEvents] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchEventsForMonth();
  }, []);

  const fetchEventsForMonth = () => {
    axios.get(`https://deedee-unchainable-optionally.ngrok-free.dev/trainer_bookings?user_id=${user_id}`, {
      headers: { token }
    })
    .then((response) => {
      const data = response.data;

      const groupedEvents = data.reduce((acc, booking) => {
        const bookingDate = dayjs(booking.booking_start_date).utc().format('YYYY-MM-DD');
        const bookingTime = dayjs(booking.booking_start_time).utc().format('HH:mm:ss');
        const bookingDateTime = dayjs.utc(`${bookingDate}T${bookingTime}Z`);

        if (!bookingDateTime.isValid()) {
          console.warn(`Invalid booking date/time for booking id: ${booking.id}`, booking.booking_start_date, booking.booking_start_time);
          return acc;
        }

        const key = `${bookingDate}_${bookingTime}`;

        if (!acc[key]) {
          acc[key] = {
            id: booking.id,
            title: `Session at ${bookingDateTime.format('hh:mm A')}`,
            date: bookingDate,
            time: bookingDateTime.format('hh:mm A'),
            color: getColorByDate(bookingDate),
            teacherName: booking.user?.first_name + " " + booking.user?.last_name || 'Unknown',
            bookingDateTime,
          };
        }
        return acc;
      }, {});

      setEvents(Object.values(groupedEvents));
    })
    .catch((error) => {
      console.error("Error fetching bookings:", error);
    });
  };

  const getColorByDate = (date) => {
    const today = dayjs().startOf('day');
    const bookingDate = dayjs(date);

    if (bookingDate.isBefore(today)) {
      return colors.red[300];
    } else if (bookingDate.isSame(today, 'day')) {
      return colors.green[500];
    } else {
      return colors.lightBlue[200];
    }
  };

  const handleEventClick = (clickInfo) => {
    const event = events.find(e => e.date === clickInfo.event.startStr);
    if (event) {
      setSelectedEvent(event);
      setOpen(true);
      setRating(0);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isPastMeeting = selectedEvent ? selectedEvent.bookingDateTime.isBefore(dayjs()) : false;

  return (
    <CalendarBox>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        events={events}
        datesSet={() => fetchEventsForMonth()}
        editable={true}
        eventClick={handleEventClick}
        fixedWeekCount={false}
        eventContent={(eventInfo) => {
          // Split title into two lines: "Session" and "at hh:mm AM/PM"
          const parts = eventInfo.event.title.split(' at ');
          return (
            <div style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }}>
              {parts[0]}{'\n'}at {parts[1]}
            </div>
          );
        }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Session Details</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <>
              <Typography variant="subtitle1" gutterBottom>
                <strong>Teacher Name:</strong> {selectedEvent.teacherName}
              </Typography>

              {/* Show hardcoded rating only for future meetings */}
              {!isPastMeeting && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography variant="body2">Rating:</Typography>
                  <Rating name="teacher-display-rating" value={4} precision={0.5} readOnly />
                </Box>
              )}

              <Typography variant="subtitle1" gutterBottom>
                <strong>Session Time:</strong> {selectedEvent.date} at {selectedEvent.time}
              </Typography>

              {/* Show Join Meeting button only for future meetings */}
              {!isPastMeeting && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => window.location.href = '/meeting'}
                >
                  Join Meeting
                </Button>
              )}

              {/* For past meetings show rating input and submit button */}
              {isPastMeeting ? (
                <>
                  <Typography variant="h6" sx={{ mt: 3 }}>Teacher Rating</Typography>
                  <Rating
                    name="teacher-rating"
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                    precision={1}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {rating > 0 ? `You rated ${rating} star${rating > 1 ? 's' : ''}` : 'Please rate the teacher'}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => alert(`Thank you for rating ${rating} stars!`)}
                    disabled={rating === 0}
                  >
                    Submit Rating
                  </Button>
                </>
              ) : (
                <Typography sx={{ mt: 3 }}>
                  This session hasn't happened yet.
                </Typography>
              )}
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </CalendarBox>
  );
};

export default Calendar;
