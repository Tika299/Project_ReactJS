import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import Coin3D from './Coin3D';

const MedalPage = () => {
  const { state } = useContext(QuizContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-4 p-4 bg-dark text-white rounded shadow text-center" style={{ maxWidth: '600px' }}>
      <h1 className="display-4 text-primary mb-4">Huy Chương Của Bạn</h1>
      {state.highestMedal ? (
        <>
          <p className="lead mb-4">
            Huy chương cao nhất của bạn: {state.highestMedal === 'gold' ? 'Vàng' : state.highestMedal === 'silver' ? 'Bạc' : 'Đồng'}
          </p>
          <div style={{ marginBottom: '50px' }}> {/* Thêm khoảng cách dưới Coin3D */}
            <Coin3D type={state.highestMedal} />
          </div>
        </>
      ) : (
        <p className="lead mb-4">Bạn chưa nhận được huy chương nào!</p>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="btn btn-primary btn-lg"
        onClick={() => navigate('/')}
      >
        Quay lại
      </motion.button>
    </div>
  );
};

export default MedalPage;