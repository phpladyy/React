import { useEffect, useState } from "react";
import './Styles.css';

function App() {
  const [adviceCounter, setAdviceCounter] = useState(0);
  const [advice, setAdvice] = useState("");
  const [joke, setJoke] = useState(null);
  const [jokeCounter, setJokeCounter] = useState(0);
  async function GetAdvice() {
          const getadvice = await fetch("https://api.adviceslip.com/advice");
          const data = await getadvice.json();
          setAdvice(data.slip.advice);
          setAdviceCounter((advicecounter)=> advicecounter+1);
        }
  async function GetJoke() {
    const generateJoke = await fetch("https://v2.jokeapi.dev/joke/Any");
    const processJoke = await generateJoke.json();
    setJoke(processJoke);
    setJokeCounter((jokecounter) => jokecounter+1);
  }

 

  return (
    <div>
      <h1>Advice generator</h1>
      <button onClick={GetAdvice}>Click for advice</button> <button onClick={GetJoke}>Click for a  joke</button>
      <h2>{`Advice: ${advice}`}</h2>
        <h2> 
         {`Joke: ${joke?.setup ?? joke?.joke ?? ""} ${joke?.delivery ?? ""}`}
        </h2>
        <Counter adviceCount = {adviceCounter} jokeCount = {jokeCounter}/>
        
    </div>
  
    
  );
}

function Counter(props){
  return(
  <div>
    <h3>{`Asked for advice ${props.adviceCount} time(s)`}</h3>
    <h3>{`Asked for a joke ${props.jokeCount} time(s)`}</h3>
  </div>
);
}

export default App;
