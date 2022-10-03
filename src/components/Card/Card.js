import React from "react";

const Card = ({ card, handler }) => {
  const { id, picture, title, about, time } = card;
  if (about) {
    about.slice(0, 30);
  }
  return (
    <div className="card border-1 drop-shadow-lg border-gray-600 bg-white rounded-md p-6">
      <img src={picture} alt="" className="w-100 rounded-md" />
      <div className="card-info mt-3">
        <h4 className="font-bold text-lg">{title}</h4>
        <p>
          <small className="lh-sm">{about.slice(0, 60)}</small>
        </p>
        <h6 className="font-bold">Time required: {time}m</h6>
      </div>
      <button
        onClick={() => handler(time)}
        className="mt-3 bg-blue-500 hover:bg-blue-600 w-full text-white px-3 py-2 rounded-md "
      >
        Add to List
      </button>
    </div>
  );
};

export default Card;
