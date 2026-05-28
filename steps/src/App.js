import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  
  const handlePreviousClick = () => step > 1 && setStep(step - 1);
  const handleNextClick = () => step < 3 && setStep(step + 1);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : "non-active"}>1</div>
        <div className={step === 2 ? "active" : "non-active"}>2</div>
        <div className={step === 3 ? "active" : "non-active"}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={handlePreviousClick}
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
