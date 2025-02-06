import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Rating,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import FeedbackImg from "../../../Assests/Feedback.png";

export const FeedbackSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [teacherRating, setTeacherRating] = useState(null);
  const [experienceRating, setExperienceRating] = useState(null);
  const [improvementSuggestion, setImprovementSuggestion] = useState("");
  const [specificImprovement, setSpecificImprovement] = useState("");

  const handleFeedbackClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (
      !teacherRating ||
      !experienceRating ||
      !improvementSuggestion ||
      !specificImprovement
    ) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "https://be-royal-mindfulness.onrender.com/feedbacks",
        {
          data: {
            type: "feedback",
            attributes: {
              rate_our_teachers: teacherRating,
              overall_experience: experienceRating,
              need_to_improve: improvementSuggestion,
              how_to_improve: specificImprovement,
            },
          },
        }
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        setTeacherRating(null);
        setExperienceRating(null);
        setImprovementSuggestion("");
        setSpecificImprovement("");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to submit the form. Try again!"
      );
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "1rem", sm: "3rem" },
        "@media (max-width: 600px)": {
          // height: showForm ? "750px" : "650px",
          marginBottom: "2rem",
        },
      }}
    >
      {/* <ToastContainer /> */}
      <Grid
        container
        sx={{
          width: "90%",
          borderRadius: "14px",
          backgroundColor: "#8EB6DC",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Grid (Text/Link or Form) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem",
          }}
        >
          {!showForm ? (
            // Initial Text and Link
            <Box sx={{ color: "white", textAlign: "center", height: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "3rem",
                  fontSize: "40px",
                  fontWeight: "700",
                  fontFamily: "Instrument sans",
                  marginBottom: "3rem",
                  "@media (max-width: 600px)": {
                    marginTop: 0,
                  },
                }}
              >
                We value your thoughts!<br></br> Share your feedback to help
                <br></br> us improve your yoga <br></br>experience.
              </Typography>

              <Typography
                variant="contained"
                sx={{
                  marginBottom: "3rem",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#1470AF",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleFeedbackClick}
              >
                Click here to submit feedback
              </Typography>
            </Box>
          ) : (
            // Feedback Form
            <Grid container sx={{ color: "white" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center", marginBottom: "2rem" }}
                >
                  Feedback helps us Improve
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography>Rate our Teachers</Typography>
                <Rating
                  name="teacher-rating"
                  value={teacherRating}
                  onChange={(event, newValue) => {
                    setTeacherRating(newValue);
                  }}
                  size="large"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "white",
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "white",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>What can we do to improve?</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={1}
                  value={improvementSuggestion}
                  onChange={(e) => setImprovementSuggestion(e.target.value)}
                  sx={{ backgroundColor: "white", borderRadius: "8px" }}
                />
              </Grid>

              <Grid item xs={12} md={5}>
                <Typography>Overall Experience</Typography>
                <Rating
                  name="experience-rating"
                  value={experienceRating}
                  onChange={(event, newValue) => {
                    setExperienceRating(newValue);
                  }}
                  size="large"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "white",
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "white",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Where do we need to improve?</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  value={specificImprovement}
                  onChange={(e) => setSpecificImprovement(e.target.value)}
                  sx={{ backgroundColor: "white", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "130px",
                      backgroundColor: "#1470AF",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "#1470AF",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>

        {/* Right Grid (Image) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <img
            src={FeedbackImg}
            alt="Feedback"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              borderRadius: "14px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
