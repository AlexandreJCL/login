// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import LoadingPage from './LoadingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
