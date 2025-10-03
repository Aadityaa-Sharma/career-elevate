import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/ui/button";
import { Card, CardContent } from "../../shared/components/ui/card";
import { Input } from "../../shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/components/ui/select";

interface Question {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  tags: string[];
}

export default function QuestionBank() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Mock questions data
  const questions: Question[] = [
    {
      id: "1",
      title: "Explain the difference between let, const, and var in JavaScript",
      description: "This is a fundamental JavaScript question that tests your understanding of variable declarations and their scoping behavior.",
      category: "Frontend",
      difficulty: "Easy",
      tags: ["javascript", "variables", "scoping"]
    },
    {
      id: "2",
      title: "How would you implement a debounce function?",
      description: "A common interview question that tests your understanding of higher-order functions and performance optimization.",
      category: "Frontend",
      difficulty: "Medium",
      tags: ["javascript", "functions", "performance"]
    },
    {
      id: "3",
      title: "Design a URL shortener service",
      description: "A system design question that tests your ability to think about scalability, data storage, and API design.",
      category: "System Design",
      difficulty: "Hard",
      tags: ["system-design", "scalability", "databases"]
    },
    {
      id: "4",
      title: "Tell me about a time you had to work with a difficult team member",
      description: "A behavioral question that tests your interpersonal skills and conflict resolution abilities.",
      category: "Behavioral",
      difficulty: "Medium",
      tags: ["behavioral", "teamwork", "conflict-resolution"]
    },
    {
      id: "5",
      title: "Implement a binary search algorithm",
      description: "A classic algorithm question that tests your understanding of search algorithms and time complexity.",
      category: "Algorithms",
      difficulty: "Medium",
      tags: ["algorithms", "search", "binary-search"]
    }
  ];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = selectedDifficulty === "all" || question.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-green-100 text-green-700";
      case "medium": return "bg-yellow-100 text-yellow-700";
      case "hard": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend": return "bg-blue-100 text-blue-700";
      case "backend": return "bg-purple-100 text-purple-700";
      case "algorithms": return "bg-indigo-100 text-indigo-700";
      case "system design": return "bg-red-100 text-red-700";
      case "behavioral": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-8">
      <div className="max-w-6xl mx-auto">
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
          <span className="text-gray-700 font-medium">Question Bank</span>
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
              <h2 className="text-3xl font-bold text-gray-900">Question Bank</h2>
              <p className="text-gray-600">Practice with curated interview questions</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span data-testid="text-progress">Progress: {Math.floor(questions.length * 0.45)}/{questions.length}</span>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <Input 
                    type="text" 
                    placeholder="Search questions by topic or keyword..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="input-search"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="min-w-[140px] bg-white border-gray-300" data-testid="select-difficulty">
                    <SelectValue placeholder="All Difficulty" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="all">All Difficulty</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="min-w-[140px] bg-white border-gray-300" data-testid="select-category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Algorithms">Algorithms</SelectItem>
                    <SelectItem value="System Design">System Design</SelectItem>
                    <SelectItem value="Behavioral">Behavioral</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="min-w-[140px]" data-testid="select-type">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="system-design">System Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Question List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredQuestions.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                </CardContent>
              </Card>
            ) : (
              filteredQuestions.map((question: Question, index: number) => (
                <Card key={question.id} className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] slide-in" style={{ animationDelay: `${index * 0.1}s` }} data-testid={`card-question-${question.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(question.category)}`}>
                            {question.category}
                          </span>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{question.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-tag mr-1"></i>
                          <span>{question.tags.join(", ")}</span>
                        </div>
                      </div>
                      <Button 
                        className="ml-4 bg-blue-600 text-white hover:bg-blue-700" 
                        data-testid={`button-start-${question.id}`}
                      >
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Overview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Questions Answered</span>
                    <span className="font-semibold text-blue-600" data-testid="text-answered-count">
                      {Math.floor(questions.length * 0.38)}/{questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "38%" }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600" data-testid="text-correct-count">
                        {Math.floor(questions.length * 0.32)}
                      </div>
                      <div className="text-xs text-gray-600">Correct</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600" data-testid="text-incorrect-count">
                        {Math.floor(questions.length * 0.06)}
                      </div>
                      <div className="text-xs text-gray-600">Incorrect</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Study Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Practice consistently for 30 minutes daily
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Review incorrect answers thoroughly
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Focus on weak areas identified by analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
