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

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 180px)",
      }}
    >
      <Slider />

      {/*  Second Section */}
      <SecondSection />

      {/* Third Section */}
      <ThirdSection />

      {/* Fourth Section */}
      <FourthSection />

      {/* Fifth Section */}
      <FifthSection />

      {/* Sixth */}
      <SixthSection />

      {/* Seventh */}
      <SeventhSection />

      {/* Eighth */}
      <TrainerCard />

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
