/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'
import { BiUpArrow, BiRightArrow, BiDownArrow, BiLeftArrow } from 'react-icons/bi'
import { ImRadioUnchecked } from "react-icons/im"
import { isMobile } from 'react-device-detect';



export const TouchControls = () => {
    const {  
            moveRightBtn,
            moveDownBtn, 
            moveUpBtn, 
            moveLeftBtn,
            jumpBtn, 
            arrows,
            gameController, 
      box, btn
        } = style;


    return (
  <>
        {isMobile ?
        ( <div css={gameController}>
            <div css={box}></div>
        <div css={box}><button css={[moveUpBtn, btn]}><BiUpArrow css={arrows} name="moveForward" /></button></div>
                <div css={box}></div>
        <div css={box}><button css={[moveLeftBtn, btn]}><BiLeftArrow css={arrows} name="moveLeft"/></button></div>
        <div css={box}><button css={[jumpBtn, btn]}><ImRadioUnchecked css={{ "font-size": "30px" }} name="jump"/></button></div>
        <div css={box}><button css={[moveRightBtn, btn]}><BiRightArrow css={arrows} name="moveRight"/></button></div>
                <div css={box}></div>
        <div css={box}><button css={[moveDownBtn, btn]}><BiDownArrow css={arrows} name="moveBackward" /></button></div>
                <div css={box}></div>
        </div>): null}
        </>
    )     

};
