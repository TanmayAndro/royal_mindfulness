import { Typography, Box, Container, styled } from "@mui/material";
import AboutSection, { AboutData } from './AboutSection';
import WomanImage from "../../Assests/images/smiling-woman.png";
import FounderSection from './FounderSection';
import CTASection from './CTASection';
import CEOImage from "../../Assests/images/ceo.png"; 

const aboutData: AboutData[] = [
  {
    id: 1,
    title: "Our Mission",
    highlight: "",
    description: "To empower individuals with the mental fitness tools needed to navigate the complexities of modern life with resilience and clarity.",
    buttonText: "Book a free consultation",
    image: WomanImage, 
    isImageLeft: false, 
    backdropStyle: 'style-blue',
    note: "" 
  },
];

export const AboutUs = () => {
  return (
    <MainWrapper>
      {/* Main Structural Wrapper */}
      <Box component="main" sx={{ bgcolor: '#ffffff', width: '100%' }}>
          
          {/* --- ABOUT SECTION CONTAINER --- */}
          <Container 
            disableGutters 
            maxWidth={false} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              px: 0,
              width: '100%'
            }}
          >
            {aboutData.map((section) => (
              <AboutSection key={section.id} data={section} />
            ))}
          </Container>        

          {/* --- FOUNDER SECTION --- */}
          <FounderSection 
            image={CEOImage}
            name="Tanmay Agnihotri"
            designation="Founder & CEO"
            quote="With consistent training, the mind learns to serve you obediently."
            message={`I started this organization to help those who have been struggling with mental health issues for a long time. When I saw how poorly many mental health care techniques were designed, it became necessary for me to come up with more advanced mental fitness training - training that is more beneficial and practical than many current practices.

            I sincerely hope that our mental fitness trainings and programs serve you to your satisfaction and bring greater clarity, strength, and joy into your life.`}
          />
     
          {/* --- LIGHT GREY BACKGROUND INNER CONTENT CONTAINER --- */}
          <SectionThemeWrapper>
            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
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
                  This is not quick solution but this trains your mind to perform, adapt, and stay strong, every single day.
                </Typography>
              </ContentWrapper>
            </Container>
          </SectionThemeWrapper>
          
          {/* --- CTA SECTION --- */}
          <Box sx={{ mt: 0 }}> 
            <CTASection />
          </Box>
      </Box>
    </MainWrapper>
  );
};

/* ---------------------------- Styled Components ---------------------------- */

const MainWrapper = styled(Box)({
  backgroundColor: "#ffffff",
  minHeight: "100vh",
  overflow: "hidden",
});

// Clean Light Grey Wrapper to contain the white card elegantly
const SectionThemeWrapper = styled(Box)({
  width: "100%",
  backgroundColor: "#f9f9f9", // Crisp light grey background
  position: "relative",
});

const ContentWrapper = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "4rem 3.5rem",
  borderRadius: "20px",
  lineHeight: 1.8,
  fontSize: "1.15rem",
  textAlign: "justify",
  // Balanced, premium shadow to pop elegantly against the light grey background
  boxShadow: "0px 15px 45px rgba(0, 0, 0, 0.04), 0px 4px 12px rgba(20, 112, 175, 0.02)",
  border: "1px solid rgba(0, 0, 0, 0.03)",
  "@media (max-width:900px)": { 
    padding: "2.5rem 1.5rem",
    borderRadius: "16px",
    margin: "0 16px"
  },
});

const styles = {
  mainText: {
    marginTop: "1.6rem",
    color: "#3f3f3f", // Highly readable soft charcoal text
    lineHeight: 1.9,
    fontSize: "18px",
    "&:first-of-type": {
      marginTop: 0, 
    },
    "@media (max-width:900px)": { 
      fontSize: "1rem",
      lineHeight: 1.75 
    },
  },
};