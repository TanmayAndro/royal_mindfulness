import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import TrainerCard from "./Sections/Trainer";
import { SignupCard } from "./Sections/SignupCard";
import Testimonials from "./Sections/Testimonials";
import { FeedbackSection } from "./Sections/FeedbackSection";
import SecondSection from "./Sections/SecondSection";
import { ThirdSection } from "./Sections/ThirdSection";
import { FourthSection } from "./Sections/FourthSection";
import { SixthSection } from "./Sections/SixthSection";
import { FifthSection } from "./Sections/FifthSection";
import { SeventhSection } from "./Sections/SeventhSection";
import QuizLanding from "../Quiz/QuizLanding";
import { Hero } from "./Sections/Hero";
import SEO from "../../Components/Seo";
import { Offerings } from "./Sections/Offerings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ReactGA from "react-ga";
import { Comparison } from "./Sections/Comparison";
import FAQSection from "./Sections/FAQSection";
import Questionnaire from "./Sections/Questionnaire";
import { HowItWorks } from "./Sections/HowItWorks";
import axios from "axios";
import { WhoisTakingServices } from "./Sections/WhoisTakingServices";
import MentalTrainingSelector from "./Sections/Questionnaire";
import WaveDivider from "./WaveDivider";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null,
  });

  // Show modal only if user has NOT submitted before
  useEffect(() => {
    const hasProvidedLocation = localStorage.getItem("hasProvidedLocation");

    if (!hasProvidedLocation) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    // Store flag so popup never shows again
    localStorage.setItem("hasProvidedLocation", "true");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat:any = position.coords.latitude;
          const lng:any = position.coords.longitude;
          setUserLocation({ lat, lng });
          console.log("User Location:", { lat, lng });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }

    setIsModalOpen(false);
  };

  const handleLocationChange = (event:any) => {
    setLocation(event.target.value);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 180px)" }}>
      <SEO
        title="Home Page | Royal MindFulness"
        description="Home page where user can see about Our website"
        keywords={[
          "Best Raja Yoga classes online in US",
          "Raja Yoga online classes",
          "Learn Antar Mouna meditation",
          "Learn Antar Mouna techniques for mindfulness",
          "Yoga for reducing stress and anxiety online",
        ]}
        image="https://example.com/session-page-image.jpg"
        url="https://www.royalmindfulness.com"
      />

      <ToastContainer />
      <Slider />

      <WhoisTakingServices />
      <HowItWorks />
      <MentalTrainingSelector />
      <Comparison />
      <FAQSection />
      <SecondSection />
      <TrainerCard />
      <QuizLanding />
      <SeventhSection />
      <SignupCard />
      <FeedbackSection />

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="location-modal-title"
        aria-describedby="location-modal-description"
        disableAutoFocus
        disableEnforceFocus
        disableScrollLock
        BackdropProps={{
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 6,
            borderRadius: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              color: "text.secondary",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" gutterBottom>
            Help Us Serve You Better
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Please select your country so we can provide you with the best
            service.
          </Typography>

          <FormControl fullWidth>
            <Select
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              inputProps={{ "aria-label": "Select your location" }}
            >
              <MenuItem value="" disabled>
                Select your location
              </MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
              <MenuItem value="Italy">Italy</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleClose}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                width: { xs: "100%", sm: "150px" },
                height: "48px",
                color: "white",
                backgroundColor: "#1470AF",
                borderRadius: "34px",
                "&:hover": { backgroundColor: "#1470AF" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default LandingPage;
