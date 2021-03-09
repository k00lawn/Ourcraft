/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'
import { BiUpArrow, BiRightArrow, BiDownArrow, BiLeftArrow } from 'react-icons/bi'
import { ImRadioUnchecked } from "react-icons/im"


export const TouchControls = () => {
    const {  
            moveRightBtn,
            moveDownBtn, 
            moveUpBtn, 
            moveLeftBtn,
            jumpBtn, 
            arrows,
            gameController, 
            box
        } = style;


    return (
  
        <div css={gameController}>
            <div css={box}></div>
            <div css={box}><button css={moveUpBtn}><BiUpArrow css={arrows} name="moveForward" /></button></div>
                <div css={box}></div>
            <div css={box}><button css={moveLeftBtn}><BiLeftArrow css={arrows} name="moveLeft"/></button></div>
            <div css={box}><button css={jumpBtn}><ImRadioUnchecked css={{ "font-size": "50px" }} name="jump"/></button></div>
        <div css={box}><button css={moveRightBtn}><BiRightArrow css={arrows} name="moveRight"/></button></div>
                <div css={box}></div>
            <div css={box}><button css={moveDownBtn}><BiDownArrow css={arrows} name="moveBackward" /></button></div>
                <div css={box}></div>
        </div>
    )     


  // return (
  //   <div style={{ position: "absolute", bottom: "20px" }}>
  //     <button style={moveUpBtn} name="moveForward">
  //       Up button
  //     </button>
  //     <button style={moveRightBtn} name="moveRight">
  //       Right button
  //     </button>
  //     <button style={moveDownBtn} name="moveBackward">
  //       Down Button
  //     </button>
  //     <button style={moveLeftBtn} name="moveLeft">
  //       Left Button
  //     </button>
  //     <button style={jumpBtn} name="jump">
  //       Jump Button
  //     </button>
  //   </div>
  // );
};
