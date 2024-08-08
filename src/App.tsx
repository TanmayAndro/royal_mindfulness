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
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard}/>}/>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
