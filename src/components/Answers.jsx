import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import he from 'he';
import Coin3D from './Coin3D';

//Tạo đối tượng Audio cho âm thanh đúng và sai
const correctSound = new Audio('/sounds/correct.mp3');
const incorrectSound = new Audio('/sounds/incorrect.mp3');

const Answers = ({ setTimeLeft }) => {
  const { state, dispatch } = useContext(QuizContext);
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const correctAnswer = he.decode(currentQuestion.correct_answer);
  const shuffledAnswers = currentQuestion.shuffledAnswers.map((answer) => he.decode(answer));
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [medalNotification, setMedalNotification] = useState(null);

  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
    setIsAnimating(true);// Kích hoạt hiệu ứng xoay 3D
    const selectedAnswer = shuffledAnswers[index];
    const isCorrect = selectedAnswer === correctAnswer;


    //Phát âm thanh dựa trên đáp án đúng/sai
    if (isCorrect) {
      correctSound.play().catch((error) => console.error('Error playing correct sound:', error));
    } else {
      incorrectSound.play().catch((error) => console.error('Error playing incorrect sound:', error));
    }

    // Kiểm tra huy chương
    const newStreak = isCorrect ? state.streak + 1 : 0;
    let medalMessage = null;
    if (newStreak === 5 && (!state.highestMedal || state.highestMedal === null)) {
      medalMessage = 'Bạn đã nhận được huy chương đồng!';
    } else if (newStreak === 9 && (!state.highestMedal || state.highestMedal === 'copper')) {
      medalMessage = 'Bạn đã nhận được huy chương bạc!';
    } else if (newStreak === 10 && (!state.highestMedal || state.highestMedal === 'copper' || state.highestMedal === 'silver')) {
      medalMessage = 'Bạn đã nhận được huy chương vàng!';
    }
    if (medalMessage) {
      setMedalNotification(medalMessage);
      setTimeout(() => setMedalNotification(null), 3000); // Thông báo biến mất sau 3s
    }

    // Đợi hiệu ứng xoay hoàn tất (0.5s) rồi xử lý logic
    setTimeout(() => {
      dispatch({
        type: 'SUBMIT_ANSWER',
        payload: { isCorrect },
      });
      if (state.currentQuestionIndex + 1 < state.questions.length) {
        dispatch({ type: 'NEXT_QUESTION' });
        setTimeLeft(30); // Reset thời gian khi trả lời
      } else {
        dispatch({ type: 'FINISH_QUIZ' });
      }
      setSelectedAnswerIndex(-1);
      setIsAnimating(false);// Đặt lại trạng thái xoay
    }, 1500);
  };

  return (
    <div className="d-flex flex-column">
      {medalNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2 text-success"
        >
          {medalNotification}
        </motion.div>
      )}
      {selectedAnswerIndex !== -1 && !isAnimating && (
        <Coin3D type={shuffledAnswers[selectedAnswerIndex] === correctAnswer ? 'gold' : 'copper'} />
      )}
      {shuffledAnswers.map((answer, index) => {
        let className = `btn btn-outline-primary mb-2 ${
          selectedAnswerIndex === index
            ? answer === correctAnswer
              ? 'btn-success'
              : 'btn-danger'
            : ''
          }`;
        return (
          <motion.button
            key={index}
            whileHover={{
              x: [-2, 2, -2, 2, 0], // Rung nhẹ theo trục X
              transition: { duration: 0.4, repeat: Infinity, repeatType: 'reverse', delay: .1 },
            }}
            animate={
              selectedAnswerIndex === index && isAnimating
                ? {
                  rotateY: 360,// Xoay 360 độ
                  transition: { duration: .3, ease: 'easeInOut' },
                }
                : { rotateY: 0 }
            }
            style={{
              transformStyle: 'preserve-3d', // Đảm bảo hiệu ứng 3D hoạt động
            }}
            className={className}
            onClick={() => handleAnswerSelection(index)}
            disabled={selectedAnswerIndex !== -1} // Vô hiệu hóa nút khi đã chọn đáp án
          >
            {he.decode(answer)}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Answers;