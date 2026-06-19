import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import React, { useEffect, lazy, Suspense } from "react";
import Header from "./Components/Header";

import "./fonts.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import ProtectedRoute from "./API/protectedRoute";

import ScrollToTop from "./Components/ScrollToTop";
import { initGA, logPageView } from "./analitics/analytics";
import ReactGA from "react-ga4";

import { Box } from "@mui/material";
import { AuthModalProvider } from "./context/AuthModalContext";

import Royal from "./Pages/Test1/Royal";
// import WhatsAppButton from "./context/WhatsAppButton";
const Footer = lazy(() => import( "./Components/test1/Footer"));
const Login = lazy(() => import("./Pages/Login/login"));
const Register = lazy(() => import("./Pages/Register/Register"));

const QuizLanding = lazy(() => import("./Pages/Quiz/QuizLanding"));
const QuizPage = lazy(() => import("./Pages/Quiz/QuizPage"));
const UserForm = lazy(() => import("./Pages/Quiz/UserForm"));
const MetntalQuiz = lazy(() => import("./Pages/Quiz/MetntalQuiz"));

const PricingPlans = lazy(() => import("./Pages/Pricing_plans/PricingPlans"));

const FAQ = lazy(() => import("./Pages/FAQ/faq"));

const TermsCondition = lazy(
  () => import("./Pages/Terms&Conditon/Terms&Condition"),
);

const PrivacyPolicyPage = lazy(
  () => import("./Pages/PrivacyPolicy/PrivacyPolicyPage"),
);

const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));

const NotFound = lazy(() => import("./Pages/NotFound/NoteFound"));

const ContactUs = lazy(() => import("./Pages/Contact/ContactUs"));

const AboutUs = lazy(() =>
  import("./Pages/AboutUs/AboutUs").then((module) => ({
    default: module.AboutUs,
  })),
);

const Overview = lazy(() => import("./Pages/Overview/Overview"));

const Purpose = lazy(() => import("./Pages/Purpose/Purpose"));

const ThankYouPage = lazy(() => import("./Pages/Payments/ThankYouPage"));

const PaymentFailedPage = lazy(
  () => import("./Pages/Payments/PaymentFailedPage"),
);

const Blogs = lazy(() =>
  import("./Pages/Blogs/Blogs").then((module) => ({
    default: module.Blogs,
  })),
);

const Refund = lazy(() =>
  import("./Pages/Refund/Refund").then((module) => ({
    default: module.Refund,
  })),
);

const Webinar = lazy(() =>
  import("./Pages/Webinar/Webinar").then((module) => ({
    default: module.Webinar,
  })),
);

const ResetPassword = lazy(() =>
  import("./Pages/Login/ResetPassword").then((module) => ({
    default: module.ResetPassword,
  })),
);

const Quiz = lazy(() => import("./Pages/Test1/Quiz/QuizPage"));
const BookNow = lazy(() => import("./Pages/BookNow/BookNow"));

const WhatsAppButton = lazy(() => import("./context/WhatsAppButton"));
// const Royal = lazy(() => import("./Pages/Test1/Royal"));
const Session = lazy(() => import("./Pages/Session/Session"));
const Dashboard = lazy(() => import("./Pages/Dashoard/Dashboard"));
const JitsiComponent = lazy(() => import("./Components/Jitsimeeting"));
const FreeConsultanceForm = lazy(
  () => import("./Pages/FreeConsultance/FreeConsultanceForm"),
);
const ConsultationPage = lazy(
  () => import("./Pages/Test1/TalkSpace/ConsultationPage"),
);
const TalkSpace = lazy(() => import("./Pages/Test1/TalkSpace/TalkSpace"));
const Payment = lazy(() =>
  import("./Pages/Payments/Payment").then((module) => ({
    default: module.Payment,
  })),
);

function App() {
  // Initialize Google Analytics + Google Ads
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        window.location.reload();
      },
      60 * 60 * 1000,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <AuthModalProvider>
          <ScrollToTop />
          <GAListener />
          <Layout />
        </AuthModalProvider>
      </Router>

      {/* Global Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
      <WhatsAppButton />
    </div>
  );
}

export default App;

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/meeting", "/", "", "/quiz_questions"].includes(
    location.pathname,
  );
  // Hides for Jitsi page
  // const hideFooter = location.pathname === "/free_consultation";
  const hideFooter = [
    "/free_consultation",
    "/consultation_question",
    "/consulation",
    "/book-now",
  ].includes(location.pathname); //Hide only footer page

  return (
    <Box>
      {!hideHeaderFooter && <Header />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/royalminfullness-test" element={<LandingPage />} />
          <Route path="/" element={<Royal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz_questions" element={<Quiz />} />

          {/* {<Route
          path="/session/:id"
          element={<ProtectedRoute element={Session} />}
        />} */}

          {/* <Route path="/session/:id"  element={<Session />} /> */}

          <Route
            path="/session/:id"
            element={<ProtectedRoute element={Session} />}
          />
          <Route
            path="/book-now"
            element={<ProtectedRoute element={BookNow} />}
          />

          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz-landing" element={<QuizLanding />} />
          <Route path="/user-form" element={<UserForm />} />

          <Route
            path="/quizz"
            element={<ProtectedRoute element={MetntalQuiz} />}
          />

          <Route
            path="/payment"
            element={<ProtectedRoute element={Payment} />}
          />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/refund-cancellation" element={<Refund />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/term-condition" element={<TermsCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/dashboard/:id"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/meeting"
            element={<ProtectedRoute element={JitsiComponent} />}
          />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/success" element={<ThankYouPage />} />
          <Route path="/error" element={<PaymentFailedPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/free_consultation" element={<FreeConsultanceForm />} />

          <Route path="/consultation_question" element={<TalkSpace />} />
          <Route path="/consulation" element={<ConsultationPage />} />
        </Routes>
      </Suspense>
      {!hideHeaderFooter && !hideFooter && <Footer />}
    </Box>
  );
};

const GAListener = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Tracking page view:", location.pathname);
  }, [location]);

  return null;
};
