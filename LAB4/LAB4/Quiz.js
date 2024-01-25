// Quiz.js
import React, { useEffect, useState } from 'react';
import { QuizProvider, useQuizContext } from './QuizContext';

const QuizQuestion = ({ question, onNext, isLastQuestion }) => {
  const { selectedAnswers, setSelectedAnswers } = useQuizContext();

  const handleInputChange = (answerIndex, value) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [question.index]: { ...prevSelectedAnswers[question.index], [answerIndex]: value },
    }));
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.answers.map((answer, answerIndex) => (
          <li
            key={answerIndex}
            style={{
              marginBottom: '10px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #ddd',
            }}
          >
            <label style={{ display: 'block', padding: '10px', borderRadius: '8px' }}>
              <input
                type="radio"
                name={`question${question.index}`}
                value={answer}
                checked={selectedAnswers[question.index]?.[answerIndex] === answer}
                onChange={() => handleInputChange(answerIndex, answer)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <p>
        {isLastQuestion ? (
          <button onClick={onNext} style={{backgroundColor:"red", color:"white",  border: '1px solid #ddd',borderRadius: '8px',fontSize:'20px'}}>Finish Quiz</button>
        ) : (
          <button onClick={onNext} style={{backgroundColor:"red", color:"white",  border: '1px solid #ddd',borderRadius: '8px',fontSize:'20px'}}>Next</button>
        )}
      </p>
    </div>
  );
};

const Quiz = () => {
  const { selectedAnswers, setSelectedAnswers } = useQuizContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const quizData = [
    {
      index: 0,
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system',
      ],
      correctAnswer: 'A JavaScript library for building user interfaces',
    },
    {
      index: 1,
      question: 'What is JSX?',
      answers: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript',
      ],
      correctAnswer: 'A syntax extension for JavaScript',
    },
  ];

  const handleNext = () => {
    // Loop through all questions and check for correct answers
    quizData.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index]?.[0];
      const correctAnswer = question.correctAnswer;
      if (selectedAnswer === correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (quizCompleted) {
      console.log('Your Score:', score);
    }
  }, [score, quizCompleted]);

  return (
    <div>
      {!quizCompleted && (
        <h1 style={{ color: 'red' }}>{`Question ${currentQuestionIndex + 1}`}</h1>
      )}
      {!quizCompleted ? (
        <QuizQuestion
          question={quizData[currentQuestionIndex]}
          onNext={handleNext}
          isLastQuestion={currentQuestionIndex === quizData.length - 1}
        />
      ) : (
        <>
          <p style={{ color: 'red', fontSize: '50px', fontWeight: 'inherit' }}>Quiz Completed!</p>
          <p>Your Score: {score} / {quizData.length}</p>
        </>
      )}
    </div>
  );
};

const QuizApp = () => {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
};

export default QuizApp;
