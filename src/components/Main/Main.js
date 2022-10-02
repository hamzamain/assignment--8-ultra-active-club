import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("datapack.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="main">
      <div className="card-container m-3 rounded">
        {cards.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
      <div className="cart-container">This is cart continer</div>
    </div>
  );
};

export default Main;
