import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

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
      <Header/>
      <NumbersInput setEquation={setEquation} firstNumber={firstNumber} />
      <Operation firstNumber={firstNumber} result={result} />
    </div>
  );
}

const Header = () => <header>Number calculator by foxiee3</header>

function NumbersInput({ firstNumber, setEquation }) {
  function inputChandler(num, settter) {
    settter((arg) => arg + num);
    console.log(Number(firstNumber));
  }
  return (
    <div className="numbersArray">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <span
          className="number"
          onClick={(e) => inputChandler(num, setEquation)}
        >
          {num}
        </span>
      ))}
      <span
        className="number"
        onClick={(e) => inputChandler(0, setEquation)}
      >
        0
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("+", setEquation)}
      >
        +
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("-", setEquation)}
      >
        -
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("*", setEquation)}
      >
        *
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("/", setEquation)}
      >
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
    <>
      <span>
        {firstNumber && firstNumber} {result!=firstNumber && <Result result={result}/>}
      </span>
    </>
  );
}

function Result({ result }) {
  return `= ${result}`;
}

export default App;
