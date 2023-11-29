"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleLinkHover = (customMessage) => {
    setMessage(customMessage);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        <Link
          href="/easyQuiz"
          className="relative block mb-2 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-black"
          onMouseEnter={() => handleLinkHover('This is a quiz for people who don\'t know much about Dragon Ball')}
          onMouseLeave={() => handleLinkHover('')}
        >
          EASY
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
              {message}
            </span>
          )}
        </Link>
        <Link
          href="/mediumQuiz"
          className="relative block mb-2 border p-6 border-spacing-2 bg-orange-300 hover:bg-orange-400 text-black"
          onMouseEnter={() => handleLinkHover('This is a quiz for familiar with Dragon Ball but are not well versed')}
          onMouseLeave={() => handleLinkHover('')}
        >
          INTERMEDIATE
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
            </span>
          )}
        </Link>
        <Link
          href="/difQuiz"
          className="relative block mb-2 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-black"
          onMouseEnter={() => handleLinkHover('This is a quiz for fans who are well versed in Dragon Ball')}
          onMouseLeave={() => handleLinkHover('')}
        >
          DIFFICULT
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
            </span>
          )}
        </Link>
        <Link
          href="/hardCoreQuiz"
          className="relative block mb-2 border p-6 border-spacing-2 text-center bg-orange-300 hover:bg-orange-400 text-black"
          onMouseEnter={() => handleLinkHover('This is a quiz for fans who know essentially everything about Dragon Ball')}
          onMouseLeave={() => handleLinkHover('')}
        >
          HARDCORE
          {message && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
            </span>
          )}
        </Link>
      </p>
    </main>
  );
}