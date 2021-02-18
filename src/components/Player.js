import React, { useEffect, useRef } from "react";
import { useSphere } from "use-cannon";
import { useThree, useFrame } from "react-three-fiber";
import { useKeyboardControls } from "../hooks/useKeyboardControls";
import { Vector3 } from "three";
import { FPVControls } from "./FPVControls";

export const Player = (props) => {
  const Speed = 6;
  const {
    moveForward,
    moveLeft,
    moveBackward,
    moveRight,
    jump,
  } = useKeyboardControls();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(ref.current.position);
    const direction = new Vector3();
    const forwardVector = new Vector3(
      0, // x
      0, // y
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0) // z
    );

    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0), // x
      0, // y
      0 // z
    );
    direction
      .subVectors(forwardVector, sideVector)
      .normalize()
      .multiplyScalar(Speed)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });
  return (
    <>
      <FPVControls />
      <mesh ref={ref} />
    </>
  );
};
