"use client";
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Who is the main protagonist of Dragon Ball?',
      options: ['Vegeta', 'Piccolo', 'Goku', 'Gohan'],
      correctAnswer: 'Goku',
    },

    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (selectedOption) => {
    if (!showScore) {
      const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
      setUserAnswers([...userAnswers, { question: questions[currentQuestion].question, answer: selectedOption, isCorrect }]);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
  };

  const score = userAnswers.filter(answer => answer.isCorrect).length;
  const totalQuestions = questions.length;

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {totalQuestions}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}/{totalQuestions}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;