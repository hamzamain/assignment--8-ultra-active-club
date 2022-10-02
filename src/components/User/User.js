import React from "react";
import image from "../../images/study1.jpg";

const User = () => {
  return (
    <div className="flex gap-3 text-center ">
      <img className="rounded-lg w-1/5" src={image} alt="" />
      <div>
        <p className="font-semibold">Albert Einstein</p>
        <p>
          <small>March 14, Germany</small>
        </p>
      </div>
    </div>
  );
};

export default User;
