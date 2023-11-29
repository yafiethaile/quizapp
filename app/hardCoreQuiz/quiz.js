"use client";
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Who is the main protagonist of Dragon Ball?',
      options: ['Vegeta', 'Piccolo', 'Goku', 'Gohan'],
      correctAnswer: 'Goku',
    },

    {
      question: 'Who are Goku\'s sons?',
      options: ['Gohan & Goten', 'Gohan and Trunks', 'Goten & Trunks', 'Goten & Krillin'],
      correctAnswer: 'Gohan & Goten',
    },

    {
      question: 'What is Goku\'s race?',
      options: ['Human', 'Namekian', 'Saiyan', 'Human'],
      correctAnswer: 'Saiyan',
    },

    {
      question: 'Who is the main antagonist of the first story arc of Dragon Ball Z?',
      options: ['Nappa', 'Raditz', 'Vegeta', 'Freeza'],
      correctAnswer: 'Vegeta',
    },

    {
      question: 'What is the name of the first major transformation of Dragon Ball Z?',
      options: ['Fusion', 'Ultra Instinct', 'Super Saiyan', 'Kaioken'],
      correctAnswer: 'Super Saiyan',
    }

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
    <div className="border p-4">
      {showScore ? (
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold text-white">Your Score: {score} / {totalQuestions}</h2>
          <button onClick={restartQuiz} className="bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-400
          moveable-button group active:translate-x-2 transition-transform">Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Question {currentQuestion + 1}/{totalQuestions}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <ul className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)} className="border p-2 cursor-pointer text-black bg-orange-300 hover:bg-orange-400 
              moveable-button group active:translate-x-2 transition-transform">
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