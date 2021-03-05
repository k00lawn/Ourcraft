import dirtImg from "./images/dirt.jpg";
import glassImg from "./images/glass.png";
import grassImg from "./images/grass.jpg";
import logImg from "./images/log.jpg";
import woodImg from "./images/wood.png";
import diamondImg from "./images/diamond.png";
import redstoneImg from "./images/redstone.png";
import { TextureLoader } from "three";

export const dirt = new TextureLoader().load(dirtImg);
export const glass = new TextureLoader().load(glassImg);
export const grass = new TextureLoader().load(grassImg);
export const log = new TextureLoader().load(logImg);
export const diamond = new TextureLoader().load(diamondImg);
export const wood = new TextureLoader().load(woodImg);
export const redstone = new TextureLoader().load(redstoneImg);
