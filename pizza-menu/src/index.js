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

function Pizza({ pizzaObj }) {
  const inflation = 8;
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + inflation + "zł"}
        </span>
      </div>
    </li>
  );
}

const Menu = () => (
  <main className="menu">
    <h2>Our menu</h2>
    {pizzaData.length > 0 ? (
      <>
        <p>6 creative Italian dishes to choose from. All from stove oven</p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
          ))}
        </ul>
      </>
    ) : (
      <h1>We're working on the menu. Please come back later</h1>
    )}
  </main>
);

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 14;
  const closeHour = 23;
  const isOpen = currentHour >= openHour && currentHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openingHour={openHour} />
      ) : (
        <p>We are closed till {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openingHour }) {
  return (
    <div className="order">
      {new Date().toLocaleTimeString("pl", {
        timeStyle: "short",
        hour12: false,
      })}
      <p>
        The restaurant is currently open from {openingHour}:00 to {closeHour}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
