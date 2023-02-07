import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Category from "../../img/category.svg"

import "./style.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }
  // console.log(quizState.questions)

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das categorias abaixo:</p>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;