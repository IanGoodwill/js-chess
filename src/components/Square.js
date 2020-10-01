import React from "react";
import "../App.css";

const Square = ({ opacity, backgroundColor, val, isOnBoard, pos, setSpot, movable }) => {
  var className = !isOnBoard ? "label" : "square";

  const handleClick = () => {
    if (setSpot) {
      setSpot(pos);
    }
  };

  return (
    <div
      className={className}
      style={{ opacity, backgroundColor:  backgroundColor ? backgroundColor : '#1E1C1C' }}
      onClick={handleClick}
    >
      {val}
    </div>
  );
};

export default Square;
