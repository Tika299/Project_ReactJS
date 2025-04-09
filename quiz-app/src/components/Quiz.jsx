import { useContext, useState } from 'react';
import QuizContext from '../context/QuizContext';
import { fetchQuestions } from '../services/api';
import Question from '../context/Question';
import Answers from './Answers';
import ProgressBar from './ProgressBar';

const categories = [
  { id: '', name: 'All Categories' },
  { id: '9', name: 'General Knowledge' },
  { id: '21', name: 'Sports' },
];

const difficulties = ['easy', 'medium', 'hard'];

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleStartQuiz = async () => {
    setLoading(true);
    try {
      const questions = await fetchQuestions(10, selectedCategory, selectedDifficulty);
      dispatch({ type: 'SET_QUESTIONS', payload: questions });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (state.questions.length > 0) {
    if (state.isQuizFinished) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finished</h2>
          <p className="mb-2">Your score: {state.score} / {state.questions.length}</p>
          <p className="mb-4">High Score: {state.highScore}</p>
          <button
            onClick={() => dispatch({ type: 'RESET_QUIZ' })}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Question />
          <Answers />
          <ProgressBar className="mt-4" />
        </div>
      );
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Select Category and Difficulty</h2>
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Any Difficulty</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>
      </div>
      <button
        disabled={isLoading}
        onClick={handleStartQuiz}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        Start Quiz
      </button>
      {isLoading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">Error: {error}</div>}
    </div>
  );
};

export default Quiz;