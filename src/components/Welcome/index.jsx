import React, { useContext } from "react";
import Quiz from "../../img/quiz.svg"
import "./style.css"
import { QuizContext } from "../../context/quiz";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
        <div id="welcome">
            <h2>Seja bem vindo</h2>
            <p>Clique no botão abaixo para continuar</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="Imagem do Quiz" />
        </div>
    )
};

export default Welcome;
