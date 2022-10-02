import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faduotone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-blue-500 text-center text-3xl">
        <FontAwesomeIcon icon={faBook} />
        <small className="ml-2">ULTRA ACTIVE STUDY ROUTINE</small>
      </h1>
    </div>
  );
};

export default Header;
