import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import PricingPlans from './Pages/Pricing_plans/PricingPlans';
import './fonts.css'; 
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ/faq';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
