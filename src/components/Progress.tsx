import React, { useState } from 'react';
import { TrendingUp, Calendar, Target, Award, Plus, CheckCircle } from 'lucide-react';

export function Progress() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Attend 3 therapy sessions', progress: 2, target: 3, completed: false },
    { id: 2, title: 'Complete daily meditation', progress: 14, target: 30, completed: false },
    { id: 3, title: 'Join support group', progress: 1, target: 1, completed: true },
    { id: 4, title: 'Read recovery book', progress: 3, target: 5, completed: false }
  ]);

  const [newGoal, setNewGoal] = useState({ title: '', target: 1 });
  const [showAddGoal, setShowAddGoal] = useState(false);

  const addGoal = () => {
    if (newGoal.title.trim()) {
      setGoals([...goals, {
        id: Date.now(),
        title: newGoal.title,
        progress: 0,
        target: newGoal.target,
        completed: false
      }]);
      setNewGoal({ title: '', target: 1 });
      setShowAddGoal(false);
    }
  };

  const updateProgress = (id: number, increment: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const newProgress = Math.max(0, Math.min(goal.target, goal.progress + increment));
        return {
          ...goal,
          progress: newProgress,
          completed: newProgress >= goal.target
        };
      }
      return goal;
    }));
  };

  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;
  const overallProgress = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  const milestones = [
    { id: 1, title: 'First therapy session completed', date: '2024-01-15', achieved: true },
    { id: 2, title: 'Joined support group', date: '2024-01-20', achieved: true },
    { id: 3, title: 'One week sober', date: '2024-01-22', achieved: true },
    { id: 4, title: 'One month milestone', date: '2024-02-15', achieved: false },
    { id: 5, title: 'Completed assessment', date: '2024-01-10', achieved: true }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Progress</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Monitor your recovery journey, set goals, and celebrate milestones.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{completedGoals}</div>
            <div className="text-blue-100">Goals Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{Math.round(overallProgress)}%</div>
            <div className="text-blue-100">Overall Progress</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{milestones.filter(m => m.achieved).length}</div>
            <div className="text-blue-100">Milestones Achieved</div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm text-blue-100 mb-2">
            <span>Progress to Recovery Goals</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <div className="w-full bg-blue-500 rounded-full h-3">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Goals Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Recovery Goals</h2>
            </div>
            <button
              onClick={() => setShowAddGoal(true)}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>

          {showAddGoal && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <input
                type="text"
                placeholder="Enter your goal..."
                value={newGoal.title}
                onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg mb-3"
              />
              <div className="flex items-center gap-2 mb-3">
                <label className="text-sm text-gray-600">Target:</label>
                <input
                  type="number"
                  min="1"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({...newGoal, target: parseInt(e.target.value)})}
                  className="w-20 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addGoal}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add Goal
                </button>
                <button
                  onClick={() => setShowAddGoal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className={`p-4 rounded-lg border-2 ${
                goal.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                  {goal.completed && <CheckCircle className="h-5 w-5 text-green-600" />}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        goal.completed ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{goal.progress}/{goal.target}</span>
                </div>

                {!goal.completed && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateProgress(goal.id, 1)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => updateProgress(goal.id, -1)}
                      className="bg-gray-400 text-white px-3 py-1 rounded text-sm hover:bg-gray-500 transition-colors"
                    >
                      -1
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Milestones</h2>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className={`flex items-center gap-4 p-4 rounded-lg ${
                milestone.achieved ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  milestone.achieved ? 'bg-emerald-500' : 'bg-gray-300'
                }`} />
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    milestone.achieved ? 'text-emerald-900' : 'text-gray-600'
                  }`}>{milestone.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                  </div>
                </div>
                {milestone.achieved && (
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-900">This Week's Summary</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Days Active</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600 mb-2">3</div>
            <div className="text-gray-600">Goals Progressed</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-gray-600">New Milestones</div>
          </div>
        </div>
      </div>
    </div>
  );
}