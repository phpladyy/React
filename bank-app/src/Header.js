function Header({ balance, loan }) {
  return (
    <div>
      <h1>useReducer bank app</h1>
      <p>Balance: {balance}$</p>
      <p>Loan: {loan}$</p>
    </div>
  );
}

export default Header;
