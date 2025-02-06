// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useMemo, useState } from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import dayjs, { Dayjs } from "dayjs";
// import { Box, Button, Divider, Grid, Typography } from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers-pro";

// const getSessionDates = (sessionDates: any) => {
//   const dates = new Set<string>();
//   const endDate = dayjs().add(1, "year");

//   sessionDates.forEach((session: any) => {
//     let startDate = dayjs(session.date);

//     if (session.repeat_session.includes("every week")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(7, "day");
//       }
//     } else if (session.repeat_session.includes("every 2 weeks")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(14, "day");
//       }
//     } else if (session.repeat_session.includes("every day")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(1, "day");
//       }
//     } else if (session.repeat_session.includes("every 3 weeks")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(21, "day");
//       }
//     } else if (session.repeat_session.includes("every 4 weeks")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(28, "day");
//       }
//     } else if (session.repeat_session.includes("every 2 months")) {
//       while (startDate.isBefore(endDate)) {
//         dates.add(startDate.format("YYYY-MM-DD"));
//         startDate = startDate.add(2, "month"); // Handles months correctly
//       }
//     } else if (session.repeat_session.includes("not repeat")) {
//       dates.add(startDate.format("YYYY-MM-DD"));
//     }
//   });

//   return Array.from(dates);
// };

// const Calendar = ({ sessionDates }: any) => {
//   const [selectedDate2, setSelectedDate2] = useState<Dayjs | null>(null);

//   const validDates = useMemo(
//     () => getSessionDates(sessionDates),
//     [sessionDates]
//   );

//   const shouldDisableDate = (date: Dayjs) =>
//     !validDates.includes(date.format("YYYY-MM-DD"));

//   return (
//     <Grid item xs={12} md={8} lg={8} xl={8}>
//       <Box
//         sx={{
//           padding: {
//             md: "2rem",
//             sm: "2rem 10px 2rem 10px",
//             xs: "2rem 10px 2rem 10px",
//           },
//         }}
//       >
//         <Grid
//           container
//           spacing={2}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <Grid item>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Start Date and Time
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography variant="body1" sx={styles.timezoneText}>
//               Timezone: India Standard Time (GMT+5:30)
//             </Typography>
//           </Grid>
//         </Grid>

//         <Divider sx={styles.divider} />

//         <Box sx={styles.calendarContainer}>
//           <Grid container>
//             <Grid item xs={12} sm={12} md={8} lg={8}>
//               <Box sx={styles.calendarBox}>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DateCalendar
//                     value={selectedDate2}
//                     onChange={(date) => setSelectedDate2(date)}
//                     shouldDisableDate={shouldDisableDate}
//                     sx={styles.dateCalendar}
//                   />
//                 </LocalizationProvider>
//               </Box>

//               <Box sx={styles.nextButtonContainer}>
//                 <Button fullWidth sx={styles.nextButton}>
//                   NEXT
//                 </Button>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="body1" sx={styles.selectedDateText}>
//                 {selectedDate2
//                   ? selectedDate2.format("dddd, MMMM D")
//                   : "Select a Date"}
//               </Typography>

//               <Box sx={styles.timeBox}>
//                 <Typography variant="h6" sx={styles.timeText} color={"white"}>
//                   10:00 PM
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default Calendar;

// // Styles
// const styles = {
//   pageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#8eb6dc",
//     height: "100%",
//     padding: { xs: "1rem", sm: "3rem" },
//   },
//   contentContainer: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#eaeaee",
//     borderRadius: "30px",
//     overflow: "hidden",
//     padding: { xs: "1rem", sm: "2rem", md: "2rem" },
//     boxSizing: "border-box",
//   },
//   headerText: {
//     marginLeft: 1,
//     fontSize: "26px",
//     fontWeight: 700,
//     fontFamily: "Instrument sans",
//     color: "#0F2E15",
//   },
//   cardMedia: {
//     borderRadius: 2,
//     width: "100%",
//     height: "auto",
//   },
//   detailsContainer: {
//     width: "100%",
//   },
//   serviceDetailsBox: {
//     marginTop: { xs: "2rem", sm: "5rem" },
//     padding: 2,
//     borderRadius: 2,
//     boxShadow: 2,
//     border: "1px solid #8eb6dc",
//     backgroundColor: "#f9f9f9",
//   },
//   serviceDetailsHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: 1,
//     fontFamily: "Instrument Sans",
//     fontWeight: 700,
//     fontSize: "25px",
//   },
//   bookButton: {
//     backgroundColor: "#1470af",
//     color: "#fff",
//     marginTop: "1rem",
//     width: "100%",
//   },
//   timezoneText: {
//     textAlign: "right",
//     fontWeight: "bold",
//   },
//   divider: {
//     my: 2,
//     borderColor: "rgba(0, 0, 0, 0.1)",
//   },
//   calendarContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   calendarBox: {
//     borderRadius: "12px",
//     height: "300px",
//     width: { xs: "100%", md: "320px" },
//   },
//   dateCalendar: {
//     margin: 0,
//     padding: 0,
//     height: "100%",
//     width: "100%",
//     border: "1px solid #8eb6dc",
//     borderRadius: "10px",
//     "& .MuiDayCalendar-root": {
//       backgroundColor: "white",
//       borderRadius: "5px",
//       color: "white",
//     },
//   },
//   nextButtonContainer: {
//     textAlign: "left",
//     marginTop: 4,
//   },
//   nextButton: {
//     backgroundColor: "#1470af",
//     width: { xs: "100%", sm: "320px" },
//     color: "#FFFFFF",
//     padding: "10px 20px",
//     borderRadius: 2,
//     fontWeight: "bold",
//     "&:hover": {
//       backgroundColor: "#1470af",
//     },
//   },
//   selectedDateText: {
//     fontWeight: "bold",
//     marginTop: "1rem",
//   },
//   timeBox: {
//     display: "flex",
//     justifyContent: "center",
//     textAlign: "center",
//     backgroundColor: "#8eb6dc",
//     borderRadius: 2,
//     boxShadow: 2,
//     width: "160px",
//     marginTop: "1rem",
//     height: "50px",
//   },
//   timeText: {
//     marginTop: 1,
//     fontWeight: "bold",
//   },
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import { Console } from "console";
import { useNavigate } from "react-router-dom";

const getSessionDates = (sessionDates: any) => {
  const dates = new Set<string>();
  const endDate = dayjs().add(1, "year");

  sessionDates.forEach((session: any) => {
    let startDate = dayjs(session.date);

    if (session.repeat_session.includes("every week")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(7, "day");
      }
    } else if (session.repeat_session.includes("every 2 weeks")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(14, "day");
      }
    } else if (session.repeat_session.includes("every day")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(1, "day");
      }
    } else if (session.repeat_session.includes("every 3 weeks")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(21, "day");
      }
    } else if (session.repeat_session.includes("every 4 weeks")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(28, "day");
      }
    } else if (session.repeat_session.includes("every 2 months")) {
      while (startDate.isBefore(endDate)) {
        dates.add(startDate.format("YYYY-MM-DD"));
        startDate = startDate.add(2, "month"); // Handles months correctly
      }
    } else if (session.repeat_session.includes("not repeat")) {
      dates.add(startDate.format("YYYY-MM-DD"));
    }
  });

  return Array.from(dates);
};

const Calendar = ({ sessionId, sessionDates }: any) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);

  const validDates = useMemo(
    () => getSessionDates(sessionDates),
    [sessionDates]
  );

  const shouldDisableDate = (date: Dayjs) =>
    !validDates.includes(date.format("YYYY-MM-DD"));

  const allSessionTimes = sessionDates.flatMap((session: any) =>
    session.session_times.map((time: any) => time.time)
  );

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setTimeError(null); // Clear error when time is selected
  };

  const handleNextClick = () => {
    let hasError = false;

    if (!selectedDate) {
      setDateError("Please select a date.");
      hasError = true;
    } else {
      setDateError(null);
    }

    if (!selectedTime) {
      setTimeError("Please select a time.");
      hasError = true;
    } else {
      setTimeError(null);
    }

    if (!hasError) {
      console.log("sessionId:", sessionId);
      console.log("sessionTime:", selectedTime);
      console.log("sessionDate:", selectedDate?.format("YYYY-MM-DD"));

      navigate("/payment", {
        state: {
          sessionId,
          sessionTime: selectedTime,
          sessionDate: selectedDate?.format("YYYY-MM-DD"),
        },
      });
    }
  };

  return (
    <Grid item xs={12} md={8} lg={8} xl={8}>
      <Box sx={{ padding: { md: "2rem", sm: "2rem 10px", xs: "2rem 10px" } }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Start Date and Time
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={styles.timezoneText}>
              Timezone: India Standard Time (GMT+5:30)
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={styles.divider} />

        <Box sx={styles.calendarContainer}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box sx={styles.calendarBox}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setDateError(null); // Clear error when date is selected
                    }}
                    shouldDisableDate={shouldDisableDate}
                    sx={styles.dateCalendar}
                  />
                </LocalizationProvider>
              </Box>
              {dateError && (
                <Typography color="error" sx={{ mt: 1 }}>
                  {dateError}
                </Typography>
              )}

              <Box sx={styles.nextButtonContainer}>
                <Button
                  fullWidth
                  sx={styles.nextButton}
                  onClick={handleNextClick}
                >
                  NEXT
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant="body1" sx={styles.selectedDateText}>
                {selectedDate
                  ? selectedDate.format("dddd, MMMM D")
                  : "Select Time"}
              </Typography>

              {allSessionTimes.map((time: string, index: number) => (
                <Button
                  key={index}
                  fullWidth
                  sx={{
                    ...styles.timeButton,
                    backgroundColor:
                      selectedTime === time ? "#1470af" : "#8eb6dc",
                  }}
                  onClick={() => handleTimeClick(time)}
                >
                  <Typography variant="h6" sx={styles.timeText} color="white">
                    {time}
                  </Typography>
                </Button>
              ))}
              {timeError && (
                <Typography color="error" sx={{ mt: 1 }}>
                  {timeError}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Calendar;

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8eb6dc",
    height: "100%",
    padding: { xs: "1rem", sm: "3rem" },
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eaeaee",
    borderRadius: "30px",
    overflow: "hidden",
    padding: { xs: "1rem", sm: "2rem", md: "2rem" },
    boxSizing: "border-box",
  },
  headerText: {
    marginLeft: 1,
    fontSize: "26px",
    fontWeight: 700,
    fontFamily: "Instrument sans",
    color: "#0F2E15",
  },
  cardMedia: {
    borderRadius: 2,
    width: "100%",
    height: "auto",
  },
  detailsContainer: {
    width: "100%",
  },
  serviceDetailsBox: {
    marginTop: { xs: "2rem", sm: "5rem" },
    padding: 2,
    borderRadius: 2,
    boxShadow: 2,
    border: "1px solid #8eb6dc",
    backgroundColor: "#f9f9f9",
  },
  serviceDetailsHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontFamily: "Instrument Sans",
    fontWeight: 700,
    fontSize: "25px",
  },
  bookButton: {
    backgroundColor: "#1470af",
    color: "#fff",
    marginTop: "1rem",
    width: "100%",
  },
  timezoneText: {
    textAlign: "right",
    fontWeight: "bold",
  },
  divider: {
    my: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  calendarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarBox: {
    borderRadius: "12px",
    height: "300px",
    width: { xs: "100%", md: "320px" },
  },
  dateCalendar: {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    border: "1px solid #8eb6dc",
    borderRadius: "10px",
    "& .MuiDayCalendar-root": {
      backgroundColor: "white",
      borderRadius: "5px",
      color: "white",
    },
  },
  nextButtonContainer: {
    textAlign: "left",
    marginTop: 4,
  },
  nextButton: {
    backgroundColor: "#1470af",
    width: { xs: "100%", sm: "320px" },
    color: "#FFFFFF",
    padding: "10px 20px",
    borderRadius: 2,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#1470af",
    },
  },
  selectedDateText: {
    fontWeight: "bold",
    marginTop: "1rem",
  },
  timeButton: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 2,
    boxShadow: 2,
    width: "160px",
    marginTop: "1rem",
    height: "50px",
    "&:hover": {
      backgroundColor: "#1470af", // Hover effect
    },
  },
  timeText: {
    fontWeight: "bold",
  },
};
