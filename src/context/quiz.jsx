import { createContext, useReducer } from "react";
import questions from "../data/index";

const STAGES = ["START", "CATEGORY", "PLAYING", "END"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  title: "",
  score: 0,
};

// console.log(initialState);

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = null;
      let newTitle = "";

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
          newTitle = action.payload;
        }
      });

      return {
        ...state,
        title: newTitle,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
        help: false,
      };
    }

    case "NEW_GAME": {
      console.log(questions);
      console.log(initialState);
      return initialState;
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
