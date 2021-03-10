import React, { useEffect } from "react";
import { PointerLockControls as PointerLockControlsImple } from "three/examples/jsm/controls/PointerLockControls";
import { useThree, extend } from "react-three-fiber";
import { useRef } from "react";

extend({ PointerLockControlsImple });

export const FPVControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    // const ch = document.getElementsByClassName("crossHair")[0];
    // document.addEventListener("click", () => {
    //   controls.current.lock();
    // });
    const lockAgain = (e) =>
      e.code === "KeyP" ? controls.current.lock() : null;

    controls.current.lock();
    document.addEventListener("keydown", lockAgain);
  }, []);

  return (
    <pointerLockControlsImple
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
