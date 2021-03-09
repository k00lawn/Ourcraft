import React from "react";
import { css, jsx } from "@emotion/core";
import style from "../style";
// import { useKeyboardControls } from "../hooks/useKeyboardControls";

export const TouchControls = () => {
  const moveUpBtn = {
    top: "673px",
    left: "157px",
    width: "124px",
    height: "125px",
    "background-color": "grey",
    border: "3px solid #909090",
    "border-radius": "67px",
    opacity: "0.86",
  };
  const moveRightBtn = {
    left: "280px",
    width: "125px",
    height: "124px",
    "background-color": "grey",
    border: "3px solid #909090",
    "border-radius": "67px",
    opacity: "0.86",
  };

  const moveDownBtn = {
    top: "921px",
    left: "156px",
    width: "125px",
    height: "124px",
    "background-color": "grey",
    border: "3px solid #909090",
    "border-radius": "67px",
    opacity: "0.86",
  };

  const moveLeftBtn = {
    top: "921px",
    left: "156px",
    width: "125px",
    height: "124px",
    "background-color": "grey",
    border: "3px solid #909090",
    "border-radius": "67px",
    opacity: "0.86",
  };

  const jumpBtn = {
    top: "921px",
    left: "156px",
    width: "95px",
    height: "95px",
    "background-color": "grey",
    border: "3px solid #909090",
    "border-radius": "67px",
    opacity: "0.86",
  };

  return (
    <div style={{ position: "absolute", bottom: "20px" }}>
      <button style={moveUpBtn} name="moveForward">
        Up button
      </button>
      <button style={moveRightBtn} name="moveRight">
        Right button
      </button>
      <button style={moveDownBtn} name="moveBackward">
        Down Button
      </button>
      <button style={moveLeftBtn} name="moveLeft">
        Left Button
      </button>
      <button style={jumpBtn} name="jump">
        Jump Button
      </button>
    </div>
  );
};
