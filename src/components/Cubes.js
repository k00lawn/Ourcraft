import React from "react";
import { useStore } from "../hooks/useStore";
import { useInterval } from "../hooks/useInterval";

import Cube from "./Cube";

export default function Cubes({ onBlockPlaced, cubesState }) {
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  // useInterval(
  //   () => {
  //     saveWorld(cubes);
  //   },
  //   // every 10 seconds
  //   10000
  // );

  return cubesState.map((cube, index) => {
    return (
      <Cube
        key={cube.key}
        id={cube.key}
        texture={cube.texture}
        position={cube.pos}
        addCube={addCube}
        removeCube={removeCube}
        onBlockPlaced={onBlockPlaced}
      />
    );
  });
  // return cubes.map((cube, index) => {
  //   return (
  //     <Cube
  //       key={cube.key}
  //       id={cube.key}
  //       texture={cube.texture}
  //       position={cube.pos}
  //       addCube={addCube}
  //       removeCube={removeCube}
  //       onBlockPlaced={onBlockPlaced}
  //     />
  //   );
  // });
}
