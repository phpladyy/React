import { useState } from "react";
import "../src/styles.css";

function App() {
  return (
    <>
      <Controls />
    </>
  );
}

function Controls() {
  const defaultSteps = 1;
  const defaultCount = 0;
  const [steps, setSteps] = useState(defaultSteps);
  const [count, setCount] = useState(defaultCount);

  function resetValues() {
    setSteps(defaultSteps);
    setCount(defaultCount);
  }

  return (
    <div>
      <h2>Date counting tool by foxie</h2>
      <div className="controls">
        <input
          type="range"
          onChange={(e) => setSteps(Number(e.target.value))}
          value={steps}
          min={0}
          max={10}
        />
        {steps}
      </div>
      <div className="controls">
        <button onClick={() => setCount((s) => s - steps)}>-</button>
        <input className="textInput"
          type="text"
          onChange={(e) =>
            e.target.value !== "-"
              ? setCount(Number(e.target.value))
              : setCount('-')
          }
          value={count !==0 ? count:''}
        />

        <button onClick={() => setCount((s) => s + steps)}>+</button>
      </div>
      <ShowDate count={count} />
      {count === defaultCount && steps === defaultSteps ? (
        ""
      ) : (
        <button onClick={resetValues} className="reset">
          RESET
        </button>
      )}
    </div>
  );
}

function ShowDate({ count }) {
  const curDate = new Date();
  curDate.setDate(curDate.getDate() + count);

  return (
    <div>
      {curDate > Date.now()
        ? `${count} Days until: ${curDate.toDateString()}`
        : curDate < Date.now()
          ? `${Math.abs(count)} Days ago was: ${curDate.toDateString()}`
          : `Today is ${curDate.toDateString()}`}
    </div>
  );
}
export default App;
