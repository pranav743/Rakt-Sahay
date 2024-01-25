import React from 'react';
import './App.css';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
