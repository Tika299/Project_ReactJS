import { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import he from 'he';

const Question = () => {
  const { state } = useContext(QuizContext);
  const { questions, currentQuestionIndex } = state;
  const question = questions[currentQuestionIndex].question;

  return (
    <div className="text-center mb-4">
      <h2 className="text-2xl font-semibold">{he.decode(question)}</h2>
    </div>
  );
};

export default Question;