import { useState } from "react";
import "./App.css";
import { evaluate, number } from "mathjs";

function App() {
  const [firstNumber, setEquation] = useState("");
  const result = (() => {
    try {
      return evaluate(firstNumber);
    } catch {
      return "NaN";
    }
  })();

  return (
    <div className="App">
      <Header />
      <NumbersInput setEquation={setEquation} firstNumber={firstNumber} />
      <Operation firstNumber={firstNumber} result={result} />
    </div>
  );
}

const Header = () => <header>Number calculator by foxiee3</header>;

function NumbersInput({ firstNumber, setEquation }) {
  function inputChandler(num, settter) {
    settter((arg) => arg + num);
  }
  return (
    <div className="numbersArray">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <span
          className="number"
          key={num}
          onClick={(e) => inputChandler(num, setEquation)}
        >
          {num}
        </span>
      ))}
      <span className="number" onClick={(e) => inputChandler(0, setEquation)}>
        0
      </span>
      <span className="number" onClick={(e) => inputChandler("+", setEquation)}>
        +
      </span>
      <span className="number" onClick={(e) => inputChandler("-", setEquation)}>
        -
      </span>
      <span className="number" onClick={(e) => inputChandler("*", setEquation)}>
        *
      </span>
      <span className="number" onClick={(e) => inputChandler("/", setEquation)}>
        :
      </span>

      <span className="number" onClick={() => setEquation("")}>
        cls
      </span>
    </div>
  );
}

function Operation({ firstNumber, result }) {
  return (
    <span className="result">
      {firstNumber ? (
        <>
          {firstNumber}
          {Number(firstNumber) !== Number(result) && !isNaN(result) && (
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
  return `= ${result}`;
}

export default App;
