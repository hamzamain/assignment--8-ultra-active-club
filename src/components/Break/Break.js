import React from "react";
import BrkBtn from "../Brk-Btn/BrkBtn";

const Break = ({ breaks, handler }) => {
  return (
    <div className="mt-8">
      <h5 className="font-bold mb-2 text-center">Add a Break</h5>
      <div className="flex gep-3 items-center bg-gray-100 p-3  rounded-lg border-2">
        {breaks.map((brk) => (
          <BrkBtn brk={brk} key={brk} handler={handler}></BrkBtn>
        ))}
      </div>
    </div>
  );
};

export default Break;
