import { useEffect, useState } from "react";

import { CurrencySelect } from "./CurrencySelect";

function App() {
  return (
    <div className="app">
      <Header/>
      <Inputs />
    </div>
  );
}

function Header(){
  return <h4>Foxie's Exchange</h4>
}

function Inputs() {
  const [moneyAmountInput, setMoneyAmountInput] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("PLN");
  const [result, setResult] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function getConversion() {
      try {
        setIsloading(true);
        const rawResponse = await fetch(
          `https://api.frankfurter.dev/v1/latest?amount=${moneyAmountInput}&base=${firstCurrency}&symbols=${secondCurrency}`,
        );
        if (!rawResponse.ok) {
          throw new Error(`Response status: ${rawResponse.status}`);
        }

        const convertedCurrency = await rawResponse.json();
        setResult(Number(convertedCurrency.rates[secondCurrency]));
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsloading(false);
      }
    }
    if (!moneyAmountInput) return setResult(0);
    if (firstCurrency === secondCurrency) return setResult(moneyAmountInput);
    getConversion();
  }, [moneyAmountInput, firstCurrency, secondCurrency]);

  function handleMoneyInputChange(e) {
    setMoneyAmountInput(e.target.value);
  }

  const resultDisplay = isLoading
    ? "Loading"
    : `${moneyAmountInput} ${firstCurrency} is worth ${result} ${secondCurrency} `;

  return (
    <div className="inputs">
      <input
      className="inputMoneyField"
        type="number"
        placeholder="Enter amount here..."
        value={moneyAmountInput}
        onChange={handleMoneyInputChange}
      />
      <CurrencySelect
        disabled={isLoading}
        currency={firstCurrency}
        setCurrency={setFirstCurrency}
      />
      <CurrencySelect
        disabled={isLoading}
        currency={secondCurrency}
        setCurrency={setSecondCurrency}
      />
      <p>{result ? resultDisplay : "OUTPUT"}</p>
    </div>
  );
}
export default App;
