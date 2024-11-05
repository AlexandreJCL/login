import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import LoadingPage from './LoadingPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loading" element={<LoadingPage />} /> {/* Nueva pantalla de carga */}
    </Routes>
  </Router>
  );
}

export default App;
