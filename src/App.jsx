import "./App.css";
import Welcome from "./components/Welcome";
import { useContext, useEffect } from "react";
import Question from "./components/Question";
import { QuizContext } from "./context/quiz";
import GameOver from "./components/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //embaralhar as questões
    dispatch({type: "REORDER_QUESTIONS"})
  },[])

  return (
    <div className="App">
      <h1>Quiz Bíblico</h1>
      {quizState.gameStage === "START" && <Welcome />}
      {quizState.gameStage === "PLAYING" && <Question />}
      {quizState.gameStage === "END" && <GameOver />}
    </div>
  );
}

export default App;
