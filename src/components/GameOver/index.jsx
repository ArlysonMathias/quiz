import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./style.css";
import Welldone from "../../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState.questions);
  return (
    <div id="game-over">
      <h2>Fim de jogo</h2>
      <h2>Nível: {quizState.title}</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={Welldone} alt="Imagem final" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
