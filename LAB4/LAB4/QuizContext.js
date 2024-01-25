// QuizContext.js
import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
