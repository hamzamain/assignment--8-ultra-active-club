import React from "react";

const BrkBtn = ({ brk, handler }) => {
  return (
    <div>
      <button
        onClick={() => handler(brk)}
        className="bg-white rounded-full ml-2 p-2 drop-shadow-lg "
      >
        {brk}m
      </button>
    </div>
  );
};

export default BrkBtn;
