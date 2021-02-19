import React from "react";

export const Crosshair = () => {
  const x = `${window.innerWidth / 2 - 10}px`;
  const y = `${window.innerHeight / 2 - 100}px`;

  const position = {
    position: "absolute",
    left: x,
    top: y,
  };

  return <div className="crossHair" style={position}></div>;
};
