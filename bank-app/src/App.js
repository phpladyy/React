import { useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Operations from "./Operations";

function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    isAccOpened: false,
  };
  function reducer(state, action) {
    if (!state.isAccOpened && action.type !== "openAcc") {
      return state;
    }
    switch (action.type) {
      case "openAcc":
        return { ...state, isAccOpened: true, balance: 500 };
      case "changeBal":
        return { ...state, balance: state.balance + action.payload };
      case "loan":
        if (state.loan !== 0) {
          return state;
        }
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: action.payload,
        };
      case "payLoan":
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      case "closeAcc":
        return {
          ...state,
          isAccOpened:
            state.balance === 0 && state.loan === 0 ? false : initialState,
        };
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  const [{ balance, loan, isAccOpened }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <div className="App">
      <Header balance={balance} loan={loan} />
      <Operations isAccOpened={isAccOpened} dispatch={dispatch} />
    </div>
  );
}

export default App;
