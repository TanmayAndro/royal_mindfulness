import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import Session from './Pages/Session/Session';
import PricingPlans from './Pages/Pricing_plans/PricingPlans';
import './fonts.css'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/session" element={<Session />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
      </Routes>
    </Router>
    
  );
}

export default App;
