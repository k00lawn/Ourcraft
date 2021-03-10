/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import style from "../style";
import {
  BiUpArrow,
  BiRightArrow,
  BiDownArrow,
  BiLeftArrow,
} from "react-icons/bi";
import { ImRadioUnchecked } from "react-icons/im";

export const TouchControls = () => {
  const {
    moveRightBtn,
    moveDownBtn,
    moveUpBtn,
    moveLeftBtn,
    jumpBtn,
    arrows,
    gameController,
    box,
  } = style;

  return (
    <div css={gameController}>
      <div css={box} id="mobControls"></div>
      <div css={box} id="mobControls">
        <button css={moveUpBtn} name="moveForward">
          <BiUpArrow css={arrows} />
        </button>
      </div>
      <div css={box} id="mobControls"></div>
      <div css={box} id="mobControls">
        <button css={moveLeftBtn} name="moveLeft">
          <BiLeftArrow css={arrows} />
        </button>
      </div>
      <div css={box} id="mobControls">
        <button css={jumpBtn} name="jump">
          <ImRadioUnchecked css={{ "font-size": "50px" }} />
        </button>
      </div>
      <div css={box} id="mobControls">
        <button css={moveRightBtn} name="moveRight">
          <BiRightArrow css={arrows} />
        </button>
      </div>
      <div css={box} id="mobControls"></div>
      <div css={box} id="mobControls">
        <button css={moveDownBtn} name="moveBackward">
          <BiDownArrow css={arrows} />
        </button>
      </div>
      <div css={box} id="mobControls"></div>
    </div>
  );
};
