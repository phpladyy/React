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
  <h1>
    Pizza menu
  </h1>
  </header>
);

const Menu = () => (
  <>
    <h2>Our menu</h2>
    <Pizza />
  </>
);

function Footer() {
  const hour = new Date().getHours();
  const openHour = 15;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer>
      {new Date().toLocaleTimeString("pl", {
        timeStyle: "short",
        hour12: false,
      })}
      . The restaurant is currently <b>{isOpen ? "open" : "closed"}</b>
    </footer>
  );
}

function Pizza() {
  const d = 3;
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci </h2>
      <h2>Tomato, mozarella, spinach, and ricotta cheese</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
