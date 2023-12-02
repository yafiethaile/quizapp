import Quiz from './quiz'

export default function easyQuizPage () {
    return (
        <main className="bg-gradient-to-b from-orange-300 to-orange-400 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl text-center py-6">Quiz Level: EASY</h1>
        <Quiz />
      </main>
    );
}