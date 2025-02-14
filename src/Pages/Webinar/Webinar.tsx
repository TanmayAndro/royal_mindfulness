import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  Modal,
} from "@mui/material";
import signUp from "../../Assests/signUpImg.png";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Webinar = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    interested_in: "",
    anything_to_say: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://be-royal-mindfulness.onrender.com/customer_supports",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        // Show success message
        // toast.success("We've recieved your request we'll get back to you soon");

        setOpenModal(true);

        // Reset the form
        setFormData({
          full_name: "",
          phone_number: "",
          email: "",
          interested_in: "",
          anything_to_say: "",
        });
      }
    } catch (error: any) {
      // Show error message
      toast.error(
        error.response?.data?.message || "Failed to submit the form. Try again!"
      );
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/");
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ToastContainer />
      <Grid container>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: { xs: "1rem", md: "2rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                fontWeight: "700",
                color: "#1470AF",
                fontFamily: "Instrument sans",
              }}
            >
              Book a Free Webinar
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "600",
                color: "black",
                fontFamily: "Instrument sans",
                textAlign: "center",
              }}
            >
              {""}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Full Name and Phone Number */}
                <Grid item xs={12} sm={6}>
                  <Typography>Full Name</Typography>
                  <TextField
                    required
                    id="full_name"
                    name="full_name"
                    autoComplete="family-name"
                    variant="outlined"
                    value={formData.full_name}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Phone Number</Typography>
                  <TextField
                    required
                    id="phone_number"
                    name="phone_number"
                    autoComplete="tel"
                    variant="outlined"
                    value={formData.phone_number}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",

                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>

                {/* Email and Interest */}
                <Grid item xs={12} sm={6}>
                  <Typography>Email</Typography>
                  <TextField
                    required
                    id="email"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",

                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>What are you interested in?</Typography>
                  <TextField
                    required
                    id="interested_in"
                    name="interested_in"
                    value={formData.interested_in}
                    onChange={handleChange}
                    autoComplete="intrestedIn"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",

                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                  {/* <Select
                    fullWidth
                    id="interested_in"
                    name="interested_in"
                    value={formData.interested_in}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",

                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  >
                    <MenuItem value="Refund Amount">Webinar</MenuItem>
                  </Select> */}
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <Typography>Message</Typography>
                  <TextField
                    fullWidth
                    name="anything_to_say"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.anything_to_say}
                    onChange={handleChange}
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#EAEAEE",

                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: "5rem",
                      borderRadius: "8px",
                      width: "100%",
                      backgroundColor: "#1470AF",
                      "&:hover": {
                        backgroundColor: "#1470AF",
                        "& .MuiInputLabel-root": {
                          position: "static",
                          transform: "none",
                          color: "#000",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "transparent",
                          },
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "1rem", md: "0" },
            }}
          >
            <img
              src={signUp}
              alt="Sign Up"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Success Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "500px" },
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="success-modal-title" variant="h6" component="h2">
            Thank You!
          </Typography>
          <Typography id="success-modal-description" sx={{ mt: 2 }}>
            Your submission has been received. We appreciate your time and will
            share you the meeting link at the given emailId. In the meantime,
            feel free to explore more about what we offer.
          </Typography>
          <Typography sx={{ mt: 2 }}>Have a great day!</Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              mt: 3,
              textTransform: "none",
              fontWeight: "bold",
              width: { xs: "100%", sm: "150px" },
              height: "48px",
              backgroundColor: "#1470AF",
              borderRadius: "34px",
              "&:hover": { backgroundColor: "#1470AF" },
            }}
          >
            Okay
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
