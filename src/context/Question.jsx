import { useContext } from 'react';
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import he from 'he';

const Question = () => {
  const { state } = useContext(QuizContext);
  const { questions, currentQuestionIndex } = state;
  const question = questions[currentQuestionIndex].question;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-4"
    >
      <h2 className="h2 text-dark">{he.decode(question)}</h2>
    </motion.div>
  );
};

export default Question;