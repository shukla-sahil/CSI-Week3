import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => (
  <div>
    <h2>Calendar</h2>
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
  </div>
);

export default Calendar;
