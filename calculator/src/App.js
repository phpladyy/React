import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [equation, setEquation] = useState("");
  const result = (() => {
    try {
      return evaluate(equation);
    } catch {
      return "NaN";
    }
  })();

  return (
    <div className="App">
      <Header />
      <NumbersInput setEquation={setEquation} />
      <OperationDisplay equation={equation} result={result} />
    </div>
  );
}

const Header = () => <header>Number calculator by foxiee3</header>;

function NumbersInput({ setEquation }) {
  function inputChandler(num) {
    num === "cls" ? setEquation("") : setEquation((arg) => arg + num);
  }
  const CalcButton = ({ children }) => (
    <span className="number" onClick={(e) => inputChandler(children)}>
      {children}
    </span>
  );
  return (
    <div className="numbersArray">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <CalcButton key={num}>{num}</CalcButton>
      ))}
      <CalcButton>0</CalcButton>
      <CalcButton>+</CalcButton>
      <CalcButton>-</CalcButton>
      <CalcButton>*</CalcButton>
      <CalcButton>/</CalcButton>
      <CalcButton>cls</CalcButton>
    </div>
  );
}

function OperationDisplay({ equation, result }) {
  return (
    <span className="result">
      {equation ? (
        <>
          {equation}
          {Number(equation) !== Number(result) && !isNaN(result) && (
            <Result result={result} />
          )}
        </>
      ) : (
        "Your result will be  here"
      )}
    </span>
  );
}

function Result({ result }) {
  return <span className="result">={result}</span>;
}

export default App;
