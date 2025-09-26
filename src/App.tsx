// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import Header from "./Components/Header";
// import Login from "./Pages/Login/login";
// import Register from "./Pages/Register/Register";
// import Session from "./Pages/Session/Session";
// import PricingPlans from "./Pages/Pricing_plans/PricingPlans";
// import "./fonts.css";
// import Footer from "./Components/Footer";
// import FAQ from "./Pages/FAQ/faq";
// import ProtectedRoute from "./API/protectedRoute";
// import TermsCondition from "./Pages/Terms&Conditon/Terms&Condition";
// import PrivacyPolicyPage from "./Pages/PrivacyPolicy/PrivacyPolicyPage";
// import LandingPage from "./Pages/LandingPage/LandingPage";
// import 
//  from "./Pages/Dashoard/Dashboard";
// import NotFound from "./Pages/NotFound/NoteFound";
// import ContactUs from "./Pages/Contact/ContactUs";
// import { AboutUs } from "./Pages/AboutUs/AboutUs";
// import Overview from "./Pages/Overview/Overview";
// import Purpose from "./Pages/Purpose/Purpose";
// import ScrollToTop from "./Components/ScrollToTop";
// import { Payment } from "./Pages/Payments/Payment";
// import ThankYouPage from "./Pages/Payments/ThankYouPage";
// import PaymentFailedPage from "./Pages/Payments/PaymentFailedPage";
// import { Blogs } from "./Pages/Blogs/Blogs";
// import { Refund } from "./Pages/Refund/Refund";
// import { Webinar } from "./Pages/Webinar/Webinar";
// import { initGA, logPageView } from "./analitics/analytics";

// import ReactGA from "react-ga";
// import { useEffect } from "react";
// import JitsiComponent from "./Components/Jitsimeeting";

// const TRACKING_ID = "G-SNZDQG6PM4";

// // useEffect(() => {
// //   initGA();
// //   logPageView();
// // }, []);

// // useEffect(() => {
// //   logPageView();
// // }, [location.pathname]); // Track page views on route change

// function App() {
//   ReactGA.initialize(TRACKING_ID);

//   const location = useLocation();
//   const hideHeaderFooter = location.pathname === "/meeting";

//   return (
//     <div style={{ overflow: "hidden" }}>
//       <Router>
//         <ScrollToTop />
//         <GAListener />
//         {!hideHeaderFooter && <Header />}
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/session/:id"
//             element={<ProtectedRoute element={Session} />}
//           />
//           <Route
//             path="/payment"
//             element={<ProtectedRoute element={Payment} />}
//           />

//           <Route path="/pricing-plans" element={<PricingPlans />} />
//           <Route path="/refund-cancellation" element={<Refund />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/term-condition" element={<TermsCondition />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//           <Route
//             path="/dashboard/:id"
//             element={<ProtectedRoute element={Dashboard} />}
//           />
//           <Route
//             path="/meeting"
//             element={<ProtectedRoute element={JitsiComponent} />}
//           />
//           {/* <Route path="/session" element={<Session />} /> */}
//           {/* <Route
//             path="/success"
//             element={<ProtectedRoute element={ThankYouPage} />}
//           />
//           <Route
//             path="/error"
//             element={<ProtectedRoute element={PaymentFailedPage} />}
//           /> */}
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//           <Route path="/success" element={<ThankYouPage />} />
//           <Route path="/error" element={<PaymentFailedPage />} />
//           <Route path="/" element={<ProtectedRoute element={LandingPage} />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/overview" element={<Overview />} />
//           <Route path="/purpose" element={<Purpose />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/webinar" element={<Webinar />} />
//         </Routes>
//         {!hideHeaderFooter && <Footer />}
//       </Router>
//     </div>
//   );
// }

// export default App;

// const GAListener = () => {
//   const location = useLocation();

//   useEffect(() => {
//     ReactGA.send({ hitType: "pageview", page: location.pathname });
//     console.log("Tracking page view:", location.pathname);
//   }, [location]);

//   return null;
// };

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/Register";
import Session from "./Pages/Session/Session";
import BookNow from "./Pages/BookNow/BookNow";
import QuizLanding from "./Pages/Quiz/QuizLanding";
import QuizPage from "./Pages/Quiz/QuizPage";
import UserForm from "./Pages/Quiz/UserForm";
import MetntalQuiz from "./Pages/Quiz/MetntalQuiz";

import PricingPlans from "./Pages/Pricing_plans/PricingPlans";
import "./fonts.css";
import Footer from "./Components/Footer";
import FAQ from "./Pages/FAQ/faq";
import ProtectedRoute from "./API/protectedRoute";
import TermsCondition from "./Pages/Terms&Conditon/Terms&Condition";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy/PrivacyPolicyPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/Dashoard/Dashboard";
import NotFound from "./Pages/NotFound/NoteFound";
import ContactUs from "./Pages/Contact/ContactUs";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import Overview from "./Pages/Overview/Overview";
import Purpose from "./Pages/Purpose/Purpose";
import ScrollToTop from "./Components/ScrollToTop";
import { Payment } from "./Pages/Payments/Payment";
import ThankYouPage from "./Pages/Payments/ThankYouPage";
import PaymentFailedPage from "./Pages/Payments/PaymentFailedPage";
import { Blogs } from "./Pages/Blogs/Blogs";
import { Refund } from "./Pages/Refund/Refund";
import { Webinar } from "./Pages/Webinar/Webinar";
import { initGA, logPageView } from "./analitics/analytics";

import ReactGA from "react-ga";
import { useEffect } from "react";
import JitsiComponent from "./Components/Jitsimeeting";
import { ResetPassword } from "./Pages/Login/ResetPassword";
import { Box } from "@mui/material";

const TRACKING_ID = "G-SNZDQG6PM4";

function App() {
  ReactGA.initialize(TRACKING_ID);

  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <ScrollToTop />
        <GAListener />
        <Layout />
      </Router>
    </div>
  );
}

export default App;

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/meeting"; // Hides for Jitsi page

  return (
    <Box  >
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* {<Route
          path="/session/:id"
          element={<ProtectedRoute element={Session} />}
        />} */}

      {/* <Route path="/session/:id"  element={<Session />} /> */}

       <Route
          path="/session/:id"
          element={<ProtectedRoute element={Session} />}
        />
        <Route path="/book-now" element={<ProtectedRoute element={BookNow }/>} />
          
        <Route path="/quiz" element={<QuizPage />} />
         <Route path="/quiz-landing" element={<QuizLanding/>} />
           <Route path="/user-form" element={<UserForm/>} />
      
         <Route path="/quizz" element={<ProtectedRoute element={MetntalQuiz }/>} />

        <Route path="/payment" element={<ProtectedRoute element={Payment} />} />
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
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </Box>
  );
};

// ✅ Google Analytics Tracking Component
const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Tracking page view:", location.pathname);
  }, [location]);

  return null;
};
