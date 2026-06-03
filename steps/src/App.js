import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ text: "Click next to see more pages" });
  const [isclosed, setClosing] = useState(false);

  const handlePreviousClick = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      setTest({ text: "You went to previous page" });
    }
  };
  const handleNextClick = () => {
    step < 3 && setStep((s) => s + 1);
    setTest({ text: "You are on next page" });
  };

  return (
    <>
      <button className="close" onClick={() => setClosing((closed) => !closed)}>
        &times;
      </button>
      {isclosed || (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : "non-active"}>1</div>
            <div className={step === 2 ? "active" : "non-active"}>2</div>
            <div className={step === 3 ? "active" : "non-active"}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            <br />
            {test.text}
          </p>

          <div className="buttons">
            <Button
              textCol="white"
              bgColor="#8e6cf3"
              onClick={handlePreviousClick}
            >
              <span>👈</span> Previous
            </Button>
            <Button textCol="white" bgColor="#8e6cf3" onClick={handleNextClick}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textCol, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ color: textCol, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}
