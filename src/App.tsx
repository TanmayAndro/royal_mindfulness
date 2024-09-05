import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import Session from './Pages/Session/Session';
import PricingPlans from './Pages/Pricing_plans/PricingPlans';
import './fonts.css';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ/faq';
import ProtectedRoute from './API/protectedRoute';
import TermsCondition from './Pages/Terms&Conditon/Terms&Condition';
import PrivacyPolicyPage from './Pages/PrivacyPolicy/PrivacyPolicyPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashoard/Dashboard';
import NotFound from './Pages/NotFound/NoteFound';
import ThankYouPage from './Pages/Dashoard/ThankYouPage';
import ContactUs from './Pages/Contact/ContactUs';
import PaymentFailedPage from './Pages/Dashoard/PaymentFailedPage';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import Overview from './Pages/Overview/Overview';
import Purpose from './Pages/Purpose/Purpose';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/session" element={<ProtectedRoute element={Session} />}/>
        <Route path="/pricing-plans" element={<ProtectedRoute element={PricingPlans} />}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/term-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/dashboard/:id" element={<ProtectedRoute element={Dashboard}/>}/>
        <Route path='/success' element={<ProtectedRoute element={ThankYouPage}/>}/>
        <Route path='/error' element={<ProtectedRoute element={PaymentFailedPage}/>}/>
        <Route path="/" element={<ProtectedRoute element={LandingPage} />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/purpose" element={<Purpose/>}/>




      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
