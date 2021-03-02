<<<<<<< HEAD
import dirtImg from './images/dirt.jpg';
import grassImg from './images/grass.jpg';
import glassImg from './images/glass.png';
import logImg from './images/log.jpg';
import woodImg from './images/wood.png';
import { TextureLoader } from 'three';

export const dirt = new TextureLoader().load(dirtImg);
export const grass = new TextureLoader().load(grassImg);
export const glass = new TextureLoader().load(glassImg);
export const wood = new TextureLoader().load(woodImg);
export const log = new TextureLoader().load(logImg);
=======
import dirtImg from "./images/dirt.jpg";
import glassImg from "./images/glass.png";
import grassImg from "./images/grass.jpg";
import logImg from "./images/log.jpg";
import woodImg from "./images/wood.png";
import diamondImg from "./images/diamond.png";
import { TextureLoader } from "three";


export const dirt = new TextureLoader().load(dirtImg)
export const glass = new TextureLoader().load(glassImg)
export const grass = new TextureLoader().load(grassImg)
export const log = new TextureLoader().load(logImg)
export const diamond = new TextureLoader().load(diamondImg)
export const wood = new TextureLoader().load(woodImg)
>>>>>>> 79926486ca60601ea9f4799c46ad46ce63242765
