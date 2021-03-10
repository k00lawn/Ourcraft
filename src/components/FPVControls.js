import React, { useEffect } from "react";
import { PointerLockControls as PointerLockControlsImple } from "three/examples/jsm/controls/PointerLockControls";
import { useThree, extend } from "react-three-fiber";
import { useRef } from "react";
import {  isBrowser } from 'react-device-detect';

extend({ PointerLockControlsImple });

export const FPVControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    if (isBrowser){
      document.addEventListener("click", () => {
        controls.current.lock();
      });
    }
   
    else {
      document.addEventListener("keydown", (e) => {
        if (e.code === "KeyP") {
          controls.current.lock();
        }
      });
    }
    controls.current.lock();

    
  }, []);

  return (
    <pointerLockControlsImple
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
