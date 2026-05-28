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

const skillsList = [
  { skillName: "JavaScript", bgColor: "#221e5044", level: "advanced" },
  { skillName: "React", bgColor: "lightblue", level: "advanced" },
  { skillName: "Git and Github", bgColor: "orange", level: "intermediate" },
  { skillName: "HTML+CSS", bgColor: "yellow", level: "advanced" },
  { skillName: "Java", bgColor: "#f750f7ea", level: "advanced" },
  { skillName: "PHP", bgColor: "#f5690c", level: "intermediate" },
  { skillName: "Python", bgColor: "#22ad2e", level: "begginer" },
];

const Skill = ({ color, level, skillName }) => (
  <span className="skill" style={{ backgroundColor: color }}>
    {skillName} {level === "advanced" && "💙"}
    {level === "intermediate" && "👌"}
    {level === "begginer" && "👶"}
  </span>
);

const SkillList = () => (
  <div className="skill-list">
    {skillsList.map((skill) => (
      <Skill
        key={skill.skillName}
        skillName={skill.skillName}
        color={skill.bgColor}
        level={skill.level}
      />
    ))}
  </div>
);

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

export default App;
