import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/Register";
import Session from "./Pages/Session/Session";
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

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/session/:id"
            element={<ProtectedRoute element={Session} />}
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
          {/* <Route path="/session" element={<Session />} /> */}
          {/* <Route
            path="/success"
            element={<ProtectedRoute element={ThankYouPage} />}
          />
          <Route
            path="/error"
            element={<ProtectedRoute element={PaymentFailedPage} />}
          /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/success" element={<ThankYouPage />} />
          <Route path="/error" element={<PaymentFailedPage />} />
          <Route path="/" element={<ProtectedRoute element={LandingPage} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/webinar" element={<Webinar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// <Route path="*" element={<NotFound />} />
// <Route path="/contact" element={<ContactUs />} />
// <Route path="/aboutus" element={<AboutUs />} />
// <Route path="/overview" element={<Overview />} />
// <Route path="/purpose" element={<Purpose />} />

// <Route path="/login" element={<Login />} />
// <Route path="/register" element={<Register />} />
// <Route path="/session" element={<Session />} />
// <Route path="/pricing-plans" element={<PricingPlans />} />
// <Route path="/faq" element={<FAQ />} />
// <Route path="/term-condition" element={<TermsCondition />} />
// <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
// <Route path="/dashboard/:id" element={<Dashboard />} />
// <Route path="/success" element={<ThankYouPage />} />
// <Route path="/error" element={<PaymentFailedPage />} />
// <Route path="/" element={<LandingPage />} />
// <Route path="*" element={<NotFound />} />
// <Route path="/contact" element={<ContactUs />} />
// <Route path="/aboutus" element={<AboutUs />} />
// <Route path="/overview" element={<Overview />} />
// <Route path="/purpose" element={<Purpose />} />
// <Route path="/payment" element={<Payment />} />
