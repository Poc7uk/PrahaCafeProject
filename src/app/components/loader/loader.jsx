import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__inner">
        <i className="bi bi-hourglass-split"></i>
      </span>
    </div>
  );
};

export default Loader;
