export function CurrencySelect({ currency, setCurrency, disabled }) {
  function onSetCurrency(e, setter) {
    setCurrency(e.target.value);
  }
  return (
    <select value={currency} onChange={onSetCurrency} disabled={disabled} >
      <option value="USD">USD</option>
      <option value="PLN">PLN</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
