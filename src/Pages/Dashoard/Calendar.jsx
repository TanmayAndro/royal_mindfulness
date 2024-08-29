
import React, { useEffect, useState } from 'react';
import {Box, styled, colors } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import axios from 'axios';
import dayjs from 'dayjs';
import { bookings } from '../../API/ApiConfig';

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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventsForMonth(dayjs().format('MM'));
  }, []);

  const fetchEventsForMonth = (month) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/bookings?month=${month}`,
      {
        headers: {
          token: token,
        },
      }
    )
      .then((response) => {
        // console.log(response);
        const bookings = response.data.data.map((booking) => {
          const { date_of_booking, time_of_session } = booking.attributes;


          const sessionTimeIST = new Date(time_of_session).toLocaleString('en-IN', {
            timeZone: 'Europe/Berlin',  
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
            hour12: true,  
          });
          // console.log("time of session......",(time_of_session))


          return {
            // title: `SesionAt ${new Date(time_of_session).toLocaleTimeString()}`,
            title: `Sesn ${sessionTimeIST}`,
            date: date_of_booking,
            color: getColorByDate(date_of_booking)  
          };
        });
        setEvents(bookings);
      })
      .catch((error) => {
        // console.error("Error fetching bookings: ", error);
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


  const handleEventDrop = (info) => {
    const updatedEvent = {
      id: info.event.id,
      start: info.event.startStr,
      end: info.event.endStr,
    };
    
    // Update the event on your backend
    updateEventOnServer(updatedEvent);
  
    // Optionally, update the local state if necessary
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };
  const updateEventOnServer = async (event) => {
    // try {
    //   await axios.post('/api/update-event', event); // Adjust the API endpoint as needed
    // } catch (error) {
    //   console.error('Error updating event:', error);
    // }
  };
  
  return (
    <CalendarBox>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        events={events}
        datesSet={(dateInfo) => {
          const newMonth = dayjs(dateInfo.start).format('MM');
          fetchEventsForMonth(newMonth); 
        }}
        editable={true} // Enable dragging and dropping
        eventDrop={handleEventDrop} // Handle event drop
        fixedWeekCount={false}
      />
    </CalendarBox>
  );
};

export default Calendar;
