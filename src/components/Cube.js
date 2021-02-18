import React, { useState } from "react";
import { useBox } from "use-cannon";
import * as Texture from "../textures";

export const Cube = ({ position, texture, ...props }) => {
  const [hover, setHover] = useState(null);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    ...props,
  }));

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHover(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={(e) => {
        setHover(null);
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial
          attachArray="material"
          map={Texture[texture]}
          key={index}
          color={hover === index ? "gray" : "white"}
          opacity={texture === "glass" ? 0.75 : 1}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};

export default Cube;
