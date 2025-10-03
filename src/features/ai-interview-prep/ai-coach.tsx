import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/ui/button";
import { Card, CardContent } from "../../shared/components/ui/card";
import { Textarea } from "../../shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/components/ui/select";

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Session {
  id: string;
  status: string;
  messages: Message[];
  startTime: Date;
  endTime?: Date;
}

export default function AICoach() {
  const navigate = useNavigate();
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [userMessage, setUserMessage] = useState("");
  const [sessionConfig, setSessionConfig] = useState({
    sessionType: "Technical Interview",
    experienceLevel: "Mid Level (3-5 years)",
    focusArea: "Frontend Development",
    duration: 30,
  });
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Mock session data for demo purposes
  const [session, setSession] = useState<Session | null>(null);

  const handleStartSession = () => {
    // Mock session creation
    const newSession = {
      id: "demo-session-" + Date.now(),
      status: "active",
      messages: [],
      score: null,
      feedback: null
    };
    setCurrentSessionId(newSession.id);
    setSession(newSession);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Mock message sending
      const newMessage = {
        type: 'user',
        content: userMessage,
        timestamp: new Date().toISOString()
      };
      
      const aiResponse = {
        type: 'ai',
        content: "That's a great answer! Can you tell me more about your experience with React hooks?",
        timestamp: new Date().toISOString(),
        score: 8,
        feedback: "Good technical knowledge demonstrated. Consider providing more specific examples.",
        suggestions: [
          "Include specific project examples",
          "Mention challenges you overcame",
          "Quantify your achievements"
        ]
      };

      setSession(prev => ({
        ...prev,
        messages: [...(prev?.messages || []), newMessage, aiResponse]
      }));
      setUserMessage("");
    }
  };

  const handleVoiceInput = () => {
    if (isListening) {
      setIsListening(false);
      if (transcript) {
        setUserMessage(transcript);
      }
    } else {
      setIsListening(true);
      // Mock voice recognition
      setTimeout(() => {
        setTranscript("I have 3 years of experience with React and I've worked on several projects including a e-commerce platform.");
        setIsListening(false);
      }, 2000);
    }
  };

  const isSessionActive = currentSessionId && session && session.status === "active";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-blue-600 transition-colors"
          >
            Career Elevator
          </button>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <button 
            onClick={() => navigate('/ai-interview-prep')}
            className="hover:text-blue-600 transition-colors"
          >
            AI Interview Prep
          </button>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700 font-medium">AI Coach</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost"
              onClick={() => navigate("/ai-interview-prep")}
              className="mr-4 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              data-testid="button-back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Button>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">AI Interview Coach</h2>
              <p className="text-gray-600">Practice with our intelligent AI interviewer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className={`w-2 h-2 rounded-full ${isSessionActive ? 'bg-green-500 pulse-dot' : 'bg-gray-400'}`}></div>
              <span data-testid="text-ai-status">{isSessionActive ? 'AI Active' : 'AI Inactive'}</span>
            </div>
          </div>
        </div>

        {/* Session Setup */}
        {!isSessionActive && (
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your AI Interview Session</h3>
                <p className="text-gray-600">Configure your practice session for the best experience</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interview Type</label>
                  <Select 
                    value={sessionConfig.sessionType} 
                    onValueChange={(value) => setSessionConfig(prev => ({ ...prev, sessionType: value }))}
                  >
                    <SelectTrigger data-testid="select-interview-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technical Interview">Technical Interview</SelectItem>
                      <SelectItem value="Behavioral Interview">Behavioral Interview</SelectItem>
                      <SelectItem value="System Design">System Design</SelectItem>
                      <SelectItem value="General Interview">General Interview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <Select 
                    value={sessionConfig.experienceLevel} 
                    onValueChange={(value) => setSessionConfig(prev => ({ ...prev, experienceLevel: value }))}
                  >
                    <SelectTrigger data-testid="select-experience-level">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entry Level (0-2 years)">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="Mid Level (3-5 years)">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="Senior Level (6+ years)">Senior Level (6+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Focus Area</label>
                  <Select 
                    value={sessionConfig.focusArea} 
                    onValueChange={(value) => setSessionConfig(prev => ({ ...prev, focusArea: value }))}
                  >
                    <SelectTrigger data-testid="select-focus-area">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                      <SelectItem value="Backend Development">Backend Development</SelectItem>
                      <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="DevOps">DevOps</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration</label>
                  <Select 
                    value={sessionConfig.duration.toString()} 
                    onValueChange={(value) => setSessionConfig(prev => ({ ...prev, duration: parseInt(value) }))}
                  >
                    <SelectTrigger data-testid="select-duration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">Session Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-800">
                  <div className="flex items-center">
                    <i className="fas fa-check mr-2"></i>Real-time feedback
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check mr-2"></i>Voice recognition
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check mr-2"></i>Performance scoring
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check mr-2"></i>Improvement suggestions
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleStartSession}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-start-ai-interview"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start AI Interview
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Chat Interface */}
        {isSessionActive && (
          <>
            {/* Interview Progress */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600">
                      Messages: <span className="font-semibold text-blue-600" data-testid="text-message-count">
                        {session?.messages?.length || 0}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Status: <span className="font-semibold text-green-600" data-testid="text-session-status">
                      {session?.status || 'Unknown'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Messages */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="space-y-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" data-testid="chat-messages">
                  {session?.messages?.map((message: Message, index: number) => (
                    <div key={index} className={`flex space-x-3 ${message.type === 'user' ? 'justify-end' : ''} chat-message`}>
                      {message.type === 'ai' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      )}
                      
                      <div className={`flex-1 ${message.type === 'user' ? 'max-w-sm' : ''}`}>
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'ai' 
                            ? message.score 
                              ? 'bg-green-50 border border-green-200' 
                              : 'bg-gray-50'
                            : 'bg-blue-600 text-white rounded-tr-md'
                        } ${message.type === 'ai' ? 'rounded-tl-md' : ''}`}>
                          {message.score && (
                            <div className="flex items-center mb-2">
                              <i className="fas fa-check-circle text-green-600 mr-2"></i>
                              <span className="font-semibold text-green-800">Feedback</span>
                              <span className="ml-auto text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
                                Score: {message.score}/10
                              </span>
                            </div>
                          )}
                          <p className={message.type === 'ai' ? 'text-gray-900' : 'text-white'}>
                            {message.content}
                          </p>
                          {message.feedback && (
                            <div className="mt-3 bg-green-100 rounded-lg p-3">
                              <div className="text-sm text-green-800 font-medium mb-1">💡 Detailed Feedback:</div>
                              <p className="text-sm text-green-700">{message.feedback}</p>
                            </div>
                          )}
                          {message.suggestions && message.suggestions.length > 0 && (
                            <div className="mt-2 bg-blue-100 rounded-lg p-3">
                              <div className="text-sm text-blue-800 font-medium mb-1">📝 Suggestions:</div>
                              <ul className="text-sm text-blue-700 list-disc list-inside">
                                {message.suggestions.map((suggestion: string, idx: number) => (
                                  <li key={idx}>{suggestion}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className={`text-xs text-gray-500 mt-2 ${message.type === 'user' ? 'text-right' : ''}`}>
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      </div>

                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Input Area */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <Textarea 
                      placeholder="Type your answer here..." 
                      rows={3}
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      className="resize-none"
                      data-testid="textarea-message"
                    />
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                      <span data-testid="text-character-count">{userMessage.length} / 500 characters</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!userMessage.trim()}
                      className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center"
                      data-testid="button-send"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send
                    </Button>
                    <Button 
                      onClick={handleVoiceInput}
                      className={`${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'} text-white flex items-center justify-center`}
                      data-testid="button-voice"
                    >
                      <svg className={`w-4 h-4 mr-2 ${isListening ? 'pulse-dot' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      {isListening ? 'Stop' : 'Voice'}
                    </Button>
                  </div>
                </div>

                {/* Voice Recording Indicator */}
                {isListening && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl" data-testid="voice-indicator">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full pulse-dot"></div>
                      <span className="text-red-700 font-medium text-center">Recording... Speak clearly into your microphone</span>
                    </div>
                    {transcript && (
                      <div className="mt-2 text-sm text-red-600 text-center">
                        Transcript: {transcript}
                      </div>
                    )}
                  </div>
                )}

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setCurrentSessionId(null)}
                    className="bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center"
                    data-testid="button-end-session"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                    End Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
