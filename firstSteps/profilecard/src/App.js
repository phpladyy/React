import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const image = "/avatar.jpg";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => <img src={image} alt="" className="avatar" />;
const Intro = () => (
  <div>
    <h1>Foxiee</h1>
    <p>
      Junior developer focused on web and software development. Experience with
      React, .NET, Java, PHP, SQL, and Git.
    </p>
  </div>
);

const SkillList = (props) => (
  <div className="skill-list">
    <Skill bgColor="orangered" skillName="JavaScript" emoji="💚"></Skill>
    <Skill bgColor="green" skillName="React" emoji="💙"></Skill>
    <Skill bgColor="gray" skillName="Git and Github"></Skill>
    <Skill bgColor="lightblue" skillName="HTML+CSS"></Skill>
    <Skill bgColor="yellow" skillName="Java" emoji="💛"></Skill>
    <Skill bgColor="pink" skillName="PHP"></Skill>
  </div>
);

const Skill = (props) => (
  <span className="skill" style={{ backgroundColor: props.bgColor }}>
    {" "}
    {props.skillName} {props.emoji ? props.emoji : "👌"}
  </span>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export default App;
