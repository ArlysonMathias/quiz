import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./style.css";
import Welldone from "../../img/welldone.svg";
import { toast } from "react-hot-toast";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="game-over">
      <h2>Fim de jogo</h2>
      <h2>Nível: {quizState.title}</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      {quizState.score <= 6
        ? toast.error("Sua Pontuação foi muito baixa, você pode melhorar")
        : null}
      {quizState.score < 6 && quizState.score < 8
        ? toast.success("Sua pontuação foi boa, mas pode melhorar")
        : null}
      {quizState.score > 8
        ? toast.success(
            "Parabéns, você é um verdadeiro examinador das escrituras, continue assim!",
            {
              icon: "👏",
            }
          )
        : null}
      <img src={Welldone} alt="Imagem final" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
