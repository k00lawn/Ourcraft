import React, { useEffect, useRef } from "react";
import { useThree, extend } from "react-three-fiber";
import { PointerLockControls as forMobile } from "./mobilecontrol";

extend({ forMobile });

export const FPVControlsMobile = (props) => {
  const { camera, gl } = useThree();
  //   const controls = useRef();
  //   useEffect(() => {
  //     document.addEventListener("click", () => {
  //       controls.current.lock();
  //     });
  //   }, []);

  return (
    <pointerLockControls
      // ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
