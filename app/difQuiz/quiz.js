"use client";
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Who created Majin Buu?',
      options: ['Bibidi', 'Babidi', 'Dabura', 'Beerus'],
      correctAnswer: 'Bibidi',
    },

    {
      question: 'How old was Goku when he won the 23rd World Martial Arts Tournament?',
      options: ['15', '11', '17', '18'],
      correctAnswer: '18',
    },

    {
      question: 'What is the name of the fusion between Goku and Vegeta? (Potara earrings)',
      options: ['Gogeta', 'Brokuta', 'Vegito', 'Vegita'],
      correctAnswer: 'Vegito',
    },

    {
      question: 'Who is referred to as the Turtle Hermit?',
      options: ['Kami', 'King Kai', 'Raditz', 'Master Roshi'],
      correctAnswer: 'Master Roshi',
    },

    {
      question: 'Who destroys Planet Vegeta?',
      options: ['Chilled', 'Freeza', 'Cooler', 'King Cold'],
      correctAnswer: 'Freeza',
    },

    {
      question: 'What is the final transformation that Buu takes in Dragon Ball Z?',
      options: ['Kid Buu', 'Super Buu', 'Super Buu (Gohan Absorbed)', 'Super Buu (Gotenks Absorbed)'],
      correctAnswer: 'Kid Buu',
    },

    {
      question: 'How does Majin Buu kill Dabura?',
      options: ['With a Kamehameha', 'By impaling him', 'By turning him into a cookie and eating him', 'None of the above'],
      correctAnswer: 'By turning him into a cookie and eating him',
    },

    {
      question: 'How does Future Trunks die in the Android/Cell saga?',
      options: ['The earth exploding', 'The androids', 'Shot through the chest by Cell', 'None of the above'],
      correctAnswer: 'Shot through the chest by Cell',
    },

    {
      question: 'Who is known as the Legendary Super Saiyan?',
      options: ['Goku', 'Gohan', 'Vegeta', 'Broly'],
      correctAnswer: 'Broly',
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