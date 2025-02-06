// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs, { Dayjs } from "dayjs";
// import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
// import { styled } from "@mui/system";
// // import dayjs from "dayjs";
// interface SessionData {
//   data: {
//     id: string;
//     type: string;
//     attributes: {
//       session_name: string;
//       duration: string;
//       session_details: string;
//       max_no_of_participants: number;
//       session_dates: {
//         date: string;
//         repeat_session: string;
//         session_times: {
//           time: string;
//         }[];
//       }[];
//     };
//   };
// }

// // Styled component for highlighted dates
// const HighlightedDay = styled(PickersDay)<{ selected?: boolean }>(
//   ({ theme, selected }) => ({
//     ...(selected && {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.primary.contrastText,
//     }),
//   })
// ) as typeof PickersDay;

// const SessionPage: React.FC = () => {
//   const [sessionDates, setSessionDates] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await axios.get<SessionData>(
//           "http://localhost:8000/sessions/3"
//         );

//         const fetchedDates = response.data.data.attributes.session_dates.map(
//           (sessionDate) => dayjs(sessionDate.date).format("YYYY-MM-DD") // Ensure format
//         );

//         setSessionDates(fetchedDates);
//       } catch (error) {
//         console.error("Error fetching sessions:", error);
//       }
//     };

//     fetchSessions();
//   }, []);

//   const handleDateSelect = (date: Dayjs | null) => {
//     if (date) {
//       console.log("Selected date:", date.format("YYYY-MM-DD"));
//     }
//   };

//   const isSessionDate = (date: Dayjs): boolean => {
//     if (!date || !dayjs.isDayjs(date)) {
//       console.error("Invalid date object:", date);
//       return false;
//     }
//     return sessionDates.includes(date.format("YYYY-MM-DD"));
//   };

//   const renderDay = (
//     date: Dayjs,
//     _selectedDates: Array<Dayjs | null>,
//     pickersDayProps: PickersDayProps<Dayjs>
//   ) => {
//     if (!pickersDayProps || !date || !dayjs.isDayjs(date)) {
//       console.error("Invalid date object passed to renderDay:", date);
//       return <PickersDay {...pickersDayProps} />;
//     }

//     const isSelected = isSessionDate(date);

//     return (
//       <HighlightedDay {...pickersDayProps} selected={isSelected} disableMargin>
//         {date.format("D")} {/* ✅ Ensures correct number display */}
//       </HighlightedDay>
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//      <DateCalendar
//   shouldDisableDate={(date) => {
//     const disabledDates = [
//       dayjs("2021-05-03"),
//       dayjs("2025-04-30"), // Fixed format
//       dayjs("2025-01-30"), // Fixed format
//     ];

//     return disabledDates.some((disabledDate) => date.isSame(disabledDate, "day"));
//   }}
// //   onChange={handleDateSelect}
// //   slots={{
// //     day: renderDay as any, // Workaround for TypeScript issue
// //   }}
//   sx={{
//     width: "100%",
//   }}
// />
//     </LocalizationProvider>
//   );
// };

// export default SessionPage;

import React, { useState, useMemo } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SessionPage: React.FC = () => {
  const startDate = dayjs("2025-01-02"); // Your session start date
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  // Generate an array of session dates (every week from start date)
  const sessionDates = useMemo(() => {
    const dates: Dayjs[] = [];
    let currentDate = startDate;

    while (currentDate.isBefore(dayjs().add(1, "year"))) {
      // Generate for 1 year
      dates.push(currentDate);
      currentDate = currentDate.add(7, "day"); // Add 7 days for weekly sessions
    }

    return dates;
  }, [startDate]);

  // Function to check if a date is a valid session date
  const isSessionDate = (date: Dayjs) => {
    return sessionDates.some((sessionDate) => sessionDate.isSame(date, "day"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Session Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        shouldDisableDate={(date) => !isSessionDate(date)}
      />
    </LocalizationProvider>
  );
};

export default SessionPage;
