import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css"; 
import { GoArrowLeft } from "react-icons/go";
import TimezoneSelect from "react-timezone-select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Country-to-Country structure check karne ke liye accurate library
import { parsePhoneNumberFromString } from "libphonenumber-js";

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
  FormHelperText
} from "@mui/material";

dayjs.extend(utc);
dayjs.extend(timezone);

const PhoneInputWrapper = styled(Box)(({ theme, error }) => ({
  width: "100%",
  "& .react-tel-input": {
    fontFamily: theme.typography.fontFamily,
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
    "& .country-list": {
      borderRadius: "8px",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
      border: "1px solid #ddd",
      marginTop: "2px",
      width: "300px", 
      zIndex: 1500,
      "& .country": {
        padding: "12px 16px !important", 
        "& .country-name": {
            fontSize: "14px",
            marginLeft: "27px",
        },
        "&:hover": {
          backgroundColor: "#f5f5f5",
        }
      },
      "& .search": {
        padding: "10px",
        "& .search-box": {
          width: "90%",
          marginLeft: "0",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }
      }
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
  
  // ✅ FIXED: properly defined Timezone state variables to clear eslint no-undef
  const [selectedTimeZone, setSelectedTimeZone] = useState("America/New_York"); 
  
  const [consultDate, setConsultDate] = useState("");
  const [consultTime, setConsultTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const tomorrowStr = dayjs().add(1, 'day').format('YYYY-MM-DD');

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
      if (stored.date && dayjs(stored.date).isAfter(dayjs(), 'day')) {
        setConsultDate(stored.date);
      }
      if (stored.time) setConsultTime(stored.time);
    }
  }, []);

  // Validation functions
  const validateName = (val) => {
    if (!val.trim()) return "Full Name is required.";
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(val)) return "Name can only contain letters and spaces (Min 2 chars).";
    return "";
  };

  const validateEmail = (val) => {
    if (!val.trim()) return "Email Address is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) return "Please enter a valid email format (e.g. user@domain.com).";
    return "";
  };

  const validateDate = (val) => {
    if (!val) return "Please select a consultation date.";
    if (!dayjs(val).isAfter(dayjs(), 'day')) return "Consultation date must be a future date.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; 

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(consultDate);
    const phoneErr = validatePhone(phoneValue, currentCountryIso);

    if (nameErr || emailErr || dateErr || phoneErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        consultDate: dateErr,
        phone: phoneErr
      });
      return; 
    }

    const url = process.env.REACT_APP_FREECONSULTATION_URL || process.env.REACT_APP_BASE_URL;
    if (!url) {
      setErrors((prev) => ({ ...prev, error: "Configuration Error: API URL is missing or not working." }));
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

    try {
      const response = await fetch(`${url}/free_consultation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.removeItem("freeConsultanceData");
      } else {
        const errorData = await response.json();
        setErrors((prev) => ({ ...prev, error: errorData.message || "Something went wrong. Please try again." }));
      }
    } catch (err) {
      setErrors((prev) => ({ ...prev, error: "Unable to connect to server. Please check your internet." }));
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
        alignItems: "center", 
        pt: { xs: "30%", sm: "15%", md: "8%" }, 
        pb: "40px", 
        bgcolor: "#f0f2f5" 
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3, textAlign: 'left' }}>
          {submitted ? (
            <Box textAlign="center" py={4}>
              <Typography variant="h4" fontWeight={700} color="#1470af" gutterBottom>
               Thanks for submitting!
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
               Our team will contact you soon..
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button 
                  variant="contained" 
                  onClick={() => navigate("/")} 
                  sx={{ 
                    bgcolor: "#1470af", color: "#ffff", px: 6, py: 1,
                    width: "fit-content", minWidth: "150px", borderRadius: "20px",
                    boxShadow: 'none', fontWeight: 600, textTransform: 'none',
                    "&:hover": { bgcolor: "#074f80", boxShadow: 'none' } 
                  }}
                >
                  Refresh
                </Button>
              </Box>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              
              <Box display="flex" alignItems="flex-start" mb={4}>
                <IconButton 
                  onClick={() => navigate(-1)} 
                  sx={{ 
                    mr: 2, 
                    mt: 0.5, 
                    bgcolor: '#f5f5f5', 
                    color: '#000', 
                    transition: '0.3s',
                    "&:hover": { 
                      bgcolor: '#1470af', 
                      color: '#fff', 
                      transform: 'translateX(-3px)' 
                    } 
                  }}
                >
                  <GoArrowLeft />
                </IconButton>
                
                <Box display="flex" flexDirection="column" gap={0.5}>
                  <Typography variant="h5" fontWeight={800} sx={{ lineHeight: 1.2 }}>
                    Let's take the next step together.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    (Share your details so we can schedule your free consultation.)
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={2.5}>
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

                <Grid item xs={6}>
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

                <Grid item xs={6}>
                  <TextField 
                    fullWidth 
                    label="Select Time" 
                    type="time" 
                    required 
                    InputLabelProps={{ shrink: true }} 
                    value={consultTime} 
                    onChange={(e) => setConsultTime(e.target.value)} 
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ mb: 0.8, display: "block", fontWeight: 700, color: "text.secondary" }}>
                    YOUR TIME ZONE
                  </Typography>
                  <TimezoneSelect 
                    value={selectedTimeZone} 
                    onChange={setSelectedTimeZone} 
                    styles={{
                      control: (base) => ({
                        ...base, minHeight: "56px", borderRadius: "4px", borderColor: "rgba(0, 0, 0, 0.23)", boxShadow: "none",
                        "&:hover": { borderColor: "rgba(0,0,0,0.87)" }
                      }),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ mb: 0.8, display: "block", fontWeight: 700, color: errors.phone ? "#d32f2f" : "text.secondary" }}>
                    PHONE NUMBER
                  </Typography>
                  <PhoneInputWrapper error={!!errors.phone}>
                    <PhoneInput 
                      country="us" // Isse default drop-down mein America select hoga
                      value={phoneValue} 
                      onChange={(value, data) => {
                        setPhoneValue(value);
                        setCountryCode(data.dialCode);
                        setCurrentCountryIso(data.countryCode);
                        
                        const phoneValidationError = validatePhone(value, data.countryCode);
                        setErrors((prev) => ({ ...prev, phone: phoneValidationError }));
                      }}
                      enableSearch={true}
                      containerClass="react-tel-input"
                      inputClass="form-control"
                    />
                  </PhoneInputWrapper>
                  {errors.phone && <FormHelperText error sx={{ ml: 1 }}>{errors.phone}</FormHelperText>}
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}> 
                  <Button 
                    type="submit" 
                    fullWidth 
                    disabled={loading} 
                    variant="contained" 
                    sx={{ 
                      bgcolor: "#1470af", 
                      py: 1.8, 
                      fontWeight: 700, 
                      fontSize: "1rem", 
                      boxShadow: '0 4px 12px rgba(20, 112, 175, 0.3)', 
                      "&:hover": { bgcolor: "#0e5a8d" }, 
                    }}
                  >
                    {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : "Submit"}
                  </Button>
                </Grid>
              </Grid>

              {errors.error && (
                <Typography color="error" variant="body2" sx={{ mt: 2, textAlign: "center", bgcolor: '#ffebee', p: 1, borderRadius: 1 }}>
                  {errors.error}
                </Typography>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default FreeConsultanceForm;