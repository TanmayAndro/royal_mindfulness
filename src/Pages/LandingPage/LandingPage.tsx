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
import { Hero } from "./Sections/Hero";
import SEO from "../../Components/Seo";
import { Offerings } from "./Sections/Offerings";

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 180px)",
      }}
    >
      <SEO
        title="Landing Page | Royal MindFulness"
        description="Landing page where user can see about Out website"
        keywords={[
          "Best Raja Yoga classes online in US",
          "Raja Yoga online classes",
          "Learn Antar Mouna meditation",
          "Learn Antar Mouna techniques for mindfulness",
          "Yoga for reducing stress and anxiety online",
        ]}
        image="https://example.com/session-page-image.jpg"
        url="https://www.royalmindfulness.in"
      />
      {/* <Slider /> */}
      <Hero />

      {/*  Second Section */}
      <SecondSection />

      <Offerings />

      {/* Third Section */}
      <ThirdSection />

      {/* Fourth Section */}
      <FourthSection />

      {/* Fifth Section */}
      {/* <FifthSection /> */}

      {/* Sixth */}
      {/* <SixthSection /> */}

      {/* Eighth */}
      <TrainerCard />

      {/* Seventh */}
      <SeventhSection />

      {/*9 signup */}
      <SignupCard />

      {/* 10 Testimonials */}
      <Testimonials />

      {/* Feedback */}
      <FeedbackSection />
    </div>
  );
};

export default LandingPage;
