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
import { isMobile } from "react-device-detect";

export const TouchControls = (isMob) => {
  const {
    moveRightBtn,
    moveDownBtn,
    moveUpBtn,
    moveLeftBtn,
    jumpBtn,
    arrows,
    gameController,
    gameController2,
    box,
    btn,
    removeBtn,
  } = style;
  const transition = {
    "transition" : "1s"}

  //OnClickRemoveTouch change background color style to red

  return (    
    <>
      {isMobile ?
         ( 
          
            <div>
              <div css={gameController}>
                <div css={box}></div>
                <div css={box}>
                  <button css={[moveUpBtn, btn]} name="moveForward">
                    Up
                  </button>
                </div>
                <div css={box}></div>
                <div css={box}>
                  <button css={[moveLeftBtn, btn]} name="moveLeft">
                    Left
                  </button>
                </div>
                <div css={box}></div>
                <div css={box}>
                  <button css={[moveRightBtn, btn]} name="moveRight">
                    Right
                  </button>
                </div>
                <div css={box}></div>
                <div css={box}>
                  <button css={[moveDownBtn, btn]} name="moveBackward">
                    Down
                  </button>
                </div>
                <div css={box}></div>
              </div>

              <div css={gameController2}>
                <div css={box}></div>
                <div css={box}></div>
                <div css={box}></div>
                <div css={box}>
                  <button style={transition} css={[removeBtn]} name="remove">
                    BREAK
                  </button>
                </div>
                <div css={box}></div>
                <div css={box}>
                  <button css={[jumpBtn, btn]} name="jump">
                    JUMP
                  </button>
                </div>
                <div css={box}></div>
                <div css={box}></div>
                <div css={box}></div>
              </div>
            </div>
          ) 

        : null}
    </>
  );
};
