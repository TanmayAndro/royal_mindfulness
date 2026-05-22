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
import free_consulation_bg from "../../Assests/free_consulation_bg.jpg";

// Import your custom reusable confirmation modal component
import ConfirmationModal from "../../Components/FreeConsultance/ConfirmationModal";
import consulation_bg from "../../Assests/images/consulation_bg.jpg";

// MUI Components
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

dayjs.extend(utc);
dayjs.extend(timezone);
const PhoneInputWrapper = styled(Box)(({ theme, error }) => ({
  width: "100%",
  "& .react-tel-input": {
    fontFamily: theme.typography.fontFamily,
    position: "relative",

    "& .form-control": {
      width: "100%",
      height: "56px",
      fontSize: "16px",
      background: "transparent",
      border: `1px solid ${error ? "#d32f2f" : "rgba(0, 0, 0, 0.23)"}`,
      borderRadius: "4px",
      paddingLeft: "58px",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        borderColor: error ? "#d32f2f" : "rgba(0, 0, 0, 0.87)",
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

      "& .selected-flag": {
        backgroundColor: "transparent",
        width: "45px",
        top: "2px",
        "&:hover, &.open": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      },
    },

    /* 🌐 GLOBAL COUNTRY LIST VIEW (DESKTOP + MOBILE BOTH UPWARDS) */
    "& .country-list": {
      borderRadius: "8px",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
      border: "1px solid #ddd",
      width: "300px" /* Desktop width standard */,
      zIndex: 1500,
      backgroundColor: "#ffffff",

      /* 🆕 DESKTOP & GENERAL UPWARD POSITIONING */
      top: "auto !important" /* Default bottom layout reset kiya */,
      bottom: "100% !important" /* Dropdown hamesha upar khulega */,
      marginBottom: "6px !important" /* Input area se safe distance */,
      marginTop: "0px !important",

      /* 📱 ONLY MOBILE VIEW RESPONSIVE DESIGN */
      "@media (max-width: 500px)": {
        width: "270px !important",
        maxHeight: "180px !important",
        left: "0px !important",
      },

      "& .country": {
        padding: "10px 14px !important",
        display: "flex",
        alignItems: "center",

        "& .country-name": {
          fontSize: "14px",
          marginLeft: "35px" /* Aapka custom margin-left */,
          marginRight: "9px" /* Aapka custom margin-right */,
          marginTop: "0px" /* Aapka custom margin-top */,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      },

      "& .search": {
        padding: "8px 10px",
        backgroundColor: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 2,
        "& .search-box": {
          width: "88%",
          marginLeft: "0",
          padding: "6px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        },
      },
    },

    "& .special-label": {
      display: "none",
    },
  },
}));

function FreeConsultanceForm() {
  const navigate = useNavigate();

  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Phone values
  const [phoneValue, setPhoneValue] = useState("");
  const [countryCode, setCountryCode] = useState("1");
  const [currentCountryIso, setCurrentCountryIso] = useState("us");

  const [selectedTimeZone, setSelectedTimeZone] = useState("America/New_York");

  const [consultDate, setConsultDate] = useState("");
  const [consultTime, setConsultTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // New State for Confirmation Modal UI Hook
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const tomorrowStr = dayjs().add(1, "day").format("YYYY-MM-DD");

  const getGMTOffset = (tz) => {
    try {
      const tzName = typeof tz === "object" ? tz.value : tz;
      const offsetMinutes = dayjs().tz(tzName).utcOffset();
      const sign = offsetMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(offsetMinutes);
      const h = String(Math.floor(abs / 60)).padStart(2, "0");
      const m = String(abs % 60).padStart(2, "0");
      return `GMT${sign}${h}:${m}`;
    } catch (err) {
      return "GMT-04:00";
    }
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("freeConsultanceData"));
    if (stored) {
      if (stored.date && dayjs(stored.date).isAfter(dayjs(), "day")) {
        setConsultDate(stored.date);
      }
      if (stored.time) setConsultTime(stored.time);
    }
  }, []);

  // Validation functions
  const validateName = (val) => {
    if (!val.trim()) return "Full Name is required.";
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(val))
      return "Name can only contain letters and spaces (Min 2 chars).";
    return "";
  };

  const validateEmail = (val) => {
    if (!val.trim()) return "Email Address is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val))
      return "Please enter a valid email format (e.g. user@domain.com).";
    return "";
  };

  const validateTime = (val) => {
    if (!val) return "Please select a consultation time.";
    return "";
  };

  const validateDate = (val) => {
    if (!val) return "Please select a consultation date.";
    if (!dayjs(val).isAfter(dayjs(), "day"))
      return "Consultation date must be a future date.";
    return "";
  };

  const validatePhone = (value, isoCode) => {
    const cleanDigits = value.replace(/\D/g, "");
    if (!cleanDigits || cleanDigits === countryCode) {
      return "Phone number is required.";
    }
    try {
      const phoneNumberParsed = parsePhoneNumberFromString(`+${cleanDigits}`);
      if (!phoneNumberParsed || !phoneNumberParsed.isValid()) {
        return `Please enter a valid structure for this country's pattern.`;
      }
    } catch (e) {
      return "Invalid phone number structure.";
    }
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) }));
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setConsultTime(value);
    setErrors((prev) => ({ ...prev, consultTime: validateTime(value) }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setConsultDate(value);
    setErrors((prev) => ({ ...prev, consultDate: validateDate(value) }));
  };

  const handlePreSubmitCheck = (e) => {
    e.preventDefault();
    if (loading) return;

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(consultDate);
    const phoneErr = validatePhone(phoneValue, currentCountryIso);
    const timeErr = validateTime(consultTime);

    if (nameErr || emailErr || dateErr || phoneErr || timeErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        consultDate: dateErr,
        phone: phoneErr,
        consultTime: timeErr,
      });
      return;
    }

    setIsConfirmOpen(true);
  };

  const handleFinalApiSubmit = async () => {
    const primaryUrl = process.env.REACT_APP_FREECONSULTATION_URL?.replace(
      /\/$/,
      "",
    );
    const localUrl = process.env.REACT_APP_BASE_URL?.replace(/\/$/, "");

    if (!primaryUrl) {
      setErrors((prev) => ({ ...prev, error: "Primary API URL is missing." }));
      setIsConfirmOpen(false);
      return;
    }

    setLoading(true);
    setErrors({});

    const digitsOnly = phoneValue.replace(/\D/g, "");
    const purePhoneNo = digitsOnly.startsWith(countryCode)
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

    const sendRequest = (url) =>
      fetch(`${url}/free_consultances`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => (res.ok ? res.json() : Promise.reject(res)));

    try {
      const results = await Promise.allSettled([
        sendRequest(primaryUrl),
        localUrl ? sendRequest(localUrl) : Promise.reject("Local URL missing"),
      ]);

      const [primaryResult, localResult] = results;

      if (primaryResult.status === "rejected") {
        throw new Error(
          "Primary API failed: " +
            (primaryResult.reason?.message || "Connection error"),
        );
      }

      if (localResult.status === "rejected") {
        console.warn(
          "Local server update failed, but primary succeeded:",
          localResult.reason,
        );
      } else {
        console.log("Local server updated successfully.");
      }

      setSubmitted(true);
      localStorage.removeItem("freeConsultanceData");
      setIsConfirmOpen(false);
    } catch (err) {
      setErrors((prev) => ({ ...prev, error: err.message }));
      setIsConfirmOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Vertically center karega
        alignItems: "center", // Horizontally center karega
        pb: "40px",
        position: "relative", // Background overlay ke liye zaroori hai
        bgcolor: "#f0f4f8",
        overflow: "hidden",

        // Background Image with 25% Opacity (Taki text dhundhla na ho)
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${free_consulation_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.25, // 25% Opacity applied here
          zIndex: 1,
        },

        // Taki is Box ke andar ka content image ke upar dikhe
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      {/* Aapka card ya baaki content yahan aayega */}

     <Container
  maxWidth={false}
  sx={{
    width: "100%",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    py: {
      xs: 3,
      md: 6,
    },
  }}
>
  <Paper
  elevation={0}
  sx={{
    width: {
      xs: "100%",
      sm: "92%",
      md: submitted ? "570px" : "552px",
    },

    minHeight: {
      xs: "auto",
      md: submitted ? "337px" : "638px",
    },

    mx: "auto",

    position: "relative",

    overflow: "hidden",

    borderRadius: "16px",

    backgroundImage: `url(${consulation_bg})`,

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    boxShadow: "0px 4px 18px rgba(0,0,0,0.10)",

    border: "1px solid rgba(255,255,255,0.25)",

    // ✅ Responsive padding
    p: {
      xs: "24px 18px",
      sm: "32px 28px",
      md: submitted ? "33px 70px" : "48px",
    },

    display: "flex",

    flexDirection: "column",

    justifyContent: submitted
      ? "center"
      : "flex-start",

   alignItems: "stretch",

    // ✅ Extra inner spacing remove
    boxSizing: "border-box",

    "&::before": {
      content: '""',

      position: "absolute",

      inset: 0,

      backgroundColor:
        "rgba(255,255,255,0.72)",

      zIndex: 1,
    },

    "& > *": {
      position: "relative",

      zIndex: 2,
      width: "100%",
    },
  }}
>
    {submitted ? (

<Box
  sx={{
    width: "100%",

    maxWidth: {
      xs: "100%",
      sm: "650px",
      md: "650px",
    },

    margin: "0 auto",

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "center",

    textAlign: "center",

    py: {
      xs: "30px",
      sm: "40px",
      md: "55px",
    },

    px: {
      xs: "20px",
      sm: "35px",
      md: "60px",
    },

    boxSizing: "border-box",
  }}
>
  {/* TITLE */}
  <Typography
    sx={{
      width: "100%",

      maxWidth: "760px",

      fontFamily: "Roboto, sans-serif",

      fontWeight: 800,

      fontSize: {
        xs: "30px",
        sm: "34px",
        md: "36px",
      },

      lineHeight: {
        xs: "40px",
        sm: "48px",
        md: "54px",
      },

      color: "rgba(20,112,175,0.87)",

      textAlign: "center",

      mb: {
        xs: "14px",
        md: "18px",
      },

      overflowWrap: "break-word",
    }}
  >
    The Hardest Step Is Starting
  </Typography>

  {/* DESCRIPTION */}
  <Typography
    sx={{
      width: "100%",

      maxWidth: {
        xs: "100%",
        md: "620px",
      },

      fontFamily: "Roboto, sans-serif",

      fontWeight: 400,

      fontSize: {
        xs: "14px",
        md: "18px",
      },

      lineHeight: {
        xs: "24px",
        md: "32px",
      },

      color: "#3F3F3F",

      textAlign: "center",

      mb: {
        xs: "24px",
        md: "34px",
      },

      overflowWrap: "break-word",
    }}
  >
    Your session has been successfully reserved, and your
    mental fitness expert will connect with you at your
    selected time. Until then, take deep breathes.
  </Typography>

  {/* BUTTON */}
  <Button
    variant="contained"
    onClick={() => navigate("/")}
    sx={{
      backgroundColor: "#1470AF",

      color: "#ffffff",

      width: {
        xs: "220px",
        md: "258px",
      },

      height: {
        xs: "44px",
        md: "48px",
      },

      borderRadius: "4px",

      boxShadow:
        "0px 4px 12px rgba(20, 112, 175, 0.35)",

      fontWeight: 700,

      fontSize: {
        xs: "13px",
        md: "14px",
      },

      textTransform: "uppercase",

      "&:hover": {
        backgroundColor: "#10598c",

        boxShadow:
          "0px 4px 12px rgba(20, 112, 175, 0.35)",
      },
    }}
  >
    HOME
  </Button>
</Box>


    ) : (
      <Box
        component="form"
        onSubmit={handlePreSubmitCheck}
        noValidate
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          display="flex"
          alignItems="flex-start"
          mb={4}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              display: { xs: "none", md: "inline-flex" },

              mr: 2,

              mt: 0.5,

              width: "42px",

              height: "42px",

              color: "#fff",

              bgcolor: "#1470af",

              "&:hover": {
                bgcolor: "#1575b5",

                color: "#fff",

                transform: "translateX(-3px)",
              },
            }}
          >
            <GoArrowLeft />
          </IconButton>

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  md: "28px",
                },

                fontWeight: 700,

                lineHeight: 1.15,

                color: "#1470af",
              }}
            >
              Lets Discuss It Over A Free
              Consultation
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              placeholder="John Doe"
              required
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
              type="email"
              placeholder="example@mail.com"
              required
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Select Date"
              type="date"
              required
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: tomorrowStr }}
              value={consultDate}
              onChange={handleDateChange}
              error={!!errors.consultDate}
              helperText={errors.consultDate}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Select Time"
              type="time"
              required
              InputLabelProps={{ shrink: true }}
              value={consultTime}
              onChange={handleTimeChange}
              error={!!errors.consultTime}
              helperText={errors.consultTime}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="caption"
              sx={{
                mb: 0.8,

                display: "block",

                fontWeight: 700,

                color: "text.secondary",
              }}
            >
              YOUR TIME ZONE
            </Typography>

            <TimezoneSelect
              value={selectedTimeZone}
              onChange={setSelectedTimeZone}
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "56px",
                  borderRadius: "4px",
                  borderColor: "rgba(0, 0, 0, 0.23)",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "rgba(0,0,0,0.87)",
                  },
                }),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="caption"
              sx={{
                mb: 0.8,

                display: "block",

                fontWeight: 700,

                color: errors.phone
                  ? "#d32f2f"
                  : "text.secondary",
              }}
            >
              PHONE NUMBER
            </Typography>

            <PhoneInputWrapper error={!!errors.phone}>
              <PhoneInput
                country="us"
                value={phoneValue}
                onChange={(value, data) => {
                  setPhoneValue(value);

                  setCountryCode(data.dialCode);

                  setCurrentCountryIso(data.countryCode);

                  const phoneValidationError =
                    validatePhone(
                      value,
                      data.countryCode
                    );

                  setErrors((prev) => ({
                    ...prev,
                    phone: phoneValidationError,
                  }));
                }}
                enableSearch={true}
                containerClass="react-tel-input"
                inputClass="form-control"
              />
            </PhoneInputWrapper>

            {errors.phone && (
              <FormHelperText error sx={{ ml: 1 }}>
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

              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              sx={{
                backgroundColor: "#1470AF",

                color: "#ffffff",

                width: "160px",

                height: "44px",

                borderRadius: "4px",

                boxShadow:
                  "0px 4px 12px rgba(20, 112, 175, 0.35)",

                fontWeight: 700,

                fontSize: "15px",

                textTransform: "uppercase",

                "&:hover": {
                  backgroundColor: "#10598c",
                },
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{ color: "#fff" }}
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

              bgcolor: "#ffebee",

              p: 1,

              borderRadius: 1,
            }}
          >
            {errors.error}
          </Typography>
        )}
      </Box>
    )}
  </Paper>
</Container>

      {/* Confirmation Modal Render */}
      <ConfirmationModal
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleFinalApiSubmit}
        loading={loading}
      />
    </Box>
  );
}

export default FreeConsultanceForm;
