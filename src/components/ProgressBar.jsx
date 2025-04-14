import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const ProgressBar = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestionIndex, questions } = state;
  const totalQuestions = questions.length;
  const progress = (currentQuestionIndex + 1) / totalQuestions * 100;

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-2 text-muted">
        <span>Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}</span>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;