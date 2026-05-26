import React, { useState } from "react";
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

function Pizza(props) {
  const inflation = 8;
  return (
    props.pizzaObj.soldOut || (
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price + inflation}zł</span>
        </div>
      </li>
    )
  );
}

const Menu = () => (
  <main className="menu">
    <h2>Our menu</h2>
    {(pizzaData.length>0 && 
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
      ))}
    </ul>) || <h1>We don't have anything in menu yet</h1>}
  </main>
);

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 14;
  const closeHour = 23;
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return (
    <footer className="footer">
      {(isOpen && (
        <div className="order">
          {new Date().toLocaleTimeString("pl", {
            timeStyle: "short",
            hour12: false,
          })}
          <p>The restaurant is currently open until {closeHour}:00</p>
          <button className="btn">Order</button>
        </div>
      )) || <p>We are closed till {openHour}:00</p>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
