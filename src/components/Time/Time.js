import React from "react";
import "./Time.css";

const Time = ({ times, brks }) => {
  const totalTime = times.reduce((pre, current) => pre + current, 0);

  return (
    <div className="mt-8">
      <h5 className="font-bold mb-2 text-center">Study Dtailes</h5>
      <div className="time">
        <p>Study Time:</p>
        <p>{totalTime} min</p>
      </div>
      <div className="time">
        <p>Break Time:</p>
        <p>{brks} min</p>
      </div>
      <button className="mt-6 w-full bg-blue-500 btn text-white font-bold text-lg hover:bg-blue-600">
        Routine Completed
      </button>
    </div>
  );
};

export default Time;
