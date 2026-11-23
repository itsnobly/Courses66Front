import { useState } from 'react';
import './Quiz.css';
export default function Quiz({ question, options, answer }) {
  const [current, setCurrent] = useState(null);
  const IsCurrent = (option) => {
    setCurrent(option);
  };
  return (
    <div className="quize">
      <div className="quations">
        <div className="quations__options">
          <span>{question}</span>
          {current !== null &&
            (current === answer ? (
              <p className="true_answer">Правильно!</p>
            ) : (
              <p className="false_answer">Неправильно!</p>
            ))}
        </div>
        <div className="buttons__quize">
          {options.map((option) => (
            <button
              className="options__btn"
              key={option}
              value={option}
              onClick={() => IsCurrent(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
