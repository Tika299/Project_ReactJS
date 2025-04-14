import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const ProgressBar = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestionIndex, questions } = state;
  const totalQuestions = questions.length;
  const progress = (currentQuestionIndex + 1) / totalQuestions * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded">
      <div
        className="bg-blue-500 h-2 rounded transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;