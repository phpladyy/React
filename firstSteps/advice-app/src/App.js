import { useState } from "react";
import './Styles.css';

function App() {

  const [advice, setAdvice] = useState("");
  const [joke, setJoke] = useState(null);
  async function GetAdvice() {
          const getadvice = await fetch("https://api.adviceslip.com/advice");
          const data = await getadvice.json();
          setAdvice(data.slip.advice);
          
        }
  async function getJoke() {
    const generateJoke = await fetch("https://v2.jokeapi.dev/joke/Any");
    const processJoke = await generateJoke.json();

    setJoke(processJoke);
  }
  return (
    <div>
      <h1>Advice generator</h1>
      <button onClick={GetAdvice}>Click for advice</button> <button onClick={getJoke}>Click for a  joke</button>
      <h2>{`Advice: ${advice}`}</h2>
        <h2> 
         {`Joke: ${joke?.setup ?? joke?.joke ?? ""} ${joke?.delivery ?? ""}`}
        </h2>
    </div>
  );
}

export default App;
