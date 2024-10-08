// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import FetchingPage from './Pages/FetchingPage';
import NutrientSearchPage from './Pages/NutrientSearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<FetchingPage />} />
        <Route path="/nutrient-search" element={<NutrientSearchPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
