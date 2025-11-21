// import React, { useState } from 'react';
// import { Box, TextField, Typography, styled, Avatar, Button, Dialog, DialogTitle, DialogContent, IconButton, Grid } from '@mui/material';
// import { FaRegBell } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa6";
// import { profile_img } from '../../assests';

// const config = require("../../config")

// const HeadingText = styled(Typography)({
//   fontWeight: "bold", fontSize: '32px',
//   "@media (max-width:600px)": {
//     display: 'none'
//   },
//   "@media (max-width:900px)": {
//     fontWeight: "bold",
//     fontSize: '26px',
//     marginRight: 'auto'
//   },
//   "@media (max-width:1000px)": {
//     fontSize: '26px',
//   }
// })

// const TexxtFieldStyles = styled(TextField)({
//   '& .MuiOutlinedInput-notchedOutline': {
//     border: 'unset',
//     borderWidth: 'unset',
//     borderColor: 'unset',
//     borderStyle: 'unset',
//   },
//   "@media (max-width:899px)": {
//     height: '40px',
//   },
//   "@media (max-width:600px)": {
//     width: '200px',
//     margin: 'auto',
//     height: '40px',
//   },
//   "@media (max-width:500px)": {
//     width: '150px',
//   }
// })

// const TopBox = styled(Box)({
//   display: "flex",
//   alignItems: 'center',
//   width: "100%",
//   justifyContent: 'space-between',
//   padding: '10px',
//   "@media (max-width:600px)": {
//     paddingRight: '1px'
//   },
//   "@media (max-width:899px)": {
//     alignItems: 'center',
//     padding: '0px',
//     justifyContent: 'end',
//   }, 
//   "@media (max-width:1250px)": {
//     paddingRight: '20px'
//   }
// })

// const FirstBox = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   gap: 3,
//   "@media (max-width:899px)": {
//     alignItems: "flex"
//   }
// })

// const SecondBox = styled(Box)({
//   cursor: 'pointer',
//   backgroundColor: 'white',
//   borderRadius: '50%',
//   width: '50px',
//   height: '50px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: '25px',
//   "@media (max-width:899px)": {
//     width: '35px',
//     height: '35px',
//   }
// })

// const NotificationBell = styled(FaRegBell)({
//   width: '20px',
//   height: '20px',
//   "@media (max-width:899px)": {
//     width: '15px',
//     height: '15px',
//   }
// })

// const ThirdBox = styled(Box)({
//   display: 'flex',
//   justifyContent: 'space-around',
//   backgroundColor: 'white',
//   alignContent: 'center',
//   alignItems: 'center',
//   paddingTop: '7px',
//   borderRadius: '24px',
//   width: '208px',
//   height: '53px',
//   "@media (max-width:899px)": {
//     width: '178px',
//     height: '35px',
//     paddingTop: '5px'
//   }
// })

// const IMG = styled(Avatar)({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '50px',
//   height: '50px',
//   borderRadius: '40px',
//   marginBottom: '6px',
//   "@media (max-width:899px)": {
//     width: '35px',
//     height: '35px',
//     marginBottom: '4px',
//   }
// })

// const Name = styled(Typography)({
//   fontSize: '14px',
//   fontWeight: '400',
//   fontFamily: 'Poppins',
//   "@media (max-width:900px)": {
//     fontSize: '12px',
//     fontWeight: '400',
//   }
// })

// const SubHeading = styled(Typography)({
//   fontSize: '13px',
//   opacity: '50%',
//   fontFamily: 'Poppins',
//   "@media (max-width:900px)": {
//     fontSize: '10px',
//     opacity: '40%',
//   }
// })

// function Header() {
//   const [open, setOpen] = useState(false);
//   const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   const handleOpenDialog = () => setOpen(true);
//   const handleCloseDialog = () => setOpen(false);

//   return (
//     <TopBox>
//       <Box display="flex" alignItems="center" gap={2}>
//         <HeadingText variant='h4'>
//           {config.Dashboard_Main_Heading}
//         </HeadingText>
//          {/* {isTeacher && (
//     <Box>
//       <button
//         style={{
//           padding: '8px 16px',
//           backgroundColor: '#1976d2',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           cursor: 'pointer',
//         }}
//       >
//         Availability
//       </button>
//     </Box>
//   )} */}
//         <Box>
//           <button
//             onClick={handleOpenDialog}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#1976d2',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '18px',
//               cursor: 'pointer',
//             }}
//           >
//             Availability
//           </button>
//         </Box>
//       </Box>

//       <FirstBox>
//         <Box>
//           <TexxtFieldStyles
//             placeholder={config.Input_Placholder}
//             variant='outlined'
//             sx={{
//               backgroundColor: 'white',
//               borderRadius: '20px',
//               height: '50px'
//             }}
//           />
//         </Box>
//         <SecondBox><NotificationBell /></SecondBox>
//         <ThirdBox>
//           <IMG className='header-profile' src={profile_img} alt='img' />
//           <Box>
//             <Name>{localStorage.getItem("first_name")}</Name>
//             <SubHeading>{config.Product_Manager}</SubHeading>
//           </Box>
//           <FaAngleDown style={{
//             cursor: 'pointer',
//             opacity: '50%',
//             paddingRight: '10px'
//           }} />
//         </ThirdBox>
//       </FirstBox>

//       <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
//         <DialogTitle>
//           Set Availability
//           <IconButton
//             aria-label="close"
//             onClick={handleCloseDialog}
//             sx={{ position: 'absolute', right: 8, top: 8 }}
//           >
//             ✕
//           </IconButton>
//         </DialogTitle>
//         <DialogContent dividers>
//           <Grid container spacing={2}>
//             {weekdays.map((day) => (
//               <React.Fragment key={day}>
//                 <Grid item xs={4} display="flex" alignItems="center">
//                   <Typography>{day}</Typography>
//                 </Grid>
//                 <Grid item xs={4}>
//                   <TextField
//                     label="Start Time"
//                     type="time"
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     inputProps={{ step: 300 }} // 5 minutes steps
//                   />
//                 </Grid>
//                 <Grid item xs={4}>
//                   <TextField
//                     label="End Time"
//                     type="time"
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     inputProps={{ step: 300 }}
//                   />
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>
//           <Box mt={3} display="flex" justifyContent="flex-end">
//             <Button variant="contained" onClick={handleCloseDialog}>Save</Button>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </TopBox>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, TextField, Typography, styled, Avatar, Button,
  Dialog, DialogTitle, DialogContent, IconButton, Grid
} from '@mui/material';
import { FaRegBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Add, Delete } from '@mui/icons-material';
import { profile_img } from '../../assests';
const config = require("../../config");

// Styled Components
const HeadingText = styled(Typography)({ fontWeight: "bold", fontSize: '32px' });
const TexxtFieldStyles = styled(TextField)({ '& .MuiOutlinedInput-notchedOutline': { border: 'unset' } });
const TopBox = styled(Box)({ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: '10px' });
const FirstBox = styled(Box)({ display: 'flex', alignItems: 'center', gap: 3 });
const SecondBox = styled(Box)({ cursor: 'pointer', backgroundColor: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' });
const NotificationBell = styled(FaRegBell)({ width: '20px', height: '20px' });
const ThirdBox = styled(Box)({ display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', alignItems: 'center', paddingTop: '7px', borderRadius: '24px', width: '208px', height: '53px' });
const IMG = styled(Avatar)({ width: '50px', height: '50px', borderRadius: '40px', marginBottom: '6px' });
const Name = styled(Typography)({ fontSize: '14px', fontWeight: '400' });
const SubHeading = styled(Typography)({ fontSize: '13px', opacity: '50%' });

function Header() {
  const [open, setOpen] = useState(false);
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const isTeacher = localStorage.getItem("is_teacher");

  // Availability holds array of time slots for each day
  const [availability, setAvailability] = useState(
    weekdays.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  // For new input times (start/end) before adding
  const [newTimes, setNewTimes] = useState(
    weekdays.reduce((acc, day) => {
      acc[day] = { start: '', end: '' };
      return acc;
    }, {})
  );

  // Error tracking per day/session
  const [errors, setErrors] = useState(
    weekdays.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleTimeChange = (day, field, value) => {
    setNewTimes(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  // const handleAddClick = (day) => {
  //   const { start, end } = newTimes[day];
  //   if (start && end) {
  //     setAvailability(prev => ({
  //       ...prev,
  //       [day]: [...prev[day], { start, end }]
  //     }));
  //     setNewTimes(prev => ({
  //       ...prev,
  //       [day]: { start: '', end: '' } // clear input
  //     }));
  //     // Clear errors for that day on adding new session
  //     setErrors(prev => ({ ...prev, [day]: [] }));
  //   }
  // };

  // Convert "HH:mm" to total minutes from midnight
  
// const handleAddClick = (day) => {
//   const { start, end } = newTimes[day];

//   if (!start || !end) return;

//   const newStart = new Date(`1970-01-01T${start}`);
//   const newEnd = new Date(`1970-01-01T${end}`);
//   const durationInHours = (newEnd - newStart) / (1000 * 60 * 60);

//   // ❌ Check if end is before or equal to start
//   if (newEnd <= newStart) {
//     alert("End time must be after start time.");
//     return;
//   }

//   // ❌ Reject session longer than 3 hours
//   if (durationInHours > 3) {
//     alert("Session cannot be longer than 3 hours.");
//     return;
//   }

//   // ✅ Check for overlapping only with already saved sessions
//   const existingSessions = availability[day];

//   const isOverlap = existingSessions.some((session) => {
//     const sessionStart = new Date(`1970-01-01T${session.start}`);
//     const sessionEnd = new Date(`1970-01-01T${session.end}`);

//     // Check if times overlap
//     return newStart < sessionEnd && newEnd > sessionStart;
//   });

//   if (isOverlap) {
//     alert("This session overlaps with an existing one.");
//     return;
//   }

//   // ✅ If valid, add session
//   setAvailability((prev) => ({
//     ...prev,
//     [day]: [...prev[day], { start, end }]
//   }));

//   // ✅ Reset newTimes for that day
//   setNewTimes((prev) => ({
//     ...prev,
//     [day]: { start: '', end: '' }
//   }));
// };

const handleAddClick = (day) => {
  const { start, end } = newTimes[day];
  if (!start || !end) return;

  const newStart = new Date(`1970-01-01T${start}`);
  const newEnd = new Date(`1970-01-01T${end}`);
  const durationInHours = (newEnd - newStart) / (1000 * 60 * 60);
  const durationInMinutes = (newEnd - newStart) / (1000 * 60);

  // 1️⃣ End must follow start
  if (newEnd <= newStart) {
    alert("End time must be after start time.");
    return;
  }

  // 2️⃣ Exact minimum of 3 hours (180 minutes)
  if (durationInMinutes < 180) {
    alert("Session should be 3 hours.");
    return;
  }

  // 3️⃣ Optional maximum cap (if needed)
  if (durationInMinutes > 180) {
    alert("Session cannot be longer than 3 hours.");
    return;
  }

  // 4️⃣ Prevent overlap & enforce 60‑minute gap
  const existingSessions = availability[day] || [];
  const isConflict = existingSessions.some(session => {
    const sStart = new Date(`1970-01-01T${session.start}`);
    const sEnd = new Date(`1970-01-01T${session.end}`);
    const diffBefore = (newStart - sEnd) / (1000 * 60); // minutes gap after previous
    const diffAfter = (sStart - newEnd) / (1000 * 60);  // minutes gap before next

    // Overlap if times intersect
    const overlap = newStart < sEnd && newEnd > sStart;
    // Gap violation if within 60 minutes either side
    const noGap = diffBefore < 60 && diffBefore > 0
               || diffAfter < 60 && diffAfter > 0;

    return overlap || noGap;
  });

  if (isConflict) {
    alert("Session overlaps or is too close: there must be at least a 60‑minute gap between sessions.");
    return;
  }

  // ✅ Passed checks: add session
  setAvailability(prev => ({
    ...prev,
    [day]: [...prev[day] || [], { start, end }]
  }));
  setNewTimes(prev => ({
    ...prev,
    [day]: { start: '', end: '' }
  }));
};




  const toMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  // Convert "HH:mm" 24-hour to "hh:mm AM/PM"
  const convertTo12Hour = (time24) => {
    if (!time24) return '';
    let [hour, minute] = time24.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // convert 0 to 12 for 12 AM
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  // API call to save availability to backend (axios with token and formatted body)
  const saveAvailabilityAPI = async (data) => {
    try {
      const token = localStorage.getItem('user_token');

      const formattedData = {
        availabilities: Object.entries(data).map(([day_of_week, slots]) => ({
          day_of_week,
          time_slots: slots.map(slot => ({
            start_time: convertTo12Hour(slot.start),
            end_time: convertTo12Hour(slot.end),
          })),
        })),
      };

      const response = await axios.post(
        'https://deedee-unchainable-optionally.ngrok-free.dev/trainer_availabilities',
        formattedData,
        {
          headers: {
            
            token: token,
          },
        }
      );
      console.log("MMMMMMMMMMMMMMMMMMMM",response.date)
      return response.data;
    } catch (error) {
      console.error('API save error:', error);
      throw error;
    }
  };


 // Validation and Save button handler
const handleSave = async () => {
  const newErrors = {};
  weekdays.forEach(day => {
    // ✅ Step 1: Sort sessions by start time before validating
    const sessions = [...availability[day]].sort((a, b) => toMinutes(a.start) - toMinutes(b.start));
    const dayErrors = [];

    for (let i = 0; i < sessions.length; i++) {
      const { start, end } = sessions[i];
      const startMins = toMinutes(start);
      let endMins = toMinutes(end);

      // Handle overnight sessions
      if (endMins <= startMins) {
        endMins += 24 * 60;
      }

      const duration = endMins - startMins;

      // ✅ Session must be exactly 180 mins
      if (duration !== 180) {
        dayErrors[i] = 'duration';
        continue;
      } else {
        dayErrors[i] = '';
      }

      // ✅ Gap between sessions must be at least 60 minutes
      if (i > 0) {
        const prevEnd = toMinutes(sessions[i - 1].end);
        let adjustedPrevEnd = prevEnd;
        if (adjustedPrevEnd <= toMinutes(sessions[i - 1].start)) {
          adjustedPrevEnd += 24 * 60;
        }

        if (startMins < adjustedPrevEnd + 60) {  // ✅ changed from 90 to 60
          dayErrors[i] = 'break';
          dayErrors[i - 1] = dayErrors[i - 1] || '';
        }
      }
    }

    // ✅ Save the sorted sessions back to availability
    availability[day] = sessions;
    newErrors[day] = dayErrors;
  });

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some(dayErrs => dayErrs.some(e => e));
  if (!hasErrors) {
    try {
      await saveAvailabilityAPI(availability);
      alert('Availability saved successfully!');
      setOpen(false);
    } catch (e) {
      alert('Failed to save availability. Please try again.');
    }
  } else {
    alert('Please fix errors before saving.');
  }
};



  const handleDelete = (day, index) => {
    setAvailability(prev => {
      const newArr = [...prev[day]];
      newArr.splice(index, 1);
      return { ...prev, [day]: newArr };
    });

    setErrors(prev => {
      const newErrorsArr = [...prev[day]];
      newErrorsArr.splice(index, 1);
      return { ...prev, [day]: newErrorsArr };
    });
  };

  return (
    <TopBox sx={{ flexWrap: 'wrap', gap: '16px' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <HeadingText variant='h4'>{config.Dashboard_Main_Heading}</HeadingText>
        {isTeacher === "true" && (
          <Button
            onClick={handleOpenDialog}
            sx={{ backgroundColor: '#1976d2', color: 'white', borderRadius: '8px', '&:hover': { backgroundColor: '#1565c0' } }}
          >
            Availability
          </Button>
        )}
      </Box>

      <FirstBox>
        <TexxtFieldStyles
          placeholder={config.Input_Placholder}
          variant='outlined'
          sx={{ backgroundColor: 'white', borderRadius: '20px', height: '50px' }}
        />
        <SecondBox><NotificationBell /></SecondBox>
        <ThirdBox>
          <IMG className='header-profile' src={profile_img} alt='img' />
          <Box>
            <Name>{localStorage.getItem("first_name")}</Name>
            <SubHeading>{config.Product_Manager}</SubHeading>
          </Box>
          <FaAngleDown style={{ cursor: 'pointer', opacity: '50%', paddingRight: '10px' }} />
        </ThirdBox>
      </FirstBox>

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          Set Availability
          <IconButton aria-label="close" onClick={handleCloseDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
            ✕
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            {weekdays.map(day => (
              <React.Fragment key={day}>
                <Grid item xs={12}>
                  <Typography variant="h6">{day}</Typography>
                </Grid>
                {availability[day].map((session, i) => (
                  <Grid item xs={12} key={i} display="flex" alignItems="center" gap={1}>
                    <TextField
                      label="Start Time"
                      type="time"
                      value={session.start}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ step: 300 }}
                      onChange={e => {
                        const val = e.target.value;
                        setAvailability(prev => {
                          const newSessions = [...prev[day]];
                          newSessions[i] = { ...newSessions[i], start: val };
                          return { ...prev, [day]: newSessions };
                        });
                      }}
                      error={errors[day][i] === 'duration' || errors[day][i] === 'break'}
                      helperText={
                        errors[day][i] === 'duration'
                          ? 'Session must be exactly 3 hours.'
                          : errors[day][i] === 'break'
                            ? 'Must have at least 60 mins break.'
                            : ''
                      }
                      sx={{ width: 150 }}
                    />
                    <TextField
                      label="End Time"
                      type="time"
                      value={session.end}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ step: 300 }}
                      onChange={e => {
                        const val = e.target.value;
                        setAvailability(prev => {
                          const newSessions = [...prev[day]];
                          newSessions[i] = { ...newSessions[i], end: val };
                          return { ...prev, [day]: newSessions };
                        });
                      }}
                      error={errors[day][i] === 'duration'}
                      sx={{ width: 150 }}
                    />
                    <IconButton color="error" onClick={() => handleDelete(day, i)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                ))}

                {/* Add new session inputs */}
                <Grid item xs={12} display="flex" alignItems="center" gap={1} mt={1}>
                  <TextField
                    label="Start Time"
                    type="time"
                    value={newTimes[day].start}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ step: 300 }}
                    onChange={e => handleTimeChange(day, 'start', e.target.value)}
                    sx={{ width: 150 }}
                  />
                  <TextField
                    label="End Time"
                    type="time"
                    value={newTimes[day].end}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ step: 300 }}
                    onChange={e => handleTimeChange(day, 'end', e.target.value)}
                    sx={{ width: 150 }}
                  />
                  <Button variant="contained" onClick={() => handleAddClick(day)} disabled={!newTimes[day].start || !newTimes[day].end}>
                    <Add /> Add
                  </Button>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </DialogContent>
        <Box display="flex" justifyContent="flex-end" p={2} gap={2}>
          <Button onClick={handleCloseDialog} color="inherit">Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </Box>
      </Dialog>
    </TopBox>
  );
}

export default Header;
