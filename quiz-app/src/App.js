import logo from './logo.svg';
import './App.css';
import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
  return (
    <QuizProvider>
      <div className="container mx-auto p-4">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
