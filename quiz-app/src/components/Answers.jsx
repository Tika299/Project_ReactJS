import { useState } from 'react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import he from 'he';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Answers = () => {
  const { state, dispatch } = useContext(QuizContext);
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct_answer;
  const allAnswers = shuffleArray([...currentQuestion.incorrect_answers, correctAnswer]);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);

  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
    const selectedAnswer = allAnswers[index];
    const isCorrect = selectedAnswer === correctAnswer;

    setTimeout(() => {
      dispatch({
        type: 'SUBMIT_ANSWER',
        payload: { isCorrect },
      });
      if (state.currentQuestionIndex + 1 < state.questions.length) {
        dispatch({ type: 'NEXT_QUESTION' });
      } else {
        dispatch({ type: 'FINISH_QUIZ' });
      }
      setSelectedAnswerIndex(-1);
    }, 1000);
  };

  return (
    <div className="flex flex-col space-y-2">
      {allAnswers.map((answer, index) => {
        let className = 'p-4 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300';
        if (selectedAnswerIndex === index) {
          className += allAnswers[index] === correctAnswer ? ' bg-green-500' : ' bg-red-500';
        }
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={className}
            onClick={() => handleAnswerSelection(index)}
          >
            {he.decode(answer)}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Answers;