import React, { useEffect, useState } from "react";
import {
  addToDb,
  getRoutineCart,
  setBreakToDb,
} from "../../utilities/calc-handler";
import Break from "../Break/Break";
import Card from "../Card/Card";
import Time from "../Time/Time";
import User from "../User/User";
import "./Main.css";

const Main = () => {
  const breaks = [10, 20, 30, 40, 50];

  const [cards, setCards] = useState([]);
  const [times, setTimes] = useState([]);
  const [brks, setBrks] = useState(0);

  useEffect(() => {
    fetch("datapack.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    const breakStored = localStorage.getItem("break");
    console.log(breakStored);
    setBrks(breakStored);
  }, []);

  const addToCartHandler = (time) => {
    const newTimes = [...times, time];
    setTimes(newTimes);
  };

  const addBreakTimeHandler = (time) => {
    console.log(time);
    setBreakToDb("break", time);
    setBrks(time);
  };

  return (
    <div className="main bg-gray-100">
      <div className="card-container p-20 rounded">
        {cards.map((card) => (
          <Card card={card} key={card.id} handler={addToCartHandler}></Card>
        ))}
      </div>
      <div className="cart-container sticky top-0">
        <div className="mt-8 ml-8 mr-2">
          <User></User>
          <Break breaks={breaks} handler={addBreakTimeHandler}></Break>
          <Time times={times} brks={brks}></Time>
        </div>
      </div>
    </div>
  );
};

export default Main;
