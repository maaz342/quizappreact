import React, { useState } from 'react';
import '../css/styles.module.css'
const questions = [
  {
    question: "HTML Stands For _________",
    options: [
      "Anchor Text Language",
      "HTML",
      "Case Cading Style Sheet",
      "HyperText markup language",
    ],
    correctAns: "HyperText markup language",
  },
  {
    question: "CSS Stands For _________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "JS Stands For _________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "DOM Stands For _________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "RAM Stands For _________",
    options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
    correctAns: "Random Access Memory",
  },
  {
    question: "ROM Stands For _________",
    options: [
      "Hyper Text Markup Language",
      "html",
      "HTml",
      "Read Only Memory",
    ],
    correctAns: "Read Only Memory",
  },
];

export const QuizScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.correctAns) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mt-4' style={{ maxWidth: '500px' }}>
        <div className='card-body'>
          <h5 className='card-title text-center'>Quiz</h5>
          {currentIndex < questions.length ? (
            <>
              <p className='text-center'>
                Question {currentIndex + 1}/{questions.length}
              </p>
              <p className='text-center'>{questions[currentIndex].question}</p>
              <div className='row'>
                {questions[currentIndex].options.map((option, index) => (
                  <div key={index} className='col-md-6 p-2'>
                    <button
                      onClick={() => handleAnswerClick(option)}
                      className='btn btn-primary btn-block'
                    >
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className='text-center'>
              <h6>Result</h6>
              <p>Your score: {score} out of {questions.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
