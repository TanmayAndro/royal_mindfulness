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
  const { id } = useParams();

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
    console.log("naaaameeee", id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://be-royal-mindfulness.onrender.com/sessions/${id}`
        );
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
  }, [id]);

  const handleBackButtonClick = () => {
    navigate("/");
  };

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
              <IconButton onClick={handleBackButtonClick}>
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
