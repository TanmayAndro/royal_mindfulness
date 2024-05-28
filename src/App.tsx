import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import Session from './Pages/Session/Session';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </Router>
    
  );
}

export default App;
