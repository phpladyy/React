import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Questions />
    </>
  );
}

const questionBase = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
  },
  { id: 2, question: "What language is React based on?", answer: "JavaScript" },
  {
    id: 3,
    question: "What hook is used for state management?",
    answer: "useState",
  },
  {
    id: 4,
    question: "What hook is used for side effects?",
    answer: "useEffect",
  },
  { id: 5, question: "What does JSX stand for?", answer: "JavaScript XML" },
  {
    id: 6,
    question: "What function is used to render lists in React?",
    answer: "map",
  },
];

function Questions() {
  function handleSelect(questionId) {
    setSelected(selectedQuestion !== questionId ? questionId : null);
  }

  const [selectedQuestion, setSelected] = useState(null);
  return (
    <div className="container">
      {questionBase.map((question) => (
        <div
          className={question.id === selectedQuestion ? "selected" : ""}
          key={question.id}
          onClick={() => handleSelect(question.id)}
        >
          {question.id === selectedQuestion
            ? question.answer
            : question.question}
        </div>
      ))}
    </div>
  );
}

export default App;
