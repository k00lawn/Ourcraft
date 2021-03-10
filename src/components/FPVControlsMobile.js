import React, { useEffect, useRef } from "react";
import { useThree, extend } from "react-three-fiber";
import { PointerLockControls as PointerLockControlsImpl } from "./mobilecontrol";

extend({ PointerLockControlsImpl });

export const FPVControlsMobile = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener("click", () => {
      controls.current.lock();
    });
  }, []);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
