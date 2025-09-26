// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   MenuItem,
// } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker, TimePicker, TimeView } from "@mui/x-date-pickers";
// import dayjs, { Dayjs } from "dayjs";
// import countries from "i18n-iso-countries";
// import enLocale from "i18n-iso-countries/langs/en.json";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/material.css";
// import axios from "axios";


// countries.registerLocale(enLocale);

// export default function BookNow() {
//   const [countryList, setCountryList] = useState<{ code: string; name: string }[]>([]);
//   const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
//   const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     pincode: "",
//     country: "",
//     timezone: "",
//     termsAccepted: false,
//   });
//   const [errors, setErrors] = useState<any>({});
//   const userId=localStorage.getItem("user_id")
//   const navigate = useNavigate();

//   useEffect(() => {
//     const countriesObject = countries.getNames("en", { select: "official" });
//     const countriesArray = Object.entries(countriesObject).map(([code, name]) => ({
//       code,
//       name,
//     }));
//     setCountryList(countriesArray);
//   }, []);

//   const validateField = (name: string, value: string | boolean) => {
//     let error = "";
//     switch (name) {
//       case "name":
//         if (!value) error = "Name is required";
//         break;
//       case "email":
//         if (!value) error = "Email is required";
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string))
//           error = "Invalid email format";
//         break;
//       case "phone":
//         if (!value) error = "Phone number is required";
//         else if ((value as string).replace(/\D/g, "").length < 10)
//           error = "Enter valid phone number";
//         break;
//       case "address":
//         if (!value) error = "Address is required";
//         break;
//       case "pincode":
//         if (!value) error = "Pin Code is required";
//         break;
//       case "country":
//         if (!value) error = "Country is required";
//         break;
//       case "timezone":
//         if (!value) error = "Timezone is required";
//         break;
//       case "termsAccepted":
//         if (!value) error = "You must accept terms";
//         break;
//       default:
//         break;
//     }
//     setErrors((prev: any) => ({ ...prev, [name]: error }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const target = e.target as HTMLInputElement;
//     const { name, value, type } = target;
//     const checked = target.checked;
//     const fieldValue = type === "checkbox" ? checked : value;
//     setFormData((prev) => ({ ...prev, [name]: fieldValue }));
//     validateField(name, fieldValue);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   // Validate all fields before submit
//   Object.entries(formData).forEach(([key, val]) => validateField(key, val));
//   const hasErrors = Object.values(errors).some((err) => err);
//   if (!selectedDate || !selectedTime) {
//     alert("Please select both date and time.");
//     return;
//   }
//   if (hasErrors) {
//     alert("Please fix form errors before submitting.");
//     return;
//   }

//   const token = localStorage.getItem("user_token");
//   if (!token) {
//     alert("Please login to book a session.");
//     navigate("/login");
//     return;
//   }

//   // Prepare payload, but DO NOT call API here
//   const payload = {
//     from_date: selectedDate.format("YYYY-MM-DD"),
//     from_time: selectedTime.format("HH:mm"),
//     user_id: localStorage.getItem("user_id") || 0,
//     name: formData.name,
//     email: formData.email,
//     phone_number: `+${formData.phone}`,
//     address: formData.address,
//     pincode: formData.pincode,
//     nationality: formData.country,
//     timezone: formData.timezone,
//   };
  

//   // Navigate to payment page with all booking data
//   navigate("/payment", { state: { payload, token } });
// };



//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "row", overflow: "hidden" }}>
//       <Box
//         sx={{
//           width: "35%",
//           minWidth: "300px",
//           bgcolor: "linear-gradient(180deg, #004d40 0%, #26a69a 100%)",
//           background: "linear-gradient(180deg, #004d40 0%, #26a69a 100%)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           p: 4,
//           color: "#fff",
//         }}
//       >
//         <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
//           Book your Trainer
//         </Typography>
//       </Box>

//       <Box sx={{ width: "65%", bgcolor: "#fef4e8", p: 4, boxSizing: "border-box" }}>
//         <Box sx={{ width: "100%", maxWidth: 500, mx: "auto" }} component="form" onSubmit={handleSubmit}>
//           <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
//             Trainer Booking Form
//           </Typography>

//           <TextField
//             fullWidth
//             size="small"
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             onBlur={() => validateField("name", formData.name)}
//             error={!!errors.name}
//             helperText={errors.name}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             size="small"
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={() => validateField("email", formData.email)}
//             error={!!errors.email}
//             helperText={errors.email}
//             margin="normal"
//           />

//           <Box sx={{ mt: 2 }}>
//             <PhoneInput
//               country={"in"}
//               inputStyle={{ width: "100%" }}
//               value={formData.phone}
//               onChange={(value) => {
//                 setFormData((prev) => ({ ...prev, phone: value }));
//                 validateField("phone", value);
//               }}
//               onBlur={() => validateField("phone", formData.phone)}
//               inputProps={{ name: "phone", required: true }}
//               specialLabel="Phone Number"
//             />
//             {errors.phone && (
//               <Typography color="error" variant="caption">
//                 {errors.phone}
//               </Typography>
//             )}
//           </Box>

//           <TextField
//             fullWidth
//             size="small"
//             label="Address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             onBlur={() => validateField("address", formData.address)}
//             error={!!errors.address}
//             helperText={errors.address}
//             variant="outlined"
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             size="small"
//             label="Pin Code"
//             name="pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             onBlur={() => validateField("pincode", formData.pincode)}
//             error={!!errors.pincode}
//             helperText={errors.pincode}
//             margin="normal"
//           />

//           <TextField
//             select
//             fullWidth
//             size="small"
//             label="Nationality / Country"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             onBlur={() => validateField("country", formData.country)}
//             error={!!errors.country}
//             helperText={errors.country}
//             margin="normal"
//           >
//             {countryList.map((country) => (
//               <MenuItem key={country.code} value={country.name}>
//                 {country.name}
//               </MenuItem>
//             ))}
//           </TextField>

//           <TextField
//             select
//             fullWidth
//             size="small"
//             label="Time Zone"
//             name="timezone"
//             value={formData.timezone}
//             onChange={handleChange}
//             onBlur={() => validateField("timezone", formData.timezone)}
//             error={!!errors.timezone}
//             helperText={errors.timezone}
//             margin="normal"
//           >
//             {["IST", "GMT", "EST", "PST"].map((zone) => (
//               <MenuItem key={zone} value={zone}>
//                 {zone}
//               </MenuItem>
//             ))}
//           </TextField>

//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <Box sx={{ mt: 2 }}>
//               <DatePicker
//                 label="Select Date"
//                 value={selectedDate}
//                 onChange={(newDate) => setSelectedDate(newDate)}
//                 slotProps={{
//                   textField: { fullWidth: true, margin: "normal", size: "small" },
//                 }}
//               />
//               <TimePicker
//                 label="Select Time"
//                 value={selectedTime}
//                 onChange={(newTime) => setSelectedTime(newTime)}
//                 shouldDisableTime={(value: Dayjs | null, view: TimeView) => {
//                   if (!value) return false;
//                   if (view === "minutes") {
//                     const minute = value.minute();
//                     return minute !== 0 && minute !== 30;
//                   }
//                   return false;
//                 }}
//                 slotProps={{
//                   textField: { fullWidth: true, margin: "normal", size: "small" },
//                 }}
//               />
//             </Box>
//           </LocalizationProvider>

//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 onBlur={() => validateField("termsAccepted", formData.termsAccepted)}
//                 size="small"
//               />
//             }
//             label="I agree to the Terms and Conditions"
//             sx={{ mt: 2 }}
//           />
//           {errors.termsAccepted && (
//             <Typography color="error" variant="caption">
//               {errors.termsAccepted}
//             </Typography>
//           )}

//           <Button
//             variant="contained"
//             fullWidth
//             type="submit"
//             sx={{ mt: 3, bgcolor: "#26a69a", color: "#fff", fontWeight: "bold", ":hover": { bgcolor: "#00796b" } }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
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
import { DatePicker, TimePicker, TimeView } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import axios from "axios";
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
  const userId = localStorage.getItem("user_id");
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
    setErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    validateField(name, fieldValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields before submit
    Object.entries(formData).forEach(([key, val]) => validateField(key, val));
    const hasErrors = Object.values(errors).some((err) => err);
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
    if (hasErrors) {
      alert("Please fix form errors before submitting.");
      return;
    }

    const token = localStorage.getItem("user_token");
    if (!token) {
      alert("Please login to book a session.");
      navigate("/login");
      return;
    }

    // Prepare payload, but DO NOT call API here
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

    // Navigate to payment page with all booking data
    navigate("/payment", { state: { payload, token } });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
      }}
    >
      {/* Left Side with Heading + Animated Subheadings */}
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          minWidth: "300px",
          bgcolor: "linear-gradient(180deg, #004d40 0%, #26a69a 100%)",
          background: "linear-gradient(180deg, #004d40 0%, #26a69a 100%)",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          p: 4,
          paddingTop:10,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: "1.8rem", md: "4rem" }, textAlign: "left" }}
        >
          You’re One Step Away From a Stronger Mind
        </Typography>

        <Typography
          variant="h6"
          sx={{ maxWidth: 360, lineHeight: 1.5, fontSize: { xs: "1rem", md: "1.5rem" },textAlign: "left", }}
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

      {/* Right Side - Your Existing Booking Form */}
      <Box sx={{ width: { xs: "100%", md: "65%" }, bgcolor: "#fef4e8", p: 4, boxSizing: "border-box" }}>
        <Box
          sx={{ width: "100%", maxWidth: 500, mx: "auto" }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            Trainer Booking Form
          </Typography>

          <TextField
            fullWidth
            size="small"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => validateField("name", formData.name)}
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
            onBlur={() => validateField("email", formData.email)}
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
                validateField("phone", value);
              }}
              onBlur={() => validateField("phone", formData.phone)}
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
            onBlur={() => validateField("address", formData.address)}
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
            onBlur={() => validateField("pincode", formData.pincode)}
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
            onBlur={() => validateField("country", formData.country)}
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
            onBlur={() => validateField("timezone", formData.timezone)}
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
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }))
                }
                name="termsAccepted"
              />
            }
            label="I agree to terms and conditions"
          />
          {errors.termsAccepted && (
            <Typography color="error" variant="caption" display="block" mb={1}>
              {errors.termsAccepted}
            </Typography>
          )}

          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
