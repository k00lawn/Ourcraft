import { useState, useEffect } from "react";
import { useStore } from "./useStore";

function actionByKey(key) {
  const keys = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
  };
  return keys[key];
}

function textureByKey(key) {
  const keys = {
    Digit1: "dirt",
    Digit2: "glass",
    Digit3: "grass",
    Digit4: "log",
    Digit5: "diamond",
    Digit6: "wood",
    Digit7: "redstone",
  };
  return keys[key];
}
export const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });
  const [setTexture] = useStore((state) => [state.setTexture]);

  // console.log("movement : ", movement);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(e.code)]: true,
        }));
      }
      if (textureByKey(e.code)) {
        setTexture(textureByKey(e.code));
      }
    };
    const handleKeyUp = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(e.code)]: false,
        }));
      }
    };

    const handleTouchDown = (e) => {
      const { name } = e.target;
      console.log(name);
      setMovement((state) => ({
        ...state,
        [name]: true,
      }));
    };

    const handleTouchUp = (e) => {
      const { name } = e.target;
      console.log(name, " false");
      setMovement((state) => ({
        ...state,
        [name]: false,
      }));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const mf = document.getElementsByName("moveForward")[0];
    const mb = document.getElementsByName("moveBackward")[0];
    const mr = document.getElementsByName("moveRight")[0];
    const ml = document.getElementsByName("moveLeft")[0];
    const j = document.getElementsByName("jump")[0];

    mf && mf.addEventListener("touchstart", handleTouchDown);
    mb && mb.addEventListener("touchstart", handleTouchDown);
    mr && mr.addEventListener("touchstart", handleTouchDown);
    ml && ml.addEventListener("touchstart", handleTouchDown);
    j && j.addEventListener("touchstart", handleTouchDown);

    mf &&  mf.addEventListener("touchend", handleTouchUp);
    mb && mb.addEventListener("touchend", handleTouchUp);
    mr && mr.addEventListener("touchend", handleTouchUp);
    ml && ml.addEventListener("touchend", handleTouchUp);
    j && j.addEventListener("touchend", handleTouchUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);

      mf && mf.removeEventListener("touchstart", handleTouchDown);
      mb && mb.removeEventListener("touchstart", handleTouchDown);
      mr && mr.removeEventListener("touchstart", handleTouchDown);
      ml && ml.removeEventListener("touchstart", handleTouchDown);
      j && j.removeEventListener("touchstart", handleTouchDown);

      mf && mf.removeEventListener("touchend", handleTouchUp);
      mb && mb.removeEventListener("touchend", handleTouchUp);
      mr && mr.removeEventListener("touchend", handleTouchUp);
      ml && ml.removeEventListener("touchend", handleTouchUp);
      j && j.removeEventListener("touchend", handleTouchUp);
    };
  }, [setTexture]);

  return movement;
};
