import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Building, DollarSign, Users, CheckCircle, 
  MessageSquare, BarChart3, Lightbulb, MapPin, Briefcase,
  Calendar, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Tabs from '../components/Tabs';
import companiesData from '../data/companies.json';

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRole, setSelectedRole] = useState(0);

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
    { id: 'roles', label: 'Roles', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'hiring', label: 'Hiring Process', icon: <Users className="h-4 w-4" /> },
    { id: 'eligibility', label: 'Eligibility', icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'tips', label: 'Tips', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'insights', label: 'Insights', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  // Calculate average salary from roles
  const getAveragePackage = () => {
    if (company.averagePackage) return company.averagePackage;
    if (company.roles && company.roles.length > 0) {
      const avg = company.roles.reduce((sum, role) => sum + role.averageSalary, 0) / company.roles.length;
      return Math.round(avg);
    }
    return 0;
  };

  const averagePackage = getAveragePackage();

  const radarData = [
    { skill: 'Work-Life Balance', score: (company.workLifeBalance || 4) * 20, fullMark: 100 },
    { skill: 'Innovation', score: (company.innovation || 4.5) * 20, fullMark: 100 },
    { skill: 'Growth', score: (company.growth || 4.5) * 20, fullMark: 100 },
    { skill: 'Compensation', score: (averagePackage / 50) * 100, fullMark: 100 },
    { skill: 'Selection Rate', score: company.selectionRatio * 100, fullMark: 100 }
  ];


  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      case 'very hard': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About {company.name}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{company.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Company Info</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Size:</span> {company.companySize || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Founded:</span> {company.founded || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Category:</span> {company.category}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Locations</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {company.locations ? company.locations.map((location, index) => (
                    <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                      {location}
                    </span>
                  )) : (
                    <span className="text-sm text-gray-600">Multiple Locations</span>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Ratings</h4>
                </div>
                <div className="space-y-2">
                  {company.glassdoorRating && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Glassdoor:</span> ⭐ {company.glassdoorRating}/5
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Difficulty:</span> 
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getDifficultyColor(company.difficulty)}`}>
                      {company.difficulty}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Selection:</span> {Math.round(company.selectionRatio * 100)}%
                  </p>
                </div>
              </div>
            </div>

            {company.benefits && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                <div className="flex flex-wrap gap-3">
                  {company.benefits.map((benefit, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'roles':
        return (
          <div className="space-y-6">
            {company.roles && company.roles.length > 0 ? (
              <>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Roles - Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {company.roles.map((role, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedRole(index)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedRole === index 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                        <p className="text-emerald-600 font-medium text-sm mb-1">{role.salaryRange}</p>
                        <p className="text-gray-600 text-xs mb-2">{role.experience}</p>
                        <div className="flex flex-wrap gap-1">
                          {role.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                          {role.skills.length > 3 && (
                            <span className="px-2 py-1 text-gray-500 text-xs">+{role.skills.length - 3}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {company.roles[selectedRole].title} - Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-emerald-600" />
                        Compensation
                      </h4>
                      <p className="text-2xl font-bold text-emerald-600 mb-1">
                        {company.roles[selectedRole].salaryRange}
                      </p>
                      <p className="text-sm text-gray-600">
                        Average: ₹{company.roles[selectedRole].averageSalary} LPA
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        Experience Required
                      </h4>
                      <p className="text-lg font-medium text-blue-600">
                        {company.roles[selectedRole].experience}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.roles[selectedRole].skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {company.roles[selectedRole].responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Salary Range</h4>
                </div>
                <p className="text-2xl font-bold text-emerald-600">{company.salary || 'Competitive'}</p>
                {averagePackage > 0 && (
                  <p className="text-sm text-gray-500 mt-1">Average: ₹{averagePackage} LPA</p>
                )}
              </div>
            )}
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
              {company.eligibility && typeof company.eligibility === 'object' ? (
                Object.entries(company.eligibility).map(([key, value]) => {
                  // Handle preferredColleges array
                  if (key === 'preferredColleges' && Array.isArray(value)) {
                    return (
                      <div key={key} className="p-4 bg-gray-50 rounded-2xl">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Preferred Colleges
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {value.map((college, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {college}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={key} className="p-4 bg-gray-50 rounded-2xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-base text-gray-600">{value}</p>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-2 text-center text-gray-600">
                  Eligibility criteria not specified
                </div>
              )}
            </div>
          </div>
        );



      case 'tips':
        return (
          <div className="space-y-6">
            {company.interviewTips && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Interview Tips</h3>
                <div className="space-y-4">
                  {company.interviewTips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl"
                    >
                      <Lightbulb className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-800">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {company.tips && (
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
            )}

          </div>
        );

      case 'insights':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className={`text-2xl font-bold mb-2`}>
                  <span className={`px-3 py-1 rounded-full ${getDifficultyColor(company.difficulty)}`}>
                    {company.difficulty}
                  </span>
                </div>
                <div className="text-sm text-gray-600">Difficulty Level</div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">₹{averagePackage}L</div>
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

            {company.culture && (
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
                    <div className="text-3xl font-bold text-blue-600 mb-2">{company.workLifeBalance || 4}/5</div>
                    <div className="text-sm text-gray-600">Work-Life Balance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{company.innovation || 4.5}/5</div>
                    <div className="text-sm text-gray-600">Innovation Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{company.growth || 4.5}/5</div>
                    <div className="text-sm text-gray-600">Growth Potential</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Get salary display for header
  const getSalaryDisplay = () => {
    if (company.salary) return company.salary;
    
    if (company.roles && company.roles.length > 0) {
      const minSalary = Math.min(...company.roles.map(r => {
        const match = r.salaryRange.match(/₹?([\d.]+)/);
        return match ? parseFloat(match[1]) : 0;
      }));
      const maxSalary = Math.max(...company.roles.map(r => {
        const match = r.salaryRange.match(/₹?[\d.]+\s*-\s*([\d.]+)/);
        return match ? parseFloat(match[1]) : 0;
      }));
      
      if (minSalary && maxSalary) {
        return `₹${minSalary} - ${maxSalary} LPA`;
      }
    }
    
    return 'Competitive Salary';
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
              <div className="flex items-center flex-wrap gap-3 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {company.category}
                </span>
                {company.roles && company.roles.length > 0 && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {company.roles.length} Open Roles
                  </span>
                )}
                <span className="text-emerald-600 font-semibold">{getSalaryDisplay()}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(company.difficulty)}`}>
                  {company.difficulty}
                </span>
                {company.glassdoorRating && (
                  <span className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{company.glassdoorRating}/5</span>
                  </span>
                )}
              </div>
              <p className="text-base text-gray-600 max-w-3xl">{company.description}</p>
              
              {company.locations && (
                <div className="flex items-center space-x-2 mt-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <div className="flex flex-wrap gap-2">
                    {company.locations.map((location, index) => (
                      <span key={index} className="text-sm text-gray-600">
                        {location}{index < company.locations.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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