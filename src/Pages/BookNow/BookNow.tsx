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
// @ts-ignore
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// @ts-ignore
import {
  LocalizationProvider,
  // @ts-ignore
  DatePicker,
  // @ts-ignore
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Typewriter } from "react-simple-typewriter";
import TimezoneSelect from "react-timezone-select";
import { trackEvent } from "../../analitics/analytics";
countries.registerLocale(enLocale);

export default function BookNow() {
  const [countryList, setCountryList] = useState<
    { code: string; name: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    country: "",
    timezone: localTZ,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(customParseFormat);

  useEffect(() => {
    const countriesObject = countries.getNames("en", { select: "official" });
    const countriesArray = Object.entries(countriesObject).map(
      ([code, name]) => ({
        code,
        name,
      }),
    );
    setCountryList(countriesArray);
  }, []);
  useEffect(() => {
    const name = localStorage.getItem("first_name") || "";
    const email = localStorage.getItem("email") || "";
    const phone = localStorage.getItem("phone_number") || "";

    setFormData((prev) => ({
      ...prev,
      name,
      email,
      phone, // no +91 because you hid country code
    }));
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const fieldValue = type === "checkbox" ? target.checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    const err = validateField(name, fieldValue);
    setErrors((prev: any) => ({ ...prev, [name]: err }));
  };

  function convert24hTimeToUTC(time24h: any, timezone: any) {
    const [hours, minutes, seconds = 0] = time24h.split(":").map(Number);
    const now = new Date();

    // 1. Create a date in the target timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    // 2. Calculate the offset by comparing UTC vs Local
    const parts = formatter.formatToParts(now);
    const dateMap: any = Object.fromEntries(
      parts.map((p) => [p.type, p.value]),
    );

    const targetDate = new Date(
      Date.UTC(
        dateMap.year,
        dateMap.month - 1,
        dateMap.day,
        dateMap.hour,
        dateMap.minute,
        dateMap.second,
      ),
    );

    const offsetInMs = now.getTime() - targetDate.getTime();

    // 3. Apply offset to your input time
    const inputDateUTC = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hours,
        minutes,
        seconds,
      ),
    );

    return new Date(inputDateUTC.getTime() + offsetInMs).toISOString();
  }

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
      from_time: convert24hTimeToUTC(
        selectedTime?.format("HH:mm"),
        formData.timezone,
      ),
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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          width: { md: "35%" },
          bgcolor: "#1470AF",
          p: 4,
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.5rem", md: "4rem" },
          }}
        >
          You’re One Step Away From a Magistical Life
        </Typography>

        {/* FIXED HEIGHT WRAPPER */}
        <Box
          sx={{
            height: { xs: "70px", md: "90px" }, // adjust as needed
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
      <Box sx={{ width: { md: "65%" }, bgcolor: "#fef4e8", p: 4 }}>
        <Box
          sx={{ width: "100%", maxWidth: 500, mx: "auto" }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, fontSize: { xs: "1.3rem" }, fontWeight: "bold" }}
          >
            Hire Trainer Booking Form
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
            {/* Label */}
            <Typography
              sx={{
                fontSize: "12px",
                color: errors.phone ? "#d32f2f" : "rgba(0,0,0,0.6)",
                mb: "4px",
              }}
            >
              Phone Number
            </Typography>

            {/* Phone Input */}
            <Box
              sx={{
                "& input": {
                  width: "100%",
                  height: "40px",
                  padding: "8.5px 14px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  border: errors.phone
                    ? "2px solid #d32f2f"
                    : "1px solid rgba(0, 0, 0, 0.23)",
                  outline: "none",
                },
                "& input:focus": {
                  border: errors.phone
                    ? "2px solid #d32f2f"
                    : "2px solid #1976d2",
                },
                "& .PhoneInputCountry": {
                  marginRight: "8px",
                },
              }}
            >
            <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={(value) => {
              const phoneValue = value || "";

              setFormData((prev) => ({
                ...prev,
                phone: phoneValue,
              }));

              const err = validateField("phone", phoneValue);

              setErrors((prev: typeof errors) => ({
                ...prev,
                phone: err,
              }));
            }}
          />
            </Box>

            {/* Error */}
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

          <Box mt={2}>
            <TimezoneSelect
              value={formData.timezone}
              onChange={(val: any) =>
                setFormData((p) => ({ ...p, timezone: val.value }))
              }
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "40px",
                  background: " #fef4e8",
                }),
              }}
            />
          </Box>

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
              minutesStep={15}
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

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
            onClick={() => {
              trackEvent("Book-now", "submit", `form book`);
            }}
          >
            Book
          </Button>
        </Box>
      </Box>
    </Box>
  );
}


