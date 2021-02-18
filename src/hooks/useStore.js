import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  // texture: 'dirt',
  cubes: getLocalStorage("world") || [
    { pos: [0, 1, 0], texture: "wood" },
    { pos: [1, 1, 0], texture: "dirt" },
    { pos: [-2, 1, 0], texture: "log" },
    { pos: [-1, 1, 0], texture: "glass" },
    { pos: [2, 1, 0], texture: "grass" },
    { pos: [0, 2, 0], texture: "diamond" },
  ],
  addCube: (x, y, z) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        { key: nanoid(), pos: [x, y, z], texture: state.texture },
      ],
    })),
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [_x, _y, _z] = cube.pos;
        return _x !== x || _y !== y || _z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    set((state) => ({
      texture,
    }));
  },
  saveWorld: () =>
    set((state) => {
      setLocalStorage("world", state.cubes);
    }),
}));
