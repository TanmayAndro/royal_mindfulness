import { Typography, Box, Container, styled } from "@mui/material";
import Img from "../../Assests/p1.js.webp";

export const AboutUs = () => {
  return (
    <MainWrapper>
      <Container maxWidth="lg" style={{paddingTop:20}}>
        {/* Hero Section */}
        <HeroSection>
          <Overlay />
          <HeroImage src={Img} alt="Royal Mindfulness" />
          <MainHeading>About Us</MainHeading>
        </HeroSection>

        {/* Content Section */}
        <ContentWrapper>

          <Typography variant="body1" sx={styles.mainText}>
           At Royalmindfulness, we believe that our mind also need a daily training for fitness to deal withemotional, relationship issues, anxiety, fatigue, stress, overthinking, lack of sleep, focus and procrastination similar to our body. We can't make our body fit and relaxing by working out once in a week or a month, same our brain need a routine workout to deal with our day to day life problems.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Our programs are designed to help people manage stress, reduce overthinking, and improve clarity through daily or biweekly practices. We focus on training the mind step by step through relaxation techniques, awareness practices, response training, and habit building. And it is completely custom based.
          </Typography>


          <Typography variant="body1" sx={styles.mainText}>
           We work with individuals from different walks of life, including athletes, entrepreneurs, and people dealing with daily work stress, ADHD, low energy, lack of motivation, burnout helping them perform better and feel more in control of their thoughts and emotions.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            What makes our approach different is consistency. Instead of weekly or irregular sessions, we focus on frequent guided training so that progress becomes natural and sustainable, not dependent on motivation alone.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
          Every session is guided by trained mental health experts, ensuring you are supported consistently.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            This is not quick solution but this trains your mind to perform, adapt, and stay strong, every single day
          </Typography>
        </ContentWrapper>
      </Container>
    </MainWrapper>
  );
};

/* ---------------------------- Styled Components ---------------------------- */

const MainWrapper = styled(Box)({
  background: "linear-gradient(180deg, #fdfcfb 0%, #e2d1c3 100%)",
  color: "#333",
  minHeight: "100vh",
  paddingBottom: "4rem",
  overflow: "hidden",
});

const HeroSection = styled(Box)({
  position: "relative",
  width: "100%",
  height: "75vh",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
  marginBottom: "4rem",
});

const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
  zIndex: 1,
});

const HeroImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "brightness(0.8)",
  transform: "scale(1.02)",
  transition: "transform 3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const MainHeading = styled(Typography)({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "4rem",
  color: "#fff",
  fontWeight: 700,
  letterSpacing: "2px",
  textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "2.8rem",
  },
  "@media (max-width:500px)": {
    fontSize: "2rem",
  },
});

const ContentWrapper = styled(Box)({
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: "3rem 2rem",
  borderRadius: "20px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
  lineHeight: 1.8,
  fontSize: "1.15rem",
  textAlign: "justify",
  "@media (max-width:900px)": {
    padding: "2rem 1rem",
  },
});

const Highlight = styled("span")({
  fontWeight: 600,
  color: "#11100fff",
});



const styles = {
  mainText: {
    marginTop: "1.5rem",
    color: "#333",
    lineHeight: 1.9,
    fontSize: "18px",
    "@media (max-width:900px)": {
      fontSize: "1rem",
    },
  },
};
