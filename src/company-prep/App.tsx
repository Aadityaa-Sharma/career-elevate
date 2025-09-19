import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/company-prep/components/Navbar';
import HomePage from '@/company-prep/pages/HomePage';
import Dashboard from '@/company-prep/pages/Dashboard';
import CompanyProfile from '@/company-prep/pages/CompanyProfile';
import MockTestPage from '@/company-prep/pages/MockTestPage';
import CompareCompanies from '@/company-prep/pages/CompareCompanies';

function CompanyPrepApp() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="company/:id" element={<CompanyProfile />} />
        <Route path="mock-test" element={<MockTestPage />} />
        <Route path="compare" element={<CompareCompanies />} />
      </Routes>
    </div>
  );
}

export default CompanyPrepApp;


