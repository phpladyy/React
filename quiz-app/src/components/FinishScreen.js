function FinishScreen({ points, maxPoints,highscore }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result ">
        You scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscrore: {highscore} Points)</p>
    </>
  );
}

export default FinishScreen;
