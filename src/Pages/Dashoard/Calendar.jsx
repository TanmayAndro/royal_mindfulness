import React from 'react';
import { Grid, Box, Typography, styled, colors } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interectionPlugin from '@fullcalendar/interaction';

const CalendarBox = styled(Box)({
  height: '38rem',
  padding: '10px',
  gap: '24px',
  width: 'unset',
  borderRadius: '20px',
  backgroundColor: 'white',
  "@media (max-width:1150px)": {
    // height: '550px',
    paddingBottom: '0px',
  },
  "@media (max-width:1199px)": {
    height: 'unset',
    width: '580px',
    marginRight: 'auto'
  },
  "@media (max-width:1200px)": {
    height: 'unset',
    marginRight: '0px',
    padding: '10px'
  },
  "@media (max-width:699px)": {
    height: 'unset',
    width: '3 60px',
    padding: '0px',
    fontSize: '15px'
  },
  "@media (max-width:500px)": {
    fontSize: '13px'
  },
})
const Calendar = () => {

  const events = [
    { title: 'Event 1', date: '2024-08-10' },
    { title: 'Event 2', date: '2024-08-15' },
    { title: 'Event 2', date: '2024-08-20' },
    { title: 'Event 2', date: '2024-08-25' }
  ];
  return (
    <CalendarBox >
      <FullCalendar paddingTop={4}
        plugins={[dayGridPlugin, timeGridPlugin, interectionPlugin]}
        initialView={'dayGridMonth'}
        events={events}
        fixedWeekCount={false}
      />
    </CalendarBox>
  );
};

export default Calendar;

