import { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import { fetchQuestions } from '../services/api';
import Question from '../context/Question';
import Answers from './Answers';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'All Categories', id: '' },
  { name: 'History', id: 'history' },
  { name: 'War', id: 'war' },
];

const difficulties = ['easy', 'medium', 'hard'];

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Bộ đếm thời gian 30 giây
  const navigate = useNavigate();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleStartQuiz = async () => {
    setLoading(true);
    try {
      const questions = await fetchQuestions(10, selectedCategory, selectedDifficulty);
      const processedQuestions = questions.map((question) => {
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        const shuffledAnswers = shuffleArray(allAnswers);
        return { ...question, shuffledAnswers };
      });
      dispatch({ type: 'SET_QUESTIONS', payload: processedQuestions });
      setTimeLeft(30); // Reset thời gian khi bắt đầu quiz
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Kiểm tra kỷ lục mới
  useEffect(() => {
    if (state.isQuizFinished && state.score > state.highScore) {
      setIsNewHighScore(true);
    } else {
      setIsNewHighScore(false);
    }
  }, [state.isQuizFinished, state.score, state.highScore]);

  // Bộ đếm thời gian
  useEffect(() => {
    if (state.questions.length > 0 && !state.isQuizFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Dọn dẹp khi component unmount hoặc câu hỏi thay đổi
    } else if (timeLeft === 0 && !state.isQuizFinished) {
      // Hết thời gian, gửi đáp án sai và chuyển câu hỏi
      dispatch({
        type: 'SUBMIT_ANSWER',
        payload: { isCorrect: false },
      });
      if (state.currentQuestionIndex + 1 < state.questions.length) {
        dispatch({ type: 'NEXT_QUESTION' });
        setTimeLeft(30); // Reset thời gian cho câu hỏi mới
      } else {
        dispatch({ type: 'FINISH_QUIZ' });
      }
    }
  }, [timeLeft, state.questions.length, state.isQuizFinished, state.currentQuestionIndex, dispatch]);

  // Reset thời gian khi chuyển câu hỏi
  useEffect(() => {
    setTimeLeft(30); // Reset thời gian khi chuyển sang câu hỏi mới
  }, [state.currentQuestionIndex]);

  if (state.questions.length > 0) {
    if (state.isQuizFinished) {
      return (
        <div className="container mt-4 p-4 bg-white rounded shadow">
          <h1 className="display-4 text-center text-primary mb-4">Kết Quả Quiz</h1>
          <div className="text-center">
            <h2 className="h3 text-center text-dark mb-4">Quiz Đã Hoàn Thành</h2>
            <motion.div
              animate={
                isNewHighScore
                  ? {
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.5, repeat: 1 },
                  }
                  : {}
              }
            >
              <p className="lead mb-2">
                Điểm của bạn: {state.score} / {state.questions.length}
              </p>
            </motion.div>
            <AnimatePresence>
              {isNewHighScore && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-success mb-4"
                >
                  Kỷ lục mới!
                </motion.p>
              )}
            </AnimatePresence>
            <p className="mb-4">Điểm Cao Nhất: {state.highScore}</p>
            <div className="d-flex justify-content-center gap-3">
              <button
                onClick={() => {
                  dispatch({ type: 'RESET_QUIZ' });
                  setIsNewHighScore(false);
                }}
                className="btn btn-success btn-lg"
              >
                Chơi Lại
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/medal')}
              >
                Xem Huy Chương
              </motion.button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-4 p-4 bg-white rounded shadow">
          <h1 className="display-4 text-center text-primary mb-4">Thời Gian Quiz!</h1>
          <div className="text-center mb-4">
            <motion.p
              className={`h4 ${timeLeft <= 5 ? 'text-danger' : 'text-dark'}`}
              animate={timeLeft <= 5 ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } } : {}}
            >
              Thời gian còn lại: {timeLeft}s
            </motion.p>
          </div>
          <Question />
          <Answers setTimeLeft={setTimeLeft} /> {/* Truyền setTimeLeft để reset khi trả lời */}
          <ProgressBar />
        </div>
      );
    }
  }

  return (
    <div className="container mt-4 p-4 bg-white rounded shadow">
      <h2 className="h2 text-center text-dark mb-4">Chọn Danh Mục và Độ Khó</h2>
      <div className="mb-3">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-control"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="form-control"
        >
          <option value="">Bất kỳ Độ Khó</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={isLoading}
        onClick={handleStartQuiz}
        className="btn btn-primary w-100"
      >
        {isLoading ? 'Đang Tải...' : 'Bắt Đầu Quiz'}
      </button>
      {isLoading && <div className="text-center mt-4 text-muted">Đang tải câu hỏi...</div>}
      {error && <div className="alert alert-danger mt-4">Lỗi: {error}</div>}
    </div>
  );
};

export default Quiz;