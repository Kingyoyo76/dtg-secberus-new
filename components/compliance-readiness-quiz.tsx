'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const quizQuestions = [
  {
    question: "How often do you conduct compliance audits?",
    options: ["Annually", "Quarterly", "Monthly", "We don't have a regular schedule"]
  },
  {
    question: "How long does it typically take to prepare for an audit?",
    options: ["Less than a week", "1-2 weeks", "3-4 weeks", "More than a month"]
  },
  {
    question: "How confident are you in your current compliance monitoring?",
    options: ["Very confident", "Somewhat confident", "Not very confident", "Not at all confident"]
  }
]

export function ComplianceReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          How Prepared Is Your Organization for Its Next Audit?
        </h2>
        {!showResults ? (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start"
                  onClick={handleAnswer}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Thank you for completing the quiz!</h3>
            <p className="mb-6">Based on your answers, we'd love to show you how DTG can enhance your compliance readiness.</p>
            <Button variant="default" size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Schedule a Free Consultation
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

