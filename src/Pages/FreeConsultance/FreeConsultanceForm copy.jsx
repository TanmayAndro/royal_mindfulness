// ===============================
// IMPORTS
// ===============================
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { GoArrowLeft } from "react-icons/go";
import TimezoneSelect from "react-timezone-select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  IconButton,
  TextField,
  Paper,
  styled,
  CircularProgress,
  FormHelperText,
} from "@mui/material";

import ConfirmationModal from "../../Components/FreeConsultance/ConfirmationModal";

dayjs.extend(utc);
dayjs.extend(timezone);

// ===============================
// STYLED COMPONENT
// ===============================
const PhoneInputWrapper = styled(Box)(({ theme, error }) => ({
  width: "100%",
  "& .react-tel-input": {
    fontFamily: theme.typography.fontFamily,
    "& .form-control": {
      width: "100%",
      height: "56px",
      fontSize: "16px",
      background: "transparent",
      border: `1px solid ${
        error ? "#d32f2f" : "rgba(0, 0, 0, 0.23)"
      }`,
      borderRadius: "4px",
      paddingLeft: "58px",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        borderColor: error
          ? "#d32f2f"
          : "rgba(0, 0, 0, 0.87)",
      },
      "&:focus": {
        borderColor: error ? "#d32f2f" : "#1470af",
        borderWidth: "2px",
        outline: "none",
        boxShadow: "none",
      },
    },
    "& .flag-dropdown": {
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "4px 0 0 4px",
    },
  },
}));

// ===============================
// COMPONENT
// ===============================
function FreeConsultanceForm() {
  const navigate = useNavigate();

  // ===============================
  // STATES
  // ===============================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phoneValue, setPhoneValue] = useState("");
  const [countryCode, setCountryCode] = useState("1");
  const [currentCountryIso, setCurrentCountryIso] =
    useState("us");

  const [selectedTimeZone, setSelectedTimeZone] =
    useState("America/New_York");

  const [consultDate, setConsultDate] = useState("");
  const [consultTime, setConsultTime] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  // NEW STATE FOR MODAL
  const [openConfirmModal, setOpenConfirmModal] =
    useState(false);

  const tomorrowStr = dayjs()
    .add(1, "day")
    .format("YYYY-MM-DD");

  // ===============================
  // HELPERS
  // ===============================
  const getGMTOffset = (tz) => {
    try {
      const tzName =
        typeof tz === "object" ? tz.value : tz;

      const offsetMinutes = dayjs()
        .tz(tzName)
        .utcOffset();

      const sign = offsetMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(offsetMinutes);

      const h = String(Math.floor(abs / 60)).padStart(
        2,
        "0"
      );

      const m = String(abs % 60).padStart(2, "0");

      return `GMT${sign}${h}:${m}`;
    } catch (err) {
      return "GMT-04:00";
    }
  };

  // ===============================
  // USE EFFECT
  // ===============================
  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("freeConsultanceData")
    );

    if (stored) {
      if (
        stored.date &&
        dayjs(stored.date).isAfter(dayjs(), "day")
      ) {
        setConsultDate(stored.date);
      }

      if (stored.time) {
        setConsultTime(stored.time);
      }
    }
  }, []);

  // ===============================
  // VALIDATIONS
  // ===============================
  const validateName = (val) => {
    if (!val.trim()) {
      return "Full Name is required.";
    }

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;

    if (!nameRegex.test(val)) {
      return "Name can only contain letters and spaces.";
    }

    return "";
  };

  const validateEmail = (val) => {
    if (!val.trim()) {
      return "Email Address is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(val)) {
      return "Please enter a valid email.";
    }

    return "";
  };

  const validateDate = (val) => {
    if (!val) {
      return "Please select a consultation date.";
    }

    if (!dayjs(val).isAfter(dayjs(), "day")) {
      return "Consultation date must be future.";
    }

    return "";
  };

  const validatePhone = (value) => {
    const cleanDigits = value.replace(/\D/g, "");

    if (!cleanDigits || cleanDigits === countryCode) {
      return "Phone number is required.";
    }

    try {
      const phoneNumberParsed =
        parsePhoneNumberFromString(
          `+${cleanDigits}`
        );

      if (
        !phoneNumberParsed ||
        !phoneNumberParsed.isValid()
      ) {
        return "Please enter valid phone number.";
      }
    } catch (e) {
      return "Invalid phone number.";
    }

    return "";
  };

  // ===============================
  // INPUT HANDLERS
  // ===============================
  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);

    setErrors((prev) => ({
      ...prev,
      name: validateName(value),
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value),
    }));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;

    setConsultDate(value);

    setErrors((prev) => ({
      ...prev,
      consultDate: validateDate(value),
    }));
  };

  // ===============================
  // FORM SUBMIT
  // ===============================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(consultDate);
    const phoneErr = validatePhone(phoneValue);

    if (
      nameErr ||
      emailErr ||
      dateErr ||
      phoneErr
    ) {
      setErrors({
        name: nameErr,
        email: emailErr,
        consultDate: dateErr,
        phone: phoneErr,
      });

      return;
    }

    // VALIDATION PASSED
    setOpenConfirmModal(true);
  };

  // ===============================
  // FINAL API CALL
  // ===============================
  const submitConsultation = async () => {
    const url =
      process.env.REACT_APP_FREECONSULTATION_URL ||
      process.env.REACT_APP_BASE_URL;

    if (!url) {
      setErrors((prev) => ({
        ...prev,
        error: "API URL missing.",
      }));

      return;
    }

    setLoading(true);

    setErrors({});

    const digitsOnly = phoneValue.replace(/\D/g, "");

    const purePhoneNo =
      digitsOnly.startsWith(countryCode)
        ? digitsOnly.slice(countryCode.length)
        : digitsOnly;

    const payload = {
      free_consultance: {
        name,
        email,
        time_zone: getGMTOffset(selectedTimeZone),
        phone_number: purePhoneNo,
        country_code: `+${countryCode}`,
        free_consultance_date: consultDate,
        free_consultance_time: consultTime,
      },
    };

    try {
      const response = await fetch(
        `${url}/free_consultation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        localStorage.removeItem(
          "freeConsultanceData"
        );
      } else {
        const errorData = await response.json();

        setErrors((prev) => ({
          ...prev,
          error:
            errorData.message ||
            "Something went wrong.",
        }));
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        error:
          "Unable to connect to server.",
      }));
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // CONFIRM SUBMIT
  // ===============================
  const handleConfirmSubmit = async () => {
    setOpenConfirmModal(false);

    await submitConsultation();
  };

  // ===============================
  // RETURN
  // ===============================
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: {
          xs: "30%",
          sm: "15%",
          md: "8%",
        },
        pb: "40px",
        bgcolor: "#f0f2f5",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            textAlign: "left",
          }}
        >
          {submitted ? (
            <Box textAlign="center" py={4}>
              <Typography
                variant="h4"
                fontWeight={700}
                color="#1470af"
                gutterBottom
              >
                Thanks for submitting!
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                mb={4}
              >
                Our team will contact you soon.
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate("/")}
              >
                Refresh
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <Grid container spacing={2.5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={name}
                    onChange={handleNameChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Select Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: tomorrowStr,
                    }}
                    value={consultDate}
                    onChange={handleDateChange}
                    error={!!errors.consultDate}
                    helperText={
                      errors.consultDate
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Select Time"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={consultTime}
                    onChange={(e) =>
                      setConsultTime(
                        e.target.value
                      )
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TimezoneSelect
                    value={selectedTimeZone}
                    onChange={
                      setSelectedTimeZone
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <PhoneInputWrapper
                    error={!!errors.phone}
                  >
                    <PhoneInput
                      country="us"
                      value={phoneValue}
                      onChange={(
                        value,
                        data
                      ) => {
                        setPhoneValue(value);

                        setCountryCode(
                          data.dialCode
                        );

                        setCurrentCountryIso(
                          data.countryCode
                        );

                        const phoneError =
                          validatePhone(
                            value
                          );

                        setErrors((prev) => ({
                          ...prev,
                          phone: phoneError,
                        }));
                      }}
                    />
                  </PhoneInputWrapper>

                  {errors.phone && (
                    <FormHelperText error>
                      {errors.phone}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent:
                      "center",
                  }}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                  >
                    {loading ? (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: "#fff",
                        }}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Grid>
              </Grid>

              {errors.error && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  {errors.error}
                </Typography>
              )}
            </Box>
          )}
        </Paper>
      </Container>

      {/* ========================= */}
      {/* CONFIRMATION MODAL */}
      {/* ========================= */}
      <ConfirmationModal
        open={openConfirmModal}
        onClose={() =>
          setOpenConfirmModal(false)
        }
        onConfirm={handleConfirmSubmit}
        loading={loading}
      />
    </Box>
  );
}

export default FreeConsultanceForm;