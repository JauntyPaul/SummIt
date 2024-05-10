import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login'; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login Page at root */}
      </Routes>
    </Router>
  );
}

export default App;