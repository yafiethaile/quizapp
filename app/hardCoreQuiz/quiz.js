"use client";
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Which dragon ball does Goku keep as a memento from his grandfather?',
      options: ['4 star', '7 star', '2 star', '3 star'],
      correctAnswer: '4 star',
    },

    {
      question: 'What is the name of the being who created the super dragon balls?',
      options: ['Kami', 'Guru', 'Dende', 'Zalama'],
      correctAnswer: 'Zalama',
    },

    {
      question: 'What ability does Bardock gain after him and his crew are defeated?',
      options: ['Flight', 'Immortality', 'Future sight', 'Regeneration'],
      correctAnswer: 'Future sight',
    },

    {
      question: 'What was Goku\'s power level when he used Kaio-Ken against Ginyu?',
      options: ['180,000', 'Over 9000', '150,000,000', '90,000'],
      correctAnswer: '180,000',
    },

    {
      question: 'In what order did Goku defeat Burter, Jeice and Recoome?',
      options: ['Burter, Jeice, Recoome', 'Recoome, Burter Jeice', 'Jeice, Burter, Recoome', 'None. He didn\'t defeat Jeice'],
      correctAnswer: 'None. He didn\'t defeat Jeice',
    },

    {
      question: 'What is Final Form Freeza\'s power level at 50% on namek?',
      options: ['140,000,000', '60,000,000', '3,000,000', '150,000,000'],
      correctAnswer: '60,000,000',
    },

    {
      question: 'Why did Vegito defuse even though the Potara fusion has no time limit?',
      options: ['Vegito wanted to defuse', 'He got too weak and had no energy to sustain fusion', 'Goku and Vegeta are mortal', 'The supreme kai lied to them'],
      correctAnswer: 'Goku and Vegeta are mortal',
    },

    {
      question: 'What event caused Vegeta to cry on Namek?',
      options: ['Being beaten up by Freeza', 'Not becoming immortal', 'Freeza kicking away his strongest blast', 'Being defeated by Goku'],
      correctAnswer: 'Freeza kicking away his strongest blast',
    },

    {
      question: 'What is the gravity on Pui-Pui\'s home planet?',
      options: ['100x earth gravity', '10x earth gravity', '50x earth gravity', '20x earth gravity'],
      correctAnswer: '10x earth gravity',
    },

    {
      question: 'How long does it take Goku to arrive on Planet Namek?',
      options: ['3 days', '7 days', '6 days', '5 days'],
      correctAnswer: '6 days',
    },

    {
      question: 'How long did it take for Master Roshi to develop the Kamehameha?',
      options: ['20 years', '50 years', '30 years', '10 years'],
      correctAnswer: '50 years',
    },

    {
      question: 'Which group of people were stated to be able to defeat Freeza in one blow?',
      options: ['The supreme kai\'s', 'The pride troopers', 'The God\'s of destruction', 'The angels'],
      correctAnswer: 'The supreme kai\'s',
    },

    {
      question: 'What did Vegeta say Goku\'s power level was when he fought Nappa?',
      options: ['Over 9000', 'Over 8000', 'Over 6000', 'Over 7000'],
      correctAnswer: 'Over 8000',
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