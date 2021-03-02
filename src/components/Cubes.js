<<<<<<< HEAD
import React from 'react';
import { useStore } from '../hooks/useStore';
import { useInterval } from '../hooks/useInterval';

import Cube from './Cube';

export default function Cubes() {
    const [cubes, addCube, removeCube, saveWorld] = useStore((state) => [
        state.cubes,
        state.addCube,
        state.removeCube,
        state.saveWorld,
    ]);

    useInterval(
        () => {
            saveWorld(cubes);
        },
        // every 10 seconds
        10000,
    );

    return cubes.map((cube) => {
        return (
            <Cube
                key={cube.key}
                texture={cube.texture}
                position={cube.pos}
                addCube={addCube}
                removeCube={removeCube}
            />
        );
    });
=======
import React from "react";
import { useStore } from "../hooks/useStore";
import { useInterval } from "../hooks/useInterval";

import Cube from "./Cube";

export default function Cubes({ onBlockPlaced, cubesState }) {
  const [cubes, addCube, removeCube, saveWorld] = useStore((state) => [
    state.cubes,
    state.addCube,
    state.removeCube,
    state.saveWorld,
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
  //       activeTexture={activeTexture}
  //       position={cube.pos}
  //       addCube={addCube}
  //       removeCube={removeCube}
  //       onBlockPlaced={onBlockPlaced}
  //     />
  //   );
  // });
>>>>>>> 79926486ca60601ea9f4799c46ad46ce63242765
}
