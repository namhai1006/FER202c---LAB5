import React, { useReducer } from 'react';

// Define initial state
const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    // Add more questions here
    // ...
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

// Reducer function
const questionReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    case 'NEXT_QUESTION':
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: '',
        showScore: state.currentQuestion === state.questions.length - 1,
      };
    case 'RESTART_QUIZ':
      return {
        ...initialState,
        questions: state.questions, // Preserve the questions array
      };
    default:
      return state;
  }
};

// QuestionBank component
const QuestionBank = () => {
    const [state, dispatch] = useReducer(questionReducer, initialState);
  
    const handleOptionSelect = (option) => {
      dispatch({ type: 'SELECT_OPTION', payload: option });
    };
  
    const handleNextQuestion = () => {
      dispatch({ type: 'NEXT_QUESTION' });
    };
  
    const handleRestartQuiz = () => {
      dispatch({ type: 'RESTART_QUIZ' });
    };
  
    const { questions, currentQuestion, selectedOption, score, showScore } = state;
  
    return (
      <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', margin: '20px' }}>
        {showScore ? (
          <div>
            <h2>Your Score: {score} / {questions.length}</h2>
            <button onClick={handleRestartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion} disabled={!selectedOption}>Next Question</button>
          </div>
        )}
      </div>
    );
  };
  
  export default QuestionBank;
