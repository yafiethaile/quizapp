import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">DRAGON BALL QUIZ </h1>
      
      <p>
      <Link href="/quizzes" className="block mb-2">EASY</Link>
      </p>
      
    </main>
  )
}
