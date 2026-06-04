import { Children, useState } from "react";

function App() {
  const [firstOption, setFirstOption] = useState(0);
  const [secondOption, setSecondOption] = useState(0);
  const [bill, setBill] = useState(0);
  const tip = (bill * ((firstOption + secondOption) / 2)) / 100;

  function resetAll() {
    setFirstOption(0);
    setSecondOption(0);
    setBill(0);
  }

  return (
    <div>
      <BillAmount bill={bill} setBill={setBill} />
      <ServiceRating option={firstOption} setOption={setFirstOption}>
        How did you like it?
      </ServiceRating>
      <ServiceRating option={secondOption} setOption={setSecondOption}>
        How did your friend like it?
      </ServiceRating>
      {bill !== 0 && (
        <>
          <BillDisplay tip={tip} bill={bill} />
          <ResetButton chandleReset={resetAll} />
        </>
      )}
    </div>
  );
}

function BillDisplay({ bill, tip }) {
  return (
    <h2>
      you pay {Number(bill) + tip}$ ({bill}$ + {tip}$ tip)
    </h2>
  );
}

function BillAmount({ bill, setBill }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill !== 0 ? bill : ""}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </>
  );
}
function ServiceRating({ setOption, option, children }) {
  return (
    <Question option={option} setOption={setOption}>
      {children}
    </Question>
  );
}

function Question({ children, setOption, option }) {
  function handleChange(e) {
    setOption((option) => Number(e.target.value));
  }
  return (
    <>
      <p>{children}</p>
      <select value={option} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </>
  );
}

function ResetButton({ chandleReset }) {
  return <button onClick={chandleReset}>Reset</button>;
}

export default App;
