
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, DollarSign, CheckCircle, Building, TrendingUp, Clock, Target, Star, TrendingDown, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import companiesData from '../data/companies.json';

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

  // Calculate average salary across all roles for comparison
  const getAverageCompanySalary = (company: { roles: { averageSalary: number }[] }) => {
    const totalSalary = company.roles.reduce((sum: number, role: { averageSalary: number }) => sum + role.averageSalary, 0);
    return totalSalary / company.roles.length;
  };

  const salaryData = selectedCompany1 && selectedCompany2 ? [
    { name: selectedCompany1.name, salary: getAverageCompanySalary(selectedCompany1), fill: '#3A72EC' },
    { name: selectedCompany2.name, salary: getAverageCompanySalary(selectedCompany2), fill: '#10B981' }
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
            {/* Enhanced Salary Comparison Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <span>Salary Comparison</span>
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4" />
                  <span>Average across all roles</span>
                </div>
              </div>

              {/* Main Salary Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Company 1 Salary Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200"
                >
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={selectedCompany1.logo} alt={selectedCompany1.name} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedCompany1.name}</h3>
                      <p className="text-gray-600">{selectedCompany1.category}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        ₹{getAverageCompanySalary(selectedCompany1).toFixed(1)} LPA
                      </div>
                      <div className="text-sm text-gray-600">Average Salary</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/60 rounded-xl p-3 text-center">
                        <div className="text-lg font-semibold text-gray-800">₹{selectedCompany1.roles[0].averageSalary}L</div>
                        <div className="text-xs text-gray-600">Entry Level</div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-3 text-center">
                        <div className="text-lg font-semibold text-gray-800">₹{selectedCompany1.roles[selectedCompany1.roles.length - 1].averageSalary}L</div>
                        <div className="text-xs text-gray-600">Senior Level</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Company 2 Salary Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-200"
                >
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={selectedCompany2.logo} alt={selectedCompany2.name} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedCompany2.name}</h3>
                      <p className="text-gray-600">{selectedCompany2.category}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">
                        ₹{getAverageCompanySalary(selectedCompany2).toFixed(1)} LPA
                      </div>
                      <div className="text-sm text-gray-600">Average Salary</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/60 rounded-xl p-3 text-center">
                        <div className="text-lg font-semibold text-gray-800">₹{selectedCompany2.roles[0].averageSalary}L</div>
                        <div className="text-xs text-gray-600">Entry Level</div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-3 text-center">
                        <div className="text-lg font-semibold text-gray-800">₹{selectedCompany2.roles[selectedCompany2.roles.length - 1].averageSalary}L</div>
                        <div className="text-xs text-gray-600">Senior Level</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Salary Difference Indicator */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      ₹{Math.abs(getAverageCompanySalary(selectedCompany1) - getAverageCompanySalary(selectedCompany2)).toFixed(1)} LPA
                    </div>
                    <div className="text-sm text-gray-600">Salary Difference</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getAverageCompanySalary(selectedCompany1) > getAverageCompanySalary(selectedCompany2) ? (
                      <>
                        <TrendingUp className="h-6 w-6 text-blue-500" />
                        <span className="text-lg font-semibold text-blue-600">{selectedCompany1.name}</span>
                        <span className="text-gray-600">pays more</span>
                      </>
                    ) : (
                      <>
                        <TrendingUp className="h-6 w-6 text-emerald-500" />
                        <span className="text-lg font-semibold text-emerald-600">{selectedCompany2.name}</span>
                        <span className="text-gray-600">pays more</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Role-wise Salary Breakdown */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Award className="h-6 w-6 text-purple-500" />
                <span>Role-wise Salary Breakdown</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Company 1 Roles */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>{selectedCompany1.name} Roles</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedCompany1.roles.map((role: any, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">{role.title}</div>
                            <div className="text-sm text-gray-600">{role.salaryRange}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">₹{role.averageSalary}L</div>
                            <div className="text-xs text-gray-500">Average</div>
                          </div>
                        </div>
                        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(role.averageSalary / Math.max(...selectedCompany1.roles.map((r: any) => r.averageSalary))) * 100}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Company 2 Roles */}
                <div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-4 flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>{selectedCompany2.name} Roles</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedCompany2.roles.map((role: any, index: number) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-gray-900">{role.title}</div>
                            <div className="text-sm text-gray-600">{role.salaryRange}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-600">₹{role.averageSalary}L</div>
                            <div className="text-xs text-gray-500">Average</div>
                          </div>
                        </div>
                        <div className="mt-2 w-full bg-emerald-200 rounded-full h-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(role.averageSalary / Math.max(...selectedCompany2.roles.map((r: any) => r.averageSalary))) * 100}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Trend Visualization */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 border border-indigo-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Zap className="h-6 w-6 text-indigo-500" />
                <span>Salary Growth Trends</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Salary Growth Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Career Progression</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={[
                      { level: 'Entry', company1: selectedCompany1.roles[0].averageSalary, company2: selectedCompany2.roles[0].averageSalary },
                      { level: 'Mid', company1: selectedCompany1.roles[Math.floor(selectedCompany1.roles.length/2)].averageSalary, company2: selectedCompany2.roles[Math.floor(selectedCompany2.roles.length/2)].averageSalary },
                      { level: 'Senior', company1: selectedCompany1.roles[selectedCompany1.roles.length-1].averageSalary, company2: selectedCompany2.roles[selectedCompany2.roles.length-1].averageSalary }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="level" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip 
                        formatter={(value, name) => [`₹${value}L`, name === 'company1' ? selectedCompany1.name : selectedCompany2.name]}
                        labelStyle={{ color: '#374151' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="company1" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                        name={selectedCompany1.name}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="company2" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                        name={selectedCompany2.name}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Salary Metrics */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Salary Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                        <span className="text-gray-700">Highest Entry Salary</span>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">
                            ₹{Math.max(selectedCompany1.roles[0].averageSalary, selectedCompany2.roles[0].averageSalary)}L
                          </div>
                          <div className="text-xs text-gray-500">
                            {selectedCompany1.roles[0].averageSalary > selectedCompany2.roles[0].averageSalary 
                              ? selectedCompany1.name 
                              : selectedCompany2.name}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl">
                        <span className="text-gray-700">Highest Senior Salary</span>
                        <div className="text-right">
                          <div className="font-bold text-emerald-600">
                            ₹{Math.max(selectedCompany1.roles[selectedCompany1.roles.length-1].averageSalary, selectedCompany2.roles[selectedCompany2.roles.length-1].averageSalary)}L
                          </div>
                          <div className="text-xs text-gray-500">
                            {selectedCompany1.roles[selectedCompany1.roles.length-1].averageSalary > selectedCompany2.roles[selectedCompany2.roles.length-1].averageSalary 
                              ? selectedCompany1.name 
                              : selectedCompany2.name}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                        <span className="text-gray-700">Salary Growth Rate</span>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">
                            {((Math.max(...selectedCompany1.roles.map((r: any) => r.averageSalary)) - Math.min(...selectedCompany1.roles.map((r: any) => r.averageSalary))) / Math.min(...selectedCompany1.roles.map((r: any) => r.averageSalary)) * 100).toFixed(1)}%
                          </div>
                          <div className="text-xs text-gray-500">vs {((Math.max(...selectedCompany2.roles.map((r: any) => r.averageSalary)) - Math.min(...selectedCompany2.roles.map((r: any) => r.averageSalary))) / Math.min(...selectedCompany2.roles.map((r: any) => r.averageSalary)) * 100).toFixed(1)}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <th className="px-6 py-4 text-center text-base font-semibold" style={{ color: '#3A72EC' }}>{selectedCompany1.name}</th>
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
                          <Users className="h-5 w-5 text-gray-400" />
                          <span>Company Size</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.companySize}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.companySize}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                          <span>Salary Range (Entry Level)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.roles[0].salaryRange}</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.roles[0].salaryRange}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-gray-400" />
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
                    <tr>
                      <td className="px-6 py-4 text-base font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-gray-400" />
                          <span>Glassdoor Rating</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany1.glassdoorRating}/5</td>
                      <td className="px-6 py-4 text-center text-base text-gray-600">{selectedCompany2.glassdoorRating}/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2" style={{ color: '#3A72EC' }}>
                  <Clock className="h-5 w-5" />
                  <span>{selectedCompany1.name} - Hiring Timeline</span>
                </h4>
                <div className="space-y-4">
                  {selectedCompany1.hiringProcess.map((step: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{ backgroundColor: '#3A72EC' }}>
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
                  {selectedCompany2.hiringProcess.map((step: string, index: number) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#3A72EC' }}>
                  {selectedCompany1.name} - Benefits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany1.benefits.map((benefit: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: '#E8F0FE', color: '#3A72EC' }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-emerald-600 mb-4">
                  {selectedCompany2.name} - Benefits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany2.benefits.map((benefit: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#3A72EC' }}>
                  {selectedCompany1.name} - Culture
                </h4>
                <ul className="space-y-2">
                  {selectedCompany1.culture.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#3A72EC' }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-emerald-600 mb-4">
                  {selectedCompany2.name} - Culture
                </h4>
                <ul className="space-y-2">
                  {selectedCompany2.culture.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <h5 className="font-medium text-gray-700 mb-2">Salary Difference</h5>
                  <p className="text-2xl font-bold" style={{ color: '#3A72EC' }}>
                    {Math.abs(getAverageCompanySalary(selectedCompany1) - getAverageCompanySalary(selectedCompany2)).toFixed(1)} LPA
                  </p>
                  <p className="text-sm text-gray-600">
                    {getAverageCompanySalary(selectedCompany1) > getAverageCompanySalary(selectedCompany2) 
                      ? selectedCompany1.name 
                      : selectedCompany2.name} pays more
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h5 className="font-medium text-gray-700 mb-2">Selection Difficulty</h5>
                  <p className="text-2xl font-bold text-orange-600">
                    {selectedCompany1.selectionRatio < selectedCompany2.selectionRatio 
                      ? selectedCompany1.name 
                      : selectedCompany2.name}
                  </p>
                  <p className="text-sm text-gray-600">Has lower selection ratio</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h5 className="font-medium text-gray-700 mb-2">Better Rated</h5>
                  <p className="text-2xl font-bold text-emerald-600">
                    {selectedCompany1.glassdoorRating > selectedCompany2.glassdoorRating 
                      ? selectedCompany1.name 
                      : selectedCompany2.name}
                  </p>
                  <p className="text-sm text-gray-600">Higher Glassdoor rating</p>
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