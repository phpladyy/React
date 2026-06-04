import { Children, useState } from "react";

function App() {
  return <BillCalculator />;
}
function BillCalculator() {
  const [bill, setBill] = useState(0);
  const [firstRating, setFirstRating] = useState(0);
  const [secondRating, setSecondRating] = useState(0);
  const tip = (bill * ((firstRating + secondRating) / 2)) / 100;

  function resetAll() {
    setFirstRating(0);
    setSecondRating(0);
    setBill(0);
  }

  return (
    <div className="questions">
      <BillAmount bill={bill} setBill={setBill} />
      <ServiceRating option={firstRating} setOption={setFirstRating}>
        How did you like it?
      </ServiceRating>
      <ServiceRating option={secondRating} setOption={setSecondRating}>
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

function BillAmount({ bill, setBill }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        placeholder="Bill value"
        type="text"
        value={bill !== 0 ? bill : ""}
        onChange={(e) =>
          !isNaN(e.target.value) && setBill(Number(e.target.value))
        }
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
      <label>{children}</label>
      <select value={option} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </>
  );
}

const BillDisplay = ({ bill, tip }) => (
  <h3>
    you pay {Number(bill) + tip}$ ({bill}$ + {tip}$ tip)
  </h3>
);

function ResetButton({ chandleReset }) {
  return <button onClick={chandleReset}>Reset</button>;
}

export default App;
