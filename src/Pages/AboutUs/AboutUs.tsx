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
            In an age of constant stimulation, our attention has become the most fragmented resource on the planet. People today know how to train their bodies, grow their wealth, and build their careers—but very few have ever been taught how to train the mind itself. At Royal Mindfulness, we believe that a healthy, strong, and disciplined mind is not a luxury; it is a necessity. Our purpose is to help people train their minds every day, just as they would train their bodies, and to reintroduce the ancient art of mental fitness into the modern world.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Royal Mindfulness was founded on a timeless realization: peace alone is not enough. A calm mind is valuable, but a trained mind is invincible. Most people today seek relaxation, but what they truly need is mental strength—the ability to remain steady in chaos, focused in distraction, and composed under pressure. That strength cannot be borrowed or learned in theory; it has to be trained through consistent practice. This is what we call <Highlight>Mental Fitness Training.</Highlight>
          </Typography>


          <Typography variant="body1" sx={styles.mainText}>
           Our system draws its roots from the ancient path of Raja Yoga—the royal path of self-mastery.<Highlight> Raja Yoga</Highlight> is not about rituals or dogma; it is a psychology of awareness, concentration, and control over one’s thoughts and emotions. For centuries, these teachings trained monks, warriors, and leaders to stay balanced amidst duty and discipline. Royal Mindfulness brings those same principles into a modern structure, accessible to anyone who wishes to live with clarity, power, and peace.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            We do not offer therapy or counseling in the traditional sense. Instead, we offer <Highlight>training</Highlight>-a training—a daily mental gym for awareness and emotional discipline. When you join Royal Mindfulness, you are paired with your own Mental Fitness Trainer—a trained professional who guides you through structured mental exercises, reflective discussions, and practical applications that enhance your day-to-day living. The purpose is not just to help you “feel better,” but to train you to become better—to strengthen the mental muscles that create resilience, focus, and confidence.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
          Every training is designed around your personal goals, whether that is to improve performance at work, build better relationships, overcome emotional reactivity, or develop calm consistency in life. Our trainers use techniques inspired by traditional Raja Yoga methods—such as <Highlight>SWAN meditation</Highlight>, self-awareness journaling, and mindful self-observation—but the process is deeply practical and suited for modern challenges. We measure progress not by how long you can sit still, but by how calm and conscious you can remain when life becomes unpredictable.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            The word “Royal” in our name signifies sovereignty—the power to rule one’s own mind. We believe that the mind is like a kingdom. Thoughts, emotions, and habits are its citizens. When awareness is weak, these citizens rebel—emotions take over, impulses dominate, and stress becomes the ruler. But when awareness is strong and disciplined, the mind functions in harmony. That is what we mean by a Royal Mind—a mind that rules, not one that reacts.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Our mission is to bring this royal state of mind to people across the world—especially to the West, where mindfulness has often been reduced to a relaxation technique. We are here to reintroduce it as what it truly is: a <Highlight>system of mental training.</Highlight>Our vision is to make mental fitness as mainstream as physical fitness. Just as you hire a gym trainer to build a strong body, Royal Mindfulness allows you to hire a Mental Fitness Trainer to build a strong mind.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            A trained mind is not fragile. It does not collapse under stress or fear. It knows how to observe emotion without drowning in it. It can work long hours without burning out, love deeply without losing itself, and stay patient while pursuing great ambitions. This is what we mean by mental fitness—not just freedom from anxiety or distraction, but mastery over attention, awareness, and emotional energy.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Our approach is rooted in discipline and consistency. The training process begins with a <Highlight>free consultation</Highlight>, where we understand your goals and mental state. Based on that, you are paired with a trainer who works with you daily through live sessions. These sessions combine awareness practices, guided meditations, and reflective exercises tailored to your needs. Over time, you begin to feel a shift—a quiet strength that stays with you throughout the day, a focus that doesn’t waver easily, and a sense of balance that no external event can easily disturb.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            Royal Mindfulness is for everyone who wants to live more consciously and perform at their best. Entrepreneurs and professionals train with us to stay strategic and calm under pressure. Athletes and artists train to master focus and emotional control. Many individuals come simply to build better relationships, manage stress, or change long-standing habits. But regardless of background, the goal remains the same—to help you reclaim authority over your own mind.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            What truly sets Royal Mindfulness apart is our belief that <Highlight>training
            </Highlight> is the future of mental wellness. While therapy helps you heal, training helps you grow. Therapy helps you recover from the past; training helps you build for the future. At Royal Mindfulness, we integrate both healing and training so that you not only overcome your struggles but also develop the strength to face life with dignity and confidence.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            We are building more than a platform—we are building a movement. A movement that believes mental health is not just the absence of illness, but the presence of mental discipline. A movement that redefines mindfulness not as a momentary calm, but as a lifelong skill of awareness in action. We envision a future where every individual has access to a mental trainer, every company promotes mental fitness, and every home nurtures awareness as naturally as education or exercise.
          </Typography>

          <Typography variant="body1" sx={styles.mainText}>
            The heart of Royal Mindfulness lies in our promise: to remain authentic, structured, and rooted in both science and tradition. We are here to make ancient wisdom accessible without diluting its depth. We are here to show that awareness, when trained properly, becomes the greatest force of success and serenity in life. And we are here to remind you that stillness is not weakness—it is power mastered.
          </Typography>
          
          <Typography variant="body1" sx={styles.mainText}>
            Because when your mind is strong, you can handle anything.
            When your awareness is sharp, you can see clearly through any situation.
            And when your spirit is trained to remain steady in motion, that is when you become truly Royal.
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


          <Highlight>“Train your mind. Rule your life. That’s the Royal way.”</Highlight>

          
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
