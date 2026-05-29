import { useState } from "react";
import "../src/styles.css"

function App() {
  return (
    <>
      <Controls />
    </>
  );
}

function Controls() {
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Date counting tool by foxie</h2>
      <div className="controls">
        <button onClick={() => steps>0 && setSteps((s) => s - 1)}>-</button>
        Step: {steps}
        <button onClick={() => setSteps((s) => s + 1)}>+</button>
      </div>
      <div className="controls">
        <button onClick={() => setCount((s) => s - steps)}>-</button>
        Count: {count}
        <button onClick={() => setCount((s) => s + steps)}>+</button>
      </div>
      <ShowDate />
    </div>
  );

  function ShowDate() {
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
}

export default App;
