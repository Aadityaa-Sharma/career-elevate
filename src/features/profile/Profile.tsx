import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../shared/components/Footer';
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  Clock,
  Star,
  Briefcase,
  GraduationCap,
  Edit3,
  ArrowLeft
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  
  const userStats = [
    { label: "ATS Score", value: "87%", change: "+12%", color: "text-green-600", bgColor: "bg-green-50" },
    { label: "Profile Views", value: "234", change: "+18", color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Applications", value: "12", change: "+3", color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Interviews", value: "5", change: "+2", color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  const achievements = [
    { title: "Resume Optimizer", desc: "Improved ATS score by 25%", icon: Award, completed: true },
    { title: "Skill Master", desc: "Added 8 new skills", icon: Star, completed: true },
    { title: "Interview Ready", desc: "Completed 3 mock interviews", icon: Target, completed: true },
    { title: "Network Builder", desc: "Connect with 50 professionals", icon: User, completed: false }
  ];

  const recentActivity = [
    { action: "Updated resume", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
    { action: "Completed skill assessment", time: "1 day ago", icon: TrendingUp, color: "text-blue-500" },
    { action: "Applied to Software Engineer role", time: "3 days ago", icon: Briefcase, color: "text-purple-500" },
    { action: "Attended virtual career fair", time: "1 week ago", icon: GraduationCap, color: "text-orange-500" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[27dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Back Button - Absolute Position */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 group border border-white/20 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>

        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Career Dashboard
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Track your progress and manage your professional development journey
          </p>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="bg-white relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Sarah Johnson</h1>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit3 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <p className="text-xl text-gray-600 mb-4">Senior Software Engineer</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>sarah.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Member since Jan 2024</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {userStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className={`${stat.bgColor} rounded-lg p-3 w-fit mb-4`}>
                  <TrendingUp className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                  <span className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`p-3 rounded-lg ${achievement.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <IconComponent className={`w-6 h-6 ${achievement.completed ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-500">{achievement.desc}</p>
                      </div>
                      {achievement.completed && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Career Progress */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.87)}`} className="text-blue-600" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">87%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Profile Strength</h3>
                <p className="text-sm text-gray-500">Excellent</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.65)}`} className="text-green-600" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">65%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Skill Match</h3>
                <p className="text-sm text-gray-500">Good</p>
              </div>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${2 * Math.PI * 40}`} strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.42)}`} className="text-purple-600" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">42%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Goal Progress</h3>
                <p className="text-sm text-gray-500">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;