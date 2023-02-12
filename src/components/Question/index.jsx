import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/quiz";
import Options from "../Options";
import "./style.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const[totalInSeconds, setTotalInSeconds] = useState(15)

  const seconds = totalInSeconds % 60
  
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {
        answer: currentQuestion.answer,
        option,
      },
    });
  };

  useEffect(() => {
    if(totalInSeconds === -1){
      dispatch({ type: "CHANGE_QUESTION" })
      setTotalInSeconds(15)
    }else{
      setTimeout(() => {
        setTotalInSeconds( totalInSeconds - 1)
      }, 1000)
    }
  },[totalInSeconds])

  return (
    <div id="question">
      <div className="header-questions">
        <p>
          Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>
        <span className="timer">{seconds}</span>
      </div>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Options
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
