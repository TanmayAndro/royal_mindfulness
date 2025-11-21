import { Typography, Grid, Box, Container, styled } from "@mui/material";
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
            In an age of constant stimulation, our attention has become the most
            fragmented resource on the planet. People today know how to train
            their bodies, grow their wealth, and build their careers—but very
            few have ever been taught how to train the mind itself. At{" "}
            <Highlight>Royal Mindfulness</Highlight>, we believe that a healthy,
            strong, and disciplined mind is not a luxury; it is a necessity. Our
            purpose is to help people train their minds every day, just as they
            would train their bodies, and to reintroduce the ancient art of
            mental fitness into the modern world.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Royal Mindfulness was founded on a timeless realization: peace alone
            is not enough. A calm mind is valuable, but a trained mind is
            invincible...
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            We are building more than a platform—we are building a movement. A
            movement that believes mental health is not just the absence of
            illness, but the presence of mental discipline...
          </Typography>


            “Train your mind. Rule your life. That’s the Royal way.”
          
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
  color: "#7b3f00",
});

const QuoteBlock = styled("blockquote")({
  fontStyle: "italic",
  fontSize: "1.5rem",
  marginTop: "3rem",
  textAlign: "center",
  color: "#444",
  borderLeft: "4px solid #7b3f00",
  paddingLeft: "1rem",
  fontFamily: "Georgia, serif",
});

const styles = {
  mainText: {
    marginTop: "1.5rem",
    color: "#333",
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.9,
    fontSize: "1.15rem",
    "@media (max-width:900px)": {
      fontSize: "1rem",
    },
  },
};
