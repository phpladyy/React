import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const result = (() => {
    try {
      return Function(`return ${firstNumber}`)();
    } catch {
      return "NaN";
    }
  })();

  return (
    <div className="App">
      <header>Numbers calculator</header>
      <NumbersInput setFirstNumber={setFirstNumber} firstNumber={firstNumber} />
      <Operation firstNumber={firstNumber} result={result} />
    </div>
  );
}

function NumbersInput({ firstNumber, setFirstNumber }) {
  function inputChandler(num, settter) {
    settter((arg) => "" + arg + num);
    console.log(Number(firstNumber));
  }
  return (
    <div className="numbersArray">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <span
          className="number"
          onClick={(e) => inputChandler(num, setFirstNumber)}
        >
          {num}
        </span>
      ))}
      <span
        className="number"
        onClick={(e) => inputChandler(0, setFirstNumber)}
      >
        0
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("+", setFirstNumber)}
      >
        +
      </span>
      <span
        className="number"
        onClick={(e) => inputChandler("-", setFirstNumber)}
      >
        -
      </span>
      

      <span className="number" onClick={() => setFirstNumber("")}>
        cls
      </span>
    </div>
  );
}

function Operation({ firstNumber, result }) {
  return (
    <>
      <span>
        {firstNumber}=<Result result={result} />
      </span>
    </>
  );
}

function Result({ result }) {
  return result ? result : "space for number";
}

export default App;
