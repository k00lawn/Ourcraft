import React, { useEffect } from "react";
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls";
import { useThree, extend } from "react-three-fiber";
import { useRef } from "react";

extend({ PointerLockControlsImpl });

export const FPVControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    // document.addEventListener("click", () => {
    //   controls.current.lock();
    // });
    controls.current.lock();

    document.addEventListener("keydown", (e) => {
      console.log(controls);
      if (e.code === "KeyP") {
        controls.current.lock();
      }
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
