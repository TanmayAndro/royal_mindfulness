


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import dayjs, { Dayjs } from "dayjs";
// // import {
// //   Box,
// //   Grid,
// //   Typography,
// //   Button,
// //   CardMedia,
// //   Paper,
// //   TextField,
// //   Autocomplete,
// // } from "@mui/material";
// // import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// // import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// // import { DateCalendar } from "@mui/x-date-pickers-pro";
// // import AntraMounaImg from "../../Assests/Sessionimg.png";



// // const BookNow = () => {
// //   const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
// //   const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("user_token");
// //     if (!token) {
// //       alert("Please login first to book a session.");
// //       navigate("/login");
// //     }
// //   }, [navigate]);

// //   // Generate time slots from 00:00 to 23:30 in 30-minute intervals
// //   const generateTimeSlots = () => {
// //     const slots = [];
// //     for (let hour = 0; hour < 24; hour++) {
// //       const h = hour.toString().padStart(2, "0");
// //       slots.push(`${h}:00`);
// //       slots.push(`${h}:30`);
// //     }
// //     return slots;
// //   };

// //   const timeSlots = generateTimeSlots();

// //   const handleDateSelect = (date: Dayjs | null) => {
// //     setSelectedDate(date);
// //   };

// //   // const handleSubmit = () => {
// //   //   if (!selectedDate || !selectedTime) {
// //   //     alert("Please select both date and time before booking.");
// //   //     return;
// //   //   }

// //   //   navigate("/payment", {
// //   //     state: {
// //   //       sessionDate: selectedDate.format("YYYY-MM-DD"),
// //   //       sessionTime: selectedTime,
// //   //     },
// //   //   });
// //   // };

// // const handleSubmit = async () => {
// //   if (!selectedDate || !selectedTime) {
// //     alert("Please select both date and time before booking.");
// //     return;
// //   }

// //   const token = localStorage.getItem("user_token");
// //   const id=localStorage.getItem("user_id");
// //    console.log("llllllllllllllllllllllllllll",token)
// //     console.log("9999999999999999999999999999",id)
// //   if (!token) {
// //     alert("You must be logged in to book a session.");
// //     navigate("/login");
// //     return;
// //   }

// //   // const requestBody = {
// //   //   from_date: selectedDate.format("YYYY-MM-DD"),
// //   //   from_time: selectedTime,
// //   // };
// // // console.log("ddddddddddddddddddd",selectedDate)
// // // console.log("eeeeeeeeeeeeeeeeeee",selectedTime)
// //   const formData = new FormData();
// // formData.append("from_date", selectedDate.format("YYYY-MM-DD"));
// // formData.append("from_time", selectedTime!);
// // // console.log("gggggggggggggggggggggg",formData)
// //   try {
// //     const response = await fetch("https://be-royal-mindfulness.onrender.com/trainer_bookings", {
// //       method: "POST",
// //       headers: {
// //         token: token, 
// //       },
// //       //body: JSON.stringify(requestBody),
// //       body: formData,
// //     });

// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       throw new Error(errorData.message || "Failed to book session");
// //     }

// //     // Redirect on success
// //  navigate("/payment", {
// //   state: {
// //     sessionDate: selectedDate.format("YYYY-MM-DD"),
// //     sessionTime: selectedTime,
// //   },
// // });

// //   } catch (error) {
// //     console.error("Booking failed:", error);
// //     alert(`Booking failed:`);
// //   }
// // };



// //   return (
// //     <Box
// //       sx={{
// //         backgroundColor: "#eaeaee",
// //         borderRadius: "30px",
// //         padding: { xs: 2, sm: 4 },
// //         margin: "auto",
// //         maxWidth: "1000px",
// //       }}
// //     >
// //       {/* Top Banner Image */}
// //       <CardMedia
// //         component="img"
// //         image={AntraMounaImg}
// //         alt="Yoga Session"
// //         sx={{
// //           width: "50%",
// //           height: { xs: 180, sm: 220 },
// //           objectFit: "cover",
// //           borderRadius: "20px",
// //           marginBottom: 3,
// //           marginX: "auto",
// //           display: "block",
// //         }}
// //       />

// //       <Typography variant="h4" color="#1470af" fontWeight={700} mb={3} textAlign="center">
// //         Select Date and Time
// //       </Typography>

// //       <Grid container spacing={4} justifyContent="center">
// //         {/* Calendar */}
// //         <Grid item xs={12} md={5}>
// //           <Paper
// //             elevation={3}
// //             sx={{
// //               padding: 2,
// //               borderRadius: "16px",
// //               border: "1px solid #8eb6dc",
// //               backgroundColor: "#fff",
// //             }}
// //           >
// //             <LocalizationProvider dateAdapter={AdapterDayjs}>
// //               <DateCalendar
// //                 value={selectedDate}
// //                 onChange={handleDateSelect}
// //                 shouldDisableDate={(date) => date.isBefore(dayjs(), "day")}
// //                 sx={{
// //                   "& .MuiDayCalendar-root": {
// //                     backgroundColor: "#f9f9f9",
// //                     borderRadius: "10px",
// //                   },
// //                 }}
// //               />
// //             </LocalizationProvider>
// //           </Paper>
// //         </Grid>

// //         {/* Time Slot Selector */}
// //         <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
// //           <Typography variant="h6" fontWeight={600} gutterBottom>
// //             Select a Time Slot
// //           </Typography>

// //           <Autocomplete
// //             options={timeSlots}
// //             value={selectedTime}
// //             onChange={(event, newValue) => setSelectedTime(newValue ?? undefined)}
// //             renderInput={(params) => (
// //               <TextField {...params} label="Choose time" variant="outlined" />
// //             )}
// //             disableClearable
// //             sx={{
// //               backgroundColor: "#fff",
// //               borderRadius: 2,
// //               "& .MuiOutlinedInput-root": {
// //                 paddingRight: "8px",
// //               },
// //             }}
// //           />
// //         </Grid>
// //       </Grid>

// //       {/* Submit Button */}
// //       <Box mt={5} textAlign="center">
// //         <Button
// //           onClick={handleSubmit}
// //           disabled={!selectedDate || !selectedTime}
// //           sx={{
// //             backgroundColor: "#1470af",
// //             color: "#fff",
// //             borderRadius: "10px",
// //             padding: "0.8rem 3rem",
// //             fontWeight: "bold",
// //             fontSize: "1.1rem",
// //             "&:hover": { backgroundColor: "#0d5e94" },
// //           }}
// //         >
// //           Book Session
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default BookNow;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Typewriter } from "react-simple-typewriter";

countries.registerLocale(enLocale);

export default function BookNow() {
  const [countryList, setCountryList] = useState<{ code: string; name: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    country: "",
    timezone: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    const countriesObject = countries.getNames("en", { select: "official" });
    const countriesArray = Object.entries(countriesObject).map(([code, name]) => ({
      code,
      name,
    }));
    setCountryList(countriesArray);
  }, []);

  const validateField = (name: string, value: string | boolean) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) error = "Name is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string))
          error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if ((value as string).replace(/\D/g, "").length < 10)
          error = "Enter valid phone number";
        break;
      case "address":
        if (!value) error = "Address is required";
        break;
      case "pincode":
        if (!value) error = "Pin Code is required";
        break;
      case "country":
        if (!value) error = "Country is required";
        break;
      case "timezone":
        if (!value) error = "Timezone is required";
        break;
      case "termsAccepted":
        if (!value) error = "You must accept terms";
        break;
      default:
        break;
    }
    return error;
  };

  const validateAll = () => {
    const newErrors: any = {};
    Object.entries(formData).forEach(([key, value]) => {
      const err = validateField(key, value);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const target = e.target as HTMLInputElement;
  const { name, value, type } = target;
  const fieldValue = type === "checkbox" ? target.checked : value;

  setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  const err = validateField(name, fieldValue);
  setErrors((prev: any) => ({ ...prev, [name]: err }));
};


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
    if (!isValid) {
      alert("Please fix form errors before submitting.");
      return;
    }

    const token = localStorage.getItem("user_token");
    if (!token) {
      alert("Please login to book a session.");
      navigate("/login");
      return;
    }

    const payload = {
      from_date: selectedDate.format("YYYY-MM-DD"),
      from_time: selectedTime.format("HH:mm"),
      user_id: localStorage.getItem("user_id") || 0,
      name: formData.name,
      email: formData.email,
      phone_number: `+${formData.phone}`,
      address: formData.address,
      pincode: formData.pincode,
      nationality: formData.country,
      timezone: formData.timezone,
    };

    navigate("/payment", { state: { payload, token } });
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: { xs: "column", md: "row" } }}>
      {/* Left side */}
      <Box
  sx={{
    width: { md: "35%" },
    bgcolor: "#149BD8",
    p: 4,
    color: "#fff",
  }}
>
  <Typography
    variant="h3"
    sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "4rem" } }}
  >
    You’re One Step Away From a Magistical Life
  </Typography>

  {/* FIXED HEIGHT WRAPPER */}
  <Box
    sx={{
      height: { xs: "70px", md: "90px" },   // adjust as needed
      overflow: "hidden",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        lineHeight: 1.2,
        fontSize: { xs: "1rem", md: "1.25rem" },
      }}
    >
      <Typewriter
        words={[
          "Reduce stress, increase focus, and build sheer strength.",
          "Cultivate calm, command clarity, and conquer your inner chaos.",
          "Stay poised, powerful, and profoundly present.",
          "Journey from overthinking to mental mastery.",
          "Amplify awareness, and move with sovereign strength.",
          "Build royal resilience, disciplined thought, and unshakable calm.",
          "Rule your reactions, reclaim your peace, and rise like a monarch.",
          "From chaos to command.",
          "Stillness breeds supremacy.",
          "Be fierce. Be still. Be royal.",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={2000}
      />
    </Typography>
  </Box>
</Box>


      {/* Right side */}
      <Box sx={{ width: {  md: "65%" }, bgcolor: "#fef4e8", p: 4 }}>
        <Box sx={{ width: "100%", maxWidth: 500, mx: "auto" }} component="form" onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ mb: 2,fontSize:{xs: "1.3rem"}, fontWeight: "bold" }}>
            Trainer Booking Form
          </Typography>

          <TextField
            fullWidth
            size="small"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />

          <TextField
            fullWidth
            size="small"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <Box sx={{ mt: 2 }}>
            <PhoneInput
              country={"in"}
              inputStyle={{ width: "100%" }}
              value={formData.phone}
              onChange={(value) => {
                setFormData((prev) => ({ ...prev, phone: value }));
                const err = validateField("phone", value);
                setErrors((prev: any) => ({ ...prev, phone: err }));
              }}
              inputProps={{ name: "phone", required: true }}
              specialLabel="Phone Number"
            />
            {errors.phone && (
              <Typography color="error" variant="caption">
                {errors.phone}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            size="small"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            margin="normal"
            multiline
            rows={2}
          />

          <TextField
            fullWidth
            size="small"
            label="Pin Code"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            error={!!errors.pincode}
            helperText={errors.pincode}
            margin="normal"
          />

          <TextField
            select
            fullWidth
            size="small"
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
            margin="normal"
          >
            {countryList.map(({ code, name }) => (
              <MenuItem key={code} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            size="small"
            label="Timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            error={!!errors.timezone}
            helperText={errors.timezone}
            margin="normal"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                  margin: "normal",
                },
              }}
              disablePast
            />
            <TimePicker
              label="Time"
              value={selectedTime}
              onChange={(newValue) => setSelectedTime(newValue)}
              ampm={false}
              minutesStep={30}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                  margin: "normal",
                },
              }}
              views={["hours", "minutes"]}
            />
          </LocalizationProvider>

         <FormControlLabel
  control={
    <Checkbox
      checked={formData.termsAccepted}
      onChange={handleChange}
      name="termsAccepted"
    />
  }
  label={
    <span 
      style={{ textDecoration: "underline", cursor: "pointer" }}
      onClick={() => navigate("/term-condition")}
    >
      I agree to terms and conditions
    </span>
  }
/>

          {errors.termsAccepted && (
            <Typography color="error" variant="caption" display="block" mb={1}>
              {errors.termsAccepted}
            </Typography>
          )}

          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
            Book
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

