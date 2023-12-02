"use client";
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Who kills Freeza?',
      options: ['Vegeta', 'Piccolo', 'Goku', 'Future Trunks'],
      correctAnswer: 'Future Trunks',
    },

    {
      question: 'What is the name of the thing saiyans transform into when they look at a full moon?',
      options: ['Super Saiyan 3', 'Super Simian', 'Giant Monkey', 'Great Ape'],
      correctAnswer: 'Great Ape',
    },

    {
      question: 'What is Goku\'s real name?',
      options: ['Turles', 'Kakarot', 'Bojack', 'Nappa'],
      correctAnswer: 'Kakarot',
    },

    {
      question: 'What is the name of the God Of Destruction in Universe 7?',
      options: ['Whis', 'Bills', 'Beerus', 'Champa'],
      correctAnswer: 'Beerus',
    },

    {
      question: 'Who defeats Super Perfect Cell?',
      options: ['Goku', 'Gohan', 'Vegeta', 'Trunks'],
      correctAnswer: 'Gohan',
    },

    {
      question: 'What do the Z fighters use to heal their wounds instantly?',
      options: ['Senzu', 'Power Pole', 'Nimbus', 'Capsule Corp.'],
      correctAnswer: 'Senzu',
    },

    {
      question: 'Which techniques does Goku learn from King Kai?',
      options: ['Solar Flare and Kamehameha', 'Kamehameha and Spirit Bomb', 'Kaioken and Kamehameha', 'Kaioken and Spirit Bomb'],
      correctAnswer: 'Kaioken and Spirit Bomb',
    },

    {
      question: 'What is the name of the fusion between Goku and Vegeta? (fusion dance)',
      options: ['Gokuta', 'Vegito', 'Vegeku', 'Gogeta'],
      correctAnswer: 'Gogeta',
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
    <div className="border p-4 rounded text-black">
      {showScore ? (
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold text-black">Your Score: {score} / {totalQuestions}</h2>
          <button onClick={restartQuiz} className="bg-orange-300 text-black py-2 px-4 rounded hover:bg-orange-400
          border border-black moveable-button group active:translate-x-2 transition-transform">Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-xl font-bold text-black">Question {currentQuestion + 1}/{totalQuestions}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <ul className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)} className="border p-2 cursor-pointer text-black bg-orange-300 hover:bg-orange-400 
              moveable-button group active:translate-x-2 transition-transform moveable-button group hover:translate-y-1 transition-transform">
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