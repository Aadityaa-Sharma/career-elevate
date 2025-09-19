import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building, DollarSign, Users, CheckCircle, Code, MessageSquare, Target, BarChart3, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Tabs from '@/company-prep/components/Tabs';
import companiesData from '@/company-prep/data/companies.json';
import questionsData from '@/company-prep/data/questions.json';
import tipsData from '@/company-prep/data/tips.json';

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const company = companiesData.companies.find(c => c.id === parseInt(id || '0'));

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company not found</h2>
          <button
            onClick={() => navigate('/company-prep')}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Building className="h-4 w-4" /> },
    { id: 'hiring', label: 'Hiring Process', icon: <Users className="h-4 w-4" /> },
    { id: 'eligibility', label: 'Eligibility', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'preparation', label: 'Preparation', icon: <Target className="h-4 w-4" /> },
    { id: 'mocktest', label: 'Mock Test', icon: <Code className="h-4 w-4" /> },
    { id: 'tips', label: 'Tips', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'insights', label: 'Insights', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const radarData = [
    { skill: 'Work-Life Balance', score: company.workLifeBalance * 20, fullMark: 100 },
    { skill: 'Innovation', score: company.innovation * 20, fullMark: 100 },
    { skill: 'Growth', score: company.growth * 20, fullMark: 100 },
    { skill: 'Compensation', score: (company.averagePackage / 50) * 100, fullMark: 100 },
    { skill: 'Selection Rate', score: company.selectionRatio * 100, fullMark: 100 }
  ];

  const companyTips = tipsData.communityTips.filter(tip => tip.company === company.name);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About {company.name}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{company.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Salary Range</h4>
                </div>
                <p className="text-2xl font-bold text-emerald-600">{company.salary}</p>
                <p className="text-sm text-gray-500 mt-1">Average: ₹{company.averagePackage} LPA</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Category</h4>
                </div>
                <p className="text-2xl font-bold text-blue-600">{company.category}</p>
                <p className="text-sm text-gray-500 mt-1">Difficulty: {company.difficulty}</p>
              </div>
            </div>
          </div>
        );

      case 'hiring':
        return (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Hiring Process</h3>
            <div className="space-y-4">
              {company.hiringProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-base text-gray-800">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Eligibility Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(company.eligibility).map(([key, value]) => (
                <div key={key} className="p-4 bg-gray-50 rounded-2xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-base text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'preparation':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Aptitude</h4>
                <p className="text-base text-gray-600 mb-4">{questionsData.aptitude.length} Questions</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200">
                  Practice
                </button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <Code className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Coding</h4>
                <p className="text-base text-gray-600 mb-4">{questionsData.coding.length} Problems</p>
                <button className="w-full py-2 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-colors duration-200">
                  Practice
                </button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <Users className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical</h4>
                <p className="text-base text-gray-600 mb-4">{questionsData.technical.length} Questions</p>
                <button className="w-full py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-colors duration-200">
                  Practice
                </button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <MessageSquare className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">HR Round</h4>
                <p className="text-base text-gray-600 mb-4">{questionsData.hr.length} Questions</p>
                <button className="w-full py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-200">
                  Practice
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Aptitude Questions</h4>
              <div className="space-y-4">
                {questionsData.aptitude.slice(0, 2).map((question, index) => (
                  <div key={question.id} className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-base font-medium text-gray-900 mb-3">{question.question}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="px-3 py-2 bg-white rounded-2xl text-sm text-gray-600">
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Interview Simulator</h4>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                  <h5 className="text-lg font-medium text-gray-900">Practice Interview Questions</h5>
                </div>
                <textarea
                  placeholder="Type your answer here... (Future upgrade will include voice/video Q&A)"
                  className="w-full h-32 p-4 border border-gray-200 rounded-2xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Coming soon: Voice & Video responses</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-200">
                    Submit Answer
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mocktest':
        return (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mock Tests</h3>
            <div className="space-y-4">
              {questionsData.mockTests.map((test) => (
                <div key={test.id} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{test.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Duration: {test.duration} minutes</span>
                        <span>Questions: {test.questions.length}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          test.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          test.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {test.difficulty}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/company-prep/mock-test', { state: { test } })}
                      className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      Start Test
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tips':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Preparation Tips</h3>
              <div className="space-y-4">
                {company.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{tip}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {companyTips.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Community Tips</h3>
                <div className="space-y-4">
                  {companyTips.map((tip) => (
                    <motion.div
                      key={tip.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{tip.author}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tip.category === 'Interview Prep' ? 'bg-purple-100 text-purple-700' :
                            tip.category === 'Technical' ? 'bg-blue-100 text-blue-700' :
                            tip.category === 'Aptitude' ? 'bg-green-100 text-green-700' :
                            tip.category === 'Coding' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {tip.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <span>❤️ {tip.likes}</span>
                        </div>
                      </div>
                      <p className="text-base text-gray-700">{tip.tip}</p>
                      <div className="text-xs text-gray-500 mt-2">{tip.date}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'insights':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{company.difficulty}</div>
                <div className="text-sm text-gray-600">Difficulty Level</div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">₹{company.averagePackage}L</div>
                <div className="text-sm text-gray-600">Average Package</div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{Math.round(company.selectionRatio * 100)}%</div>
                <div className="text-sm text-gray-600">Selection Ratio</div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">{company.hiringProcess.length}</div>
                <div className="text-sm text-gray-600">Process Steps</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Company Performance Radar</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Company Culture</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {company.culture.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{company.workLifeBalance}/5</div>
                  <div className="text-sm text-gray-600">Work-Life Balance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{company.innovation}/5</div>
                  <div className="text-sm text-gray-600">Innovation Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{company.growth}/5</div>
                  <div className="text-sm text-gray-600">Growth Potential</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/company-prep')}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-base">Back to Companies</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-md p-8 mb-8"
        >
          <div className="flex items-start space-x-6">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-20 h-20 rounded-2xl object-cover shadow-sm"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {company.category}
                </span>
                <span className="text-emerald-600 font-semibold">{company.salary}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  company.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  company.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  company.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {company.difficulty}
                </span>
              </div>
              <p className="text-base text-gray-600 max-w-3xl">{company.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;


