import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpenItem, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((question, curIndex) => (
        <Element
          onOpen={setCurOpen}
          curOpenItem={curOpenItem}
          key={question.title}
          curIndex={curIndex}
          title={question.title}
          text={question.text}
        />
      ))}
    </div>
  );
}

function Element({ curOpenItem, onOpen, title, text, curIndex }) {
  const isOpen = curOpenItem === curIndex;
  function handleOpen() {
    curOpenItem !== curIndex ? onOpen(curIndex) : onOpen(null);
  }

  return (
    <div onClick={handleOpen} className={`item ${isOpen ? "open" : " "}`}>
      <p className="number">
        {curIndex < 10 && "0"}
        {curIndex + 1}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
