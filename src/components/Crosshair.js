import React from "react";

export const Crosshair = (props) => {
  const xC = `${props.x}px`;
  const yC = `${props.y}px`;

  const position = {
    position: "absolute",
    left: xC,
    top: yC,
  };
  return <div className="crossHair" style={position}></div>;
};
