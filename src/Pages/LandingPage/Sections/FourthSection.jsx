import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import checkedIcon from "../../../Assests/checkedIcon.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import leftImg from "../../../Assests/twoSectionsLeft.png";
import rightImg2 from "../../../Assests/twoSectionsRight.png";
import whatBG from "../../../Assests/whatWeOffer.png";
import styled from "styled-components";

export const FourthSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#8EB6DC",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        position: "relative",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "1.5rem", sm: "1rem 3rem 1rem 3rem" },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: { xs: "32px", sm: "46px" },
            fontWeight: "700",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          What we offer
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px" },
            fontWeight: "400",
            padding: { xs: "1.5rem", sm: "3rem" },
            textAlign: "justify",
          }}
        >
          We are introducing two distinctive pathways to enhance your
          well-being. Our affordable and online daily relaxation classes provide
          a convenient oasis of tranquility in your everyday life, ensuring that
          mental wellness is accessible to all. Additionally, immerse yourself
          in a transformative experience with our three-week Raja Yoga course.
          In this course, we simplify the profound teachings of Raja Yoga,
          guiding you through meditation, breathing exercises, and mindfulness
          practices to achieve inner peace and spiritual harmony. Whether you
          seek daily relaxation or a deeper exploration of holistic well-being,
          Royal Mindfulness is your companion on the journey to a balanced and
          fulfilling life. Join us in cultivating a serene mind and a harmonious
          spirit.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            display: "flex",
            height: { xs: "250px", sm: "400px" },
            position: "relative",
            padding: { xs: "1.5rem", sm: "3rem 3rem 0rem 3rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={leftImg}
            alt="Daily Relaxation"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            padding: { xs: "1.5rem", sm: "3rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "baseline" },
            flexDirection: { xs: "column" },
          }}
        >
          <Typography
            variant="h4"
            fontSize={{ xs: "28px", sm: "50px" }}
            color="white"
            fontWeight="bold"
            gutterBottom
          >
            Daily Relaxation
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontStyle: "italic",
              marginBottom: "1rem",
              fontSize: "25px",
            }}
          >
            You Need Daily Relaxation sessions if:
          </Typography>
          <List dense>
            {[
              "You have Stressful work routine.",
              "To improve productivity in work.",
              "You suffer anxiety.",
              "Sleepless Nights (Insomnia).",
              "Continuous fatigue.",
              "Repetitive panicking.",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <img
                    src={checkedIcon}
                    alt="Checked Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#1470AF",
                    }}
                  />
                </ListItemIcon>
                <StyledListItemText primary={text} />
                {/* <ListItemText
                  primary={text}
                  sx={{ color: "white", fontSize: "1.5rem" }}
                /> */}
              </ListItem>
            ))}
          </List>
          <Button
            sx={{
              backgroundColor: "#1470AF", // Example color
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "0.5rem 1rem",
              marginTop: "2rem",
              width: "200px",
              "&:hover": {
                backgroundColor: "#1470AF",
              },
            }}
            onClick={() => {
              window.location.href =
                "https://www.royalmindfulness.com/service-page/antar-mouna-inner-silence";
            }}
          >
            Book now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            padding: { xs: "1.5rem", sm: "3rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column" },
          }}
        >
          <Typography
            variant="h4"
            fontSize={{ xs: "28px", sm: "50px" }}
            color="white"
            fontWeight="bold"
            gutterBottom
          >
            Antra Mouna
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontStyle: "italic",
              marginBottom: "1rem",
              fontSize: "25px",
            }}
          >
            You Need Daily Relaxation sessions if:
          </Typography>
          <List dense sx={{ textAlign: "center" }}>
            {[
              "Excessive thoughts.",
              "Having fear/Insecurities.",
              "Mental Turmoil.",
              "Panic attacks.",
              "To improve mindfulness.",
              "To improve creativity.",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <img
                    src={checkedIcon}
                    alt="Checked Icon"
                    style={{ width: "24px", height: "24px", color: "#F1C40F" }}
                  />
                </ListItemIcon>
                <StyledListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Button
            sx={{
              backgroundColor: "#1470AF", // Example color
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "0.5rem 1rem",
              marginTop: "2rem",
              width: "200px",
              "&:hover": {
                backgroundColor: "#1470AF",
              },
            }}
            onClick={() => {
              window.location.href =
                "https://www.royalmindfulness.com/service-page/daily-yogic-relaxation";
            }}
          >
            Book now
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            display: "flex",
            height: { xs: "250px", sm: "450px" },
            position: "relative",
            padding: { xs: "1.5rem", sm: "3rem 3rem 0rem 3rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={rightImg2}
            alt="Antra Mouna"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "22px",
    color: "#ffffff",
  },
}));
