import React from "react";
import { Canvas } from "react-three-fiber";
import { Sky, Stars } from "drei";
import { Physics } from "use-cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { Cube } from "./components/Cube";
import { useStore } from "./hooks/useStore";

function App() {
  const cubes = useStore((state) => state.cubes);
  return (
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]} />
      <Stars />
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        {/* <Cube position={[0,2,0]} type="diamond" />
        <Cube position={[0,1,0]} type="wood" />
        <Cube position={[1,1,0]} type="dirt" />
        <Cube position={[-1,1,0]} type="glass" />
        <Cube position={[-2,1,0]} type="log" />
        <Cube position={[2,1,0]} type="grass" /> */}
        {cubes.map((cube, index) => (
          <Cube position={cube.pos} texture={cube.texture} key={index} />
        ))}
      </Physics>
    </Canvas>
  );
}

export default App;
