import React, { memo } from "react";
import { useBox } from "use-cannon";
import { useState } from "react";
import * as textures from "../textures";
import { useStore } from "../hooks/useStore";

const Cube = ({
  position,
  texture,
  addCube,
  removeCube,
  id,
  onBlockPlaced,
}) => {
  const [hover, setHover] = useState(null);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const[remove, setRemove] = useState(false) 
  const removeKey = document.getElementsByName("remove")[0]
  

  const toggleRemove  = (e) => {
    setRemove(!remove)
  }

  if(removeKey !== undefined) {
    removeKey.addEventListener("click", toggleRemove)
    remove ? removeKey.style.setProperty("background-color", "red") : removeKey.style.setProperty("background-color", "grey")
  }

  const color = texture === "glass" ? "skyblue" : "white";
  // useEffect(() => {
  //   onBlockPlaced(id, position, texture);
  // }, []);

  const [activeTexture] = useStore((state) => [state.texture]);

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHover(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={() => {
        setHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        console.log(`active texture is : ${activeTexture}`);
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (clickedFace === 0) {
          // e.altKey ? removeCube(x, y, z) : addCube(x + 1, y, z);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const xx = x + 1;
            onBlockPlaced("add", [xx, y, z], activeTexture);
            addCube(xx, y, z);
          }
          return;
        }
        if (clickedFace === 1) {
          // e.altKey ? removeCube(x, y, z) : addCube(x - 1, y, z);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const xx = x - 1;
            onBlockPlaced("add", [xx, y, z], activeTexture);
            addCube(xx, y, z);
          }
          return;
        }
        if (clickedFace === 2) {
          // e.altKey ? removeCube(x, y, z) : addCube(x, y + 1, z);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const yy = y + 1;
            onBlockPlaced("add", [x, yy, z], activeTexture);
            addCube(x, yy, z);
          }
          return;
        }
        if (clickedFace === 3) {
          // e.altKey ? removeCube(x, y, z) : addCube(x, y - 1, z);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const yy = y - 1;
            onBlockPlaced("add", [x, yy, z], activeTexture);
            addCube(x, yy, z);
          }
          return;
        }
        if (clickedFace === 4) {
          // e.altKey ? removeCube(x, y, z) : addCube(x, y, z + 1);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const zz = z + 1;
            onBlockPlaced("add", [x, y, zz], activeTexture);
            addCube(x, y, zz);
          }
          return;
        }
        if (clickedFace === 5) {
          // e.altKey ? removeCube(x, y, z) : addCube(x, y, z - 1);
          if (e.altKey || remove) {
            onBlockPlaced("remove", [x, y, z], activeTexture, id);
            removeCube(x, y, z);
          } else {
            const zz = z - 1;
            onBlockPlaced("add", [x, y, zz], activeTexture);
            addCube(x, y, zz);
          }
          return;
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray="material"
          map={textures[texture]}
          key={index}
          color={hover === index ? "gray" : color}
          opacity={texture === "glass" ? 0.7 : 1}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};

function equalProps(prevProps, nextProps) {
  const equalPosition =
    prevProps.position.x === nextProps.position.x &&
    prevProps.position.y === nextProps.position.y &&
    prevProps.position.z === nextProps.position.z;

  return equalPosition && prevProps.texture === nextProps.texture;
}

export default memo(Cube, equalProps);
