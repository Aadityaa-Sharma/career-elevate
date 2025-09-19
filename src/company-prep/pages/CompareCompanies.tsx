import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, DollarSign, CheckCircle, Building, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import companiesData from '@/company-prep/data/companies.json';

const CompareCompanies: React.FC = () => {
  const navigate = useNavigate();
  const [company1, setCompany1] = useState<number | null>(null);
  const [company2, setCompany2] = useState<number | null>(null);

  const companies = companiesData.companies;

  const getCompanyById = (id: number | null) => {
    return companies.find(c => c.id === id);
  };

  const selectedCompany1 = getCompanyById(company1);
  const selectedCompany2 = getCompanyById(company2);

  const salaryData = selectedCompany1 && selectedCompany2 ? [
    { name: selectedCompany1.name, package: selectedCompany1.averagePackage, fill: '#3B82F6' },
    { name: selectedCompany2.name, package: selectedCompany2.averagePackage, fill: '#10B981' }
  ] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/company-prep')}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Companies</h1>
          <p className="text-xl text-gray-600">
            Select two companies to compare their hiring process, eligibility, and benefits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select First Company</h3>
            <select
              value={company1 || ''}
              onChange={(e) => setCompany1(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a company...</option>
              {companies.map(company => (
                <option key={company.id} value={company.id} disabled={company.id === company2}>
                  {company.name}
                </option>
              ))}
            </select>
            {selectedCompany1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-blue-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <img src={selectedCompany1.logo} alt={selectedCompany1.name} className="w-12 h-12 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedCompany1.name}</h4>
                    <p className="text-sm text-gray-600">{selectedCompany1.category}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Second Company</h3>
            <select
              value={company2 || ''}
              onChange={(e) => setCompany2(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a company...</option>
              {companies.map(company => (
                <option key={company.id} value={company.id} disabled={company.id === company1}>
                  {company.name}
                </option>
              ))}
            </select>
            {selectedCompany2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-emerald-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <img src={selectedCompany2.logo} alt={selectedCompany2.name} className="w-12 h-12 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedCompany2.name}</h4>
                    <p className="text-sm text-gray-600">{selectedCompany2.category}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {selectedCompany1 && selectedCompany2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Salary Comparison</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${value} LPA`, 'Average Package']} />
                  <Bar dataKey="package" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Detailed Comparison</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">Criteria</th>
                      <th className="px-6 py-4 text-center text-base font-semibold text-blue-600">{selectedCompany1.name}</th>
                      <th className="px-6 py-4 text-center text-base font-semibold text-emerald-600">{selectedCompany2.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <Building className="h-5 w-5 text-gray-400" />
                          <span>Category</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.category}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.category}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                          <span>Salary Range</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.salary}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.salary}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-gray-400" />
                          <span>Average Package</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">₹{selectedCompany1.averagePackage} LPA</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">₹{selectedCompany2.averagePackage} LPA</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-gray-400" />
                          <span>Hiring Process Steps</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.hiringProcess.length} steps</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.hiringProcess.length} steps</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-gray-400" />
                          <span>CGPA Requirement</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.eligibility.cgpa}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.eligibility.cgpa}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-gray-400" />
                          <span>Difficulty Level</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.difficulty}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.difficulty}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-gray-400" />
                          <span>Selection Ratio</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{Math.round(selectedCompany1.selectionRatio * 100)}%</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{Math.round(selectedCompany2.selectionRatio * 100)}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-blue-600 mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{selectedCompany1.name} - Hiring Timeline</span>
                </h4>
                <div className="space-y-4">
                  {selectedCompany1.hiringProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-emerald-600 mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{selectedCompany2.name} - Hiring Timeline</span>
                </h4>
                <div className="space-y-4">
                  {selectedCompany2.hiringProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CompareCompanies;


