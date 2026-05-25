import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <h1>Foxiee's Pizza menu</h1>
  </header>
);

const inflation = 6;
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + inflation}zł</span>
      </div>
    </div>
  );
}

const Menu = () => (
  <main className="menu">
    <h2>Our menu</h2>
    <Pizza
      name="Pizza Prosciutto"
      ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      price={18}
      photoName="pizzas/prosciutto.jpg"
    />
    <Pizza
      name="Pizza salami"
      ingredients="Tomato, mozarella, salami"
      price={28}
      photoName="pizzas/salamino.jpg"
    />
  </main>
);

function Footer() {
  const hour = new Date().getHours();
  const openHour = 15;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString("pl", {
        timeStyle: "short",
        hour12: false,
      })}
      . The restaurant is currently <b>{isOpen ? "open" : "closed"}</b>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
