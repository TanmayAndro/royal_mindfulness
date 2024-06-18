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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/session" element={<ProtectedRoute element={Session}  />} />
        <Route path="/pricing-plans" element={<ProtectedRoute element={PricingPlans} />} />
        <Route path="/faq" element={<ProtectedRoute element={FAQ}  />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
