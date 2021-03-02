<<<<<<< HEAD
import React from 'react';
import { usePlane } from 'use-cannon';
import { TextureLoader, RepeatWrapping } from 'three';
import grass from '../images/grass.jpg';
import { useStore } from '../hooks/useStore';
=======
import React from "react";
import { usePlane } from "use-cannon";
import { TextureLoader, RepeatWrapping } from "three";
import grass from "../images/grass.jpg";
import { useStore } from "../hooks/useStore";
// import { nanoid } from "nanoid";
>>>>>>> 79926486ca60601ea9f4799c46ad46ce63242765

export const Ground = ({ position, onBlockPlaced }) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position,
  }));
  const texture = new TextureLoader().load(grass);
  const [addCube, activeTexture] = useStore((state) => [
    state.addCube,
    state.texture,
  ]);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);
  return (
    <mesh
      ref={ref}
      receiveShadow
      onClick={(e) => {
        e.stopPropagation();
        // console.log("texture : ", activeTexture);
        const [x, y, z] = Object.values(e.point).map((coord) =>
          Math.ceil(coord)
        );
        onBlockPlaced("add", [x, y, z], activeTexture);
        addCube(x, y, z, activeTexture);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};
