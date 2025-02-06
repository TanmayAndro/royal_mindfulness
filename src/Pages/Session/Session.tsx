// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Session.css";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import dayjs from "dayjs";
// import moment from "moment";
// // import { convertTo24HourFormat } from "./ChangTimeFormate";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Divider,
//   Grid,
//   IconButton,
//   Menu,
//   MenuItem,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers-pro";
// import TimeButton from "./TimeBox/TimeButton";
// import { AllStyle } from "../Login/login";
// import axios from "axios";
// import { bookings } from "../../API/ApiConfig";
// import AlertComponent from "../../Components/alert";
// import { useParams } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import AntraMounaImg from "../../Assests/Sessionimg.png";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import SEO from "../../Components/Seo";

// const config = require("../../config");

// const Session = () => {
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedSession, setSelectedSession] = useState("");
//   const [locationAnchorEl, setLocationAnchorEl] = useState<null | HTMLElement>(
//     null
//   );
//   const [sessionAnchorEl, setSessionAnchorEl] = useState<null | HTMLElement>(
//     null
//   );
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState<number | null>(null);
//   const [formError, setFormError] = useState("");
//   const [errorData, setErrorData] = useState("");

//   // Error state
//   const [dateError, setDateError] = useState("");
//   const [timeError, setTimeError] = useState("");
//   const [locationError, setLocationError] = useState("");
//   const [sessionError, setSessionError] = useState("");

//   const token = localStorage.getItem("user_token");

//   const navigate = useNavigate();

//   const locationButtonRef = useRef<HTMLButtonElement>(null);
//   const sessionButtonRef = useRef<HTMLButtonElement>(null);
//   const params = useParams();
//   console.log(params);
//   const price = params.value;

//   // Now you can use the price variable
//   console.log("Pricing and plans", price);

//   const handleDateSelect = (date: any) => {
//     setSelectedDate(date.format("YYYY/MM/DD"));
//     setDateError("");
//     console.log("Selected Date:", date?.format("YYYY-MM-DD")); // Log the date
//   };

//   const handleLocationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setLocationAnchorEl(event.currentTarget);
//   };

//   const handleSessionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setSessionAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setLocationAnchorEl(null);
//     setSessionAnchorEl(null);
//   };

//   const handleLocationSelect = (option: string) => {
//     setSelectedLocation(option);
//     setLocationError("");
//     setLocationAnchorEl(null);
//   };

//   const handleSessionSelect = (option: string) => {
//     setSelectedSession(option);
//     setSessionError("");
//     setSessionAnchorEl(null);
//   };

//   const handleTimeSelect = (value: number) => {
//     setSelectedTime(value);
//     setTimeError("");
//   };

//   function convertTo24HourFormat(time: any) {
//     return moment(time, "h A").format("HH:mm:ss");
//   }
//   const sessionSubmit = async () => {
//     let valid = true;
//     if (!selectedDate) {
//       setDateError("Date is required.");
//       valid = false;
//     }
//     if (selectedTime === null) {
//       setTimeError("Time is required.");
//       valid = false;
//     }
//     if (!selectedLocation) {
//       setLocationError("Location is required.");
//       valid = false;
//     }
//     if (!selectedSession) {
//       setSessionError("Sessions is required.");
//       valid = false;
//     }
//     if (!valid) {
//       return;
//     }

//     setFormError("");

//     const timeselect = convertTo24HourFormat(
//       config.buttonTime[selectedTime || 0].start
//     );
//     const data = {
//       booking: {
//         date_of_booking: selectedDate,
//         time_of_session: timeselect,
//       },
//     };
//     navigate("/payment");

//     // try {
//     //   const response = await axios.post(
//     //     process.env.REACT_APP_BASE_URL + bookings,
//     //     data,
//     //     {
//     //       headers: {
//     //         token: token,
//     //       },
//     //     }
//     //   );

//     //   navigate("/payment");
//     // } catch (err: any) {
//     //   setErrorData(err?.response?.data?.message);
//     // }
//   };
//   const handleCloseAlert = () => {
//     setErrorData("");
//   };

//   return (
//     <>
//       <SEO
//         title="Session Page | Royal MindFulness"
//         description="Session page to book your Yoga Sessions"
//         keywords={["session", "your", "app", "keywords"]}
//         image="https://example.com/session-page-image.jpg"
//         url="https://www.royalmindfulness.in/session"
//       />
//       <Box sx={styles.pageContainer}>
//         <Box sx={styles.contentContainer}>
//           <Grid container spacing={2} p={2}>
//             {/* Header Section */}
//             <Grid item xs={12} display="flex" alignItems="center">
//               <IconButton>
//                 <ArrowBackIcon />
//               </IconButton>
//               <Typography component="h2" sx={styles.headerText}>
//                 Private Session
//               </Typography>
//             </Grid>

//             {/* Content Section */}
//             <Grid item container spacing={2} ml={4} alignItems="flex-start">
//               {/* Text Section */}
//               <Grid item xs={12} sm={8}>
//                 <Typography variant="h6" component="h3" gutterBottom>
//                   Antar Mouna (Inner Silence)
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   Antar Mouna is a meditative practice in yoga, originating from
//                   the teachings of Swami Satyananda Saraswati, often translated
//                   as "Inner Silence" or "Inner Silence Meditation." It is part
//                   of the Raja Yoga tradition and emphasizes the gradual process
//                   of observing and managing one's thoughts and emotions, leading
//                   toward a deeper inner peace and heightened awareness.
//                 </Typography>
//               </Grid>

//               {/* Image Section */}
//               <Grid item xs={12} sm={4}>
//                 <CardMedia
//                   component="img"
//                   image={AntraMounaImg}
//                   alt="Yoga Session"
//                   sx={styles.cardMedia}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>

//           <Box sx={styles.detailsContainer}>
//             <Grid container>
//               {/* Left Box */}
//               <Grid item xs={12} md={4} lg={4} xl={4}>
//                 <Box sx={styles.serviceDetailsBox}>
//                   <Typography gutterBottom sx={styles.serviceDetailsHeader}>
//                     <AccessTimeIcon /> Service Details
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     Antar Mouna (Inner Silence)
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     November 18, 2024 at 10:00pm
//                   </Typography>
//                   <Typography variant="body2" sx={{ marginTop: "1rem" }}>
//                     Tamanna Srichandani
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     1hr
//                   </Typography>
//                   <Typography variant="body2" sx={{ marginTop: "1rem" }}>
//                     Amount For Month
//                   </Typography>
//                   <Button variant="contained" sx={styles.bookButton}>
//                     $49
//                   </Button>
//                 </Box>
//               </Grid>

//               {/* Right Box */}
//               <Grid item xs={12} md={8} lg={8} xl={8}>
//                 <Box sx={{ padding: 4 }}>
//                   {/* Top Section - Heading and Timezone */}
//                   <Grid
//                     container
//                     spacing={2}
//                     justifyContent="space-between"
//                     alignItems="center"
//                   >
//                     <Grid item>
//                       <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                         Start Date and Time
//                       </Typography>
//                     </Grid>
//                     <Grid item>
//                       <Typography variant="body1" sx={styles.timezoneText}>
//                         Timezone: India Standard Time (GMT+5:30)
//                       </Typography>
//                     </Grid>
//                   </Grid>

//                   <Divider sx={styles.divider} />

//                   <Box sx={styles.calendarContainer}>
//                     <Grid container>
//                       {/* Left Section - Calendar */}
//                       <Grid item xs={12} sm={12} md={8} lg={8}>
//                         <Box sx={styles.calendarBox}>
//                           <LocalizationProvider dateAdapter={AdapterDayjs}>
//                             <DateCalendar
//                               shouldDisableDate={(date) =>
//                                 dayjs(date).isBefore(dayjs(), "day")
//                               }
//                               onChange={handleDateSelect}
//                               sx={styles.dateCalendar}
//                             />
//                           </LocalizationProvider>

//                           {dateError && (
//                             <Typography color="error" fontSize={15}>
//                               {dateError}
//                             </Typography>
//                           )}
//                         </Box>
//                         {/* Bottom Section - Button */}
//                         <Box sx={styles.nextButtonContainer}>
//                           <Button fullWidth sx={styles.nextButton}>
//                             NEXT
//                           </Button>
//                         </Box>
//                       </Grid>

//                       {/* Right Section - Time and Selected Info */}
//                       <Grid item xs={12} sm={12} md={4} lg={4}>
//                         <Typography
//                           variant="body1"
//                           sx={styles.selectedDateText}
//                         >
//                           Monday, November 18
//                         </Typography>

//                         <Box sx={styles.timeBox}>
//                           <Typography variant="h6" sx={styles.timeText}>
//                             10:00 PM
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Session;

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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Session.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import dayjs from "dayjs";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";

import axios from "axios";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AntraMounaImg from "../../Assests/Sessionimg.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SEO from "../../Components/Seo";
import Calendar from "./TimeBox/CalanderTime";

const config = require("../../config");

const Session = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sessionData, setSessionData] = useState([]);
  const [sessionParticipants, setSessionParticipants] = useState(0);
  const [sessionDuration, setSessionDuration] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [sessionId, setSessionId] = useState(0);
  const [sessionDates, setSessionDates] = useState([]);

  // Error state
  const [dateError, setDateError] = useState("");
  const [selectedOption, setSelectedOption] = useState("month");
  const priceMap: Record<string, string> = {
    month: "$49",
    week: "$19",
    year: "$99",
  };

  const token = localStorage.getItem("user_token");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/sessions/3"); // Replace with your actual API endpoint
        setSessionData(response.data);
        console.log("API Response:", response.data.data);
        const firstSessionDate = response.data.data.attributes.session_dates;

        //setting api data in States
        setSessionId(response.data.data.id);
        setSessionParticipants(
          response.data.data.attributes.max_no_of_participants
        );
        setSessionDuration(response.data.data.attributes.duration);
        setSessionDescription(response.data.data.attributes.session_details);
        setSessionName(response.data.data.attributes.session_name);
        setSessionDates(firstSessionDate);
      } catch (err: any) {
        setSessionData(err);
      }
    };

    fetchData();
  }, []);

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.format("YYYY/MM/DD"));
    setDateError("");
    console.log("Selected Date:", date?.format("YYYY-MM-DD"));
  };

  return (
    <>
      <SEO
        title="Session Page | Royal MindFulness"
        description="Session page to book your Yoga Sessions"
        keywords={["session", "your", "app", "keywords"]}
        image="https://example.com/session-page-image.jpg"
        url="https://www.royalmindfulness.in/session"
      />
      <Box sx={styles.pageContainer}>
        <Box sx={styles.contentContainer}>
          <Grid container spacing={2} p={2}>
            {/* Header Section */}
            <Grid item xs={12} display="flex" alignItems="center">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>

              <Typography component="h2" sx={styles.headerText}>
                {sessionParticipants < 2 ? "Private Session" : "Public Session"}
              </Typography>
            </Grid>

            {/* Content Section */}
            <Grid item container spacing={2} ml={4} alignItems="flex-start">
              {/* Text Section */}
              <Grid item xs={12} md={8} sm={12}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  // color={"#8eb6dc"}
                >
                  {sessionName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {sessionDescription}
                </Typography>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={4} sm={12}>
                <CardMedia
                  component="img"
                  image={AntraMounaImg}
                  alt="Yoga Session"
                  sx={styles.cardMedia}
                />
              </Grid>
            </Grid>
          </Grid>

          <Box sx={styles.detailsContainer}>
            <Grid container>
              {/* Left Box */}
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <Box sx={styles.serviceDetailsBox}>
                  <Typography gutterBottom sx={styles.serviceDetailsHeader}>
                    <AccessTimeIcon /> Session Details
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {sessionName}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                    Starting Date
                  </Typography>
                  <Typography variant="body2" mt={"5px"} color="text.secondary">
                     {sessionDates} 
                  </Typography> */}
                  <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                    Duration
                  </Typography>
                  <Typography variant="body2" mt={"5px"} color="text.secondary">
                    {sessionDuration}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                      Amount For
                    </Typography>
                    <Select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      sx={{ marginBottom: "1rem", minWidth: 150 }}
                    >
                      <MenuItem value="month">Month</MenuItem>
                      <MenuItem value="week">Week</MenuItem>
                      <MenuItem value="year">Year</MenuItem>
                    </Select>
                    <Box
                      sx={{
                        marginTop: "1rem",
                        backgroundColor: "#1470af",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "6px",
                      }}
                    >
                      {priceMap[selectedOption]}
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Right Box */}
              <Calendar sessionId={sessionId} sessionDates={sessionDates} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Session;

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
    color: "#1470af",
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
  timeBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#8eb6dc",
    borderRadius: 2,
    boxShadow: 2,
    width: "160px",
    marginTop: "1rem",
    height: "50px",
  },
  timeText: {
    marginTop: 1,
    fontWeight: "bold",
  },
};
