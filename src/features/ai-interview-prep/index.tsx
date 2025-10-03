import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../shared/components/ui/dialog";
import { Card, CardContent } from "../../shared/components/ui/card";

export default function AIInterviewPrep() {
  const navigate = useNavigate();
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState<string | null>(null);

  const handleFeatureClick = (feature: string) => {
    setShowFeatureModal(feature);
  };

  // const handleNavigationClick = () => {
  //   // For now, scroll to relevant sections or show information
  //   // Maps to section
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="fade-in">

        {/* Hero Content */}
        <div className="text-center px-6 py-20 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 bounce-in shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ace Your Next <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Interview</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Master interview skills with AI-powered coaching, curated question banks, and real-time feedback. Prepare smarter, not harder.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Button
                onClick={() => navigate('/ai-interview-prep/mode-selection')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 w-full"
                data-testid="button-start-practice"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Practice
              </Button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Button 
                variant="ghost" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-8 py-4 rounded-xl w-full" 
                onClick={() => setShowDemoModal(true)}
                data-testid="button-watch-demo"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button 
              onClick={() => handleFeatureClick('ai-feedback')}
              className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer transform hover:scale-105 flex items-center"
              data-testid="feature-ai-feedback"
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              AI-Powered Feedback
            </button>
            <button 
              onClick={() => handleFeatureClick('voice-practice')}
              className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer transform hover:scale-105 flex items-center"
              data-testid="feature-voice-practice"
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Voice Practice
            </button>
            <button 
              onClick={() => handleFeatureClick('progress-tracking')}
              className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer transform hover:scale-105 flex items-center"
              data-testid="feature-progress-tracking"
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Progress Tracking
            </button>
            <button 
              onClick={() => handleFeatureClick('industry-questions')}
              className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer transform hover:scale-105 flex items-center"
              data-testid="feature-industry-questions"
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Industry Questions
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center" data-testid="stat-questions">
              <div className="text-3xl font-bold text-blue-600">5K+</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="text-center" data-testid="stat-success">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center" data-testid="stat-users">
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
            <div className="text-center" data-testid="stat-support">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </div>
          </div>
        </div>

        {/* Demo Modal */}
        <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
          <DialogContent className="max-w-4xl bg-white border border-gray-200 shadow-xl">
            <DialogHeader className="pb-4 border-b border-gray-100">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                AI Interview Prep Demo
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">✨ See AI Interview Prep in Action</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200" onClick={() => { setShowDemoModal(false); navigate('/ai-interview-prep/question-bank'); }}>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900">Try Question Bank</h4>
                      <p className="text-sm text-gray-600">Browse our curated questions</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200" onClick={() => { setShowDemoModal(false); navigate('/ai-interview-prep/ai-coach'); }}>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-900">Try AI Coach</h4>
                      <p className="text-sm text-gray-600">Experience AI-powered interviews</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="text-center">
                <Button onClick={() => { setShowDemoModal(false); navigate('/ai-interview-prep/mode-selection'); }} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3">
                  Start Your Practice Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Sign In Modal */}
        <Dialog open={showSignInModal} onOpenChange={setShowSignInModal}>
          <DialogContent className="max-w-md bg-white border border-gray-200 shadow-xl">
            <DialogHeader className="pb-4 border-b border-gray-100">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Sign In to AI Interview Prep
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-900">Demo Mode Available</h3>
                </div>
                <p className="text-sm text-blue-800">You can explore all features without signing in! Authentication will be added in future updates.</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => { setShowSignInModal(false); navigate('/ai-interview-prep/mode-selection'); }} className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                  Continue as Guest
                </Button>
                <Button variant="outline" onClick={() => setShowSignInModal(false)} className="flex-1">
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Feature Modals */}
        <Dialog open={!!showFeatureModal} onOpenChange={() => setShowFeatureModal(null)}>
          <DialogContent className="max-w-2xl bg-white border border-gray-200 shadow-xl">
            <DialogHeader className="pb-4 border-b border-gray-100">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                {showFeatureModal === 'ai-feedback' && (
                  <>
                    <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI-Powered Feedback
                  </>
                )}
                {showFeatureModal === 'voice-practice' && (
                  <>
                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Voice Practice
                  </>
                )}
                {showFeatureModal === 'progress-tracking' && (
                  <>
                    <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Progress Tracking
                  </>
                )}
                {showFeatureModal === 'industry-questions' && (
                  <>
                    <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Industry Questions
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {showFeatureModal === 'ai-feedback' && (
                <div>
                  <p className="text-gray-600 mb-6 text-lg">Get real-time feedback from our advanced AI coach that analyzes your responses and provides personalized suggestions.</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Features
                    </h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Real-time response analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Personalized improvement suggestions
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Performance scoring (1-10 scale)
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Detailed feedback reports
                      </li>
                    </ul>
                  </div>
                  <Button onClick={() => { setShowFeatureModal(null); navigate('/ai-interview-prep/ai-coach'); }} className="w-full bg-purple-600 text-white hover:bg-purple-700 mt-6 py-3">
                    Try AI Coach Now
                  </Button>
                </div>
              )}
              {showFeatureModal === 'voice-practice' && (
                <div>
                  <p className="text-gray-600 mb-6 text-lg">Practice speaking naturally with our voice recognition technology for realistic interview simulation.</p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      Voice Features
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Speech-to-text conversion
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Natural conversation flow
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Voice clarity analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Speaking pace feedback
                      </li>
                    </ul>
                  </div>
                  <Button onClick={() => { setShowFeatureModal(null); navigate('/ai-interview-prep/ai-coach'); }} className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-6 py-3">
                    Start Voice Practice
                  </Button>
                </div>
              )}
              {showFeatureModal === 'progress-tracking' && (
                <div>
                  <p className="text-gray-600 mb-6 text-lg">Monitor your improvement with detailed analytics and performance insights across all practice sessions.</p>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                    <h4 className="font-semibold text-indigo-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Analytics Features
                    </h4>
                    <ul className="text-sm text-indigo-800 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Question completion tracking
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Performance score history
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Strength and weakness analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Session time tracking
                      </li>
                    </ul>
                  </div>
                  <Button onClick={() => { setShowFeatureModal(null); navigate('/ai-interview-prep/question-bank'); }} className="w-full bg-indigo-600 text-white hover:bg-indigo-700 mt-6 py-3">
                    View Progress Dashboard
                  </Button>
                </div>
              )}
              {showFeatureModal === 'industry-questions' && (
                <div>
                  <p className="text-gray-600 mb-6 text-lg">Access thousands of carefully curated questions from top companies and industry experts.</p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
                    <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Question Bank Features
                    </h4>
                    <ul className="text-sm text-orange-800 space-y-2">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        5000+ curated questions
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Multiple difficulty levels
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Industry-specific categories
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sample answers included
                      </li>
                    </ul>
                  </div>
                  <Button onClick={() => { setShowFeatureModal(null); navigate('/ai-interview-prep/question-bank'); }} className="w-full bg-orange-600 text-white hover:bg-orange-700 mt-6 py-3">
                    Browse Questions
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => navigate('/ai-interview-prep/mode-selection')}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}