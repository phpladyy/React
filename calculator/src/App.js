import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [equation, setEquation] = useState("");
  function inputHandler(num) {
    num === "cls" ? setEquation("") : setEquation((arg) => arg + num);
  }
  const result = (() => {
    try {
      return  parseFloat((evaluate(equation)).toFixed(2));
    } catch {
      return NaN;
    }
  })();

  return (
    <div className="App">
      <Header />
      <div className="calculator">
        <NumbersInput inputHandler={inputHandler} />
        <OperatorsInput inputHandler={inputHandler} />
      </div>
      <OperationDisplay equation={equation} result={result} />
    </div>
  );
}

const Header = () => <header>Number calculator by foxiee3</header>;

const CalcButton = ({ children, inputHandler }) => (
  <span className="number" onClick={() => inputHandler(children)}>
    {children}
  </span>
);

function NumbersInput({ inputHandler }) {
  return (
    <div className="numbersArray">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <CalcButton key={num} inputHandler={inputHandler}>
          {num}
        </CalcButton>
      ))}
      <CalcButton inputHandler={inputHandler}>0</CalcButton>
      <CalcButton inputHandler={inputHandler}>&#40;</CalcButton>
      <CalcButton inputHandler={inputHandler}>&#41;</CalcButton>
    </div>
  );
}

function OperatorsInput({ inputHandler }) {
  const operators = ["+", "-", "*", "/", ".", "cls"];
  return (
    <div className="operatorsArray">
      {operators.map((operator) => (
        <CalcButton inputHandler={inputHandler} key={operator}>
          {operator}
        </CalcButton>
      ))}
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
