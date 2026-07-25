function OperButton({ isAccOpened, children, onClick }) {
  return (
    <button disabled={isAccOpened} onClick={onClick}>
      {children}
    </button>
  );
}

export default OperButton;
