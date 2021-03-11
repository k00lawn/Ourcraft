import React, { useEffect, useRef } from "react";
import { useThree, extend } from "react-three-fiber";
import { PointerLockControls as PointerLockControlsImpl } from "./mobileControls";

extend({ PointerLockControlsImpl });

export const FPVControlsMobile = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    controls.current.lock();
  }, []);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
