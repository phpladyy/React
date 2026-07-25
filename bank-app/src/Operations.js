import button from "./OperationButton";

function Operations({ isAccOpened, dispatch }) {
  return (
    <>
      <button
        disabled={isAccOpened}
        onClick={() => dispatch({ type: "openAcc" })}
      >
        Open account
      </button>
      <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "changeBal", payload: 150 })}
      >
        Deposit 150
      </button>
      <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "changeBal", payload: -50 })}
      >
        Widthraw 50
      </button>
            <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "changeBal", payload: -250 })}
      >
        Widthraw 250
      </button>
      <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "loan", payload: 5000})}
      >
        Request a loan of 5000
      </button>

      <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "payLoan" })}
      >
        Pay loan
      </button>
      <button
        disabled={!isAccOpened}
        onClick={() => dispatch({ type: "closeAcc" })}
      >
        Close account
      </button>
    </>
  );
}

export default Operations;
