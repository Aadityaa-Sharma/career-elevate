import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import CompanyProfile from './pages/CompanyProfile';
import MockTestPage from './pages/MockTestPage';
import PracticePage from './pages/PracticePage';
import CompareCompanies from './pages/CompareCompanies';

function CompanyPrepApp() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="company/:id" element={<CompanyProfile />} />
        <Route path="mock-test" element={<MockTestPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="practice/:category" element={<PracticePage />} />
        <Route path="compare" element={<CompareCompanies />} />
      </Routes>
    </div>
  );
}

export default CompanyPrepApp;


