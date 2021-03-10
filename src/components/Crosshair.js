import React from "react";
import { isBrowser } from 'react-device-detect';


export const Crosshair = (props) => {
  const xC = `${props.x}px`;
  const yC = `${props.y}px`;

  const position = {
    position: "absolute",
    left: xC,
    top: yC,
  };

  return (

    <>
      {isBrowser ? <div className="crossHair" style={position}></div>: null}
    </>
  );
};
