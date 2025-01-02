// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   Typography,
//   TextField,
//   Rating,
// } from "@mui/material";
// import feedbackImg from "../../../Assests/feedbackImg.png";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// export const FeedbackSection = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [teacherRating, setTeacherRating] = useState(null);
//   const [experienceRating, setExperienceRating] = useState(null);

//   const handleFeedbackClick = () => {
//     setShowForm(true);
//   };

//   const handleSubmit = () => {
//     console.log("Teacher Rating:", teacherRating);
//     console.log("Experience Rating:", experienceRating);
//     // Add further form submission logic here
//   };

//   return (
//     <Box
//       sx={{
//         height: "650px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           width: "90%",
//           backgroundColor: "#0F2E15",
//           borderRadius: "14px",
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           md={showForm ? 8 : 6}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {!showForm ? (
//             <Box sx={{ color: "white", textAlign: "center" }}>
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontSize: "40px",
//                   fontWeight: "700",
//                   fontFamily: "Instrument sans",
//                   marginBottom: "3rem",
//                 }}
//               >
//                 We value your thoughts!<br></br> Share your feedback to help
//                 <br></br> us improve your yoga <br></br>experience.
//               </Typography>

//               <Typography
//                 variant="contained"
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: "400",
//                   color: "#FAFD87",
//                   textDecoration: "underline",
//                   cursor: "pointer",
//                 }}
//                 onClick={handleFeedbackClick}
//               >
//                 Click here to submit feedback
//               </Typography>
//             </Box>
//           ) : (
// <Grid
//   container
//   spacing={2}
//   sx={{ padding: "2rem", color: "white" }}
// >
//   <Grid item xs={12}>
//     <Typography
//       variant="h4"
//       sx={{ textAlign: "center", marginBottom: "2rem" }}
//     >
//       Feedback helps us Improve
//     </Typography>
//   </Grid>
//   <Grid item xs={12} md={5}>
//     <Typography>Rate our Teachers</Typography>
//     <Rating
//       name="teacher-rating"
//       value={teacherRating}
//       onChange={(event, newValue) => {
//         setTeacherRating(newValue);
//       }}
//       size="large"
//       sx={{
//         "& .MuiRating-iconFilled": {
//           color: "white",
//         },
//         "& .MuiRating-iconEmpty": {
//           color: "white",
//         },
//       }}
//     />
//   </Grid>
//   <Grid item xs={12} md={6}>
//     <Typography>What can we do to improve?</Typography>
//     <TextField
//       fullWidth
//       multiline
//       rows={1}
//       sx={{ backgroundColor: "white", borderRadius: "8px" }}
//     />
//   </Grid>

//   <Grid item xs={12} md={5}>
//     <Typography>Overall Experience</Typography>
//     <Rating
//       name="experience-rating"
//       value={experienceRating}
//       onChange={(event, newValue) => {
//         setExperienceRating(newValue);
//       }}
//       size="large"
//       sx={{
//         "& .MuiRating-iconFilled": {
//           color: "white",
//         },
//         "& .MuiRating-iconEmpty": {
//           color: "white",
//         },
//       }}
//     />
//   </Grid>
//   <Grid item xs={12} md={6}>
//     <Typography>Where do we need to improve?</Typography>
//     <TextField
//       fullWidth
//       multiline
//       rows={3}
//       sx={{ backgroundColor: "white", borderRadius: "8px" }}
//     />
//   </Grid>
//   <Grid item xs={12}>
//     <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
//       <Button
//         variant="contained"
//         sx={{
//           width:'130px',
//           backgroundColor: "#FAFD87",
//           color: "#0F2E15",
//           fontWeight: "bold",
//           borderRadius: "20px",
//           "&:hover": {
//             backgroundColor: "#FAFD87",
//           },
//         }}
//         onClick={handleSubmit}
//       >
//         Submit
//       </Button>
//     </Box>
//   </Grid>
// </Grid>
//           )}
//         </Grid>

//         {/* Image Box */}
//         <Grid
//           item
//           xs={12}
//           md={showForm ? 4 : 6}
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={feedbackImg}
//             alt="Feedback"
//             style={{
//               maxWidth: "100%",
//               borderRadius: "14px",
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Rating,
} from "@mui/material";
import feedbackImg from "../../../Assests/feedbackImg.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const FeedbackSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [teacherRating, setTeacherRating] = useState(null);
  const [experienceRating, setExperienceRating] = useState(null);

  const handleFeedbackClick = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {
    console.log("Teacher Rating:", teacherRating);
    console.log("Experience Rating:", experienceRating);
    // Add further form submission logic here
  };

  return (
    <Box
      sx={{
        height: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 600px)": {
          height: showForm ? "850px" : "650px",
          marginBottom: "2rem",
        },
      }}
    >
      <Grid
        container
        sx={{
          width: "90%",
          borderRadius: "14px",
          backgroundImage: `url(${feedbackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          {!showForm ? (
            <Box sx={{ color: "white", textAlign: "center", height: "550px" }}>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "5rem",
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
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#FAFD87",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleFeedbackClick}
              >
                Click here to submit feedback
              </Typography>
            </Box>
          ) : (
            <Grid
              container
              spacing={2}
              sx={{ padding: "2rem", color: "white" }}
            >
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
                  sx={{ backgroundColor: "white", borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "130px",
                      backgroundColor: "#FAFD87",
                      color: "#0F2E15",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "#FAFD87",
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
      </Grid>
    </Box>
  );
};
