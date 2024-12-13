import { useState } from 'react';
import styles from './quiz.module.css';

export const Quiz = () => {
  const qBank = [
    {
      id: 1,
      question: 'What is the capital of Haryana?',
      options: ['Yamunanagar', 'Panipat', 'Gurgaon', 'Chandigarh'],
      answer: 'Chandigarh',
    },
    {
      id: 2,
      question: 'What is the capital of Punjab?',
      options: ['Patiala', 'Ludhiana', 'Amritsar', 'Chandigarh'],
      answer: 'Chandigarh',
    },
    {
      id: 3,
      question: 'What is the capital of India?',
      options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      answer: 'Delhi',
    },
    {
      id: 4,
      question: 'What is the capital of Uttarakhad?',
      options: ['Roorkee', 'Haridwar', 'Dehradun', 'Nanital'],
      answer: 'Dehradun',
    },
    {
      id: 5,
      question: 'What is capital of Uttar Pradesh?',
      options: ['GB Nagar', 'Lucknow', 'Prayagraj', 'Agra'],
      answer: 'Lucknow',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === qBank[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < qBank.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }

    setSelectedOption('');
  };

  const currentQuestion = qBank[currentQuestionIndex];

  return (
    <div className={styles.overall}>
      {!isQuizComplete ? (
        <div className={styles.question}>
          <h3>{currentQuestion.question}</h3>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type='radio'
                    name='option'
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit} disabled={!selectedOption}>
            Submit
          </button>
        </div>
      ) : (
        <div className={styles.result}>
          <h2>
            Your Score: {score}/{qBank.length}
          </h2>
        </div>
      )}
    </div>
  );
};
