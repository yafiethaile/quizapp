"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleLinkHover = (customMessage) => {
    setMessage(customMessage);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center relative bg-gradient-to-b from-orange-300 to-orange-400">
      
      <p>
        <p className= "text-black font-mono font-extrabold text-lg p-2">
        CHOOSE YOUR DIFFICULTY:
        </p>
        <Link
          href="/easyQuiz"
          className="relative block mb-3 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-green-900 
           moveable-button group hover:translate-y-1 transition-transform"
          onMouseEnter={() => handleLinkHover('This is a quiz for people who don\'t know much about Dragon Ball. DIFFICULTY: EASY')}
          onMouseLeave={() => handleLinkHover('')}
        >
          BASE FORM
          {message && (
            <span className="absolute left-0 transform -translate-x-full bg-gray-800 text-white p-2 rounded">
              {message}
            </span>
          )}
        </Link>
        <Link
          href="/mediumQuiz"
          className="relative block mb-3 border p-6 border-spacing-2 bg-orange-300 hover:bg-orange-400 text-yellow-900 
          font-semibold moveable-button group hover:translate-y-1 transition-transform"
          onMouseEnter={() => handleLinkHover('This is a quiz for familiar with Dragon Ball but are not well versed. DIFFICULTY: INTERMEDIATE')}
          onMouseLeave={() => handleLinkHover('')}
        >
          SUPER SAIYAN
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
            </span>
          )}
        </Link>
        <Link
          href="/difQuiz"
          className="relative block mb-3 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-red-900 
          font-bold moveable-button group hover:translate-y-1 transition-transform"
          onMouseEnter={() => handleLinkHover('This quiz is for fans who have reached the level the deities. DIFFICULTY: HARD')}
          onMouseLeave={() => handleLinkHover('')}
        >
          SUPER SAIYAN GOD
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
            </span>
          )}
        </Link>
        <Link
          href="/hardCoreQuiz"
          className="relative block mb-3 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-red-500 
          font-extrabold  moveable-button group hover:translate-y-1 transition-transform"
          onMouseEnter={() => handleLinkHover('This quiz is for fans who have mastered the technique of the Gods. DIFFICULTY: HARDCORE')}
          onMouseLeave={() => handleLinkHover('')}
        >
          ULTRA INSTINCT
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-red-500 p-2 rounded">
            </span>
          )}
        </Link>
      </p>
    </main>
  );
}